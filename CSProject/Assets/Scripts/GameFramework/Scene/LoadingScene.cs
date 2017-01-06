using UnityEngine;
using System.Collections;
using System;
using UnityEngine.SceneManagement;

public class LoadingScene : BaseScene
{
    private AsyncOperation m_Async;
    private static string m_NextScene;

    private UISlider m_Progress;
    private UILabel m_ProgressLabel;

    protected override string NextScene
    {
        get
        {
            return m_NextScene;
        }
    }

    protected override void OnSceneInit()
    {
        base.OnSceneInit();

        Transform uiRoot = GameObject.Find("UI Root").transform;
        m_Progress = uiRoot.FindChild("Progress").GetComponent<UISlider>();
        m_ProgressLabel = uiRoot.FindChild("Progress/ProgressLabel").GetComponent<UILabel>();
    }

    void Start()
    {
        StartCoroutine(StartLoad(m_NextScene));
    }

    void Update()
    {
        if (m_Async != null)
        {
            if (!m_Async.isDone && m_Async.progress < 0.9f)
            {
                m_Progress.value = m_Async.progress;
                m_ProgressLabel.text = (int)(m_Async.progress * 100) + "%";
            }
            else
            {
                m_Progress.value = 1;
                m_ProgressLabel.text = "100%";
                m_Async.allowSceneActivation = true;
            }
        }
    }

    IEnumerator StartLoad(string NsceneName)
    {
        m_Async = SceneManager.LoadSceneAsync(NsceneName);
        m_Async.allowSceneActivation = false;
        yield return m_Async;
    }

    public static void SetNextScene(string nextScene)
    {
        m_NextScene = nextScene;
    }

    void OnDestroy()
    {
        m_Async = null;
        m_Progress = null;
        m_ProgressLabel = null;
    }
}
