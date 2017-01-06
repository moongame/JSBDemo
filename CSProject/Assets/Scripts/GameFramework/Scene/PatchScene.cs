using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;
using LitJson;
using System.IO;

public class PatchScene : BaseScene
{
    private WWW www;
    private string message;

    private UISlider m_Progress;
    private UILabel m_ProgressValue;
    private UILabel m_AssetName;

    protected override string NextScene
    {
        get
        {
            return SceneName.Game;
        }
    }

    protected override void OnSceneInit()
    {
        base.OnSceneInit();

        Transform uiRoot = GameObject.Find("UI Root").transform;
        Transform Progress = uiRoot.FindChild("Progress");
        m_Progress = Progress.GetComponent<UISlider>();
        m_AssetName = Progress.FindChild("Name").GetComponent<UILabel>();
        m_ProgressValue = Progress.FindChild("Progress").GetComponent<UILabel>();
    }

    void Start()
    {
        message = "正在连接服务器...";
        m_Progress.value = 1;
        m_ProgressValue.text = "100%";
        CheckExtractResource();
    }

    void Update()
    {
        m_AssetName.text = message;

        m_Progress.value = Progress;
        m_ProgressValue.text = string.Format("{0}%", (int)(Progress * 100));
    }

    private float Progress
    {
        get
        {
            return www != null ? www.progress : 1f;
        }
    }

    /// <summary>
    /// 释放资源
    /// </summary>
    public void CheckExtractResource()
    {
        bool isExist = Directory.Exists(Util.DataPath) &&
                       File.Exists(Util.DataPath + "files.txt") &&
                       Directory.Exists(Util.DataPath + "JavaScript/") &&
                       Directory.Exists(Util.DataPath + "AssetBundles/");
        if (isExist && AppConst.UpdateMode)
        {
            StartCoroutine(OnUpdateResource());
        }
        else
        {
            StartCoroutine(OnExtractResource());
        }
    }

    /// <summary>
    /// //启动释放协成 
    /// </summary>
    IEnumerator OnExtractResource()
    {
        string dataPath = Util.DataPath;
        string resPath = Util.AppContentPath;

        if (Directory.Exists(dataPath)) Directory.Delete(dataPath, true);
        Directory.CreateDirectory(dataPath);

        string infile = resPath + "files.txt";
        string outfile = dataPath + "files.txt";
        if (File.Exists(outfile)) File.Delete(outfile);

        message = "正在解包文件:>files.txt";
        Debug.Log(message);

        www = new WWW(infile);
        yield return www;

        if (www.isDone)
        {
            File.WriteAllBytes(outfile, www.bytes);
        }
        yield return new WaitForEndOfFrame();

        //释放所有文件到数据目录
        string[] files = File.ReadAllLines(outfile);
        foreach (string file in files)
        {
            string[] fs = file.Split('|');
            infile = resPath + fs[0];
            outfile = dataPath + fs[0];

            message = "正在解包文件:> " + fs[0];
            Debug.Log(message);

            string dir = Path.GetDirectoryName(outfile);
            if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);

            www = new WWW(infile);
            yield return www;

            if (www.isDone)
            {
                File.WriteAllBytes(outfile, www.bytes);
            }
            yield return new WaitForEndOfFrame();
        }
        message = "解包完成!!!";
        Debug.Log(message);
        www.Dispose();
        www = null;

        yield return new WaitForSeconds(0.1f);

        //释放完成，开始启动更新资源
        StartCoroutine(OnUpdateResource());
    }

    /// <summary>
    /// 启动更新下载
    /// </summary>
    IEnumerator OnUpdateResource()
    {
        bool update = AppConst.UpdateMode;
        if (update)
        {
            string url = AppConst.WebUrl;
            string listUrl = url + "files.txt";

            www = new WWW(listUrl);
            yield return www;

            if (www.error != null)
            {
                Debug.LogError(www.error);
                yield break;
            }

            string dataPath = Util.DataPath;
            if (!Directory.Exists(dataPath)) Directory.CreateDirectory(dataPath);
            File.WriteAllBytes(dataPath + "files.txt", www.bytes);

            string[] files = File.ReadAllLines(dataPath + "files.txt");
            foreach (string file in files)
            {
                string[] fs = file.Split('|');
                string localfile = dataPath + fs[0];
                string path = Path.GetDirectoryName(localfile);
                if (!Directory.Exists(path)) Directory.CreateDirectory(path);

                string fileUrl = url + fs[0];
                if (File.Exists(localfile))
                {
                    string remoteMd5 = fs[1];
                    string localMd5 = Util.md5file(localfile);
                    if (!remoteMd5.Equals(localMd5))
                        File.Delete(localfile);
                }
                if (!File.Exists(localfile))
                {
                    //开始下载
                    message = "downloading>>" + fileUrl;
                    Debug.Log(message);
                    www = new WWW(fileUrl);
                    yield return www;
                    if (www.error != null)
                    {
                        Debug.LogError(www.error);
                        yield break;
                    }
                    File.WriteAllBytes(localfile, www.bytes);
                }
            }
            yield return new WaitForEndOfFrame();
            message = "更新完成!!";
            Debug.Log(message);
            www.Dispose();
            www = null;
        }
        OnPathEnd();
    }

    private void OnPathEnd()
    {
        ResetScene.LoadLevel(NextScene, false);
    }
}
