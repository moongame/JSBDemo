using UnityEngine;
using System.Collections;
using UnityEditor;
using System.IO;
using System.Collections.Generic;

public class Packager
{
    static List<string> paths = new List<string>();
    static List<string> files = new List<string>();

    [MenuItem("JSBFramework/Build iPhone Resource", false, 100)]
    public static void BuildiPhoneResource()
    {
        BuildAssetResource(BuildTarget.iOS);
    }

    [MenuItem("JSBFramework/Build Android Resource", false, 101)]
    public static void BuildAndroidResource()
    {
        BuildAssetResource(BuildTarget.Android);
    }

    [MenuItem("JSBFramework/Build Windows Resource", false, 102)]
    public static void BuildWindowsResource()
    {
        BuildAssetResource(BuildTarget.StandaloneWindows);
    }
    [MenuItem("JSBFramework/Build File.txt", false, 102)]
    public static void BuildFile()
    {
        BuildFileIndex();
        AssetDatabase.Refresh();
    }

    /// <summary>
    /// 生成绑定素材
    /// </summary>
    public static void BuildAssetResource(BuildTarget target)
    {
        //string streamPath = Application.streamingAssetsPath;
        //if (Directory.Exists(streamPath))
        //{
        //    Directory.Delete(streamPath, true);
        //}
        //AssetDatabase.Refresh();

        HandleAssetBundle(target);
        BuildFileIndex();
        AssetDatabase.Refresh();
    }

    static void HandleAssetBundle(BuildTarget target)
    {
        string assetPath = AppDataPath + "/StreamingAssets/AssetBundles";
        if (Directory.Exists(assetPath))
        {
            Directory.Delete(assetPath, true);
        }
        if (!Directory.Exists(assetPath)) Directory.CreateDirectory(assetPath);

        BuildPipeline.BuildAssetBundles(assetPath, BuildAssetBundleOptions.None, target);
    }

    static void BuildFileIndex()
    {
        string resPath = AppDataPath + "/StreamingAssets/";

        //创建文件列表
        string newFilePath = resPath + "files.txt";
        if (File.Exists(newFilePath)) File.Delete(newFilePath);

        paths.Clear();
        files.Clear();
        Recursive(resPath);

        FileStream fs = new FileStream(newFilePath, FileMode.CreateNew);
        StreamWriter sw = new StreamWriter(fs);
        for (int i = 0; i < files.Count; i++)
        {
            string file = files[i];
            string ext = Path.GetExtension(file);
            if (file.Equals(".meta") || file.Contains(".DS_Store")) continue;

            string md5 = Util.md5file(file);
            string value = file.Replace(resPath, string.Empty);
            sw.WriteLine(value + "|" + md5);
        }
        sw.Close();
        fs.Close();
    }

    /// <summary>
    /// 数据目录
    /// </summary>
    static string AppDataPath
    {
        get { return Application.dataPath.ToLower(); }
    }
    /// <summary>
    /// 遍历目录及其子目录
    /// </summary>
    static void Recursive(string path)
    {
        string[] names = Directory.GetFiles(path);
        string[] dirs = Directory.GetDirectories(path);

        foreach (string filename in names)
        {
            string ext = Path.GetExtension(filename);
            if (ext.Equals(".meta")) continue;
            files.Add(filename.Replace('\\', '/'));
        }

        foreach (string dir in dirs)
        {
            paths.Add(dir.Replace('\\', '/'));
            Recursive(dir);
        }
    }
}
