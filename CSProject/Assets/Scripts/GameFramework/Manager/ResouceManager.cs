using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;


/// <summary>
/// 资源管理器
/// </summary>
public class ResourceManager
{
    private static string PATH_Prefab = "Prefabs/";
    private static string PATH_AsstBundle = "AssetBundles/";
    /// <summary>
    /// AssetBundle.load
    /// </summary>
    private static Dictionary<string, AssetBundle> BundleAssets = new Dictionary<string, AssetBundle>();
    /// <summary>
    /// Resouce.load
    /// </summary>
    private static Dictionary<string, UnityEngine.Object> ResourceAssets = new Dictionary<string, UnityEngine.Object>();

    //动态添加预制件到场景对象中
    public static GameObject CreatPrefab(string name, GameObject parent = null)
    {
        GameObject Prefabs = LoadPrefab(PATH_Prefab, name);
        GameObject obj = GameObject.Instantiate<GameObject>(Prefabs);
        if (obj != null)
        {
            if(parent != null)
                obj.transform.parent = parent.transform;
            obj.transform.localScale = Vector3.one;
            obj.transform.localPosition = Vector3.zero;
            obj.transform.localRotation = Quaternion.identity;
        }
        return obj;
    }
    /// <summary>
    /// 加载预制件
    /// </summary>
    public static GameObject LoadPrefab(string path, string name)
    {
        return (GameObject)Load(path, name);
    }
    /// <summary>
    /// 加载
    /// </summary>
    /// <param name="name"></param>
    /// <param name="path"></param>
    /// <returns></returns>
    public static UnityEngine.Object Load(string path, string name)
    {
        //if (string.IsNullOrEmpty(name)) return null;

        //if (name.Length > 0 && name[0] == '/')
        //    name = name.Remove(0, 1);

        //string fullName = path + name;
        //if (ResourceAssets.ContainsKey(fullName))
        //{
        //    return ResourceAssets[fullName];
        //}
        //UnityEngine.Object obj = Resources.Load(fullName);

        //if (obj != null)
        //{
        //    ResourceAssets.Add(fullName, obj);
        //    return obj;
        //}
        //TODO:: Load from Assetbundle
        path = Util.DataPath + PATH_AsstBundle + name;
        AssetBundle ab = AssetBundle.LoadFromFile(path);
        if (ab != null)
        {
            return ab.LoadAsset(name);
        }
        return null;
    }
    /// <summary>
    /// 卸载
    /// </summary>
    /// <param name="name"></param>
    /// <param name="path"></param>
    public static void Unload(string name, string path)
    {
        string fullName = path + name;
        if (ResourceAssets.ContainsKey(fullName))
        {
            Resources.UnloadAsset(ResourceAssets[fullName]);
        }
        //TODO:: AssetBundle unload
    }
}
