using UnityEngine;
using System.Collections;

public class GameMain : MonoBehaviour 
{

	// Use this for initialization
	void Start () 
	{
        GameObject uiRoot = GameObject.Find("UI Root");
        GameObject gobj = ResourceManager.CreatPrefab("TestWindow1", uiRoot);
        gobj.AddComponent<TestWindow1>();
        //ResourceManager.CreatPrefabs("TestWindow2", uiRoot);
    }

    // Update is called once per frame
    void Update () 
	{
	
	}
}
