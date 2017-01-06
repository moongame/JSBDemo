using UnityEngine;
using System.Collections;

public class AppConst 
{
    public const bool DebugMode = false;                        //调试模式-用于内部测试
    public const string AppName = "JSBFramework";               //应用程序名称
    /// <summary>
    /// 如果开启更新模式，前提必须启动框架自带服务器端。
    /// 否则就需要自己将StreamingAssets里面的所有内容
    /// 复制到自己的Webserver上面，并修改下面的WebUrl。
    /// </summary>
    public const bool UpdateMode = true;                      //更新模式-默认关闭
    public const string WebUrl = "http://m.51massage.org/update/";     //服务器地址
}
