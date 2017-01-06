using UnityEngine;
using System.Collections;
using System;

public class InitScene : BaseScene 
{
    private bool m_bLoadEnd;

    private static bool m_bInit;

    protected override string NextScene
    {
        get
        {
            return SceneName.Logo;
        }
    }

    void Start()
    {
        StartCoroutine(InitAndLoad());
    }

    void Update()
    {
        if (this.m_bLoadEnd)
        {
            ResetScene.LoadLevel(NextScene, false);
        }
    }

    IEnumerator InitAndLoad()
    {
        InitSystem();

        yield return 0;

        m_bLoadEnd = true;
    }

    public void InitSystem()
    {
        if (!m_bInit)
        {
            Application.targetFrameRate = 60;
            QualitySettings.vSyncCount = 0;

            //初始化各种Manager
            m_bInit = true;
        }
    }

    public static void CheckSystemInit()
    {
        if (!m_bInit)
        {
            ResetScene.LoadLevel(SceneName.Init, false);
        }
    }
}
