﻿using UnityEngine;
using System;
using System.Collections;
using System.Reflection;
using System.Collections.Generic;

namespace jsb
{
    public class MemberInfoEx
    {
        public MemberInfo member;
        public bool isStatic;
        public bool Ignored = false;

        List<MemberInfoEx> parent;
        int overloadIndex = -1;
        public int GetOverloadIndex()
        {
            if (overloadIndex != -1)
                return overloadIndex;

            int index = parent.IndexOf(this);
            overloadIndex = 0;
            for (int i = index - 1; i >= 0; i--)
            {
                if (parent[i].member == null || // 构造函数特殊情况
                    (parent[i].member.Name == member.Name && parent[i].isStatic == isStatic)
                    )
                {
                    overloadIndex++;
                }
                else
                {
                    break;
                }
            }
            return overloadIndex;
        }
        public MemberInfoEx(List<MemberInfoEx> par, FieldInfo m, bool isS) { parent = par; member = m; isStatic = isS; }
        public MemberInfoEx(List<MemberInfoEx> par, PropertyInfo m, bool isS) { parent = par; member = m; isStatic = isS; }
        public MemberInfoEx(List<MemberInfoEx> par, MethodInfo m, bool isS) { parent = par; member = m; isStatic = isS; }
        public MemberInfoEx(List<MemberInfoEx> par, ConstructorInfo m, bool isS) { parent = par; member = m; isStatic = isS; }
    }

    public static class GeneratorHelp
    {
        public class ATypeInfo
        {
            public List<MemberInfoEx> Fields = new List<MemberInfoEx>();
            public List<MemberInfoEx> Pros = new List<MemberInfoEx>();
            public List<MemberInfoEx> Cons = new List<MemberInfoEx>();
            public List<MemberInfoEx> Methods = new List<MemberInfoEx>();
        }
        public static List<ATypeInfo> allTypeInfo = new List<ATypeInfo>();

        public static void ClearTypeInfo()
        {
            allTypeInfo.Clear();
        }
        public static int AddTypeInfo(Type type)
        {
            ATypeInfo tiOut = new ATypeInfo();
            return AddTypeInfo(type, out tiOut);
        }

        public static int AddTypeInfo(Type type, out ATypeInfo tiOut)
        {
            ATypeInfo ti = CreateTypeInfo(type);

            int slot = allTypeInfo.Count;
            allTypeInfo.Add(ti);
            tiOut = ti;
            return slot;
        }

        public static bool IsMemberObsolete(MemberInfo mi)
        {
            object[] attrs = mi.GetCustomAttributes(true);
            for (int j = 0; j < attrs.Length; j++)
            {
                if (attrs[j].GetType() == typeof(System.ObsoleteAttribute))
                {
                    return true;
                }
            }
            return false;
        }

        static string PropertyToString(PropertyInfo m)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();

			sb.Append(m.PropertyType.CsFullName(CsNameOption.BridgeTypeToString)).Append(" ");
            sb.Append(m.Name).Append(" ");

            foreach (var p in m.GetIndexParameters())
            {
				sb.Append(p.ParameterType.CsFullName(CsNameOption.BridgeTypeToString)).Append(" ");
            }
            return sb.ToString();
        }
        static int PropertyInfoComparison(MemberInfoEx mi1, MemberInfoEx mi2)
        {
            PropertyInfo m1 = mi1.member as PropertyInfo;
            PropertyInfo m2 = mi2.member as PropertyInfo;

            // 实例函数在前
            if (!m1.GetAccessors()[0].IsStatic && m2.GetAccessors()[0].IsStatic)
                return -1;
            if (m1.GetAccessors()[0].IsStatic && !m2.GetAccessors()[0].IsStatic)
                return 1;

            // 按名字字符串排序
            if (m1.Name != m2.Name)
                return string.Compare(m1.Name, m2.Name);

            return string.Compare(PropertyToString(m1), PropertyToString(m2));
        }

        // 与 Bridge 的排序方式保持一致！处理重载函数的后缀才不会有问题
        // 看 OverloadsCollection.cs MethodToString
        static string MethodToString(MethodBase m)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();

            if (m is MethodInfo)
                sb.Append((m as MethodInfo).ReturnType.CsFullName(CsNameOption.BridgeTypeToString)).Append(" ");

            sb.Append(m.Name).Append(" ");

            if (m is MethodInfo)
                sb.Append(m.GetGenericArguments().Length).Append(" ");

            foreach (var p in m.GetParameters())
            {
				sb.Append(p.ParameterType.CsFullName(CsNameOption.BridgeTypeToString)).Append(" ");
            }
            return sb.ToString();
        }
        static int MethodBaseComparison(MemberInfoEx mi1, MemberInfoEx mi2)
        {
            MethodBase m1 = mi1.member as MethodBase;
            MethodBase m2 = mi2.member as MethodBase;

            if (m1 == null && m2 != null)
                return -1;
            if (m1 != null && m2 == null)
                return 1;
            if (m1 == null && m2 == null)
                return 0;

            // 实例函数在前
            if (!m1.IsStatic && m2.IsStatic)
                return -1;
            if (m1.IsStatic && !m2.IsStatic)
                return 1;

            // 按名字字符串排序
            if (m1.Name != m2.Name)
                return string.Compare(m1.Name, m2.Name);

            return string.Compare(MethodToString(m1), MethodToString(m2));
        }

        public static ATypeInfo CreateTypeInfo(Type type)
        {
            ATypeInfo ti = new ATypeInfo();
            {
                var fields = type.GetFields(JSMgr.BindingFlagsField);
                for (int i = 0; i < fields.Length; i++)
                    ti.Fields.Add(new MemberInfoEx(ti.Fields, fields[i], fields[i].IsStatic));

                var pros = type.GetProperties(JSMgr.BindingFlagsProperty);
                for (int i = 0; i < pros.Length; i++)
                    ti.Pros.Add(new MemberInfoEx(ti.Pros, pros[i], pros[i].GetAccessors()[0].IsStatic));

                ti.Pros.Sort(PropertyInfoComparison);

                var methods = type.GetMethods(JSMgr.BindingFlagsMethod);
                for (int i = 0; i < methods.Length; i++)
                    ti.Methods.Add(new MemberInfoEx(ti.Methods, methods[i], methods[i].IsStatic));

                // 函数排序
                ti.Methods.Sort(MethodBaseComparison);

                var cons = type.GetConstructors();
                if (JSBindingSettings.NeedGenDefaultConstructor(type))
                {
                    // null 表示默认构造函数
                    var l = new List<ConstructorInfo>();
                    l.Add(null);
                    l.AddRange(cons);
                    cons = l.ToArray();
                }
                for (int i = 0; i < cons.Length; i++)
                    ti.Cons.Add(new MemberInfoEx(ti.Cons, cons[i], false));

                ti.Cons.Sort(MethodBaseComparison);
            }

            bool isStaticClass = (type.IsClass && type.IsAbstract && type.IsSealed);
            bool isAbstractClass = (type.IsClass && type.IsAbstract);

            Dictionary<string, int> proAccessors = new Dictionary<string, int>();

            for (int i = 0; i < ti.Cons.Count; i++)
            {
                MemberInfoEx infoEx = ti.Cons[i];
                ConstructorInfo con = infoEx.member as ConstructorInfo;
                if (con == null)
                    continue;

                if (isAbstractClass ||
                    //type == typeof(UnityEngine.MonoBehaviour) ||
                    IsMemberObsolete(con) ||
                    JSBindingSettings.IsDiscard(type, con)
                    )
                {
                    infoEx.Ignored = true;
                }
            }

            for (int i = 0; i < ti.Fields.Count; i++)
            {
                MemberInfoEx infoEx = ti.Fields[i];
                FieldInfo field = infoEx.member as FieldInfo;

                if (typeof(System.Delegate).IsAssignableFrom(field.FieldType.BaseType))
                {
                    //Debug.Log("[field]" + type.ToString() + "." + ti.fields[i].Name + "is delegate!");
                }

                if (field.FieldType.ContainsGenericParameters ||
                    IsMemberObsolete(field) ||
                    JSBindingSettings.IsDiscard(type, field)
                    )
                {
                    infoEx.Ignored = true;
                }
            }

            for (int i = 0; i < ti.Pros.Count; i++)
            {
                MemberInfoEx infoEx = ti.Pros[i];
                PropertyInfo pro = infoEx.member as PropertyInfo;

                if (typeof(System.Delegate).IsAssignableFrom(pro.PropertyType.BaseType))
                {
                    // Debug.Log("[property]" + type.ToString() + "." + pro.Name + "is delegate!");
                }

                MethodInfo[] accessors = pro.GetAccessors();
                foreach (var v in accessors)
                {
                    if (!proAccessors.ContainsKey(v.Name))
                        proAccessors.Add(v.Name, 0);
                }

                // Skip Obsolete
                if (IsMemberObsolete(pro) ||
                    JSBindingSettings.IsDiscard(type, pro)
                    )
                {
                    infoEx.Ignored = true;
                }
            }

            for (int i = 0; i < ti.Methods.Count; i++)
            {
                MemberInfoEx infoEx = ti.Methods[i];
                MethodInfo method = infoEx.member as MethodInfo;

                // skip non-static method in static class
                if ((isStaticClass && !method.IsStatic) ||
                    (method.IsSpecialName && proAccessors.ContainsKey(method.Name))
                    )
                {
                    infoEx.Ignored = true;
                    continue;
                }

                if (method.IsSpecialName)
                {
                    if (method.Name == "op_Addition" ||
                        method.Name == "op_Subtraction" ||
                        method.Name == "op_UnaryNegation" ||
                        method.Name == "op_Multiply" ||
                        method.Name == "op_Division" ||
                        method.Name == "op_Equality" ||
                        method.Name == "op_Inequality" ||

                        method.Name == "op_LessThan" ||
                        method.Name == "op_LessThanOrEqual" ||
                        method.Name == "op_GreaterThan" ||
                        method.Name == "op_GreaterThanOrEqual" ||

                        method.Name == "op_Implicit")
                    {
                        if (!method.IsStatic)
                        {
                            Debug.Log("忽略非静态特殊名字函数 " + type.Name + "." + method.Name);
                            infoEx.Ignored = true;
                            continue;
                        }
                    }
                    else
                    {
                        Debug.Log("忽略特殊名字函数 " + type.Name + "." + method.Name);
                        infoEx.Ignored = true;
                        continue;
                    }
                }

                // Skip Obsolete
                if (IsMemberObsolete(method))
                {
                    infoEx.Ignored = true;
                    continue;
                }

                ParameterInfo[] ps;
                bool bDiscard = false;

                // 忽略掉类型带 T 的静态方法
                // 因为 SharpKit 调用时没有提供 T
                if (method.IsGenericMethodDefinition /* || method.IsGenericMethod*/
                    && method.IsStatic)
                {
                    ps = method.GetParameters();
                    for (int k = 0; k < ps.Length; k++)
                    {
                        if (ps[k].ParameterType.ContainsGenericParameters)
                        {
                            var Ts = JSDataExchangeMgr.RecursivelyGetGenericParameters(ps[k].ParameterType);
                            foreach (var t in Ts)
                            {
                                if (t.DeclaringMethod == null)
                                {
                                    bDiscard = true;
                                    break;
                                }
                            }
                            if (bDiscard)
                                break;
                        }
                    }
                    if (bDiscard)
                    {
                        Debug.LogWarning("忽略静态函数 " + type.Name + "." + method.Name);
                        infoEx.Ignored = true;
                        continue;
                    }
                }

                // 是否有 unsafe 的参数？
                bDiscard = false;
                ps = method.GetParameters();
                for (var k = 0; k < ps.Length; k++)
                {
                    Type pt = ps[k].ParameterType;
                    while (true)
                    {
                        if (pt.IsPointer)
                        {
                            bDiscard = true;
                            break;
                        }
                        else if (pt.HasElementType)
                            pt = pt.GetElementType();
                        else
                            break;
                    }

                    if (bDiscard)
                        break;
                }
                if (bDiscard)
                {
                    Debug.Log(type.Name + "." + method.Name + " 忽略，因为他有 IsPointer = true 的参数");
                    infoEx.Ignored = true;
                    continue;
                }

                if (JSBindingSettings.IsDiscard(type, method))
                {
                    infoEx.Ignored = true;
                    continue;
                }
            }

			// 移除 Ignored 的项
			foreach (List<MemberInfoEx> lst in 
			         new List<MemberInfoEx>[]{ ti.Cons, ti.Fields, ti.Pros, ti.Methods })
			{
				for (int i = lst.Count - 1; i >= 0; i--)
				{
					if (lst[i].Ignored)
						lst.RemoveAt(i);
				}
			}
            return ti;
        }
    }
}