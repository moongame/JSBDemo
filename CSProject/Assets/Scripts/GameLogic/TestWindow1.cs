using UnityEngine;
using System.Collections;

public class TestWindow1 : MonoBehaviour 
{
	// Use this for initialization
	void Start () 
	{
        UILabel label = transform.FindChild("Context").GetComponent<UILabel>();
        label.text += "";
	}
	
	// Update is called once per frame
	void Update () 
	{
	
	}
}
