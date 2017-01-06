using UnityEngine;
using System.Collections;
using System;

public class GameScene : BaseScene
{
    protected override string NextScene
    {
        get
        {
            return "";
        }
    }
    protected override void OnSceneInit()
    {
        base.OnSceneInit();
#if JS
        Instantiate(Resources.Load("_JSEngine"));

        JSComponent jsComp = gameObject.AddComponent<JSComponent>();
        jsComp.jsClassName = "GameMain";
        jsComp.jsFail = false;
        jsComp.init(true);
        jsComp.callAwake(); // 要调用 js 的 Awake
#else
        gameObject.AddComponent<GameMain>();
#endif
    }
}
