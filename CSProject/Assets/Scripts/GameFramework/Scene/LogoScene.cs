using UnityEngine;
using System.Collections;
using System;

public class LogoScene : BaseScene 
{
    private static bool m_bRetrunLogoScene;

    protected override string NextScene
    {
        get
        {
            return SceneName.Patch;
        }
    }
	void Start () 
    {
        //Handheld.PlayFullScreenMovie("logo.mp4", Color.black, FullScreenMovieControlMode.Hidden);
        StartCoroutine(LogoStep());
	}

    void Update()
    {
        //SoundManager.Update(Time.deltaTime);
    }

    IEnumerator LogoStep()
    {
        //SoundManager.PlaySnd(7);
        m_bRetrunLogoScene = true;
        ResetScene.LoadLevel(NextScene, false);
        yield return 0;
    }
}
