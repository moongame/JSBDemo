/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.3.0
 */
Bridge.assembly("BridgeProj", function ($asm, globals) {
    "use strict";

    Bridge.define("BetterList$1", function (T) { return {
        size: 0,
        getItem: function (i) {
            return Bridge.getDefaultValue(T);
        },
        setItem: function (i, value) {
        }
    }; });

    Bridge.define("BMFont", {
        getbaseOffset: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setbaseOffset: function (value) {
        },
        getcharSize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setcharSize: function (value) {
        },
        getglyphCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getglyphs: function () {
            return null;
        },
        getisValid: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getspriteName: function () {
            return null;
        },
        setspriteName: function (value) {
        },
        gettexHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settexHeight: function (value) {
        },
        gettexWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settexWidth: function (value) {
        }
    });

    Bridge.define("BMGlyph", {
        index: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0,
        advance: 0,
        channel: 0,
        kerning: null
    });

    Bridge.define("BMSymbol", {
        sequence: null,
        spriteName: null,
        getadvance: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getoffsetX: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getoffsetY: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getuvRect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("EventDelegate", {
        statics: {

        },
        oneShot: false,
        getisEnabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisValid: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmethodName: function () {
            return null;
        },
        setmethodName: function (value) {
        },
        getparameters: function () {
            return null;
        },
        gettarget: function () {
            return null;
        },
        settarget: function (value) {
        }
    });

    Bridge.define("EventDelegate.Parameter", {
        obj: null,
        field: null,
        expectedType: null,
        cached: false,
        propInfo: null,
        fieldInfo: null,
        gettype: function () {
            return null;
        },
        getvalue: function () {
            return null;
        },
        setvalue: function (value) {
        }
    });

    Bridge.define("UnityEngine.Object", {
        statics: {

        },
        gethideFlags: function () {
            return 0;
        },
        sethideFlags: function (value) {
        },
        getname: function () {
            return null;
        },
        setname: function (value) {
        }
    });

    Bridge.define("NGUIText", {
        statics: {
            bitmapFont: null,
            dynamicFont: null,
            glyph: null,
            fontSize: 0,
            fontScale: 0,
            pixelDensity: 0,
            fontStyle: 0,
            alignment: 0,
            rectWidth: 0,
            rectHeight: 0,
            regionWidth: 0,
            regionHeight: 0,
            maxLines: 0,
            gradient: false,
            encoding: false,
            spacingX: 0,
            spacingY: 0,
            premultiply: false,
            symbolStyle: 0,
            finalSize: 0,
            finalSpacingX: 0,
            finalLineHeight: 0,
            baseline: 0,
            useSymbols: false,
            config: {
                init: function () {
                    this.tint = new UnityEngine.Color();
                    this.gradientBottom = new UnityEngine.Color();
                    this.gradientTop = new UnityEngine.Color();
                }
            }
        }
    });

    Bridge.define("NGUIText.Alignment", {
        $kind: "enum",
        statics: {
            Automatic: 0,
            Left: 1,
            Center: 2,
            Right: 3,
            Justified: 4
        }
    });

    Bridge.define("NGUIText.GlyphInfo", {
        advance: 0,
        channel: 0,
        rotatedUVs: false,
        config: {
            init: function () {
                this.v0 = new UnityEngine.Vector2();
                this.v1 = new UnityEngine.Vector2();
                this.u0 = new UnityEngine.Vector2();
                this.u1 = new UnityEngine.Vector2();
            }
        }
    });

    Bridge.define("NGUIText.SymbolStyle", {
        $kind: "enum",
        statics: {
            None: 0,
            Normal: 1,
            Colored: 2
        }
    });

    Bridge.define("ResourceManager", {
        statics: {

        }
    });

    Bridge.define("System.Collections.DictionaryEntry", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new System.Collections.DictionaryEntry(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getKey: function () {
            return null;
        },
        setKey: function (value) {
        },
        getValue: function () {
            return null;
        },
        setValue: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("System.Runtime.Serialization.IDeserializationCallback", {
        $kind: "interface"
    });

    Bridge.define("System.Collections.IDictionary", {
        inherits: [System.Collections.ICollection],
        $kind: "interface"
    });

    Bridge.define("System.Runtime.Serialization.ISerializable", {
        $kind: "interface"
    });

    Bridge.define("System.Collections.IDictionaryEnumerator", {
        inherits: [System.Collections.IEnumerator],
        $kind: "interface"
    });

    Bridge.define("System.Runtime.Serialization.IFormatterConverter", {
        $kind: "interface"
    });

    Bridge.define("System.Runtime.Serialization.SerializationEntry", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new System.Runtime.Serialization.SerializationEntry(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getName: function () {
            return null;
        },
        getObjectType: function () {
            return null;
        },
        getValue: function () {
            return null;
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("System.Runtime.Serialization.SerializationInfo", {
        getAssemblyName: function () {
            return null;
        },
        setAssemblyName: function (value) {
        },
        getFullTypeName: function () {
            return null;
        },
        setFullTypeName: function (value) {
        },
        getMemberCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("System.Runtime.Serialization.SerializationInfoEnumerator", {
        inherits: [System.Collections.IEnumerator],
        config: {
            properties: {
                System$Collections$IEnumerator$Current: null
            }
        },
        getCurrent: function () {
            return Bridge.getDefaultValue(System.Runtime.Serialization.SerializationEntry);
        },
        getName: function () {
            return null;
        },
        getObjectType: function () {
            return null;
        },
        getValue: function () {
            return null;
        }
    });

    Bridge.define("System.Runtime.Serialization.StreamingContext", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new System.Runtime.Serialization.StreamingContext(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getContext: function () {
            return null;
        },
        getState: function () {
            return 0;
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("System.Runtime.Serialization.StreamingContextStates", {
        $kind: "enum",
        statics: {
            CrossProcess: 1,
            CrossMachine: 2,
            File: 4,
            Persistence: 8,
            Remoting: 16,
            Other: 32,
            Clone: 64,
            CrossAppDomain: 128,
            All: 255
        }
    });

    Bridge.define("System.Text.Decoder", {
        getFallback: function () {
            return null;
        },
        setFallback: function (value) {
        },
        getFallbackBuffer: function () {
            return null;
        }
    });

    Bridge.define("System.Text.DecoderFallback", {
        statics: {
            getExceptionFallback: function () {
                return null;
            },
            getReplacementFallback: function () {
                return null;
            }
        },
        getMaxCharCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("System.Text.DecoderFallbackBuffer", {
        getRemaining: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("System.Text.Encoder", {
        getFallback: function () {
            return null;
        },
        setFallback: function (value) {
        },
        getFallbackBuffer: function () {
            return null;
        }
    });

    Bridge.define("System.Text.EncoderFallback", {
        statics: {
            getExceptionFallback: function () {
                return null;
            },
            getReplacementFallback: function () {
                return null;
            }
        },
        getMaxCharCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("System.Text.EncoderFallbackBuffer", {
        getRemaining: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("System.Text.Encoding", {
        inherits: [System.ICloneable],
        statics: {
            getASCII: function () {
                return null;
            },
            getBigEndianUnicode: function () {
                return null;
            },
            getDefault: function () {
                return null;
            },
            getUnicode: function () {
                return null;
            },
            getUTF32: function () {
                return null;
            },
            getUTF7: function () {
                return null;
            },
            getUTF8: function () {
                return null;
            }
        },
        getBodyName: function () {
            return null;
        },
        getCodePage: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getDecoderFallback: function () {
            return null;
        },
        setDecoderFallback: function (value) {
        },
        getEncoderFallback: function () {
            return null;
        },
        setEncoderFallback: function (value) {
        },
        getEncodingName: function () {
            return null;
        },
        getHeaderName: function () {
            return null;
        },
        getIsBrowserDisplay: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsBrowserSave: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsMailNewsDisplay: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsMailNewsSave: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsReadOnly: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsSingleByte: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getWebName: function () {
            return null;
        },
        getWindowsCodePage: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("System.Text.EncodingInfo", {
        getCodePage: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getDisplayName: function () {
            return null;
        },
        getName: function () {
            return null;
        }
    });

    Bridge.define("System.Text.NormalizationForm", {
        $kind: "enum",
        statics: {
            FormC: 1,
            FormD: 2,
            FormKC: 5,
            FormKD: 6
        }
    });

    Bridge.define("UIBasicSprite.AdvancedType", {
        $kind: "enum",
        statics: {
            Invisible: 0,
            Sliced: 1,
            Tiled: 2
        }
    });

    Bridge.define("UIBasicSprite.FillDirection", {
        $kind: "enum",
        statics: {
            Horizontal: 0,
            Vertical: 1,
            Radial90: 2,
            Radial180: 3,
            Radial360: 4
        }
    });

    Bridge.define("UIBasicSprite.Flip", {
        $kind: "enum",
        statics: {
            Nothing: 0,
            Horizontally: 1,
            Vertically: 2,
            Both: 3
        }
    });

    Bridge.define("UIBasicSprite.Type", {
        $kind: "enum",
        statics: {
            Simple: 0,
            Sliced: 1,
            Tiled: 2,
            Filled: 3,
            Advanced: 4
        }
    });

    Bridge.define("UIDrawCall.Clipping", {
        $kind: "enum",
        statics: {
            None: 0,
            SoftClip: 3,
            ConstrainButDontClip: 4
        }
    });

    Bridge.define("UIGeometry", {
        verts: null,
        uvs: null,
        cols: null,
        gethasTransformed: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethasVertices: function () {
            return Bridge.getDefaultValue(Boolean);
        }
    });

    Bridge.define("UILabel.Crispness", {
        $kind: "enum",
        statics: {
            Never: 0,
            OnDesktop: 1,
            Always: 2
        }
    });

    Bridge.define("UILabel.Effect", {
        $kind: "enum",
        statics: {
            None: 0,
            Shadow: 1,
            Outline: 2
        }
    });

    Bridge.define("UILabel.Overflow", {
        $kind: "enum",
        statics: {
            ShrinkContent: 0,
            ClampContent: 1,
            ResizeFreely: 2,
            ResizeHeight: 3
        }
    });

    Bridge.define("UIPanel.RenderQueue", {
        $kind: "enum",
        statics: {
            Automatic: 0,
            StartAt: 1,
            Explicit: 2
        }
    });

    Bridge.define("UIProgressBar.FillDirection", {
        $kind: "enum",
        statics: {
            LeftToRight: 0,
            RightToLeft: 1,
            BottomToTop: 2,
            TopToBottom: 3
        }
    });

    Bridge.define("UIRect.AnchorPoint", {
        target: null,
        relative: 0,
        absolute: 0,
        rect: null,
        targetCam: null
    });

    Bridge.define("UIRect.AnchorUpdate", {
        $kind: "enum",
        statics: {
            OnEnable: 0,
            OnUpdate: 1,
            OnStart: 2
        }
    });

    Bridge.define("UIRoot.Constraint", {
        $kind: "enum",
        statics: {
            Fit: 0,
            Fill: 1,
            FitWidth: 2,
            FitHeight: 3
        }
    });

    Bridge.define("UIRoot.Scaling", {
        $kind: "enum",
        statics: {
            Flexible: 0,
            Constrained: 1,
            ConstrainedOnMobiles: 2
        }
    });

    Bridge.define("UISpriteData", {
        name: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        gethasBorder: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethasPadding: function () {
            return Bridge.getDefaultValue(Boolean);
        }
    });

    Bridge.define("UIWidget.AspectRatioSource", {
        $kind: "enum",
        statics: {
            Free: 0,
            BasedOnWidth: 1,
            BasedOnHeight: 2
        }
    });

    Bridge.define("UIWidget.Pivot", {
        $kind: "enum",
        statics: {
            TopLeft: 0,
            Top: 1,
            TopRight: 2,
            Left: 3,
            Center: 4,
            Right: 5,
            BottomLeft: 6,
            Bottom: 7,
            BottomRight: 8
        }
    });

    Bridge.define("UnityEngine.AccelerationEvent", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.AccelerationEvent(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getacceleration: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getdeltaTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.AnimationBlendMode", {
        $kind: "enum",
        statics: {
            Blend: 0,
            Additive: 1
        }
    });

    Bridge.define("UnityEngine.AnimationCullingType", {
        $kind: "enum",
        statics: {
            AlwaysAnimate: 0,
            BasedOnRenderers: 1,
            BasedOnClipBounds: 2,
            BasedOnUserBounds: 3
        }
    });

    Bridge.define("UnityEngine.AnimationCurve", {
        statics: {

        },
        getkeys: function () {
            return null;
        },
        setkeys: function (value) {
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getpostWrapMode: function () {
            return 0;
        },
        setpostWrapMode: function (value) {
        },
        getpreWrapMode: function () {
            return 0;
        },
        setpreWrapMode: function (value) {
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(UnityEngine.Keyframe);
        }
    });

    Bridge.define("UnityEngine.AnimationEvent", {
        getanimationState: function () {
            return null;
        },
        getanimatorClipInfo: function () {
            return Bridge.getDefaultValue(UnityEngine.AnimatorClipInfo);
        },
        getanimatorStateInfo: function () {
            return Bridge.getDefaultValue(UnityEngine.AnimatorStateInfo);
        },
        getfloatParameter: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfloatParameter: function (value) {
        },
        getfunctionName: function () {
            return null;
        },
        setfunctionName: function (value) {
        },
        getintParameter: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setintParameter: function (value) {
        },
        getisFiredByAnimator: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisFiredByLegacy: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmessageOptions: function () {
            return 0;
        },
        setmessageOptions: function (value) {
        },
        getobjectReferenceParameter: function () {
            return null;
        },
        setobjectReferenceParameter: function (value) {
        },
        getstringParameter: function () {
            return null;
        },
        setstringParameter: function (value) {
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settime: function (value) {
        }
    });

    Bridge.define("UnityEngine.TrackedReference", {
        statics: {

        }
    });

    Bridge.define("UnityEngine.AnimatorClipInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.AnimatorClipInfo(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getclip: function () {
            return null;
        },
        getweight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.AnimatorControllerParameter", {
        getdefaultBool: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setdefaultBool: function (value) {
        },
        getdefaultFloat: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdefaultFloat: function (value) {
        },
        getdefaultInt: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setdefaultInt: function (value) {
        },
        getname: function () {
            return null;
        },
        setname: function (value) {
        },
        getnameHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        gettype: function () {
            return 0;
        },
        settype: function (value) {
        }
    });

    Bridge.define("UnityEngine.AnimatorControllerParameterType", {
        $kind: "enum",
        statics: {
            Float: 1,
            Int: 3,
            Bool: 4,
            Trigger: 9
        }
    });

    Bridge.define("UnityEngine.AnimatorCullingMode", {
        $kind: "enum",
        statics: {
            AlwaysAnimate: 0,
            CullUpdateTransforms: 1,
            CullCompletely: 2,
            BasedOnRenderers: 1
        }
    });

    Bridge.define("UnityEngine.AnimatorRecorderMode", {
        $kind: "enum",
        statics: {
            Offline: 0,
            Playback: 1,
            Record: 2
        }
    });

    Bridge.define("UnityEngine.AnimatorStateInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.AnimatorStateInfo(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getfullPathHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getloop: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getnormalizedTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getshortNameHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getspeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getspeedMultiplier: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        gettagHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.AnimatorTransitionInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.AnimatorTransitionInfo(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getanyState: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getfullPathHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getnameHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getnormalizedTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getuserNameHash: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.AnimatorUpdateMode", {
        $kind: "enum",
        statics: {
            Normal: 0,
            AnimatePhysics: 1,
            UnscaledTime: 2
        }
    });

    Bridge.define("UnityEngine.AnisotropicFiltering", {
        $kind: "enum",
        statics: {
            Disable: 0,
            Enable: 1,
            ForceEnable: 2
        }
    });

    Bridge.define("UnityEngine.Application", {
        statics: {
            getabsoluteURL: function () {
                return null;
            },
            getbackgroundLoadingPriority: function () {
                return 0;
            },
            setbackgroundLoadingPriority: function (value) {
            },
            getbundleIdentifier: function () {
                return null;
            },
            getcloudProjectId: function () {
                return null;
            },
            getcompanyName: function () {
                return null;
            },
            getdataPath: function () {
                return null;
            },
            getgenuine: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getgenuineCheckAvailable: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getinstallMode: function () {
                return 0;
            },
            getinternetReachability: function () {
                return 0;
            },
            getisConsolePlatform: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getisEditor: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getisMobilePlatform: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getisPlaying: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getisShowingSplashScreen: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getisWebPlayer: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getpersistentDataPath: function () {
                return null;
            },
            getplatform: function () {
                return 0;
            },
            getproductName: function () {
                return null;
            },
            getrunInBackground: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setrunInBackground: function (value) {
            },
            getsandboxType: function () {
                return 0;
            },
            getsrcValue: function () {
                return null;
            },
            getstreamedBytes: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getstreamingAssetsPath: function () {
                return null;
            },
            getsystemLanguage: function () {
                return 0;
            },
            gettargetFrameRate: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            settargetFrameRate: function (value) {
            },
            gettemporaryCachePath: function () {
                return null;
            },
            getunityVersion: function () {
                return null;
            },
            getversion: function () {
                return null;
            },
            getwebSecurityEnabled: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getwebSecurityHostUrl: function () {
                return null;
            }
        }
    });

    Bridge.define("UnityEngine.ApplicationInstallMode", {
        $kind: "enum",
        statics: {
            Unknown: 0,
            Store: 1,
            DeveloperBuild: 2,
            Adhoc: 3,
            Enterprise: 4,
            Editor: 5
        }
    });

    Bridge.define("UnityEngine.ApplicationSandboxType", {
        $kind: "enum",
        statics: {
            Unknown: 0,
            NotSandboxed: 1,
            Sandboxed: 2,
            SandboxBroken: 3
        }
    });

    Bridge.define("UnityEngine.YieldInstruction");

    Bridge.define("UnityEngine.Audio.AudioMixerUpdateMode", {
        $kind: "enum",
        statics: {
            Normal: 0,
            UnscaledTime: 1
        }
    });

    Bridge.define("UnityEngine.AudioClipLoadType", {
        $kind: "enum",
        statics: {
            DecompressOnLoad: 0,
            CompressedInMemory: 1,
            Streaming: 2
        }
    });

    Bridge.define("UnityEngine.AudioDataLoadState", {
        $kind: "enum",
        statics: {
            Unloaded: 0,
            Loading: 1,
            Loaded: 2,
            Failed: 3
        }
    });

    Bridge.define("UnityEngine.AudioRolloffMode", {
        $kind: "enum",
        statics: {
            Logarithmic: 0,
            Linear: 1,
            Custom: 2
        }
    });

    Bridge.define("UnityEngine.AudioSourceCurveType", {
        $kind: "enum",
        statics: {
            CustomRolloff: 0,
            SpatialBlend: 1,
            ReverbZoneMix: 2,
            Spread: 3
        }
    });

    Bridge.define("UnityEngine.AudioType", {
        $kind: "enum",
        statics: {
            UNKNOWN: 0,
            ACC: 1,
            AIFF: 2,
            IT: 10,
            MOD: 12,
            MPEG: 13,
            OGGVORBIS: 14,
            S3M: 17,
            WAV: 20,
            XM: 21,
            XMA: 22,
            VAG: 23,
            AUDIOQUEUE: 24
        }
    });

    Bridge.define("UnityEngine.AudioVelocityUpdateMode", {
        $kind: "enum",
        statics: {
            Auto: 0,
            Fixed: 1,
            Dynamic: 2
        }
    });

    Bridge.define("UnityEngine.AvatarIKGoal", {
        $kind: "enum",
        statics: {
            LeftFoot: 0,
            RightFoot: 1,
            LeftHand: 2,
            RightHand: 3
        }
    });

    Bridge.define("UnityEngine.AvatarIKHint", {
        $kind: "enum",
        statics: {
            LeftKnee: 0,
            RightKnee: 1,
            LeftElbow: 2,
            RightElbow: 3
        }
    });

    Bridge.define("UnityEngine.AvatarTarget", {
        $kind: "enum",
        statics: {
            Root: 0,
            Body: 1,
            LeftFoot: 2,
            RightFoot: 3,
            LeftHand: 4,
            RightHand: 5
        }
    });

    Bridge.define("UnityEngine.BoneWeight", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.BoneWeight(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getboneIndex0: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setboneIndex0: function (value) {
        },
        getboneIndex1: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setboneIndex1: function (value) {
        },
        getboneIndex2: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setboneIndex2: function (value) {
        },
        getboneIndex3: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setboneIndex3: function (value) {
        },
        getweight0: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setweight0: function (value) {
        },
        getweight1: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setweight1: function (value) {
        },
        getweight2: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setweight2: function (value) {
        },
        getweight3: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setweight3: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Bounds", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Bounds(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setcenter: function (value) {
        },
        getextents: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setextents: function (value) {
        },
        getmax: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setmax: function (value) {
        },
        getmin: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setmin: function (value) {
        },
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setsize: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Camera.StereoscopicEye", {
        $kind: "enum",
        statics: {
            Left: 0,
            Right: 1
        }
    });

    Bridge.define("UnityEngine.CameraClearFlags", {
        $kind: "enum",
        statics: {
            Skybox: 1,
            Color: 2,
            SolidColor: 2,
            Depth: 3,
            Nothing: 4
        }
    });

    Bridge.define("UnityEngine.CameraType", {
        $kind: "enum",
        statics: {
            Game: 1,
            SceneView: 2,
            Preview: 4
        }
    });

    Bridge.define("UnityEngine.CharacterInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.CharacterInfo(); }
        },
        index: 0,
        size: 0,
        style: 0,
        ctor: function () {
            this.$initialize();
        },
        getadvance: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setadvance: function (value) {
        },
        getbearing: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setbearing: function (value) {
        },
        getglyphHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setglyphHeight: function (value) {
        },
        getglyphWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setglyphWidth: function (value) {
        },
        getmaxX: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmaxX: function (value) {
        },
        getmaxY: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmaxY: function (value) {
        },
        getminX: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setminX: function (value) {
        },
        getminY: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setminY: function (value) {
        },
        getuvBottomLeft: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setuvBottomLeft: function (value) {
        },
        getuvBottomRight: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setuvBottomRight: function (value) {
        },
        getuvTopLeft: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setuvTopLeft: function (value) {
        },
        getuvTopRight: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setuvTopRight: function (value) {
        },
        getHashCode: function () {
            var h = Bridge.addHash([5339616645, this.index, this.size, this.style]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.CharacterInfo)) {
                return false;
            }
            return Bridge.equals(this.index, o.index) && Bridge.equals(this.size, o.size) && Bridge.equals(this.style, o.style);
        },
        $clone: function (to) {
            var s = to || new UnityEngine.CharacterInfo();
            s.index = this.index;
            s.size = this.size;
            s.style = this.style;
            return s;
        }
    });

    Bridge.define("UnityEngine.Collision2D", {
        getcollider: function () {
            return null;
        },
        getcontacts: function () {
            return null;
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getgameObject: function () {
            return null;
        },
        getrelativeVelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getrigidbody: function () {
            return null;
        },
        gettransform: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.CollisionDetectionMode", {
        $kind: "enum",
        statics: {
            Discrete: 0,
            Continuous: 1,
            ContinuousDynamic: 2
        }
    });

    Bridge.define("UnityEngine.CollisionDetectionMode2D", {
        $kind: "enum",
        statics: {
            None: 0,
            Discrete: 0,
            Continuous: 1
        }
    });

    Bridge.define("UnityEngine.Color", {
        $kind: "struct",
        statics: {
            getblack: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getblue: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getclear: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getcyan: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getgray: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getgreen: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getgrey: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getmagenta: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getred: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getwhite: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getyellow: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            getDefaultValue: function () { return new UnityEngine.Color(); }
        },
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        ctor: function () {
            this.$initialize();
        },
        getgamma: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        getgrayscale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getlinear: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        getmaxColorComponent: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem: function (index, value) {
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Color();
            s.r = this.r;
            s.g = this.g;
            s.b = this.b;
            s.a = this.a;
            return s;
        }
    });

    Bridge.define("UnityEngine.Color32", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Color32(); }
        },
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var h = Bridge.addHash([1872667317, this.r, this.g, this.b, this.a]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Color32)) {
                return false;
            }
            return Bridge.equals(this.r, o.r) && Bridge.equals(this.g, o.g) && Bridge.equals(this.b, o.b) && Bridge.equals(this.a, o.a);
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Color32();
            s.r = this.r;
            s.g = this.g;
            s.b = this.b;
            s.a = this.a;
            return s;
        }
    });

    Bridge.define("UnityEngine.CombineInstance", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.CombineInstance(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getmesh: function () {
            return null;
        },
        setmesh: function (value) {
        },
        getsubMeshIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsubMeshIndex: function (value) {
        },
        gettransform: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        settransform: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Compass", {
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getheadingAccuracy: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getmagneticHeading: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getrawVector: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        gettimestamp: function () {
            return Bridge.getDefaultValue(System.Double);
        },
        gettrueHeading: function () {
            return Bridge.getDefaultValue(System.Single);
        }
    });

    Bridge.define("UnityEngine.ComputeBuffer", {
        inherits: [System.IDisposable],
        statics: {

        },
        getcount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getstride: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.ComputeBufferType", {
        $kind: "enum",
        statics: {
            Default: 0,
            Raw: 1,
            Append: 2,
            Counter: 4,
            DrawIndirect: 256,
            IndirectArguments: 256,
            GPUMemory: 512
        }
    });

    Bridge.define("UnityEngine.ContactPoint2D", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ContactPoint2D(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcollider: function () {
            return null;
        },
        getnormal: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getotherCollider: function () {
            return null;
        },
        getpoint: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.CubemapFace", {
        $kind: "enum",
        statics: {
            Unknown: -1,
            PositiveX: 0,
            NegativeX: 1,
            PositiveY: 2,
            NegativeY: 3,
            PositiveZ: 4,
            NegativeZ: 5
        }
    });

    Bridge.define("UnityEngine.Debug", {
        statics: {
            getdeveloperConsoleVisible: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setdeveloperConsoleVisible: function (value) {
            },
            getisDebugBuild: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getlogger: function () {
                return null;
            }
        }
    });

    Bridge.define("UnityEngine.DepthTextureMode", {
        $kind: "enum",
        statics: {
            None: 0,
            Depth: 1,
            DepthNormals: 2,
            MotionVectors: 4
        }
    });

    Bridge.define("UnityEngine.DeviceOrientation", {
        $kind: "enum",
        statics: {
            Unknown: 0,
            Portrait: 1,
            PortraitUpsideDown: 2,
            LandscapeLeft: 3,
            LandscapeRight: 4,
            FaceUp: 5,
            FaceDown: 6
        }
    });

    Bridge.define("UnityEngine.Experimental.Director.DirectorUpdateMode", {
        $kind: "enum",
        statics: {
            DSPClock: 0,
            GameTime: 1,
            UnscaledGameTime: 2,
            Manual: 3
        }
    });

    Bridge.define("UnityEngine.Experimental.Director.Playable", {
        $kind: "struct",
        statics: {
            getNull: function () {
                return Bridge.getDefaultValue(UnityEngine.Experimental.Director.Playable);
            },
            getDefaultValue: function () { return new UnityEngine.Experimental.Director.Playable(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getduration: function () {
            return Bridge.getDefaultValue(System.Double);
        },
        setduration: function (value) {
        },
        getinputCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getoutputCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getstate: function () {
            return 0;
        },
        setstate: function (value) {
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Double);
        },
        settime: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Experimental.Director.PlayState", {
        $kind: "enum",
        statics: {
            Paused: 0,
            Playing: 1
        }
    });

    Bridge.define("UnityEngine.FFTWindow", {
        $kind: "enum",
        statics: {
            Rectangular: 0,
            Triangle: 1,
            Hamming: 2,
            Hanning: 3,
            Blackman: 4,
            BlackmanHarris: 5
        }
    });

    Bridge.define("UnityEngine.FilterMode", {
        $kind: "enum",
        statics: {
            Point: 0,
            Bilinear: 1,
            Trilinear: 2
        }
    });

    Bridge.define("UnityEngine.FontStyle", {
        $kind: "enum",
        statics: {
            Normal: 0,
            Bold: 1,
            Italic: 2,
            BoldAndItalic: 3
        }
    });

    Bridge.define("UnityEngine.ForceMode", {
        $kind: "enum",
        statics: {
            Force: 0,
            Acceleration: 5,
            Impulse: 1,
            VelocityChange: 2
        }
    });

    Bridge.define("UnityEngine.ForceMode2D", {
        $kind: "enum",
        statics: {
            Force: 0,
            Impulse: 1
        }
    });

    Bridge.define("UnityEngine.Gradient", {
        getalphaKeys: function () {
            return null;
        },
        setalphaKeys: function (value) {
        },
        getcolorKeys: function () {
            return null;
        },
        setcolorKeys: function (value) {
        }
    });

    Bridge.define("UnityEngine.GradientAlphaKey", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.GradientAlphaKey(); }
        },
        alpha: 0,
        time: 0,
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var h = Bridge.addHash([7426379602, this.alpha, this.time]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.GradientAlphaKey)) {
                return false;
            }
            return Bridge.equals(this.alpha, o.alpha) && Bridge.equals(this.time, o.time);
        },
        $clone: function (to) {
            var s = to || new UnityEngine.GradientAlphaKey();
            s.alpha = this.alpha;
            s.time = this.time;
            return s;
        }
    });

    Bridge.define("UnityEngine.GradientColorKey", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.GradientColorKey(); }
        },
        time: 0,
        config: {
            init: function () {
                this.color = new UnityEngine.Color();
            }
        },
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var h = Bridge.addHash([7543558757, this.color, this.time]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.GradientColorKey)) {
                return false;
            }
            return Bridge.equals(this.color, o.color) && Bridge.equals(this.time, o.time);
        },
        $clone: function (to) {
            var s = to || new UnityEngine.GradientColorKey();
            s.color = this.color.$clone();
            s.time = this.time;
            return s;
        }
    });

    Bridge.define("UnityEngine.Gyroscope", {
        getattitude: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getgravity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getrotationRate: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getrotationRateUnbiased: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getupdateInterval: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setupdateInterval: function (value) {
        },
        getuserAcceleration: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        }
    });

    Bridge.define("UnityEngine.Hash128", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Hash128(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getisValid: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.HideFlags", {
        $kind: "enum",
        statics: {
            None: 0,
            HideInHierarchy: 1,
            HideInInspector: 2,
            DontSaveInEditor: 4,
            NotEditable: 8,
            DontSaveInBuild: 16,
            DontUnloadUnusedAsset: 32,
            DontSave: 52,
            HideAndDontSave: 61
        }
    });

    Bridge.define("UnityEngine.HumanBodyBones", {
        $kind: "enum",
        statics: {
            Hips: 0,
            LeftUpperLeg: 1,
            RightUpperLeg: 2,
            LeftLowerLeg: 3,
            RightLowerLeg: 4,
            LeftFoot: 5,
            RightFoot: 6,
            Spine: 7,
            Chest: 8,
            Neck: 9,
            Head: 10,
            LeftShoulder: 11,
            RightShoulder: 12,
            LeftUpperArm: 13,
            RightUpperArm: 14,
            LeftLowerArm: 15,
            RightLowerArm: 16,
            LeftHand: 17,
            RightHand: 18,
            LeftToes: 19,
            RightToes: 20,
            LeftEye: 21,
            RightEye: 22,
            Jaw: 23,
            LeftThumbProximal: 24,
            LeftThumbIntermediate: 25,
            LeftThumbDistal: 26,
            LeftIndexProximal: 27,
            LeftIndexIntermediate: 28,
            LeftIndexDistal: 29,
            LeftMiddleProximal: 30,
            LeftMiddleIntermediate: 31,
            LeftMiddleDistal: 32,
            LeftRingProximal: 33,
            LeftRingIntermediate: 34,
            LeftRingDistal: 35,
            LeftLittleProximal: 36,
            LeftLittleIntermediate: 37,
            LeftLittleDistal: 38,
            RightThumbProximal: 39,
            RightThumbIntermediate: 40,
            RightThumbDistal: 41,
            RightIndexProximal: 42,
            RightIndexIntermediate: 43,
            RightIndexDistal: 44,
            RightMiddleProximal: 45,
            RightMiddleIntermediate: 46,
            RightMiddleDistal: 47,
            RightRingProximal: 48,
            RightRingIntermediate: 49,
            RightRingDistal: 50,
            RightLittleProximal: 51,
            RightLittleIntermediate: 52,
            RightLittleDistal: 53,
            LastBone: 54
        }
    });

    Bridge.define("UnityEngine.ILogHandler", {
        $kind: "interface"
    });

    Bridge.define("UnityEngine.IMECompositionMode", {
        $kind: "enum",
        statics: {
            Auto: 0,
            On: 1,
            Off: 2
        }
    });

    Bridge.define("UnityEngine.Input", {
        statics: {
            getacceleration: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getaccelerationEventCount: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getaccelerationEvents: function () {
                return null;
            },
            getanyKey: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getanyKeyDown: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getbackButtonLeavesApp: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setbackButtonLeavesApp: function (value) {
            },
            getcompass: function () {
                return null;
            },
            getcompensateSensors: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setcompensateSensors: function (value) {
            },
            getcompositionCursorPos: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            setcompositionCursorPos: function (value) {
            },
            getcompositionString: function () {
                return null;
            },
            getdeviceOrientation: function () {
                return 0;
            },
            getgyro: function () {
                return null;
            },
            getimeCompositionMode: function () {
                return 0;
            },
            setimeCompositionMode: function (value) {
            },
            getimeIsSelected: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getinputString: function () {
                return null;
            },
            getlocation: function () {
                return null;
            },
            getmousePosition: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getmousePresent: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            getmouseScrollDelta: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getmultiTouchEnabled: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setmultiTouchEnabled: function (value) {
            },
            getsimulateMouseWithTouches: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setsimulateMouseWithTouches: function (value) {
            },
            getstylusTouchSupported: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            gettouchCount: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            gettouches: function () {
                return null;
            },
            gettouchPressureSupported: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            gettouchSupported: function () {
                return Bridge.getDefaultValue(Boolean);
            }
        }
    });

    Bridge.define("UnityEngine.KeyCode", {
        $kind: "enum",
        statics: {
            None: 0,
            Backspace: 8,
            Delete: 127,
            Tab: 9,
            Clear: 12,
            Return: 13,
            Pause: 19,
            Escape: 27,
            Space: 32,
            Keypad0: 256,
            Keypad1: 257,
            Keypad2: 258,
            Keypad3: 259,
            Keypad4: 260,
            Keypad5: 261,
            Keypad6: 262,
            Keypad7: 263,
            Keypad8: 264,
            Keypad9: 265,
            KeypadPeriod: 266,
            KeypadDivide: 267,
            KeypadMultiply: 268,
            KeypadMinus: 269,
            KeypadPlus: 270,
            KeypadEnter: 271,
            KeypadEquals: 272,
            UpArrow: 273,
            DownArrow: 274,
            RightArrow: 275,
            LeftArrow: 276,
            Insert: 277,
            Home: 278,
            End: 279,
            PageUp: 280,
            PageDown: 281,
            F1: 282,
            F2: 283,
            F3: 284,
            F4: 285,
            F5: 286,
            F6: 287,
            F7: 288,
            F8: 289,
            F9: 290,
            F10: 291,
            F11: 292,
            F12: 293,
            F13: 294,
            F14: 295,
            F15: 296,
            Alpha0: 48,
            Alpha1: 49,
            Alpha2: 50,
            Alpha3: 51,
            Alpha4: 52,
            Alpha5: 53,
            Alpha6: 54,
            Alpha7: 55,
            Alpha8: 56,
            Alpha9: 57,
            Exclaim: 33,
            DoubleQuote: 34,
            Hash: 35,
            Dollar: 36,
            Ampersand: 38,
            Quote: 39,
            LeftParen: 40,
            RightParen: 41,
            Asterisk: 42,
            Plus: 43,
            Comma: 44,
            Minus: 45,
            Period: 46,
            Slash: 47,
            Colon: 58,
            Semicolon: 59,
            Less: 60,
            Equals: 61,
            Greater: 62,
            Question: 63,
            At: 64,
            LeftBracket: 91,
            Backslash: 92,
            RightBracket: 93,
            Caret: 94,
            Underscore: 95,
            BackQuote: 96,
            A: 97,
            B: 98,
            C: 99,
            D: 100,
            E: 101,
            F: 102,
            G: 103,
            H: 104,
            I: 105,
            J: 106,
            K: 107,
            L: 108,
            M: 109,
            N: 110,
            O: 111,
            P: 112,
            Q: 113,
            R: 114,
            S: 115,
            T: 116,
            U: 117,
            V: 118,
            W: 119,
            X: 120,
            Y: 121,
            Z: 122,
            Numlock: 300,
            CapsLock: 301,
            ScrollLock: 302,
            RightShift: 303,
            LeftShift: 304,
            RightControl: 305,
            LeftControl: 306,
            RightAlt: 307,
            LeftAlt: 308,
            LeftCommand: 310,
            LeftApple: 310,
            LeftWindows: 311,
            RightCommand: 309,
            RightApple: 309,
            RightWindows: 312,
            AltGr: 313,
            Help: 315,
            Print: 316,
            SysReq: 317,
            Break: 318,
            Menu: 319,
            Mouse0: 323,
            Mouse1: 324,
            Mouse2: 325,
            Mouse3: 326,
            Mouse4: 327,
            Mouse5: 328,
            Mouse6: 329,
            JoystickButton0: 330,
            JoystickButton1: 331,
            JoystickButton2: 332,
            JoystickButton3: 333,
            JoystickButton4: 334,
            JoystickButton5: 335,
            JoystickButton6: 336,
            JoystickButton7: 337,
            JoystickButton8: 338,
            JoystickButton9: 339,
            JoystickButton10: 340,
            JoystickButton11: 341,
            JoystickButton12: 342,
            JoystickButton13: 343,
            JoystickButton14: 344,
            JoystickButton15: 345,
            JoystickButton16: 346,
            JoystickButton17: 347,
            JoystickButton18: 348,
            JoystickButton19: 349,
            Joystick1Button0: 350,
            Joystick1Button1: 351,
            Joystick1Button2: 352,
            Joystick1Button3: 353,
            Joystick1Button4: 354,
            Joystick1Button5: 355,
            Joystick1Button6: 356,
            Joystick1Button7: 357,
            Joystick1Button8: 358,
            Joystick1Button9: 359,
            Joystick1Button10: 360,
            Joystick1Button11: 361,
            Joystick1Button12: 362,
            Joystick1Button13: 363,
            Joystick1Button14: 364,
            Joystick1Button15: 365,
            Joystick1Button16: 366,
            Joystick1Button17: 367,
            Joystick1Button18: 368,
            Joystick1Button19: 369,
            Joystick2Button0: 370,
            Joystick2Button1: 371,
            Joystick2Button2: 372,
            Joystick2Button3: 373,
            Joystick2Button4: 374,
            Joystick2Button5: 375,
            Joystick2Button6: 376,
            Joystick2Button7: 377,
            Joystick2Button8: 378,
            Joystick2Button9: 379,
            Joystick2Button10: 380,
            Joystick2Button11: 381,
            Joystick2Button12: 382,
            Joystick2Button13: 383,
            Joystick2Button14: 384,
            Joystick2Button15: 385,
            Joystick2Button16: 386,
            Joystick2Button17: 387,
            Joystick2Button18: 388,
            Joystick2Button19: 389,
            Joystick3Button0: 390,
            Joystick3Button1: 391,
            Joystick3Button2: 392,
            Joystick3Button3: 393,
            Joystick3Button4: 394,
            Joystick3Button5: 395,
            Joystick3Button6: 396,
            Joystick3Button7: 397,
            Joystick3Button8: 398,
            Joystick3Button9: 399,
            Joystick3Button10: 400,
            Joystick3Button11: 401,
            Joystick3Button12: 402,
            Joystick3Button13: 403,
            Joystick3Button14: 404,
            Joystick3Button15: 405,
            Joystick3Button16: 406,
            Joystick3Button17: 407,
            Joystick3Button18: 408,
            Joystick3Button19: 409,
            Joystick4Button0: 410,
            Joystick4Button1: 411,
            Joystick4Button2: 412,
            Joystick4Button3: 413,
            Joystick4Button4: 414,
            Joystick4Button5: 415,
            Joystick4Button6: 416,
            Joystick4Button7: 417,
            Joystick4Button8: 418,
            Joystick4Button9: 419,
            Joystick4Button10: 420,
            Joystick4Button11: 421,
            Joystick4Button12: 422,
            Joystick4Button13: 423,
            Joystick4Button14: 424,
            Joystick4Button15: 425,
            Joystick4Button16: 426,
            Joystick4Button17: 427,
            Joystick4Button18: 428,
            Joystick4Button19: 429,
            Joystick5Button0: 430,
            Joystick5Button1: 431,
            Joystick5Button2: 432,
            Joystick5Button3: 433,
            Joystick5Button4: 434,
            Joystick5Button5: 435,
            Joystick5Button6: 436,
            Joystick5Button7: 437,
            Joystick5Button8: 438,
            Joystick5Button9: 439,
            Joystick5Button10: 440,
            Joystick5Button11: 441,
            Joystick5Button12: 442,
            Joystick5Button13: 443,
            Joystick5Button14: 444,
            Joystick5Button15: 445,
            Joystick5Button16: 446,
            Joystick5Button17: 447,
            Joystick5Button18: 448,
            Joystick5Button19: 449,
            Joystick6Button0: 450,
            Joystick6Button1: 451,
            Joystick6Button2: 452,
            Joystick6Button3: 453,
            Joystick6Button4: 454,
            Joystick6Button5: 455,
            Joystick6Button6: 456,
            Joystick6Button7: 457,
            Joystick6Button8: 458,
            Joystick6Button9: 459,
            Joystick6Button10: 460,
            Joystick6Button11: 461,
            Joystick6Button12: 462,
            Joystick6Button13: 463,
            Joystick6Button14: 464,
            Joystick6Button15: 465,
            Joystick6Button16: 466,
            Joystick6Button17: 467,
            Joystick6Button18: 468,
            Joystick6Button19: 469,
            Joystick7Button0: 470,
            Joystick7Button1: 471,
            Joystick7Button2: 472,
            Joystick7Button3: 473,
            Joystick7Button4: 474,
            Joystick7Button5: 475,
            Joystick7Button6: 476,
            Joystick7Button7: 477,
            Joystick7Button8: 478,
            Joystick7Button9: 479,
            Joystick7Button10: 480,
            Joystick7Button11: 481,
            Joystick7Button12: 482,
            Joystick7Button13: 483,
            Joystick7Button14: 484,
            Joystick7Button15: 485,
            Joystick7Button16: 486,
            Joystick7Button17: 487,
            Joystick7Button18: 488,
            Joystick7Button19: 489,
            Joystick8Button0: 490,
            Joystick8Button1: 491,
            Joystick8Button2: 492,
            Joystick8Button3: 493,
            Joystick8Button4: 494,
            Joystick8Button5: 495,
            Joystick8Button6: 496,
            Joystick8Button7: 497,
            Joystick8Button8: 498,
            Joystick8Button9: 499,
            Joystick8Button10: 500,
            Joystick8Button11: 501,
            Joystick8Button12: 502,
            Joystick8Button13: 503,
            Joystick8Button14: 504,
            Joystick8Button15: 505,
            Joystick8Button16: 506,
            Joystick8Button17: 507,
            Joystick8Button18: 508,
            Joystick8Button19: 509
        }
    });

    Bridge.define("UnityEngine.Keyframe", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Keyframe(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getinTangent: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setinTangent: function (value) {
        },
        getoutTangent: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setoutTangent: function (value) {
        },
        gettangentMode: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settangentMode: function (value) {
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settime: function (value) {
        },
        getvalue: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setvalue: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.LayerMask", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.LayerMask(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getvalue: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setvalue: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.LightRenderMode", {
        $kind: "enum",
        statics: {
            Auto: 0,
            ForcePixel: 1,
            ForceVertex: 2
        }
    });

    Bridge.define("UnityEngine.LightShadowResolution", {
        $kind: "enum",
        statics: {
            FromQualitySettings: -1,
            Low: 0,
            Medium: 1,
            High: 2,
            VeryHigh: 3
        }
    });

    Bridge.define("UnityEngine.LightShadows", {
        $kind: "enum",
        statics: {
            None: 0,
            Hard: 1,
            Soft: 2
        }
    });

    Bridge.define("UnityEngine.LightType", {
        $kind: "enum",
        statics: {
            Spot: 0,
            Directional: 1,
            Point: 2,
            Area: 3
        }
    });

    Bridge.define("UnityEngine.LocationInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.LocationInfo(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getaltitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        gethorizontalAccuracy: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getlatitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getlongitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        gettimestamp: function () {
            return Bridge.getDefaultValue(System.Double);
        },
        getverticalAccuracy: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.LocationService", {
        getisEnabledByUser: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlastData: function () {
            return Bridge.getDefaultValue(UnityEngine.LocationInfo);
        },
        getstatus: function () {
            return 0;
        }
    });

    Bridge.define("UnityEngine.LocationServiceStatus", {
        $kind: "enum",
        statics: {
            Stopped: 0,
            Initializing: 1,
            Running: 2,
            Failed: 3
        }
    });

    Bridge.define("UnityEngine.LogType", {
        $kind: "enum",
        statics: {
            Error: 0,
            Assert: 1,
            Warning: 2,
            Log: 3,
            Exception: 4
        }
    });

    Bridge.define("UnityEngine.MatchTargetWeightMask", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.MatchTargetWeightMask(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getpositionXYZWeight: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setpositionXYZWeight: function (value) {
        },
        getrotationWeight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrotationWeight: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.MaterialGlobalIlluminationFlags", {
        $kind: "enum",
        statics: {
            None: 0,
            RealtimeEmissive: 1,
            BakedEmissive: 2,
            EmissiveIsBlack: 4
        }
    });

    Bridge.define("UnityEngine.MaterialPropertyBlock", {
        getisEmpty: function () {
            return Bridge.getDefaultValue(Boolean);
        }
    });

    Bridge.define("UnityEngine.Mathf", {
        $kind: "struct",
        statics: {
            PI: 0,
            Infinity: 0,
            NegativeInfinity: 0,
            Deg2Rad: 0,
            Rad2Deg: 0,
            Epsilon: 0,
            getDefaultValue: function () { return new UnityEngine.Mathf(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Matrix4x4", {
        $kind: "struct",
        statics: {
            getidentity: function () {
                return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
            },
            getzero: function () {
                return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
            },
            getDefaultValue: function () { return new UnityEngine.Matrix4x4(); }
        },
        m00: 0,
        m10: 0,
        m20: 0,
        m30: 0,
        m01: 0,
        m11: 0,
        m21: 0,
        m31: 0,
        m02: 0,
        m12: 0,
        m22: 0,
        m32: 0,
        m03: 0,
        m13: 0,
        m23: 0,
        m33: 0,
        ctor: function () {
            this.$initialize();
        },
        getdeterminant: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getinverse: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        getisIdentity: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gettranspose: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem: function (index, value) {
        },
        getItem$1: function (row, column) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem$1: function (row, column, value) {
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Matrix4x4();
            s.m00 = this.m00;
            s.m10 = this.m10;
            s.m20 = this.m20;
            s.m30 = this.m30;
            s.m01 = this.m01;
            s.m11 = this.m11;
            s.m21 = this.m21;
            s.m31 = this.m31;
            s.m02 = this.m02;
            s.m12 = this.m12;
            s.m22 = this.m22;
            s.m32 = this.m32;
            s.m03 = this.m03;
            s.m13 = this.m13;
            s.m23 = this.m23;
            s.m33 = this.m33;
            return s;
        }
    });

    Bridge.define("UnityEngine.MeshTopology", {
        $kind: "enum",
        statics: {
            Triangles: 0,
            Quads: 2,
            Lines: 3,
            LineStrip: 4,
            Points: 5
        }
    });

    Bridge.define("UnityEngine.NavMeshHit", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.NavMeshHit(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getdistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdistance: function (value) {
        },
        gethit: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        sethit: function (value) {
        },
        getmask: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmask: function (value) {
        },
        getnormal: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setnormal: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setposition: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.NavMeshPath", {
        getcorners: function () {
            return null;
        },
        getstatus: function () {
            return 0;
        }
    });

    Bridge.define("UnityEngine.NavMeshPathStatus", {
        $kind: "enum",
        statics: {
            PathComplete: 0,
            PathPartial: 1,
            PathInvalid: 2
        }
    });

    Bridge.define("UnityEngine.NetworkReachability", {
        $kind: "enum",
        statics: {
            NotReachable: 0,
            ReachableViaCarrierDataNetwork: 1,
            ReachableViaLocalAreaNetwork: 2
        }
    });

    Bridge.define("UnityEngine.ObstacleAvoidanceType", {
        $kind: "enum",
        statics: {
            NoObstacleAvoidance: 0,
            LowQualityObstacleAvoidance: 1,
            MedQualityObstacleAvoidance: 2,
            GoodQualityObstacleAvoidance: 3,
            HighQualityObstacleAvoidance: 4
        }
    });

    Bridge.define("UnityEngine.OffMeshLinkData", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.OffMeshLinkData(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getactivated: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getendPos: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getlinkType: function () {
            return 0;
        },
        getoffMeshLink: function () {
            return null;
        },
        getstartPos: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getvalid: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.OffMeshLinkType", {
        $kind: "enum",
        statics: {
            LinkTypeManual: 0,
            LinkTypeDropDown: 1,
            LinkTypeJumpAcross: 2
        }
    });

    Bridge.define("UnityEngine.ParticleSystem.Burst", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.Burst(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getmaxCount: function () {
            return Bridge.getDefaultValue(System.Int16);
        },
        setmaxCount: function (value) {
        },
        getminCount: function () {
            return Bridge.getDefaultValue(System.Int16);
        },
        setminCount: function (value) {
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settime: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.CollisionModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.CollisionModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getbounce: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setbounce: function (value) {
        },
        getcollidesWith: function () {
            return Bridge.getDefaultValue(UnityEngine.LayerMask);
        },
        setcollidesWith: function (value) {
        },
        getdampen: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setdampen: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getenableDynamicColliders: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenableDynamicColliders: function (value) {
        },
        getenableInteriorCollisions: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenableInteriorCollisions: function (value) {
        },
        getlifetimeLoss: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setlifetimeLoss: function (value) {
        },
        getmaxCollisionShapes: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmaxCollisionShapes: function (value) {
        },
        getmaxKillSpeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmaxKillSpeed: function (value) {
        },
        getmaxPlaneCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getminKillSpeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setminKillSpeed: function (value) {
        },
        getmode: function () {
            return 0;
        },
        setmode: function (value) {
        },
        getquality: function () {
            return 0;
        },
        setquality: function (value) {
        },
        getradiusScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradiusScale: function (value) {
        },
        getsendCollisionMessages: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setsendCollisionMessages: function (value) {
        },
        gettype: function () {
            return 0;
        },
        settype: function (value) {
        },
        getvoxelSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setvoxelSize: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.ColorBySpeedModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.ColorBySpeedModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxGradient);
        },
        setcolor: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getrange: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setrange: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.ColorOverLifetimeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.ColorOverLifetimeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxGradient);
        },
        setcolor: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.EmissionModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.EmissionModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getburstCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getrate: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setrate: function (value) {
        },
        gettype: function () {
            return 0;
        },
        settype: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.EmitParams", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.EmitParams(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getangularVelocity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangularVelocity: function (value) {
        },
        getangularVelocity3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setangularVelocity3D: function (value) {
        },
        getapplyShapeToPosition: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setapplyShapeToPosition: function (value) {
        },
        getaxisOfRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setaxisOfRotation: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setposition: function (value) {
        },
        getrandomSeed: function () {
            return Bridge.getDefaultValue(System.UInt32);
        },
        setrandomSeed: function (value) {
        },
        getrotation: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrotation: function (value) {
        },
        getrotation3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setrotation3D: function (value) {
        },
        getstartColor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color32);
        },
        setstartColor: function (value) {
        },
        getstartLifetime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartLifetime: function (value) {
        },
        getstartSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartSize: function (value) {
        },
        getstartSize3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setstartSize3D: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setvelocity: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.ExternalForcesModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.ExternalForcesModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getmultiplier: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmultiplier: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.ForceOverLifetimeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.ForceOverLifetimeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getrandomized: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setrandomized: function (value) {
        },
        getspace: function () {
            return 0;
        },
        setspace: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setx: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        sety: function (value) {
        },
        getz: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setz: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.InheritVelocityModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.InheritVelocityModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcurve: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setcurve: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getmode: function () {
            return 0;
        },
        setmode: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getdampen: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdampen: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getlimit: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setlimit: function (value) {
        },
        getlimitX: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setlimitX: function (value) {
        },
        getlimitY: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setlimitY: function (value) {
        },
        getlimitZ: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setlimitZ: function (value) {
        },
        getseparateAxes: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setseparateAxes: function (value) {
        },
        getspace: function () {
            return 0;
        },
        setspace: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.MinMaxCurve", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.MinMaxCurve(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getconstant: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setconstant: function (value) {
        },
        getconstantMax: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setconstantMax: function (value) {
        },
        getconstantMin: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setconstantMin: function (value) {
        },
        getcurve: function () {
            return null;
        },
        setcurve: function (value) {
        },
        getcurveMax: function () {
            return null;
        },
        setcurveMax: function (value) {
        },
        getcurveMin: function () {
            return null;
        },
        setcurveMin: function (value) {
        },
        getcurveScalar: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setcurveScalar: function (value) {
        },
        getmode: function () {
            return 0;
        },
        setmode: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.MinMaxGradient", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.MinMaxGradient(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getcolorMax: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolorMax: function (value) {
        },
        getcolorMin: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolorMin: function (value) {
        },
        getgradient: function () {
            return null;
        },
        setgradient: function (value) {
        },
        getgradientMax: function () {
            return null;
        },
        setgradientMax: function (value) {
        },
        getgradientMin: function () {
            return null;
        },
        setgradientMin: function (value) {
        },
        getmode: function () {
            return 0;
        },
        setmode: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.Particle", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.Particle(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getangularVelocity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangularVelocity: function (value) {
        },
        getangularVelocity3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setangularVelocity3D: function (value) {
        },
        getaxisOfRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setaxisOfRotation: function (value) {
        },
        getlifetime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setlifetime: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setposition: function (value) {
        },
        getrandomSeed: function () {
            return Bridge.getDefaultValue(System.UInt32);
        },
        setrandomSeed: function (value) {
        },
        getrotation: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrotation: function (value) {
        },
        getrotation3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setrotation3D: function (value) {
        },
        getstartColor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color32);
        },
        setstartColor: function (value) {
        },
        getstartLifetime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartLifetime: function (value) {
        },
        getstartSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartSize: function (value) {
        },
        getstartSize3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setstartSize3D: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setvelocity: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.RotationBySpeedModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.RotationBySpeedModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getrange: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setrange: function (value) {
        },
        getseparateAxes: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setseparateAxes: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setx: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        sety: function (value) {
        },
        getz: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setz: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.RotationOverLifetimeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.RotationOverLifetimeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getseparateAxes: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setseparateAxes: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setx: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        sety: function (value) {
        },
        getz: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setz: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.ShapeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.ShapeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getangle: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangle: function (value) {
        },
        getarc: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setarc: function (value) {
        },
        getbox: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setbox: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setlength: function (value) {
        },
        getmesh: function () {
            return null;
        },
        setmesh: function (value) {
        },
        getmeshMaterialIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmeshMaterialIndex: function (value) {
        },
        getmeshRenderer: function () {
            return null;
        },
        setmeshRenderer: function (value) {
        },
        getmeshShapeType: function () {
            return 0;
        },
        setmeshShapeType: function (value) {
        },
        getnormalOffset: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setnormalOffset: function (value) {
        },
        getradius: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradius: function (value) {
        },
        getrandomDirection: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setrandomDirection: function (value) {
        },
        getshapeType: function () {
            return 0;
        },
        setshapeType: function (value) {
        },
        getskinnedMeshRenderer: function () {
            return null;
        },
        setskinnedMeshRenderer: function (value) {
        },
        getuseMeshColors: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseMeshColors: function (value) {
        },
        getuseMeshMaterialIndex: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseMeshMaterialIndex: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.SizeBySpeedModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.SizeBySpeedModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getrange: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setrange: function (value) {
        },
        getseparateAxes: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setseparateAxes: function (value) {
        },
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setsize: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setx: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        sety: function (value) {
        },
        getz: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setz: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.SizeOverLifetimeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.SizeOverLifetimeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getseparateAxes: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setseparateAxes: function (value) {
        },
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setsize: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setx: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        sety: function (value) {
        },
        getz: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setz: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.SubEmittersModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.SubEmittersModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getbirth0: function () {
            return null;
        },
        setbirth0: function (value) {
        },
        getbirth1: function () {
            return null;
        },
        setbirth1: function (value) {
        },
        getcollision0: function () {
            return null;
        },
        setcollision0: function (value) {
        },
        getcollision1: function () {
            return null;
        },
        setcollision1: function (value) {
        },
        getdeath0: function () {
            return null;
        },
        setdeath0: function (value) {
        },
        getdeath1: function () {
            return null;
        },
        setdeath1: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.TextureSheetAnimationModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.TextureSheetAnimationModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getanimation: function () {
            return 0;
        },
        setanimation: function (value) {
        },
        getcycleCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setcycleCount: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getframeOverTime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setframeOverTime: function (value) {
        },
        getnumTilesX: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setnumTilesX: function (value) {
        },
        getnumTilesY: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setnumTilesY: function (value) {
        },
        getrowIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setrowIndex: function (value) {
        },
        getstartFrame: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setstartFrame: function (value) {
        },
        getuseRandomRow: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseRandomRow: function (value) {
        },
        getuvChannelMask: function () {
            return 0;
        },
        setuvChannelMask: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.TriggerModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.TriggerModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getenter: function () {
            return 0;
        },
        setenter: function (value) {
        },
        getexit: function () {
            return 0;
        },
        setexit: function (value) {
        },
        getinside: function () {
            return 0;
        },
        setinside: function (value) {
        },
        getmaxColliderCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getoutside: function () {
            return 0;
        },
        setoutside: function (value) {
        },
        getradiusScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradiusScale: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystem.VelocityOverLifetimeModule", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.ParticleSystem.VelocityOverLifetimeModule(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getspace: function () {
            return 0;
        },
        setspace: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setx: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        sety: function (value) {
        },
        getz: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.MinMaxCurve);
        },
        setz: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.ParticleSystemAnimationType", {
        $kind: "enum",
        statics: {
            WholeSheet: 0,
            SingleRow: 1
        }
    });

    Bridge.define("UnityEngine.ParticleSystemCollisionMode", {
        $kind: "enum",
        statics: {
            Collision3D: 0,
            Collision2D: 1
        }
    });

    Bridge.define("UnityEngine.ParticleSystemCollisionQuality", {
        $kind: "enum",
        statics: {
            High: 0,
            Medium: 1,
            Low: 2
        }
    });

    Bridge.define("UnityEngine.ParticleSystemCollisionType", {
        $kind: "enum",
        statics: {
            Planes: 0,
            World: 1
        }
    });

    Bridge.define("UnityEngine.ParticleSystemCurveMode", {
        $kind: "enum",
        statics: {
            Constant: 0,
            Curve: 1,
            TwoCurves: 2,
            TwoConstants: 3
        }
    });

    Bridge.define("UnityEngine.ParticleSystemEmissionType", {
        $kind: "enum",
        statics: {
            Time: 0,
            Distance: 1
        }
    });

    Bridge.define("UnityEngine.ParticleSystemGradientMode", {
        $kind: "enum",
        statics: {
            Color: 0,
            Gradient: 1,
            TwoColors: 2,
            TwoGradients: 3
        }
    });

    Bridge.define("UnityEngine.ParticleSystemInheritVelocityMode", {
        $kind: "enum",
        statics: {
            Initial: 0,
            Current: 1
        }
    });

    Bridge.define("UnityEngine.ParticleSystemMeshShapeType", {
        $kind: "enum",
        statics: {
            Vertex: 0,
            Edge: 1,
            Triangle: 2
        }
    });

    Bridge.define("UnityEngine.ParticleSystemOverlapAction", {
        $kind: "enum",
        statics: {
            Ignore: 0,
            Kill: 1,
            Callback: 2
        }
    });

    Bridge.define("UnityEngine.ParticleSystemRenderMode", {
        $kind: "enum",
        statics: {
            Billboard: 0,
            Stretch: 1,
            HorizontalBillboard: 2,
            VerticalBillboard: 3,
            Mesh: 4
        }
    });

    Bridge.define("UnityEngine.ParticleSystemRenderSpace", {
        $kind: "enum",
        statics: {
            View: 0,
            World: 1,
            Local: 2
        }
    });

    Bridge.define("UnityEngine.ParticleSystemScalingMode", {
        $kind: "enum",
        statics: {
            Hierarchy: 0,
            Local: 1,
            Shape: 2
        }
    });

    Bridge.define("UnityEngine.ParticleSystemShapeType", {
        $kind: "enum",
        statics: {
            Sphere: 0,
            SphereShell: 1,
            Hemisphere: 2,
            HemisphereShell: 3,
            Cone: 4,
            Box: 5,
            Mesh: 6,
            ConeShell: 7,
            ConeVolume: 8,
            ConeVolumeShell: 9,
            Circle: 10,
            CircleEdge: 11,
            SingleSidedEdge: 12,
            MeshRenderer: 13,
            SkinnedMeshRenderer: 14
        }
    });

    Bridge.define("UnityEngine.ParticleSystemSimulationSpace", {
        $kind: "enum",
        statics: {
            Local: 0,
            World: 1
        }
    });

    Bridge.define("UnityEngine.ParticleSystemSortMode", {
        $kind: "enum",
        statics: {
            None: 0,
            Distance: 1,
            OldestInFront: 2,
            YoungestInFront: 3
        }
    });

    Bridge.define("UnityEngine.PhysicMaterialCombine", {
        $kind: "enum",
        statics: {
            Average: 0,
            Minimum: 2,
            Multiply: 1,
            Maximum: 3
        }
    });

    Bridge.define("UnityEngine.Physics", {
        statics: {
            IgnoreRaycastLayer: 0,
            DefaultRaycastLayers: 0,
            AllLayers: 0,
            getbounceThreshold: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setbounceThreshold: function (value) {
            },
            getdefaultContactOffset: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setdefaultContactOffset: function (value) {
            },
            getdefaultSolverIterations: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setdefaultSolverIterations: function (value) {
            },
            getdefaultSolverVelocityIterations: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setdefaultSolverVelocityIterations: function (value) {
            },
            getgravity: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            setgravity: function (value) {
            },
            getqueriesHitTriggers: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setqueriesHitTriggers: function (value) {
            },
            getsleepThreshold: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setsleepThreshold: function (value) {
            }
        }
    });

    Bridge.define("UnityEngine.Physics2D", {
        statics: {
            IgnoreRaycastLayer: 0,
            DefaultRaycastLayers: 0,
            AllLayers: 0,
            getalwaysShowColliders: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setalwaysShowColliders: function (value) {
            },
            getangularSleepTolerance: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setangularSleepTolerance: function (value) {
            },
            getbaumgarteScale: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setbaumgarteScale: function (value) {
            },
            getbaumgarteTOIScale: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setbaumgarteTOIScale: function (value) {
            },
            getchangeStopsCallbacks: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setchangeStopsCallbacks: function (value) {
            },
            getcolliderAsleepColor: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            setcolliderAsleepColor: function (value) {
            },
            getcolliderAwakeColor: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            setcolliderAwakeColor: function (value) {
            },
            getcolliderContactColor: function () {
                return Bridge.getDefaultValue(UnityEngine.Color);
            },
            setcolliderContactColor: function (value) {
            },
            getcontactArrowScale: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setcontactArrowScale: function (value) {
            },
            getgravity: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            setgravity: function (value) {
            },
            getlinearSleepTolerance: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setlinearSleepTolerance: function (value) {
            },
            getmaxAngularCorrection: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setmaxAngularCorrection: function (value) {
            },
            getmaxLinearCorrection: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setmaxLinearCorrection: function (value) {
            },
            getmaxRotationSpeed: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setmaxRotationSpeed: function (value) {
            },
            getmaxTranslationSpeed: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setmaxTranslationSpeed: function (value) {
            },
            getminPenetrationForPenalty: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setminPenetrationForPenalty: function (value) {
            },
            getpositionIterations: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setpositionIterations: function (value) {
            },
            getqueriesHitTriggers: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setqueriesHitTriggers: function (value) {
            },
            getqueriesStartInColliders: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setqueriesStartInColliders: function (value) {
            },
            getshowColliderContacts: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setshowColliderContacts: function (value) {
            },
            getshowColliderSleep: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setshowColliderSleep: function (value) {
            },
            gettimeToSleep: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            settimeToSleep: function (value) {
            },
            getvelocityIterations: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setvelocityIterations: function (value) {
            },
            getvelocityThreshold: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setvelocityThreshold: function (value) {
            }
        }
    });

    Bridge.define("UnityEngine.PlayMode", {
        $kind: "enum",
        statics: {
            StopSameLayer: 0,
            StopAll: 4
        }
    });

    Bridge.define("UnityEngine.PrimitiveType", {
        $kind: "enum",
        statics: {
            Sphere: 0,
            Capsule: 1,
            Cylinder: 2,
            Cube: 3,
            Plane: 4,
            Quad: 5
        }
    });

    Bridge.define("UnityEngine.Quaternion", {
        $kind: "struct",
        statics: {
            kEpsilon: 0,
            getidentity: function () {
                return Bridge.getDefaultValue(UnityEngine.Quaternion);
            },
            getDefaultValue: function () { return new UnityEngine.Quaternion(); }
        },
        x: 0,
        y: 0,
        z: 0,
        w: 0,
        ctor: function () {
            this.$initialize();
        },
        geteulerAngles: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        seteulerAngles: function (value) {
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem: function (index, value) {
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Quaternion();
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            s.w = this.w;
            return s;
        }
    });

    Bridge.define("UnityEngine.QueryTriggerInteraction", {
        $kind: "enum",
        statics: {
            UseGlobal: 0,
            Ignore: 1,
            Collide: 2
        }
    });

    Bridge.define("UnityEngine.QueueMode", {
        $kind: "enum",
        statics: {
            CompleteOthers: 0,
            PlayNow: 2
        }
    });

    Bridge.define("UnityEngine.Ray", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Ray(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getdirection: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setdirection: function (value) {
        },
        getorigin: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setorigin: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.RaycastHit", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.RaycastHit(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getbarycentricCoordinate: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setbarycentricCoordinate: function (value) {
        },
        getcollider: function () {
            return null;
        },
        getdistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdistance: function (value) {
        },
        getlightmapCoord: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getnormal: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setnormal: function (value) {
        },
        getpoint: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setpoint: function (value) {
        },
        getrigidbody: function () {
            return null;
        },
        gettextureCoord: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        gettextureCoord2: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        gettransform: function () {
            return null;
        },
        gettriangleIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.RaycastHit2D", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.RaycastHit2D(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcentroid: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setcentroid: function (value) {
        },
        getcollider: function () {
            return null;
        },
        getdistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdistance: function (value) {
        },
        getfraction: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfraction: function (value) {
        },
        getnormal: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setnormal: function (value) {
        },
        getpoint: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setpoint: function (value) {
        },
        getrigidbody: function () {
            return null;
        },
        gettransform: function () {
            return null;
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Rect", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Rect(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getcenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setcenter: function (value) {
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setheight: function (value) {
        },
        getmax: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setmax: function (value) {
        },
        getmin: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setmin: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setposition: function (value) {
        },
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setsize: function (value) {
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setwidth: function (value) {
        },
        getx: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setx: function (value) {
        },
        getxMax: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setxMax: function (value) {
        },
        getxMin: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setxMin: function (value) {
        },
        gety: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        sety: function (value) {
        },
        getyMax: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setyMax: function (value) {
        },
        getyMin: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setyMin: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.RectOffset", {
        getbottom: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setbottom: function (value) {
        },
        gethorizontal: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getleft: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setleft: function (value) {
        },
        getright: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setright: function (value) {
        },
        gettop: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settop: function (value) {
        },
        getvertical: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.RectTransform.Axis", {
        $kind: "enum",
        statics: {
            Horizontal: 0,
            Vertical: 1
        }
    });

    Bridge.define("UnityEngine.RectTransform.Edge", {
        $kind: "enum",
        statics: {
            Left: 0,
            Right: 1,
            Top: 2,
            Bottom: 3
        }
    });

    Bridge.define("UnityEngine.RenderBuffer", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.RenderBuffer(); }
        },
        ctor: function () {
            this.$initialize();
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Rendering.BuiltinRenderTextureType", {
        $kind: "enum",
        statics: {
            None: 0,
            CurrentActive: 1,
            CameraTarget: 2,
            Depth: 3,
            DepthNormals: 4,
            PrepassNormalsSpec: 7,
            PrepassLight: 8,
            PrepassLightSpec: 9,
            GBuffer0: 10,
            GBuffer1: 11,
            GBuffer2: 12,
            GBuffer3: 13,
            Reflections: 14
        }
    });

    Bridge.define("UnityEngine.Rendering.CameraEvent", {
        $kind: "enum",
        statics: {
            BeforeDepthTexture: 0,
            AfterDepthTexture: 1,
            BeforeDepthNormalsTexture: 2,
            AfterDepthNormalsTexture: 3,
            BeforeGBuffer: 4,
            AfterGBuffer: 5,
            BeforeLighting: 6,
            AfterLighting: 7,
            BeforeFinalPass: 8,
            AfterFinalPass: 9,
            BeforeForwardOpaque: 10,
            AfterForwardOpaque: 11,
            BeforeImageEffectsOpaque: 12,
            AfterImageEffectsOpaque: 13,
            BeforeSkybox: 14,
            AfterSkybox: 15,
            BeforeForwardAlpha: 16,
            AfterForwardAlpha: 17,
            BeforeImageEffects: 18,
            AfterImageEffects: 19,
            AfterEverything: 20,
            BeforeReflections: 21,
            AfterReflections: 22
        }
    });

    Bridge.define("UnityEngine.Rendering.CommandBuffer", {
        inherits: [System.IDisposable],
        getname: function () {
            return null;
        },
        setname: function (value) {
        },
        getsizeInBytes: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.Rendering.LightEvent", {
        $kind: "enum",
        statics: {
            BeforeShadowMap: 0,
            AfterShadowMap: 1,
            BeforeScreenspaceMask: 2,
            AfterScreenspaceMask: 3
        }
    });

    Bridge.define("UnityEngine.Rendering.LightProbeUsage", {
        $kind: "enum",
        statics: {
            Off: 0,
            BlendProbes: 1,
            UseProxyVolume: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.OpaqueSortMode", {
        $kind: "enum",
        statics: {
            Default: 0,
            FrontToBack: 1,
            NoDistanceSort: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeBlendInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Rendering.ReflectionProbeBlendInfo(); }
        },
        probe: null,
        weight: 0,
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var h = Bridge.addHash([10173640010, this.probe, this.weight]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Rendering.ReflectionProbeBlendInfo)) {
                return false;
            }
            return Bridge.equals(this.probe, o.probe) && Bridge.equals(this.weight, o.weight);
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Rendering.ReflectionProbeBlendInfo();
            s.probe = this.probe;
            s.weight = this.weight;
            return s;
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeClearFlags", {
        $kind: "enum",
        statics: {
            Skybox: 1,
            SolidColor: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeMode", {
        $kind: "enum",
        statics: {
            Baked: 0,
            Realtime: 1,
            Custom: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeRefreshMode", {
        $kind: "enum",
        statics: {
            OnAwake: 0,
            EveryFrame: 1,
            ViaScripting: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeTimeSlicingMode", {
        $kind: "enum",
        statics: {
            AllFacesAtOnce: 0,
            IndividualFaces: 1,
            NoTimeSlicing: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeType", {
        $kind: "enum",
        statics: {
            Cube: 0,
            Card: 1
        }
    });

    Bridge.define("UnityEngine.Rendering.ReflectionProbeUsage", {
        $kind: "enum",
        statics: {
            Off: 0,
            BlendProbes: 1,
            BlendProbesAndSkybox: 2,
            Simple: 3
        }
    });

    Bridge.define("UnityEngine.Rendering.RenderTargetIdentifier", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Rendering.RenderTargetIdentifier(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Rendering.ShaderHardwareTier", {
        $kind: "enum",
        statics: {
            Tier1: 0,
            Tier2: 1,
            Tier3: 2
        }
    });

    Bridge.define("UnityEngine.Rendering.ShadowCastingMode", {
        $kind: "enum",
        statics: {
            Off: 0,
            On: 1,
            TwoSided: 2,
            ShadowsOnly: 3
        }
    });

    Bridge.define("UnityEngine.Rendering.ShadowSamplingMode", {
        $kind: "enum",
        statics: {
            CompareDepths: 0,
            RawDepth: 1
        }
    });

    Bridge.define("UnityEngine.Rendering.TextureDimension", {
        $kind: "enum",
        statics: {
            Unknown: -1,
            None: 0,
            Tex2D: 2,
            Tex3D: 3,
            Cube: 4,
            Tex2DArray: 5,
            Any: 6
        }
    });

    Bridge.define("UnityEngine.RenderingPath", {
        $kind: "enum",
        statics: {
            UsePlayerSettings: -1,
            VertexLit: 0,
            Forward: 1,
            DeferredLighting: 2,
            DeferredShading: 3
        }
    });

    Bridge.define("UnityEngine.RenderTextureFormat", {
        $kind: "enum",
        statics: {
            ARGB32: 0,
            Depth: 1,
            ARGBHalf: 2,
            Shadowmap: 3,
            RGB565: 4,
            ARGB4444: 5,
            ARGB1555: 6,
            Default: 7,
            ARGB2101010: 8,
            DefaultHDR: 9,
            ARGBFloat: 11,
            RGFloat: 12,
            RGHalf: 13,
            RFloat: 14,
            RHalf: 15,
            R8: 16,
            ARGBInt: 17,
            RGInt: 18,
            RInt: 19,
            BGRA32: 20,
            RGB111110Float: 22
        }
    });

    Bridge.define("UnityEngine.RenderTextureReadWrite", {
        $kind: "enum",
        statics: {
            Default: 0,
            Linear: 1,
            sRGB: 2
        }
    });

    Bridge.define("UnityEngine.Resolution", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Resolution(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setheight: function (value) {
        },
        getrefreshRate: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setrefreshRate: function (value) {
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setwidth: function (value) {
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.Resources", {
        statics: {

        }
    });

    Bridge.define("UnityEngine.RigidbodyConstraints", {
        $kind: "enum",
        statics: {
            None: 0,
            FreezePositionX: 2,
            FreezePositionY: 4,
            FreezePositionZ: 8,
            FreezeRotationX: 16,
            FreezeRotationY: 32,
            FreezeRotationZ: 64,
            FreezePosition: 14,
            FreezeRotation: 112,
            FreezeAll: 126
        }
    });

    Bridge.define("UnityEngine.RigidbodyConstraints2D", {
        $kind: "enum",
        statics: {
            None: 0,
            FreezePositionX: 1,
            FreezePositionY: 2,
            FreezeRotation: 4,
            FreezePosition: 3,
            FreezeAll: 7
        }
    });

    Bridge.define("UnityEngine.RigidbodyInterpolation", {
        $kind: "enum",
        statics: {
            None: 0,
            Interpolate: 1,
            Extrapolate: 2
        }
    });

    Bridge.define("UnityEngine.RigidbodyInterpolation2D", {
        $kind: "enum",
        statics: {
            None: 0,
            Interpolate: 1,
            Extrapolate: 2
        }
    });

    Bridge.define("UnityEngine.RigidbodySleepMode2D", {
        $kind: "enum",
        statics: {
            NeverSleep: 0,
            StartAwake: 1,
            StartAsleep: 2
        }
    });

    Bridge.define("UnityEngine.RuntimePlatform", {
        $kind: "enum",
        statics: {
            OSXEditor: 0,
            OSXPlayer: 1,
            WindowsPlayer: 2,
            OSXWebPlayer: 3,
            OSXDashboardPlayer: 4,
            WindowsWebPlayer: 5,
            WindowsEditor: 7,
            IPhonePlayer: 8,
            XBOX360: 10,
            PS3: 9,
            Android: 11,
            NaCl: 12,
            FlashPlayer: 15,
            LinuxPlayer: 13,
            WebGLPlayer: 17,
            MetroPlayerX86: 18,
            WSAPlayerX86: 18,
            MetroPlayerX64: 19,
            WSAPlayerX64: 19,
            MetroPlayerARM: 20,
            WSAPlayerARM: 20,
            WP8Player: 21,
            BB10Player: 22,
            BlackBerryPlayer: 22,
            TizenPlayer: 23,
            PSP2: 24,
            PS4: 25,
            PSM: 26,
            XboxOne: 27,
            SamsungTVPlayer: 28,
            WiiU: 30,
            tvOS: 31
        }
    });

    Bridge.define("UnityEngine.SceneManagement.LoadSceneMode", {
        $kind: "enum",
        statics: {
            Single: 0,
            Additive: 1
        }
    });

    Bridge.define("UnityEngine.SceneManagement.Scene", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.SceneManagement.Scene(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getbuildIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getisDirty: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisLoaded: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getname: function () {
            return null;
        },
        getpath: function () {
            return null;
        },
        getrootCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.SceneManagement.SceneManager", {
        statics: {
            getsceneCount: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getsceneCountInBuildSettings: function () {
                return Bridge.getDefaultValue(System.Int32);
            }
        }
    });

    Bridge.define("UnityEngine.Screen", {
        statics: {
            getautorotateToLandscapeLeft: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setautorotateToLandscapeLeft: function (value) {
            },
            getautorotateToLandscapeRight: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setautorotateToLandscapeRight: function (value) {
            },
            getautorotateToPortrait: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setautorotateToPortrait: function (value) {
            },
            getautorotateToPortraitUpsideDown: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setautorotateToPortraitUpsideDown: function (value) {
            },
            getcurrentResolution: function () {
                return Bridge.getDefaultValue(UnityEngine.Resolution);
            },
            getdpi: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            getfullScreen: function () {
                return Bridge.getDefaultValue(Boolean);
            },
            setfullScreen: function (value) {
            },
            getheight: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getorientation: function () {
                return 0;
            },
            setorientation: function (value) {
            },
            getresolutions: function () {
                return null;
            },
            getsleepTimeout: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setsleepTimeout: function (value) {
            },
            getwidth: function () {
                return Bridge.getDefaultValue(System.Int32);
            }
        }
    });

    Bridge.define("UnityEngine.ScreenOrientation", {
        $kind: "enum",
        statics: {
            Unknown: 0,
            Portrait: 1,
            PortraitUpsideDown: 2,
            LandscapeLeft: 3,
            LandscapeRight: 4,
            AutoRotation: 5,
            Landscape: 3
        }
    });

    Bridge.define("UnityEngine.SendMessageOptions", {
        $kind: "enum",
        statics: {
            RequireReceiver: 0,
            DontRequireReceiver: 1
        }
    });

    Bridge.define("UnityEngine.SkinQuality", {
        $kind: "enum",
        statics: {
            Auto: 0,
            Bone1: 1,
            Bone2: 2,
            Bone4: 4
        }
    });

    Bridge.define("UnityEngine.Space", {
        $kind: "enum",
        statics: {
            World: 0,
            Self: 1
        }
    });

    Bridge.define("UnityEngine.SpriteMeshType", {
        $kind: "enum",
        statics: {
            FullRect: 0,
            Tight: 1
        }
    });

    Bridge.define("UnityEngine.SpritePackingMode", {
        $kind: "enum",
        statics: {
            Tight: 0,
            Rectangle: 1
        }
    });

    Bridge.define("UnityEngine.SpritePackingRotation", {
        $kind: "enum",
        statics: {
            None: 0,
            Any: 15
        }
    });

    Bridge.define("UnityEngine.StackTraceLogType", {
        $kind: "enum",
        statics: {
            None: 0,
            ScriptOnly: 1,
            Full: 2
        }
    });

    Bridge.define("UnityEngine.StereoTargetEyeMask", {
        $kind: "enum",
        statics: {
            None: 0,
            Left: 1,
            Right: 2,
            Both: 3
        }
    });

    Bridge.define("UnityEngine.SystemLanguage", {
        $kind: "enum",
        statics: {
            Afrikaans: 0,
            Arabic: 1,
            Basque: 2,
            Belarusian: 3,
            Bulgarian: 4,
            Catalan: 5,
            Chinese: 6,
            Czech: 7,
            Danish: 8,
            Dutch: 9,
            English: 10,
            Estonian: 11,
            Faroese: 12,
            Finnish: 13,
            French: 14,
            German: 15,
            Greek: 16,
            Hebrew: 17,
            Hugarian: 18,
            Icelandic: 19,
            Indonesian: 20,
            Italian: 21,
            Japanese: 22,
            Korean: 23,
            Latvian: 24,
            Lithuanian: 25,
            Norwegian: 26,
            Polish: 27,
            Portuguese: 28,
            Romanian: 29,
            Russian: 30,
            SerboCroatian: 31,
            Slovak: 32,
            Slovenian: 33,
            Spanish: 34,
            Swedish: 35,
            Thai: 36,
            Turkish: 37,
            Ukrainian: 38,
            Vietnamese: 39,
            ChineseSimplified: 40,
            ChineseTraditional: 41,
            Unknown: 42,
            Hungarian: 18
        }
    });

    Bridge.define("UnityEngine.TextAlignment", {
        $kind: "enum",
        statics: {
            Left: 0,
            Center: 1,
            Right: 2
        }
    });

    Bridge.define("UnityEngine.TextAnchor", {
        $kind: "enum",
        statics: {
            UpperLeft: 0,
            UpperCenter: 1,
            UpperRight: 2,
            MiddleLeft: 3,
            MiddleCenter: 4,
            MiddleRight: 5,
            LowerLeft: 6,
            LowerCenter: 7,
            LowerRight: 8
        }
    });

    Bridge.define("UnityEngine.TextureFormat", {
        $kind: "enum",
        statics: {
            Alpha8: 1,
            ARGB4444: 2,
            RGB24: 3,
            RGBA32: 4,
            ARGB32: 5,
            RGB565: 7,
            R16: 9,
            DXT1: 10,
            DXT5: 12,
            RGBA4444: 13,
            BGRA32: 14,
            RHalf: 15,
            RGHalf: 16,
            RGBAHalf: 17,
            RFloat: 18,
            RGFloat: 19,
            RGBAFloat: 20,
            YUY2: 21,
            DXT1Crunched: 28,
            DXT5Crunched: 29,
            PVRTC_RGB2: 30,
            PVRTC_RGBA2: 31,
            PVRTC_RGB4: 32,
            PVRTC_RGBA4: 33,
            ETC_RGB4: 34,
            ATC_RGB4: 35,
            ATC_RGBA8: 36,
            EAC_R: 41,
            EAC_R_SIGNED: 42,
            EAC_RG: 43,
            EAC_RG_SIGNED: 44,
            ETC2_RGB: 45,
            ETC2_RGBA1: 46,
            ETC2_RGBA8: 47,
            ASTC_RGB_4x4: 48,
            ASTC_RGB_5x5: 49,
            ASTC_RGB_6x6: 50,
            ASTC_RGB_8x8: 51,
            ASTC_RGB_10x10: 52,
            ASTC_RGB_12x12: 53,
            ASTC_RGBA_4x4: 54,
            ASTC_RGBA_5x5: 55,
            ASTC_RGBA_6x6: 56,
            ASTC_RGBA_8x8: 57,
            ASTC_RGBA_10x10: 58,
            ASTC_RGBA_12x12: 59,
            ETC_RGB4_3DS: 60,
            ETC_RGBA8_3DS: 61,
            PVRTC_2BPP_RGB: -127,
            PVRTC_2BPP_RGBA: -127,
            PVRTC_4BPP_RGB: -127,
            PVRTC_4BPP_RGBA: -127
        }
    });

    Bridge.define("UnityEngine.TextureWrapMode", {
        $kind: "enum",
        statics: {
            Repeat: 0,
            Clamp: 1
        }
    });

    Bridge.define("UnityEngine.ThreadPriority", {
        $kind: "enum",
        statics: {
            Low: 0,
            BelowNormal: 1,
            Normal: 2,
            High: 4
        }
    });

    Bridge.define("UnityEngine.Time", {
        statics: {
            getcaptureFramerate: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setcaptureFramerate: function (value) {
            },
            getdeltaTime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            getfixedDeltaTime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setfixedDeltaTime: function (value) {
            },
            getfixedTime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            getframeCount: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getmaximumDeltaTime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            setmaximumDeltaTime: function (value) {
            },
            getrealtimeSinceStartup: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            getrenderedFrameCount: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getsmoothDeltaTime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            gettime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            gettimeScale: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            settimeScale: function (value) {
            },
            gettimeSinceLevelLoad: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            getunscaledDeltaTime: function () {
                return Bridge.getDefaultValue(System.Single);
            },
            getunscaledTime: function () {
                return Bridge.getDefaultValue(System.Single);
            }
        }
    });

    Bridge.define("UnityEngine.Touch", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Touch(); }
        },
        ctor: function () {
            this.$initialize();
        },
        getaltitudeAngle: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getazimuthAngle: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getdeltaPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getdeltaTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getfingerId: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getmaximumPossiblePressure: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getphase: function () {
            return 0;
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getpressure: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getradius: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getradiusVariance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getrawPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        gettapCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        gettype: function () {
            return 0;
        },
        $clone: function (to) { return this; }
    });

    Bridge.define("UnityEngine.TouchPhase", {
        $kind: "enum",
        statics: {
            Began: 0,
            Moved: 1,
            Stationary: 2,
            Ended: 3,
            Canceled: 4
        }
    });

    Bridge.define("UnityEngine.TouchType", {
        $kind: "enum",
        statics: {
            Direct: 0,
            Indirect: 1,
            Stylus: 2
        }
    });

    Bridge.define("UnityEngine.TransparencySortMode", {
        $kind: "enum",
        statics: {
            Default: 0,
            Perspective: 1,
            Orthographic: 2
        }
    });

    Bridge.define("UnityEngine.UserAuthorization", {
        $kind: "enum",
        statics: {
            WebCam: 1,
            Microphone: 2
        }
    });

    Bridge.define("UnityEngine.UVChannelFlags", {
        $kind: "enum",
        statics: {
            UV0: 1,
            UV1: 2,
            UV2: 4,
            UV3: 8
        }
    });

    Bridge.define("UnityEngine.Vector2", {
        $kind: "struct",
        statics: {
            kEpsilon: 0,
            getdown: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getleft: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getone: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getright: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getup: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getzero: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector2);
            },
            getDefaultValue: function () { return new UnityEngine.Vector2(); }
        },
        x: 0,
        y: 0,
        ctor: function () {
            this.$initialize();
        },
        getmagnitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getnormalized: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getsqrMagnitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem: function (index, value) {
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Vector2();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    Bridge.define("UnityEngine.Vector3", {
        $kind: "struct",
        statics: {
            kEpsilon: 0,
            getback: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getdown: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getforward: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getleft: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getone: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getright: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getup: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getzero: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector3);
            },
            getDefaultValue: function () { return new UnityEngine.Vector3(); }
        },
        x: 0,
        y: 0,
        z: 0,
        ctor: function () {
            this.$initialize();
        },
        getmagnitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getnormalized: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getsqrMagnitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem: function (index, value) {
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Vector3();
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            return s;
        }
    });

    Bridge.define("UnityEngine.Vector4", {
        $kind: "struct",
        statics: {
            kEpsilon: 0,
            getone: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector4);
            },
            getzero: function () {
                return Bridge.getDefaultValue(UnityEngine.Vector4);
            },
            getDefaultValue: function () { return new UnityEngine.Vector4(); }
        },
        x: 0,
        y: 0,
        z: 0,
        w: 0,
        ctor: function () {
            this.$initialize();
        },
        getmagnitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getnormalized: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        getsqrMagnitude: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getItem: function (index) {
            return Bridge.getDefaultValue(System.Single);
        },
        setItem: function (index, value) {
        },
        $clone: function (to) {
            var s = to || new UnityEngine.Vector4();
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            s.w = this.w;
            return s;
        }
    });

    Bridge.define("UnityEngine.WrapMode", {
        $kind: "enum",
        statics: {
            Once: 1,
            Loop: 2,
            PingPong: 4,
            Default: 0,
            ClampForever: 8,
            Clamp: 1
        }
    });

    Bridge.define("UnityEngine.WWW", {
        inherits: [System.IDisposable],
        statics: {

        },
        getassetBundle: function () {
            return null;
        },
        getaudioClip: function () {
            return null;
        },
        getbytes: function () {
            return null;
        },
        getbytesDownloaded: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        geterror: function () {
            return null;
        },
        getisDone: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmovie: function () {
            return null;
        },
        getprogress: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getresponseHeaders: function () {
            return null;
        },
        getsize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        gettext: function () {
            return null;
        },
        gettexture: function () {
            return null;
        },
        gettextureNonReadable: function () {
            return null;
        },
        getthreadPriority: function () {
            return 0;
        },
        setthreadPriority: function (value) {
        },
        getuploadProgress: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        geturl: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.WWWForm", {
        getdata: function () {
            return null;
        },
        getheaders: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.Component", {
        inherits: [UnityEngine.Object],
        getgameObject: function () {
            return null;
        },
        gettag: function () {
            return null;
        },
        settag: function (value) {
        },
        gettransform: function () {
            return null;
        }
    });

    Bridge.define("System.Collections.Hashtable", {
        inherits: [System.ICloneable,System.Runtime.Serialization.ISerializable,System.Collections.IDictionary,System.Runtime.Serialization.IDeserializationCallback],
        statics: {

        },
        config: {
            properties: {
                System$Collections$ICollection$Count: 0,
                System$Collections$ICollection$IsReadOnly: false,
                System$Collections$IDictionary$IsFixedSize: false,
                System$Collections$IDictionary$IsReadOnly: false,
                System$Collections$IDictionary$Keys: null,
                System$Collections$IDictionary$Values: null
            },
            alias: [
            "getItem", "System$Collections$IDictionary$getItem",
            "setItem", "System$Collections$IDictionary$setItem"
            ]
        },
        getCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getIsFixedSize: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsReadOnly: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getIsSynchronized: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getKeys: function () {
            return null;
        },
        getSyncRoot: function () {
            return null;
        },
        getValues: function () {
            return null;
        },
        getItem: function (key) {
            return null;
        },
        setItem: function (key, value) {
        }
    });

    Bridge.define("UnityEngine.Motion", {
        inherits: [UnityEngine.Object]
    });

    Bridge.define("UnityEngine.AnimationState", {
        inherits: [UnityEngine.TrackedReference],
        getblendMode: function () {
            return 0;
        },
        setblendMode: function (value) {
        },
        getclip: function () {
            return null;
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getlayer: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setlayer: function (value) {
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getname: function () {
            return null;
        },
        setname: function (value) {
        },
        getnormalizedSpeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setnormalizedSpeed: function (value) {
        },
        getnormalizedTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setnormalizedTime: function (value) {
        },
        getspeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setspeed: function (value) {
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settime: function (value) {
        },
        getweight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setweight: function (value) {
        },
        getwrapMode: function () {
            return 0;
        },
        setwrapMode: function (value) {
        }
    });

    Bridge.define("UnityEngine.AssetBundle", {
        inherits: [UnityEngine.Object],
        statics: {

        },
        getisStreamedSceneAssetBundle: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmainAsset: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.AsyncOperation", {
        inherits: [UnityEngine.YieldInstruction],
        getallowSceneActivation: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setallowSceneActivation: function (value) {
        },
        getisDone: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getpriority: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setpriority: function (value) {
        },
        getprogress: function () {
            return Bridge.getDefaultValue(System.Single);
        }
    });

    Bridge.define("UnityEngine.Audio.AudioMixer", {
        inherits: [UnityEngine.Object],
        getoutputAudioMixerGroup: function () {
            return null;
        },
        setoutputAudioMixerGroup: function (value) {
        },
        getupdateMode: function () {
            return 0;
        },
        setupdateMode: function (value) {
        }
    });

    Bridge.define("UnityEngine.Audio.AudioMixerGroup", {
        inherits: [UnityEngine.Object],
        getaudioMixer: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.Audio.AudioMixerSnapshot", {
        inherits: [UnityEngine.Object],
        getaudioMixer: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.AudioClip", {
        inherits: [UnityEngine.Object],
        statics: {

        },
        getchannels: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getfrequency: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getloadInBackground: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getloadState: function () {
            return 0;
        },
        getloadType: function () {
            return 0;
        },
        getpreloadAudioData: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getsamples: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.Avatar", {
        inherits: [UnityEngine.Object],
        getisHuman: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisValid: function () {
            return Bridge.getDefaultValue(Boolean);
        }
    });

    Bridge.define("UnityEngine.Coroutine", {
        inherits: [UnityEngine.YieldInstruction]
    });

    Bridge.define("UnityEngine.Texture", {
        inherits: [UnityEngine.Object],
        statics: {
            getanisotropicFiltering: function () {
                return 0;
            },
            setanisotropicFiltering: function (value) {
            },
            getmasterTextureLimit: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setmasterTextureLimit: function (value) {
            }
        },
        getanisoLevel: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setanisoLevel: function (value) {
        },
        getdimension: function () {
            return 0;
        },
        setdimension: function (value) {
        },
        getfilterMode: function () {
            return 0;
        },
        setfilterMode: function (value) {
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setheight: function (value) {
        },
        getmipMapBias: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmipMapBias: function (value) {
        },
        gettexelSize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setwidth: function (value) {
        },
        getwrapMode: function () {
            return 0;
        },
        setwrapMode: function (value) {
        }
    });

    Bridge.define("UnityEngine.Flare", {
        inherits: [UnityEngine.Object]
    });

    Bridge.define("UnityEngine.Font", {
        inherits: [UnityEngine.Object],
        statics: {

        },
        getascent: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getcharacterInfo: function () {
            return null;
        },
        setcharacterInfo: function (value) {
        },
        getdynamic: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getfontNames: function () {
            return null;
        },
        setfontNames: function (value) {
        },
        getfontSize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getlineHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        }
    });

    Bridge.define("UnityEngine.GameObject", {
        inherits: [UnityEngine.Object],
        statics: {

        },
        getactiveInHierarchy: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getactiveSelf: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getgameObject: function () {
            return null;
        },
        getisStatic: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisStatic: function (value) {
        },
        getlayer: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setlayer: function (value) {
        },
        getscene: function () {
            return Bridge.getDefaultValue(UnityEngine.SceneManagement.Scene);
        },
        gettag: function () {
            return null;
        },
        settag: function (value) {
        },
        gettransform: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.ILogger", {
        inherits: [UnityEngine.ILogHandler],
        $kind: "interface"
    });

    Bridge.define("UnityEngine.Material", {
        inherits: [UnityEngine.Object],
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getglobalIlluminationFlags: function () {
            return 0;
        },
        setglobalIlluminationFlags: function (value) {
        },
        getmainTexture: function () {
            return null;
        },
        setmainTexture: function (value) {
        },
        getmainTextureOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setmainTextureOffset: function (value) {
        },
        getmainTextureScale: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setmainTextureScale: function (value) {
        },
        getpassCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getrenderQueue: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setrenderQueue: function (value) {
        },
        getshader: function () {
            return null;
        },
        setshader: function (value) {
        },
        getshaderKeywords: function () {
            return null;
        },
        setshaderKeywords: function (value) {
        }
    });

    Bridge.define("UnityEngine.Mesh", {
        inherits: [UnityEngine.Object],
        getbindposes: function () {
            return null;
        },
        setbindposes: function (value) {
        },
        getblendShapeCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getboneWeights: function () {
            return null;
        },
        setboneWeights: function (value) {
        },
        getbounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        setbounds: function (value) {
        },
        getcolors: function () {
            return null;
        },
        setcolors: function (value) {
        },
        getcolors32: function () {
            return null;
        },
        setcolors32: function (value) {
        },
        getisReadable: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getnormals: function () {
            return null;
        },
        setnormals: function (value) {
        },
        getsubMeshCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsubMeshCount: function (value) {
        },
        gettangents: function () {
            return null;
        },
        settangents: function (value) {
        },
        gettriangles: function () {
            return null;
        },
        settriangles: function (value) {
        },
        getuv: function () {
            return null;
        },
        setuv: function (value) {
        },
        getuv2: function () {
            return null;
        },
        setuv2: function (value) {
        },
        getuv3: function () {
            return null;
        },
        setuv3: function (value) {
        },
        getuv4: function () {
            return null;
        },
        setuv4: function (value) {
        },
        getvertexCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getvertices: function () {
            return null;
        },
        setvertices: function (value) {
        }
    });

    Bridge.define("UnityEngine.PhysicMaterial", {
        inherits: [UnityEngine.Object],
        getbounceCombine: function () {
            return 0;
        },
        setbounceCombine: function (value) {
        },
        getbounciness: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setbounciness: function (value) {
        },
        getdynamicFriction: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdynamicFriction: function (value) {
        },
        getfrictionCombine: function () {
            return 0;
        },
        setfrictionCombine: function (value) {
        },
        getstaticFriction: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstaticFriction: function (value) {
        }
    });

    Bridge.define("UnityEngine.PhysicsMaterial2D", {
        inherits: [UnityEngine.Object],
        getbounciness: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setbounciness: function (value) {
        },
        getfriction: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfriction: function (value) {
        }
    });

    Bridge.define("UnityEngine.RuntimeAnimatorController", {
        inherits: [UnityEngine.Object],
        getanimationClips: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.Shader", {
        inherits: [UnityEngine.Object],
        statics: {
            getglobalMaximumLOD: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            setglobalMaximumLOD: function (value) {
            },
            getglobalShaderHardwareTier: function () {
                return 0;
            },
            setglobalShaderHardwareTier: function (value) {
            }
        },
        getisSupported: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmaximumLOD: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmaximumLOD: function (value) {
        },
        getrenderQueue: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.Sprite", {
        inherits: [UnityEngine.Object],
        statics: {

        },
        getassociatedAlphaSplitTexture: function () {
            return null;
        },
        getborder: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        getbounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        getpacked: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getpackingMode: function () {
            return 0;
        },
        getpackingRotation: function () {
            return 0;
        },
        getpivot: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getpixelsPerUnit: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getrect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        gettexture: function () {
            return null;
        },
        gettextureRect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        gettextureRectOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        gettriangles: function () {
            return null;
        },
        getuv: function () {
            return null;
        },
        getvertices: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.TextAsset", {
        inherits: [UnityEngine.Object],
        getbytes: function () {
            return null;
        },
        gettext: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.WaitForSeconds", {
        inherits: [UnityEngine.YieldInstruction]
    });

    Bridge.define("UnityEngine.Behaviour", {
        inherits: [UnityEngine.Component],
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getisActiveAndEnabled: function () {
            return Bridge.getDefaultValue(Boolean);
        }
    });

    Bridge.define("UnityEngine.AnimationClip", {
        inherits: [UnityEngine.Motion],
        getevents: function () {
            return null;
        },
        setevents: function (value) {
        },
        getframeRate: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setframeRate: function (value) {
        },
        gethumanMotion: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlegacy: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setlegacy: function (value) {
        },
        getlength: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getlocalBounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        setlocalBounds: function (value) {
        },
        getwrapMode: function () {
            return 0;
        },
        setwrapMode: function (value) {
        }
    });

    Bridge.define("UnityEngine.AssetBundleCreateRequest", {
        inherits: [UnityEngine.AsyncOperation],
        getassetBundle: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.AssetBundleRequest", {
        inherits: [UnityEngine.AsyncOperation],
        getallAssets: function () {
            return null;
        },
        getasset: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.Collider", {
        inherits: [UnityEngine.Component],
        getattachedRigidbody: function () {
            return null;
        },
        getbounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        getcontactOffset: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setcontactOffset: function (value) {
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getisTrigger: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisTrigger: function (value) {
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        },
        getsharedMaterial: function () {
            return null;
        },
        setsharedMaterial: function (value) {
        }
    });

    Bridge.define("UnityEngine.Cubemap", {
        inherits: [UnityEngine.Texture],
        getformat: function () {
            return 0;
        },
        getmipmapCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.Renderer", {
        inherits: [UnityEngine.Component],
        getbounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        getenabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenabled: function (value) {
        },
        getisPartOfStaticBatch: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisVisible: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlightmapIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setlightmapIndex: function (value) {
        },
        getlightmapScaleOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        setlightmapScaleOffset: function (value) {
        },
        getlightProbeProxyVolumeOverride: function () {
            return null;
        },
        setlightProbeProxyVolumeOverride: function (value) {
        },
        getlightProbeUsage: function () {
            return 0;
        },
        setlightProbeUsage: function (value) {
        },
        getlocalToWorldMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        },
        getmaterials: function () {
            return null;
        },
        setmaterials: function (value) {
        },
        getmotionVectors: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setmotionVectors: function (value) {
        },
        getprobeAnchor: function () {
            return null;
        },
        setprobeAnchor: function (value) {
        },
        getrealtimeLightmapIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setrealtimeLightmapIndex: function (value) {
        },
        getrealtimeLightmapScaleOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        setrealtimeLightmapScaleOffset: function (value) {
        },
        getreceiveShadows: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setreceiveShadows: function (value) {
        },
        getreflectionProbeUsage: function () {
            return 0;
        },
        setreflectionProbeUsage: function (value) {
        },
        getshadowCastingMode: function () {
            return 0;
        },
        setshadowCastingMode: function (value) {
        },
        getsharedMaterial: function () {
            return null;
        },
        setsharedMaterial: function (value) {
        },
        getsharedMaterials: function () {
            return null;
        },
        setsharedMaterials: function (value) {
        },
        getsortingLayerID: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsortingLayerID: function (value) {
        },
        getsortingLayerName: function () {
            return null;
        },
        setsortingLayerName: function (value) {
        },
        getsortingOrder: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsortingOrder: function (value) {
        },
        getworldToLocalMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        }
    });

    Bridge.define("UnityEngine.MovieTexture", {
        inherits: [UnityEngine.Texture],
        getaudioClip: function () {
            return null;
        },
        getduration: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getisPlaying: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisReadyToPlay: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getloop: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setloop: function (value) {
        }
    });

    Bridge.define("UnityEngine.OffMeshLink", {
        inherits: [UnityEngine.Component],
        getactivated: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setactivated: function (value) {
        },
        getarea: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setarea: function (value) {
        },
        getautoUpdatePositions: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setautoUpdatePositions: function (value) {
        },
        getbiDirectional: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setbiDirectional: function (value) {
        },
        getcostOverride: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setcostOverride: function (value) {
        },
        getendTransform: function () {
            return null;
        },
        setendTransform: function (value) {
        },
        getoccupied: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getstartTransform: function () {
            return null;
        },
        setstartTransform: function (value) {
        }
    });

    Bridge.define("UnityEngine.ParticleSystem", {
        inherits: [UnityEngine.Component],
        getcollision: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.CollisionModule);
        },
        getcolorBySpeed: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.ColorBySpeedModule);
        },
        getcolorOverLifetime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.ColorOverLifetimeModule);
        },
        getduration: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getemission: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.EmissionModule);
        },
        getexternalForces: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.ExternalForcesModule);
        },
        getforceOverLifetime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.ForceOverLifetimeModule);
        },
        getgravityModifier: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setgravityModifier: function (value) {
        },
        getinheritVelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.InheritVelocityModule);
        },
        getisPaused: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisPlaying: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisStopped: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlimitVelocityOverLifetime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule);
        },
        getloop: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setloop: function (value) {
        },
        getmaxParticles: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmaxParticles: function (value) {
        },
        getparticleCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getplaybackSpeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setplaybackSpeed: function (value) {
        },
        getplayOnAwake: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setplayOnAwake: function (value) {
        },
        getrandomSeed: function () {
            return Bridge.getDefaultValue(System.UInt32);
        },
        setrandomSeed: function (value) {
        },
        getrotationBySpeed: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.RotationBySpeedModule);
        },
        getrotationOverLifetime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.RotationOverLifetimeModule);
        },
        getscalingMode: function () {
            return 0;
        },
        setscalingMode: function (value) {
        },
        getshape: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.ShapeModule);
        },
        getsimulationSpace: function () {
            return 0;
        },
        setsimulationSpace: function (value) {
        },
        getsizeBySpeed: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.SizeBySpeedModule);
        },
        getsizeOverLifetime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.SizeOverLifetimeModule);
        },
        getstartColor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setstartColor: function (value) {
        },
        getstartDelay: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartDelay: function (value) {
        },
        getstartLifetime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartLifetime: function (value) {
        },
        getstartRotation: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartRotation: function (value) {
        },
        getstartRotation3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setstartRotation3D: function (value) {
        },
        getstartSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartSize: function (value) {
        },
        getstartSpeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstartSpeed: function (value) {
        },
        getsubEmitters: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.SubEmittersModule);
        },
        gettextureSheetAnimation: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.TextureSheetAnimationModule);
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settime: function (value) {
        },
        gettrigger: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.TriggerModule);
        },
        getuseAutoRandomSeed: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseAutoRandomSeed: function (value) {
        },
        getvelocityOverLifetime: function () {
            return Bridge.getDefaultValue(UnityEngine.ParticleSystem.VelocityOverLifetimeModule);
        }
    });

    Bridge.define("UnityEngine.Transform", {
        inherits: [UnityEngine.Component,System.Collections.IEnumerable],
        getchildCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        geteulerAngles: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        seteulerAngles: function (value) {
        },
        getforward: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setforward: function (value) {
        },
        gethasChanged: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        sethasChanged: function (value) {
        },
        gethierarchyCapacity: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        sethierarchyCapacity: function (value) {
        },
        gethierarchyCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getlocalEulerAngles: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setlocalEulerAngles: function (value) {
        },
        getlocalPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setlocalPosition: function (value) {
        },
        getlocalRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        setlocalRotation: function (value) {
        },
        getlocalScale: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setlocalScale: function (value) {
        },
        getlocalToWorldMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        getlossyScale: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getparent: function () {
            return null;
        },
        setparent: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setposition: function (value) {
        },
        getright: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setright: function (value) {
        },
        getroot: function () {
            return null;
        },
        getrotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        setrotation: function (value) {
        },
        getup: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setup: function (value) {
        },
        getworldToLocalMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        }
    });

    Bridge.define("UnityEngine.RenderTexture", {
        inherits: [UnityEngine.Texture],
        statics: {
            getactive: function () {
                return null;
            },
            setactive: function (value) {
            }
        },
        getantiAliasing: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setantiAliasing: function (value) {
        },
        getcolorBuffer: function () {
            return Bridge.getDefaultValue(UnityEngine.RenderBuffer);
        },
        getdepth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setdepth: function (value) {
        },
        getdepthBuffer: function () {
            return Bridge.getDefaultValue(UnityEngine.RenderBuffer);
        },
        getdimension: function () {
            return 0;
        },
        setdimension: function (value) {
        },
        getenableRandomWrite: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setenableRandomWrite: function (value) {
        },
        getformat: function () {
            return 0;
        },
        setformat: function (value) {
        },
        getgenerateMips: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setgenerateMips: function (value) {
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setheight: function (value) {
        },
        getisPowerOfTwo: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisPowerOfTwo: function (value) {
        },
        getsRGB: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getuseMipMap: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseMipMap: function (value) {
        },
        getvolumeDepth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setvolumeDepth: function (value) {
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setwidth: function (value) {
        }
    });

    Bridge.define("UnityEngine.ResourceRequest", {
        inherits: [UnityEngine.AsyncOperation],
        getasset: function () {
            return null;
        }
    });

    Bridge.define("UnityEngine.Rigidbody", {
        inherits: [UnityEngine.Component],
        getangularDrag: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangularDrag: function (value) {
        },
        getangularVelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setangularVelocity: function (value) {
        },
        getcenterOfMass: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setcenterOfMass: function (value) {
        },
        getcollisionDetectionMode: function () {
            return 0;
        },
        setcollisionDetectionMode: function (value) {
        },
        getconstraints: function () {
            return 0;
        },
        setconstraints: function (value) {
        },
        getdetectCollisions: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setdetectCollisions: function (value) {
        },
        getdrag: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdrag: function (value) {
        },
        getfreezeRotation: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setfreezeRotation: function (value) {
        },
        getinertiaTensor: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setinertiaTensor: function (value) {
        },
        getinertiaTensorRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        setinertiaTensorRotation: function (value) {
        },
        getinterpolation: function () {
            return 0;
        },
        setinterpolation: function (value) {
        },
        getisKinematic: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisKinematic: function (value) {
        },
        getmass: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmass: function (value) {
        },
        getmaxAngularVelocity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmaxAngularVelocity: function (value) {
        },
        getmaxDepenetrationVelocity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmaxDepenetrationVelocity: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setposition: function (value) {
        },
        getrotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        setrotation: function (value) {
        },
        getsleepThreshold: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setsleepThreshold: function (value) {
        },
        getsolverIterations: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsolverIterations: function (value) {
        },
        getsolverVelocityIterations: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsolverVelocityIterations: function (value) {
        },
        getuseConeFriction: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseConeFriction: function (value) {
        },
        getuseGravity: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseGravity: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setvelocity: function (value) {
        },
        getworldCenterOfMass: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        }
    });

    Bridge.define("UnityEngine.Rigidbody2D", {
        inherits: [UnityEngine.Component],
        getangularDrag: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangularDrag: function (value) {
        },
        getangularVelocity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangularVelocity: function (value) {
        },
        getcenterOfMass: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setcenterOfMass: function (value) {
        },
        getcollisionDetectionMode: function () {
            return 0;
        },
        setcollisionDetectionMode: function (value) {
        },
        getconstraints: function () {
            return 0;
        },
        setconstraints: function (value) {
        },
        getdrag: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdrag: function (value) {
        },
        getfreezeRotation: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setfreezeRotation: function (value) {
        },
        getgravityScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setgravityScale: function (value) {
        },
        getinertia: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setinertia: function (value) {
        },
        getinterpolation: function () {
            return 0;
        },
        setinterpolation: function (value) {
        },
        getisKinematic: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisKinematic: function (value) {
        },
        getmass: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmass: function (value) {
        },
        getposition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setposition: function (value) {
        },
        getrotation: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrotation: function (value) {
        },
        getsimulated: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setsimulated: function (value) {
        },
        getsleepMode: function () {
            return 0;
        },
        setsleepMode: function (value) {
        },
        getuseAutoMass: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseAutoMass: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setvelocity: function (value) {
        },
        getworldCenterOfMass: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        }
    });

    Bridge.define("UnityEngine.Texture2D", {
        inherits: [UnityEngine.Texture],
        statics: {
            getblackTexture: function () {
                return null;
            },
            getwhiteTexture: function () {
                return null;
            }
        },
        getformat: function () {
            return 0;
        },
        getmipmapCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UnityEngine.MonoBehaviour", {
        inherits: [UnityEngine.Behaviour],
        statics: {

        },
        getuseGUILayout: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseGUILayout: function (value) {
        }
    });

    Bridge.define("UnityEngine.Animation", {
        inherits: [UnityEngine.Behaviour,System.Collections.IEnumerable],
        getanimatePhysics: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setanimatePhysics: function (value) {
        },
        getclip: function () {
            return null;
        },
        setclip: function (value) {
        },
        getcullingType: function () {
            return 0;
        },
        setcullingType: function (value) {
        },
        getisPlaying: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlocalBounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        setlocalBounds: function (value) {
        },
        getplayAutomatically: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setplayAutomatically: function (value) {
        },
        getwrapMode: function () {
            return 0;
        },
        setwrapMode: function (value) {
        },
        getItem: function (name) {
            return null;
        }
    });

    Bridge.define("UnityEngine.Experimental.Director.DirectorPlayer", {
        inherits: [UnityEngine.Behaviour]
    });

    Bridge.define("UnityEngine.AudioSource", {
        inherits: [UnityEngine.Behaviour],
        statics: {

        },
        getbypassEffects: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setbypassEffects: function (value) {
        },
        getbypassListenerEffects: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setbypassListenerEffects: function (value) {
        },
        getbypassReverbZones: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setbypassReverbZones: function (value) {
        },
        getclip: function () {
            return null;
        },
        setclip: function (value) {
        },
        getdopplerLevel: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdopplerLevel: function (value) {
        },
        getignoreListenerPause: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setignoreListenerPause: function (value) {
        },
        getignoreListenerVolume: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setignoreListenerVolume: function (value) {
        },
        getisPlaying: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisVirtual: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getloop: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setloop: function (value) {
        },
        getmaxDistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmaxDistance: function (value) {
        },
        getminDistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setminDistance: function (value) {
        },
        getmute: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setmute: function (value) {
        },
        getoutputAudioMixerGroup: function () {
            return null;
        },
        setoutputAudioMixerGroup: function (value) {
        },
        getpanStereo: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setpanStereo: function (value) {
        },
        getpitch: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setpitch: function (value) {
        },
        getplayOnAwake: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setplayOnAwake: function (value) {
        },
        getpriority: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setpriority: function (value) {
        },
        getreverbZoneMix: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setreverbZoneMix: function (value) {
        },
        getrolloffMode: function () {
            return 0;
        },
        setrolloffMode: function (value) {
        },
        getspatialBlend: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setspatialBlend: function (value) {
        },
        getspatialize: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setspatialize: function (value) {
        },
        getspread: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setspread: function (value) {
        },
        gettime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settime: function (value) {
        },
        gettimeSamples: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settimeSamples: function (value) {
        },
        getvelocityUpdateMode: function () {
            return 0;
        },
        setvelocityUpdateMode: function (value) {
        },
        getvolume: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setvolume: function (value) {
        }
    });

    Bridge.define("UnityEngine.BoxCollider", {
        inherits: [UnityEngine.Collider],
        getcenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setcenter: function (value) {
        },
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setsize: function (value) {
        }
    });

    Bridge.define("UnityEngine.Collider2D", {
        inherits: [UnityEngine.Behaviour],
        getattachedRigidbody: function () {
            return null;
        },
        getbounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        getdensity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdensity: function (value) {
        },
        getisTrigger: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisTrigger: function (value) {
        },
        getoffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setoffset: function (value) {
        },
        getshapeCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getsharedMaterial: function () {
            return null;
        },
        setsharedMaterial: function (value) {
        },
        getusedByEffector: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setusedByEffector: function (value) {
        }
    });

    Bridge.define("UnityEngine.Camera", {
        inherits: [UnityEngine.Behaviour],
        statics: {
            onPreCull: null,
            onPreRender: null,
            onPostRender: null,
            getallCameras: function () {
                return null;
            },
            getallCamerasCount: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getcurrent: function () {
                return null;
            },
            getmain: function () {
                return null;
            }
        },
        getactualRenderingPath: function () {
            return 0;
        },
        getaspect: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setaspect: function (value) {
        },
        getbackgroundColor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setbackgroundColor: function (value) {
        },
        getcameraToWorldMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        getcameraType: function () {
            return 0;
        },
        setcameraType: function (value) {
        },
        getclearFlags: function () {
            return 0;
        },
        setclearFlags: function (value) {
        },
        getclearStencilAfterLightingPass: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setclearStencilAfterLightingPass: function (value) {
        },
        getcommandBufferCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getcullingMask: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setcullingMask: function (value) {
        },
        getcullingMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        setcullingMatrix: function (value) {
        },
        getdepth: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setdepth: function (value) {
        },
        getdepthTextureMode: function () {
            return 0;
        },
        setdepthTextureMode: function (value) {
        },
        geteventMask: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        seteventMask: function (value) {
        },
        getfarClipPlane: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfarClipPlane: function (value) {
        },
        getfieldOfView: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfieldOfView: function (value) {
        },
        gethdr: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        sethdr: function (value) {
        },
        getlayerCullDistances: function () {
            return null;
        },
        setlayerCullDistances: function (value) {
        },
        getlayerCullSpherical: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setlayerCullSpherical: function (value) {
        },
        getnearClipPlane: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setnearClipPlane: function (value) {
        },
        getnonJitteredProjectionMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        setnonJitteredProjectionMatrix: function (value) {
        },
        getopaqueSortMode: function () {
            return 0;
        },
        setopaqueSortMode: function (value) {
        },
        getorthographic: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setorthographic: function (value) {
        },
        getorthographicSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setorthographicSize: function (value) {
        },
        getpixelHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getpixelRect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        setpixelRect: function (value) {
        },
        getpixelWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getprojectionMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        setprojectionMatrix: function (value) {
        },
        getrect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        setrect: function (value) {
        },
        getrenderingPath: function () {
            return 0;
        },
        setrenderingPath: function (value) {
        },
        getstereoConvergence: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstereoConvergence: function (value) {
        },
        getstereoEnabled: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getstereoMirrorMode: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setstereoMirrorMode: function (value) {
        },
        getstereoSeparation: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstereoSeparation: function (value) {
        },
        getstereoTargetEye: function () {
            return 0;
        },
        setstereoTargetEye: function (value) {
        },
        gettargetDisplay: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settargetDisplay: function (value) {
        },
        gettargetTexture: function () {
            return null;
        },
        settargetTexture: function (value) {
        },
        gettransparencySortMode: function () {
            return 0;
        },
        settransparencySortMode: function (value) {
        },
        getuseOcclusionCulling: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseOcclusionCulling: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getworldToCameraMatrix: function () {
            return Bridge.getDefaultValue(UnityEngine.Matrix4x4);
        },
        setworldToCameraMatrix: function (value) {
        }
    });

    Bridge.define("UnityEngine.CapsuleCollider", {
        inherits: [UnityEngine.Collider],
        getcenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setcenter: function (value) {
        },
        getdirection: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setdirection: function (value) {
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setheight: function (value) {
        },
        getradius: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradius: function (value) {
        }
    });

    Bridge.define("UnityEngine.GUIElement", {
        inherits: [UnityEngine.Behaviour]
    });

    Bridge.define("UnityEngine.Light", {
        inherits: [UnityEngine.Behaviour],
        statics: {

        },
        getbakedIndex: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setbakedIndex: function (value) {
        },
        getbounceIntensity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setbounceIntensity: function (value) {
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getcommandBufferCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getcookie: function () {
            return null;
        },
        setcookie: function (value) {
        },
        getcookieSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setcookieSize: function (value) {
        },
        getcullingMask: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setcullingMask: function (value) {
        },
        getflare: function () {
            return null;
        },
        setflare: function (value) {
        },
        getintensity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setintensity: function (value) {
        },
        getisBaked: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getrange: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrange: function (value) {
        },
        getrenderMode: function () {
            return 0;
        },
        setrenderMode: function (value) {
        },
        getshadowBias: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setshadowBias: function (value) {
        },
        getshadowCustomResolution: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setshadowCustomResolution: function (value) {
        },
        getshadowNearPlane: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setshadowNearPlane: function (value) {
        },
        getshadowNormalBias: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setshadowNormalBias: function (value) {
        },
        getshadowResolution: function () {
            return 0;
        },
        setshadowResolution: function (value) {
        },
        getshadows: function () {
            return 0;
        },
        setshadows: function (value) {
        },
        getshadowStrength: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setshadowStrength: function (value) {
        },
        getspotAngle: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setspotAngle: function (value) {
        },
        gettype: function () {
            return 0;
        },
        settype: function (value) {
        }
    });

    Bridge.define("UnityEngine.LineRenderer", {
        inherits: [UnityEngine.Renderer],
        getuseWorldSpace: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setuseWorldSpace: function (value) {
        }
    });

    Bridge.define("UnityEngine.MeshCollider", {
        inherits: [UnityEngine.Collider],
        getconvex: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setconvex: function (value) {
        },
        getsharedMesh: function () {
            return null;
        },
        setsharedMesh: function (value) {
        }
    });

    Bridge.define("UnityEngine.MeshRenderer", {
        inherits: [UnityEngine.Renderer],
        getadditionalVertexStreams: function () {
            return null;
        },
        setadditionalVertexStreams: function (value) {
        }
    });

    Bridge.define("UnityEngine.NavMeshAgent", {
        inherits: [UnityEngine.Behaviour],
        getacceleration: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setacceleration: function (value) {
        },
        getangularSpeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setangularSpeed: function (value) {
        },
        getareaMask: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setareaMask: function (value) {
        },
        getautoBraking: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setautoBraking: function (value) {
        },
        getautoRepath: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setautoRepath: function (value) {
        },
        getautoTraverseOffMeshLink: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setautoTraverseOffMeshLink: function (value) {
        },
        getavoidancePriority: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setavoidancePriority: function (value) {
        },
        getbaseOffset: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setbaseOffset: function (value) {
        },
        getcurrentOffMeshLinkData: function () {
            return Bridge.getDefaultValue(UnityEngine.OffMeshLinkData);
        },
        getdesiredVelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getdestination: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setdestination: function (value) {
        },
        gethasPath: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setheight: function (value) {
        },
        getisOnNavMesh: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisOnOffMeshLink: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisPathStale: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getnextOffMeshLinkData: function () {
            return Bridge.getDefaultValue(UnityEngine.OffMeshLinkData);
        },
        getnextPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setnextPosition: function (value) {
        },
        getobstacleAvoidanceType: function () {
            return 0;
        },
        setobstacleAvoidanceType: function (value) {
        },
        getpath: function () {
            return null;
        },
        setpath: function (value) {
        },
        getpathEndPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getpathPending: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getpathStatus: function () {
            return 0;
        },
        getradius: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradius: function (value) {
        },
        getremainingDistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getspeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setspeed: function (value) {
        },
        getsteeringTarget: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getstoppingDistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setstoppingDistance: function (value) {
        },
        getupdatePosition: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setupdatePosition: function (value) {
        },
        getupdateRotation: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setupdateRotation: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setvelocity: function (value) {
        }
    });

    Bridge.define("UnityEngine.ParticleSystemRenderer", {
        inherits: [UnityEngine.Renderer],
        getalignment: function () {
            return 0;
        },
        setalignment: function (value) {
        },
        getcameraVelocityScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setcameraVelocityScale: function (value) {
        },
        getlengthScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setlengthScale: function (value) {
        },
        getmaxParticleSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setmaxParticleSize: function (value) {
        },
        getmesh: function () {
            return null;
        },
        setmesh: function (value) {
        },
        getmeshCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getminParticleSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setminParticleSize: function (value) {
        },
        getnormalDirection: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setnormalDirection: function (value) {
        },
        getpivot: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setpivot: function (value) {
        },
        getrenderMode: function () {
            return 0;
        },
        setrenderMode: function (value) {
        },
        getsortingFudge: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setsortingFudge: function (value) {
        },
        getsortMode: function () {
            return 0;
        },
        setsortMode: function (value) {
        },
        getvelocityScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setvelocityScale: function (value) {
        }
    });

    Bridge.define("UnityEngine.RectTransform", {
        inherits: [UnityEngine.Transform],
        getanchoredPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setanchoredPosition: function (value) {
        },
        getanchoredPosition3D: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setanchoredPosition3D: function (value) {
        },
        getanchorMax: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setanchorMax: function (value) {
        },
        getanchorMin: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setanchorMin: function (value) {
        },
        getoffsetMax: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setoffsetMax: function (value) {
        },
        getoffsetMin: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setoffsetMin: function (value) {
        },
        getpivot: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setpivot: function (value) {
        },
        getrect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        getsizeDelta: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setsizeDelta: function (value) {
        }
    });

    Bridge.define("UnityEngine.ReflectionProbe", {
        inherits: [UnityEngine.Behaviour],
        statics: {
            getmaxBakedCubemapResolution: function () {
                return Bridge.getDefaultValue(System.Int32);
            },
            getminBakedCubemapResolution: function () {
                return Bridge.getDefaultValue(System.Int32);
            }
        },
        getbackgroundColor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setbackgroundColor: function (value) {
        },
        getbakedTexture: function () {
            return null;
        },
        setbakedTexture: function (value) {
        },
        getblendDistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setblendDistance: function (value) {
        },
        getbounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        getboxProjection: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setboxProjection: function (value) {
        },
        getcenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setcenter: function (value) {
        },
        getclearFlags: function () {
            return 0;
        },
        setclearFlags: function (value) {
        },
        getcullingMask: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setcullingMask: function (value) {
        },
        getcustomBakedTexture: function () {
            return null;
        },
        setcustomBakedTexture: function (value) {
        },
        getfarClipPlane: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfarClipPlane: function (value) {
        },
        gethdr: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        sethdr: function (value) {
        },
        getimportance: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setimportance: function (value) {
        },
        getintensity: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setintensity: function (value) {
        },
        getmode: function () {
            return 0;
        },
        setmode: function (value) {
        },
        getnearClipPlane: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setnearClipPlane: function (value) {
        },
        getrefreshMode: function () {
            return 0;
        },
        setrefreshMode: function (value) {
        },
        getresolution: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setresolution: function (value) {
        },
        getshadowDistance: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setshadowDistance: function (value) {
        },
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setsize: function (value) {
        },
        gettexture: function () {
            return null;
        },
        gettimeSlicingMode: function () {
            return 0;
        },
        settimeSlicingMode: function (value) {
        },
        gettype: function () {
            return 0;
        },
        settype: function (value) {
        }
    });

    Bridge.define("UnityEngine.SkinnedMeshRenderer", {
        inherits: [UnityEngine.Renderer],
        getbones: function () {
            return null;
        },
        setbones: function (value) {
        },
        getlocalBounds: function () {
            return Bridge.getDefaultValue(UnityEngine.Bounds);
        },
        setlocalBounds: function (value) {
        },
        getquality: function () {
            return 0;
        },
        setquality: function (value) {
        },
        getrootBone: function () {
            return null;
        },
        setrootBone: function (value) {
        },
        getsharedMesh: function () {
            return null;
        },
        setsharedMesh: function (value) {
        },
        getskinnedMotionVectors: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setskinnedMotionVectors: function (value) {
        },
        getupdateWhenOffscreen: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setupdateWhenOffscreen: function (value) {
        }
    });

    Bridge.define("UnityEngine.SphereCollider", {
        inherits: [UnityEngine.Collider],
        getcenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setcenter: function (value) {
        },
        getradius: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradius: function (value) {
        }
    });

    Bridge.define("UnityEngine.SpriteRenderer", {
        inherits: [UnityEngine.Renderer],
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getflipX: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setflipX: function (value) {
        },
        getflipY: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setflipY: function (value) {
        },
        getsprite: function () {
            return null;
        },
        setsprite: function (value) {
        }
    });

    Bridge.define("UIAtlas", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {

        },
        getpixelSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setpixelSize: function (value) {
        },
        getpremultipliedAlpha: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getreplacement: function () {
            return null;
        },
        setreplacement: function (value) {
        },
        getspriteList: function () {
            return null;
        },
        setspriteList: function (value) {
        },
        getspriteMaterial: function () {
            return null;
        },
        setspriteMaterial: function (value) {
        },
        gettexture: function () {
            return null;
        }
    });

    Bridge.define("UIRect", {
        inherits: [UnityEngine.MonoBehaviour],
        leftAnchor: null,
        rightAnchor: null,
        bottomAnchor: null,
        topAnchor: null,
        updateAnchors: 0,
        finalAlpha: 0,
        getalpha: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setalpha: function (value) {
        },
        getanchorCamera: function () {
            return null;
        },
        getcachedGameObject: function () {
            return null;
        },
        getcachedTransform: function () {
            return null;
        },
        getcanBeAnchored: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisAnchored: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisAnchoredHorizontally: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisAnchoredVertically: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisFullyAnchored: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlocalCorners: function () {
            return null;
        },
        getparent: function () {
            return null;
        },
        getroot: function () {
            return null;
        },
        getworldCorners: function () {
            return null;
        }
    });

    Bridge.define("UIDrawCall", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            getactiveList: function () {
                return null;
            },
            getinactiveList: function () {
                return null;
            }
        },
        widgetCount: 0,
        depthStart: 0,
        depthEnd: 0,
        manager: null,
        panel: null,
        alwaysOnScreen: false,
        verts: null,
        norms: null,
        tans: null,
        uvs: null,
        cols: null,
        isDirty: false,
        onRender: null,
        getbaseMaterial: function () {
            return null;
        },
        setbaseMaterial: function (value) {
        },
        getcachedTransform: function () {
            return null;
        },
        getdynamicMaterial: function () {
            return null;
        },
        getfinalRenderQueue: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getisActive: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setisActive: function (value) {
        },
        getisClipped: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmainTexture: function () {
            return null;
        },
        setmainTexture: function (value) {
        },
        getrenderQueue: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setrenderQueue: function (value) {
        },
        getshader: function () {
            return null;
        },
        setshader: function (value) {
        },
        getsortingOrder: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsortingOrder: function (value) {
        },
        gettriangles: function () {
            return Bridge.getDefaultValue(System.Int32);
        }
    });

    Bridge.define("UIFont", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {

        },
        getatlas: function () {
            return null;
        },
        setatlas: function (value) {
        },
        getbmFont: function () {
            return null;
        },
        setbmFont: function (value) {
        },
        getdefaultSize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setdefaultSize: function (value) {
        },
        getdynamicFont: function () {
            return null;
        },
        setdynamicFont: function (value) {
        },
        getdynamicFontStyle: function () {
            return 0;
        },
        setdynamicFontStyle: function (value) {
        },
        gethasSymbols: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisDynamic: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisValid: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        },
        getpackedFontShader: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getpremultipliedAlphaShader: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getreplacement: function () {
            return null;
        },
        setreplacement: function (value) {
        },
        getsprite: function () {
            return null;
        },
        getspriteName: function () {
            return null;
        },
        setspriteName: function (value) {
        },
        getsymbols: function () {
            return null;
        },
        gettexHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settexHeight: function (value) {
        },
        gettexture: function () {
            return null;
        },
        gettexWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        settexWidth: function (value) {
        },
        getuvRect: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        setuvRect: function (value) {
        }
    });

    Bridge.define("UIWidgetContainer", {
        inherits: [UnityEngine.MonoBehaviour]
    });

    Bridge.define("UIRoot", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            list: null
        },
        scalingStyle: 0,
        manualWidth: 0,
        manualHeight: 0,
        minimumHeight: 0,
        maximumHeight: 0,
        fitWidth: false,
        fitHeight: false,
        adjustByDPI: false,
        shrinkPortraitUI: false,
        getactiveHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getactiveScaling: function () {
            return 0;
        },
        getconstraint: function () {
            return 0;
        },
        getpixelSizeAdjustment: function () {
            return Bridge.getDefaultValue(System.Single);
        }
    });

    Bridge.define("UnityEngine.Animator", {
        inherits: [UnityEngine.Experimental.Director.DirectorPlayer],
        statics: {

        },
        getangularVelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getapplyRootMotion: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setapplyRootMotion: function (value) {
        },
        getavatar: function () {
            return null;
        },
        setavatar: function (value) {
        },
        getbodyPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setbodyPosition: function (value) {
        },
        getbodyRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        setbodyRotation: function (value) {
        },
        getcullingMode: function () {
            return 0;
        },
        setcullingMode: function (value) {
        },
        getdeltaPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getdeltaRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        getfeetPivotActive: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfeetPivotActive: function (value) {
        },
        getfireEvents: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setfireEvents: function (value) {
        },
        getgravityWeight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        gethasRootMotion: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethasTransformHierarchy: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethumanScale: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getisHuman: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisInitialized: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisMatchingTarget: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisOptimizable: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlayerCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getlayersAffectMassCenter: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setlayersAffectMassCenter: function (value) {
        },
        getleftFeetBottomHeight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getlinearVelocityBlending: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setlinearVelocityBlending: function (value) {
        },
        getlogWarnings: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setlogWarnings: function (value) {
        },
        getparameterCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getparameters: function () {
            return null;
        },
        getpivotPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getpivotWeight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getplaybackTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setplaybackTime: function (value) {
        },
        getrecorderMode: function () {
            return 0;
        },
        getrecorderStartTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrecorderStartTime: function (value) {
        },
        getrecorderStopTime: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setrecorderStopTime: function (value) {
        },
        getrightFeetBottomHeight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getrootPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        setrootPosition: function (value) {
        },
        getrootRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        setrootRotation: function (value) {
        },
        getruntimeAnimatorController: function () {
            return null;
        },
        setruntimeAnimatorController: function (value) {
        },
        getspeed: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setspeed: function (value) {
        },
        getstabilizeFeet: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setstabilizeFeet: function (value) {
        },
        gettargetPosition: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        gettargetRotation: function () {
            return Bridge.getDefaultValue(UnityEngine.Quaternion);
        },
        getupdateMode: function () {
            return 0;
        },
        setupdateMode: function (value) {
        },
        getvelocity: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        }
    });

    Bridge.define("UnityEngine.BoxCollider2D", {
        inherits: [UnityEngine.Collider2D],
        getsize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setsize: function (value) {
        }
    });

    Bridge.define("UnityEngine.CircleCollider2D", {
        inherits: [UnityEngine.Collider2D],
        getradius: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setradius: function (value) {
        }
    });

    Bridge.define("UnityEngine.GUIText", {
        inherits: [UnityEngine.GUIElement],
        getalignment: function () {
            return 0;
        },
        setalignment: function (value) {
        },
        getanchor: function () {
            return 0;
        },
        setanchor: function (value) {
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getfont: function () {
            return null;
        },
        setfont: function (value) {
        },
        getfontSize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setfontSize: function (value) {
        },
        getfontStyle: function () {
            return 0;
        },
        setfontStyle: function (value) {
        },
        getlineSpacing: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setlineSpacing: function (value) {
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        },
        getpixelOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setpixelOffset: function (value) {
        },
        getrichText: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setrichText: function (value) {
        },
        gettabSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        settabSize: function (value) {
        },
        gettext: function () {
            return null;
        },
        settext: function (value) {
        }
    });

    Bridge.define("UnityEngine.GUITexture", {
        inherits: [UnityEngine.GUIElement],
        getborder: function () {
            return null;
        },
        setborder: function (value) {
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getpixelInset: function () {
            return Bridge.getDefaultValue(UnityEngine.Rect);
        },
        setpixelInset: function (value) {
        },
        gettexture: function () {
            return null;
        },
        settexture: function (value) {
        }
    });

    Bridge.define("UnityEngine.PolygonCollider2D", {
        inherits: [UnityEngine.Collider2D],
        getpathCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setpathCount: function (value) {
        },
        getpoints: function () {
            return null;
        },
        setpoints: function (value) {
        }
    });

    Bridge.define("UIWidget", {
        inherits: [UIRect],
        statics: {

        },
        onChange: null,
        onPostFill: null,
        mOnRender: null,
        autoResizeBoxCollider: false,
        hideIfOffScreen: false,
        keepAspectRatio: 0,
        aspectRatio: 0,
        hitCheck: null,
        panel: null,
        geometry: null,
        fillGeometry: false,
        drawCall: null,
        getalpha: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setalpha: function (value) {
        },
        getborder: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        setborder: function (value) {
        },
        getcolor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setcolor: function (value) {
        },
        getdepth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setdepth: function (value) {
        },
        getdrawingDimensions: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        getdrawRegion: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        setdrawRegion: function (value) {
        },
        gethasBoxCollider: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethasVertices: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setheight: function (value) {
        },
        getisVisible: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlocalCenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getlocalCorners: function () {
            return null;
        },
        getlocalSize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getmainTexture: function () {
            return null;
        },
        setmainTexture: function (value) {
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        },
        getminHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getminWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getonRender: function () {
            return null;
        },
        setonRender: function (value) {
        },
        getpivot: function () {
            return 0;
        },
        setpivot: function (value) {
        },
        getpivotOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getrawPivot: function () {
            return 0;
        },
        setrawPivot: function (value) {
        },
        getraycastDepth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getshader: function () {
            return null;
        },
        setshader: function (value) {
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setwidth: function (value) {
        },
        getworldCenter: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getworldCorners: function () {
            return null;
        }
    });

    Bridge.define("UIPanel", {
        inherits: [UIRect],
        statics: {
            list: null,
            getnextUnusedDepth: function () {
                return Bridge.getDefaultValue(System.Int32);
            }
        },
        onGeometryUpdated: null,
        showInPanelTool: false,
        generateNormals: false,
        widgetsAreStatic: false,
        cullWhileDragging: false,
        alwaysOnScreen: false,
        anchorOffset: false,
        softBorderPadding: false,
        renderQueue: 0,
        startingRenderQueue: 0,
        widgets: null,
        drawCalls: null,
        onClipMove: null,
        config: {
            init: function () {
                this.worldToLocal = new UnityEngine.Matrix4x4();
                this.drawCallClipRange = new UnityEngine.Vector4();
            }
        },
        getalpha: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setalpha: function (value) {
        },
        getbaseClipRegion: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        setbaseClipRegion: function (value) {
        },
        getcanBeAnchored: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getclipCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getclipOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setclipOffset: function (value) {
        },
        getclipping: function () {
            return 0;
        },
        setclipping: function (value) {
        },
        getclipSoftness: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        setclipSoftness: function (value) {
        },
        getdepth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setdepth: function (value) {
        },
        getdrawCallOffset: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector3);
        },
        getfinalClipRegion: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        gethalfPixelOffset: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethasClipping: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gethasCumulativeClipping: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getheight: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getlocalCorners: function () {
            return null;
        },
        getparentPanel: function () {
            return null;
        },
        getsortingOrder: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setsortingOrder: function (value) {
        },
        getusedForUI: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getwidth: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getworldCorners: function () {
            return null;
        }
    });

    Bridge.define("UIProgressBar", {
        inherits: [UIWidgetContainer],
        statics: {
            current: null
        },
        onDragFinished: null,
        thumb: null,
        numberOfSteps: 0,
        onChange: null,
        getalpha: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setalpha: function (value) {
        },
        getbackgroundWidget: function () {
            return null;
        },
        setbackgroundWidget: function (value) {
        },
        getcachedCamera: function () {
            return null;
        },
        getcachedTransform: function () {
            return null;
        },
        getfillDirection: function () {
            return 0;
        },
        setfillDirection: function (value) {
        },
        getforegroundWidget: function () {
            return null;
        },
        setforegroundWidget: function (value) {
        },
        getvalue: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setvalue: function (value) {
        }
    });

    Bridge.define("UIBasicSprite", {
        inherits: [UIWidget],
        centerType: 0,
        leftType: 0,
        rightType: 0,
        bottomType: 0,
        topType: 0,
        getfillAmount: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        setfillAmount: function (value) {
        },
        getfillDirection: function () {
            return 0;
        },
        setfillDirection: function (value) {
        },
        getflip: function () {
            return 0;
        },
        setflip: function (value) {
        },
        gethasBorder: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getinvert: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setinvert: function (value) {
        },
        getminHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getminWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getpixelSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getpremultipliedAlpha: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        gettype: function () {
            return 0;
        },
        settype: function (value) {
        }
    });

    Bridge.define("UILabel", {
        inherits: [UIWidget],
        keepCrispWhenShrunk: 0,
        getalignment: function () {
            return 0;
        },
        setalignment: function (value) {
        },
        getambigiousFont: function () {
            return null;
        },
        setambigiousFont: function (value) {
        },
        getapplyGradient: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setapplyGradient: function (value) {
        },
        getbitmapFont: function () {
            return null;
        },
        setbitmapFont: function (value) {
        },
        getdefaultFontSize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getdrawingDimensions: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        geteffectColor: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        seteffectColor: function (value) {
        },
        geteffectDistance: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        seteffectDistance: function (value) {
        },
        geteffectStyle: function () {
            return 0;
        },
        seteffectStyle: function (value) {
        },
        getfontSize: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setfontSize: function (value) {
        },
        getfontStyle: function () {
            return 0;
        },
        setfontStyle: function (value) {
        },
        getgradientBottom: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setgradientBottom: function (value) {
        },
        getgradientTop: function () {
            return Bridge.getDefaultValue(UnityEngine.Color);
        },
        setgradientTop: function (value) {
        },
        getisAnchoredHorizontally: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getisAnchoredVertically: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getlocalCorners: function () {
            return null;
        },
        getlocalSize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getmaterial: function () {
            return null;
        },
        setmaterial: function (value) {
        },
        getmaxLineCount: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setmaxLineCount: function (value) {
        },
        getmultiLine: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setmultiLine: function (value) {
        },
        getoverflowMethod: function () {
            return 0;
        },
        setoverflowMethod: function (value) {
        },
        getprintedSize: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector2);
        },
        getprocessedText: function () {
            return null;
        },
        getspacingX: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setspacingX: function (value) {
        },
        getspacingY: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        setspacingY: function (value) {
        },
        getsupportEncoding: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        setsupportEncoding: function (value) {
        },
        getsymbolStyle: function () {
            return 0;
        },
        setsymbolStyle: function (value) {
        },
        gettext: function () {
            return null;
        },
        settext: function (value) {
        },
        gettrueTypeFont: function () {
            return null;
        },
        settrueTypeFont: function (value) {
        },
        getworldCorners: function () {
            return null;
        }
    });

    Bridge.define("UISlider", {
        inherits: [UIProgressBar]
    });

    Bridge.define("UISprite", {
        inherits: [UIBasicSprite],
        getatlas: function () {
            return null;
        },
        setatlas: function (value) {
        },
        getborder: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        getdrawingDimensions: function () {
            return Bridge.getDefaultValue(UnityEngine.Vector4);
        },
        getisValid: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getmaterial: function () {
            return null;
        },
        getminHeight: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getminWidth: function () {
            return Bridge.getDefaultValue(System.Int32);
        },
        getpixelSize: function () {
            return Bridge.getDefaultValue(System.Single);
        },
        getpremultipliedAlpha: function () {
            return Bridge.getDefaultValue(Boolean);
        },
        getspriteName: function () {
            return null;
        },
        setspriteName: function (value) {
        }
    });
});
