﻿Bridge.assembly("BridgeProj", function ($asm, globals) {
    "use strict";

    Bridge.define("jsbExtension", {
        statics: {
            UpdateCoroutines: function (mb) {
                var elapsed = UnityEngine.Time.getdeltaTime();
            mb.$UpdateAllCoroutines(elapsed);
            mb.$UpdateAllInvokes(elapsed);
            }
        }
    });

    Bridge.define("GameMain", {
        inherits: [UnityEngine.MonoBehaviour],
        Start: function () {
            var uiRoot = UnityEngine.GameObject.Find("UI Root");
            var gobj = ResourceManager.CreatPrefab("TestWindow1", uiRoot);
            gobj.AddComponent(TestWindow1);
            //ResourceManager.CreatPrefabs("TestWindow2", uiRoot);
        },
        Update: function () {

        }
    });

    Bridge.define("TestWindow1", {
        inherits: [UnityEngine.MonoBehaviour],
        Start: function () {
            var label = this.gettransform().FindChild("Context").GetComponent(UILabel);
            label.settext(System.String.concat(label.gettext(), ""));
        },
        Update: function () {

        }
    });
});
