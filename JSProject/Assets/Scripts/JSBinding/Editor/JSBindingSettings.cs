﻿using UnityEngine;
//using UnityEditor;
using System;
using System.Text;
using System.Reflection;
using System.Collections.Generic;
using System.Collections;
using System.IO;
using System.Text.RegularExpressions;
using System.Linq;


namespace jsb
{
	public class JSBindingSettings
	{
	    public static Type[] enums = new Type[]
	    {
	//        typeof(BindingFlags),
	//		typeof(Qcw.QCWEn),
	    };
	    
	    //
	    // types to export to JavaSciprt
		// only for samples!
		//
		// below there is another classes(commented out) having almost all types in UnityEngine
		//

		
	    public static Type[] classes = new Type[]
	    {
   //         typeof(EditorEnv),
			//typeof(jsb.Test.Framwork.TestPerformance),
			//typeof(jsb.Test.Framwork.TestMisc),
			//typeof(jsb.Test.Framwork.TestRF),
			//typeof(jsb.Test.Framwork.TestGeneric<,,>),

			//typeof(TestCallJs),
            typeof(ResourceManager),
            //NGUI
            typeof(UILabel),
            typeof(UISlider),
            typeof(UISprite),

            typeof(UnityEngine.SceneManagement.SceneManager),
            //typeof(UnityEngine.UI.GridLayoutGroup),
			//typeof(UnityEngine.UI.Text),
            typeof(Hashtable),
	        typeof(Debug),
	        typeof(Input),
	        typeof(GameObject),
	        typeof(Transform),
	        typeof(RectTransform),
	        typeof(Vector2),
	        typeof(Vector3),
	        typeof(UnityEngine.Object),
	        typeof(MonoBehaviour),
	        typeof(Behaviour),
	        typeof(Component),
	        typeof(WWW),
	        typeof(Application),
	        typeof(UnityEngine.Time),
	        typeof(Resources),
	        typeof(TextAsset),
            typeof(WaitForSeconds),

	//        typeof(List<>),
	//        typeof(List<>.Enumerator),
	//        typeof(Dictionary<,>),
	//        typeof(Dictionary<,>.KeyCollection), 
	//        typeof(Dictionary<,>.ValueCollection), 
	//        typeof(Dictionary<,>.Enumerator), 
	//        typeof(KeyValuePair<,>), 
	//        
	//        typeof(System.Diagnostics.Stopwatch),
	//        typeof(UnityEngine.Random),
	//        typeof(StringBuilder),
	//
	//        typeof(System.Xml.XmlNode),
	//        typeof(System.Xml.XmlDocument),
	//        typeof(System.Xml.XmlNodeList),
	//        typeof(System.Xml.XmlElement),
	//        typeof(System.Xml.XmlLinkedNode),
	//        typeof(System.Xml.XmlAttributeCollection),
	//        typeof(System.Xml.XmlNamedNodeMap),
	//        typeof(System.Xml.XmlAttribute),
	//
	//        // for 2d platformer
	        typeof(LayerMask),
	        typeof(Physics2D),
	        typeof(Rigidbody2D),
	        typeof(Collision2D),
	        typeof(RaycastHit2D),
	        typeof(AudioClip),
	        typeof(AudioSource),
	        typeof(ParticleSystem),
	        typeof(Renderer),
	        typeof(ParticleSystemRenderer),
	        // typeof(DateTime),
	        typeof(GUIElement),
	        typeof(GUIText),
	        typeof(GUITexture),
	        typeof(SpriteRenderer),
	        typeof(Animator),
	        typeof(Camera),
	        typeof(Mathf),
	        typeof(Quaternion),
	        typeof(Sprite),
	        typeof(Collider2D),
	        typeof(BoxCollider2D),
	        typeof(CircleCollider2D),
	        typeof(Material),
	        typeof(Color),
	        typeof(PolygonCollider2D),

	        typeof(Light),
	        typeof(NavMeshAgent),
	        typeof(Rect),
	        typeof(Physics),
	        typeof(Collider),
	        typeof(SphereCollider),
	        typeof(LineRenderer),
	        typeof(MeshCollider),
	        typeof(MeshRenderer),
	        typeof(Screen),
	        typeof(RaycastHit),
	        typeof(BoxCollider),
	        typeof(CapsuleCollider),
	        typeof(AnimatorStateInfo),
	        typeof(Rigidbody),
	        typeof(NavMeshPath),
			typeof(Animation),

			//typeof(UnityEngine.UI.Button),
			//typeof(UnityEngine.UI.Button.ButtonClickedEvent),
		};
		
		// some public class members can be used
		// some of them are only in editor mode
		// some are because of unknown reason
		//
		// they can't be distinguished by code, but can be known by checking unity docs
		public static bool IsDiscard(Type type, MemberInfo memberInfo)
		{
			string memberName = memberInfo.Name;
			
			if (typeof(Delegate).IsAssignableFrom(type)/* && (memberInfo is MethodInfo || memberInfo is PropertyInfo || memberInfo is FieldInfo)*/)
			{
				return true;
			}
			
			if (memberName == "networkView" && (type == typeof(GameObject) || typeof(Component).IsAssignableFrom(type)))
			{
				return true;
			}
			
			if ((type == typeof(Application) && memberName == "ExternalEval") ||
			    (type == typeof(Input) && memberName == "IsJoystickPreconfigured"))
			{
				return true;
			}
			
			//
			// Temporarily commented out
			// Uncomment them yourself!!
			//
			if ((type == typeof(Motion)) ||
			    (type == typeof(AnimationClip) && memberInfo.DeclaringType == typeof(Motion)) ||
			    (type == typeof(Application) && memberName == "ExternalEval") ||
			    (type == typeof(Input) && memberName == "IsJoystickPreconfigured") ||
			    (type == typeof(AnimatorOverrideController) && memberName == "PerformOverrideClipListCleanup") ||
			    (type == typeof(Caching) && (memberName == "ResetNoBackupFlag" || memberName == "SetNoBackupFlag")) ||
			    (type == typeof(Light) && (memberName == "areaSize")) ||
			    (type == typeof(Security) && memberName == "GetChainOfTrustValue") ||
			    (type == typeof(Texture2D) && memberName == "alphaIsTransparency") ||
			    (type == typeof(WebCamTexture) && (memberName == "isReadable" || memberName == "MarkNonReadable")) ||
			    (type == typeof(StreamReader) && (memberName == "CreateObjRef" || memberName == "GetLifetimeService" || memberName == "InitializeLifetimeService")) ||
			    (type == typeof(StreamWriter) && (memberName == "CreateObjRef" || memberName == "GetLifetimeService" || memberName == "InitializeLifetimeService")) ||
			    (type == typeof(UnityEngine.Font) && memberName == "textureRebuildCallback") ||
                (type == typeof(UIWidget) && memberName == "showHandles") ||
                (type == typeof(UIWidget) && memberName == "showHandlesWithMoveTool") ||

                // Bridge 没有这3个函数
                (type == typeof(System.Collections.ICollection) && (memberName == "IsSynchronized" || memberName == "SyncRoot" || memberName == "CopyTo"))
			    #if UNITY_4_6 || UNITY_4_7
			    || (type == typeof(UnityEngine.EventSystems.PointerEventData) && memberName == "lastPress")
			    || (type == typeof(UnityEngine.UI.InputField) && memberName == "onValidateInput") // property delegate
			    || (type == typeof(UnityEngine.UI.Graphic) && memberName == "OnRebuildRequested")
			    || (type == typeof(UnityEngine.UI.Text) && memberName == "OnRebuildRequested")
			    #endif
			    )
			{
				return true;
			}
			
			#if UNITY_ANDROID || UNITY_IPHONE
			if (type == typeof(WWW) && (memberName == "movie"))
				return true;
			#endif
			return false;
		}
		
		public static bool IsSupportByDotNet2SubSet(string functionName)
		{
			if (functionName == "Directory_CreateDirectory__String__DirectorySecurity" ||
			    functionName == "Directory_GetAccessControl__String__AccessControlSections" ||
			    functionName == "Directory_GetAccessControl__String" ||
			    functionName == "Directory_SetAccessControl__String__DirectorySecurity" ||
			    functionName == "DirectoryInfo_Create__DirectorySecurity" ||
			    functionName == "DirectoryInfo_CreateSubdirectory__String__DirectorySecurity" ||
			    functionName == "DirectoryInfo_GetAccessControl__AccessControlSections" ||
			    functionName == "DirectoryInfo_GetAccessControl" ||
			    functionName == "DirectoryInfo_SetAccessControl__DirectorySecurity" ||
			    functionName == "File_Create__String__Int32__FileOptions__FileSecurity" ||
			    functionName == "File_Create__String__Int32__FileOptions" ||
			    functionName == "File_GetAccessControl__String__AccessControlSections" ||
			    functionName == "File_GetAccessControl__String" ||
			    functionName == "File_SetAccessControl__String__FileSecurity")
			{
				return false;
			}
			return true;
		}
		
		public static bool NeedGenDefaultConstructor(Type type)
		{
			if (typeof(Delegate).IsAssignableFrom(type))
				return false;
			
			if (type.IsInterface)
				return false;
			
			// don't add default constructor
			// if it has non-public constructors
			// (also check parameter count is 0?)
			if (type.GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance).Length != 0)
				return false;
			
			//foreach (var c in type.GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance))
			//{
			//    if (c.GetParameters().Length == 0)
			//        return false;
			//}
			
			if (type.IsClass && (type.IsAbstract || type.IsInterface))
				return false;
			
			if (type.IsClass)
			{
				return type.GetConstructors().Length == 0;
			}
			else
			{
				foreach (var c in type.GetConstructors())
				{
					if (c.GetParameters().Length == 0)
						return false;
				}
				return true;
			}
		}
		
		public static string csDir = Application.dataPath + "/JSBinding/CSharp";
		public static string csGenDir = Application.dataPath + "/Scripts/JSBinding/G";

        static HashSet<string> LoadBridgeDefinedTypes()
        {
            HashSet<string> types = new HashSet<string>();

            string text = File.ReadAllText("Assets/Scripts/JSBinding/Editor/BridgeTypes.txt");
            string[] lines = text.Split("\r\n".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            string ns = "";
            for (int i = 0; i < lines.Length; i++)
            {
                string line = lines[i];
                if (line.StartsWith("//"))
                {
                    continue;
                }
                if (line[0] == '[')
                {
                    ns = line.Substring(1, line.Length - 2);
                }
                else
                {
                    string name = line;
                    int index1 = name.IndexOf('<');
                    if (index1 >= 0)
                    {
                        int index2 = name.IndexOf('>');
                        int tCount = name.Substring(index1 + 1, index2 - index1 - 1).Count((c) => c == ',');
                        name = line.Substring(0, index1) + "`" + (tCount + 1);
                    }
                    types.Add(ns + "." + name);
                }
            }

            return types;
        }

	    public static bool CheckClasses(out Type[] arrEnums, out Type[] arrClasses,
            out HashSet<string> bridgeTypes)
	    {
            arrEnums = null;
            arrClasses = null;

            var sb = new StringBuilder();
            bool ok = true;

            bridgeTypes = LoadBridgeDefinedTypes();

            foreach (var e in enums)
            {
                if (!e.IsEnum)
                {
                    sb.AppendFormat("非枚举 \"{0}\" 应放到 classes 里\n",
                                    JSNameMgr.CsFullName(e));
                    ok = false;

                    continue;
                }

                if (bridgeTypes.Contains(e.FullName))
                {
                    sb.AppendFormat("Bridge已包含\"{0}\"，无需导出", e.FullName);
                    ok = false;

                    continue;
                }
            }
            if (ok)
            {
                arrEnums = enums;
            }

	        HashSet<Type> wanted = new HashSet<Type>();

	        foreach (var type in classes)
	        {
                if (type.IsEnum)
                {
                    sb.AppendFormat("枚举 \"{0}\" 应放到 enums 里\n",
                                    JSNameMgr.CsFullName(type));
                    ok = false;

                    continue;
                }

	            if (typeof(System.Delegate).IsAssignableFrom(type))
	            {
	                sb.AppendFormat("Delegate \"{0}\" 不能导出\n",
	                                JSNameMgr.CsFullName(type));
	                ok = false;

	                continue;
	            }

	            if (type.IsGenericType && !type.IsGenericTypeDefinition)
	            {
	                sb.AppendFormat("\"{0}\" 不能导出，换成 \"{1}\"\n",
	                    JSNameMgr.CsFullName(type), JSNameMgr.CsFullName(type.GetGenericTypeDefinition()));
	                ok = false;

	                continue;
	            }

	            if (type.IsInterface)
	            {
	                sb.AppendFormat("接口 \"{0}\" 不需要配置。如果有配置继承这个接口的类，则这个接口会自动添加\n",
	                    JSNameMgr.CsFullName(type));
	                ok = false;

	                continue;
	            }

	            if (wanted.Contains(type))
	            {
	                sb.AppendFormat("\"{0}\" 配了多个.\n",
	                    JSNameMgr.CsFullName(type));
	                ok = false;

	                continue;
                }

                if (bridgeTypes.Contains(type.FullName))
                {
                    sb.AppendFormat("Bridge已包含\"{0}\"，无需导出", type.FullName);
                    ok = false;

                    continue;
                }

                wanted.Add(type);
	        }

	        // 自动添加基类
	        foreach (var typeb in wanted.ToArray())
	        {
	            Type type = typeb;
	            Type vBaseType = type.ValidBaseType();
	            while (vBaseType != null)
	            {
                    if (!bridgeTypes.Contains(vBaseType.FullName) && 
                        !wanted.Contains(vBaseType) &&
	                    !(vBaseType.IsGenericType && !vBaseType.IsGenericTypeDefinition)
	                    //&&
	                    //!IsDiscardType(baseType)
	                    )
	                {
	                    wanted.Add(vBaseType);
	                }
	                vBaseType = vBaseType.ValidBaseType();
	            }
	        }

	        // 自动添加接口
	        foreach (var typeb in wanted.ToArray())
	        {
	            Type type = typeb;
	            Type[] interfaces = type.GetInterfaces();
	            for (int i = 0; i < interfaces.Length; i++)
	            {
	                Type ti = interfaces[i];
	                string tiFullName = JSNameMgr.CsFullName(ti);
                    if (tiFullName.Contains("<") || tiFullName.Contains(">"))
                        continue;

                    if (!bridgeTypes.Contains(interfaces[i].FullName) &&
                        !wanted.Contains(ti)
	                    //&&
	                    //!IsDiscardType(ti)
	                    )
	                {
	                    wanted.Add(ti);
	                }
	            }
	        }

	        if (!ok)
	        {
	            Debug.LogError(sb);
	            return false;
	        }

	        List<Type> lst = wanted.ToList();

	        // 对 lst 进行排序
	        // Bridge.js 假设基类在前（接口也算）
	        // var baseType = extend[j],
	        //   baseI = (baseType.$interfaces || []).concat(baseType.$baseInterfaces || []);
	        {
	            Dictionary<Type, int> dict = new Dictionary<Type, int>();
	            foreach (var type in wanted)
	            {
	                dict.Add(type, 0);
	            }

	            while (true)
	            {
	                bool bC = false;
	                foreach (Type type in dict.Keys.ToArray())
	                {
	                    int v = dict[type];
                        if (v != 0)
                        {
                            continue;
                        }

                        bool allParentResolved = true;
                        int maxParentValue = 0;
                        Type[] interfaces = type.GetInterfaces();
                        foreach (var interf in interfaces)
                        {
                            if (dict.ContainsKey(interf))
                            {
                                if (dict[interf] == 0)
                                {
                                    allParentResolved = false;
                                    break;
                                }
                                else
                                {
                                    maxParentValue = Math.Max(maxParentValue, dict[interf]);
                                }
                            }
                        }

                        Type baseType = type.ValidBaseType();
                        if (allParentResolved)
                        {
                            if (baseType != null &&
                                dict.ContainsKey(baseType))
                            {
                                if (dict[baseType] == 0)
                                    allParentResolved = false;
                                else
                                    maxParentValue = Math.Max(maxParentValue, dict[baseType]);
                            }
                        }

                        if (allParentResolved)
                            dict[type] = maxParentValue + 1;
                        else
                            bC = true;

	                }

	                if (!bC)
                        break;
	            }

	            lst.Sort((t1, t2) => (dict[t1] < dict[t2] ? -1 : (dict[t1] > dict[t2] ? 1 : 0)));
	        }

	        // 打印最终要导出的类型
	        sb.Remove(0, sb.Length);
	        sb.AppendLine("最终要导出的类型：");
	        foreach (var t in lst)
	        {
	            sb.AppendLine(JSNameMgr.CsFullName(t));
	        }
	        Debug.Log(sb.ToString());

            arrClasses = lst.ToArray();
            return true;
	    }

        public const string BridgeProj = "Assets/../../BridgeProj";
        public static string CswFilePath = BridgeProj + "/csw.cs";
        public static string BridgeOutputDir = BridgeProj + "/Bridge/output";
	}
}