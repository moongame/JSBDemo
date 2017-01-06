using System;
using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class ResetScene : BaseScene
{
    private AsyncOperation m_Async;
    private static string m_NextScene;
    private static bool m_bUseLoadingScene;

    protected override string NextScene
    {
        get
        {
            return m_bUseLoadingScene ? SceneName.Loading : m_NextScene;
        }
    }

    protected override void OnSceneInit()
    {
        // 卸载资源
        UnityEngine.Object[] objs1 = Resources.FindObjectsOfTypeAll<Material>();
        for (int i = 0; i < objs1.Length; i++)
        {
            objs1[i] = null;   
        }

        UnityEngine.Object[] objs2 = Resources.FindObjectsOfTypeAll<Texture>();
        for (int i = 0; i < objs2.Length; i++)
        {
            objs2[i] = null;
        }

        Resources.UnloadUnusedAssets();
        GC.Collect();
        GC.WaitForPendingFinalizers();
        GC.Collect();
    }

	void Start () 
    {
        if (m_bUseLoadingScene)
        {
            LoadingScene.SetNextScene(m_NextScene);
            SceneManager.LoadScene(NextScene, LoadSceneMode.Additive);
        }
        else
        {
            StartCoroutine(StartLoad(m_NextScene));
        }
	}

    IEnumerator StartLoad(string NsceneName)
    {
        m_Async = SceneManager.LoadSceneAsync(NsceneName);
        yield return m_Async;
    }

    public static void LoadLevel(string nextSceneName, bool bUseLoadingScene)
    {
        m_NextScene = nextSceneName;
		m_bUseLoadingScene = bUseLoadingScene;
        SceneManager.LoadScene(SceneName.Reset);
    }
}
