using UnityEngine;
using System.Collections;

public abstract class BaseScene : MonoBehaviour
{
    protected
    void Awake()
    {
        OnSceneInit();
    }
    protected virtual void OnSceneInit()
    {
        InitScene.CheckSystemInit();
    }
    protected abstract string NextScene { get; }
}

public struct SceneName
{
    public static string Init = "InitScene";
    public static string Logo = "LogoScene";
    public static string Game = "GameScene";
    public static string Reset = "ResetScene";
    public static string Patch = "PatchScene";
    public static string Loading = "LoadingScene";
}
