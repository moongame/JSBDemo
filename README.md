
##基础介绍：
http://www.cnblogs.com/answerwinner/category/900298.html
https://github.com/linkabox/PureJSB/blob/master/Docs/JSB_Guides.md#%E6%A1%86%E6%9E%B6%E5%B1%82%E4%BB%A3%E7%A0%81%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9

##场景介绍：
* InitScene：负责系统的初始化操作，比如游戏启动的必要参数设置，各种Manager的    Init，帧率设置等，完成后跳转到LogoScene
* LogoScene：负责显示游戏的宣传视频或者动态封面，完成后跳转到PatchScene
* PatchScene：负责游戏的更新，更新完成后进入GameScene
* GameScene：游戏的主场景
* ResetScene：负责场景跳转的承接，清空不用的资源，如果耗时较长，可设置参数显示loading界面
* LoadingScene：负责显示加载界面

##流程介绍：
游戏可从任意场景启动，启动后会先检查是否初始化数据，如果没有的话会跳转到InitScene，然后经过LogoScene，PatchScene最后进入GameScene，在PatchScene中，先检查本地的存储目录（PC是c:/jsbframwork/）是否有数据，如果没有的话就将StreamingAssets文件夹下的资源释放到存储目录，如果有的话，通过对照files.txt文件列表从服务器更新文件，概括起来就是在服务器的资源文件夹右键点击复制，然后在客户端右键粘贴，选择全部替换。
##注意事项：
* 逻辑代码调用框架代码时，需要在JSBindingSettings.cs中的classes字段配置，在Editor中运行的逻辑需要在IsDiscard方法中配置，不然会出错。
* JSMgr.cs中，getJSFullName()是获取的数据目录(可读可写)，这是运行后调用的；jsGenByBridgeFile是在Editor中打包用的，把StreamingAssets拷贝到数据目录
* 在AppConst.cs中更改是否启动更新模式，设为false后就不再从服务器更新了，而是直接用本地StreamingAssets下的资源，WebUrl是服务器地址。
* 每个平台对应的资源不一样，通过JSBFramwork选择对应平台。
