using UnityEngine;
using System;
using System.Collections;
using System.Reflection;

/// <summary>
/// 泛型单件类
/// @Liu Fang Yi
/// </summary>
/// <typeparam name="T"></typeparam>
public class Singleton<T> where T : Singleton<T>, new()
{

    protected static T _Instance;

    public static T Instance
    {
        get
        {
            if (_Instance == null)
            {
                Activator.CreateInstance<T>();
            }
            return _Instance;
        }
    }
}
