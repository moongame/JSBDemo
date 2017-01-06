
(function ($hc) {
    "use strict";
    if ($hc < 1) { return; }
     
    Bridge.define("UnityEngine.LayerMask", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.LayerMask(); },
            GetMask: function (a0/* String[] */) { return CS.Call(4, 0, 0, true, a0); },
            LayerToName: function (a0/* Int32 */) { return CS.Call(4, 0, 1, true, a0); },
            NameToLayer: function (a0/* String */) { return CS.Call(4, 0, 2, true, a0); },
            op_Implicit: function (a0/* LayerMask */) { return CS.Call(4, 0, 3, true, a0); },
            op_Implicit$1: function (a0/* Int32 */) { return CS.Call(4, 0, 4, true, a0); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.LayerMask)) {
                return false;
            }
            return true;
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.LayerMask();
            return s;
        },
        ctor: function () {
            CS.Call(5, 0, 0, true, this);
        },
        getvalue: function () { return CS.Call(2, 0, 0, false, this); },
        setvalue: function (v) { return CS.Call(3, 0, 0, false, this, v); },
    });
    if ($hc < 2) { return; }
     
    Bridge.define("UnityEngine.Physics2D", {
        statics: {
            $fields: {
                IgnoreRaycastLayer: {
                    get: function () { return CS.Call(0, 1, 0, true); },
                    set: function (v) { return CS.Call(1, 1, 0, true, v); }
                },
                DefaultRaycastLayers: {
                    get: function () { return CS.Call(0, 1, 1, true); },
                    set: function (v) { return CS.Call(1, 1, 1, true, v); }
                },
                AllLayers: {
                    get: function () { return CS.Call(0, 1, 2, true); },
                    set: function (v) { return CS.Call(1, 1, 2, true, v); }
                },
            },
            getalwaysShowColliders: function () { return CS.Call(2, 1, 0, true); },
            setalwaysShowColliders: function (v) { return CS.Call(3, 1, 0, true, v); },
            getangularSleepTolerance: function () { return CS.Call(2, 1, 1, true); },
            setangularSleepTolerance: function (v) { return CS.Call(3, 1, 1, true, v); },
            getbaumgarteScale: function () { return CS.Call(2, 1, 2, true); },
            setbaumgarteScale: function (v) { return CS.Call(3, 1, 2, true, v); },
            getbaumgarteTOIScale: function () { return CS.Call(2, 1, 3, true); },
            setbaumgarteTOIScale: function (v) { return CS.Call(3, 1, 3, true, v); },
            getchangeStopsCallbacks: function () { return CS.Call(2, 1, 4, true); },
            setchangeStopsCallbacks: function (v) { return CS.Call(3, 1, 4, true, v); },
            getcolliderAsleepColor: function () { return CS.Call(2, 1, 5, true); },
            setcolliderAsleepColor: function (v) { return CS.Call(3, 1, 5, true, v); },
            getcolliderAwakeColor: function () { return CS.Call(2, 1, 6, true); },
            setcolliderAwakeColor: function (v) { return CS.Call(3, 1, 6, true, v); },
            getcolliderContactColor: function () { return CS.Call(2, 1, 7, true); },
            setcolliderContactColor: function (v) { return CS.Call(3, 1, 7, true, v); },
            getcontactArrowScale: function () { return CS.Call(2, 1, 8, true); },
            setcontactArrowScale: function (v) { return CS.Call(3, 1, 8, true, v); },
            getgravity: function () { return CS.Call(2, 1, 9, true); },
            setgravity: function (v) { return CS.Call(3, 1, 9, true, v); },
            getlinearSleepTolerance: function () { return CS.Call(2, 1, 10, true); },
            setlinearSleepTolerance: function (v) { return CS.Call(3, 1, 10, true, v); },
            getmaxAngularCorrection: function () { return CS.Call(2, 1, 11, true); },
            setmaxAngularCorrection: function (v) { return CS.Call(3, 1, 11, true, v); },
            getmaxLinearCorrection: function () { return CS.Call(2, 1, 12, true); },
            setmaxLinearCorrection: function (v) { return CS.Call(3, 1, 12, true, v); },
            getmaxRotationSpeed: function () { return CS.Call(2, 1, 13, true); },
            setmaxRotationSpeed: function (v) { return CS.Call(3, 1, 13, true, v); },
            getmaxTranslationSpeed: function () { return CS.Call(2, 1, 14, true); },
            setmaxTranslationSpeed: function (v) { return CS.Call(3, 1, 14, true, v); },
            getminPenetrationForPenalty: function () { return CS.Call(2, 1, 15, true); },
            setminPenetrationForPenalty: function (v) { return CS.Call(3, 1, 15, true, v); },
            getpositionIterations: function () { return CS.Call(2, 1, 16, true); },
            setpositionIterations: function (v) { return CS.Call(3, 1, 16, true, v); },
            getqueriesHitTriggers: function () { return CS.Call(2, 1, 17, true); },
            setqueriesHitTriggers: function (v) { return CS.Call(3, 1, 17, true, v); },
            getqueriesStartInColliders: function () { return CS.Call(2, 1, 18, true); },
            setqueriesStartInColliders: function (v) { return CS.Call(3, 1, 18, true, v); },
            getshowColliderContacts: function () { return CS.Call(2, 1, 19, true); },
            setshowColliderContacts: function (v) { return CS.Call(3, 1, 19, true, v); },
            getshowColliderSleep: function () { return CS.Call(2, 1, 20, true); },
            setshowColliderSleep: function (v) { return CS.Call(3, 1, 20, true, v); },
            gettimeToSleep: function () { return CS.Call(2, 1, 21, true); },
            settimeToSleep: function (v) { return CS.Call(3, 1, 21, true, v); },
            getvelocityIterations: function () { return CS.Call(2, 1, 22, true); },
            setvelocityIterations: function (v) { return CS.Call(3, 1, 22, true, v); },
            getvelocityThreshold: function () { return CS.Call(2, 1, 23, true); },
            setvelocityThreshold: function (v) { return CS.Call(3, 1, 23, true, v); },
            BoxCast: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */) { return CS.Call(4, 1, 0, true, a0, a1, a2, a3); },
            BoxCast$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */) { return CS.Call(4, 1, 1, true, a0, a1, a2, a3, a4); },
            BoxCast$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 1, 2, true, a0, a1, a2, a3, a4, a5); },
            BoxCast$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */, a5/* Int32 */, a6/* Single */) { return CS.Call(4, 1, 3, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCast$4: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */, a5/* Int32 */, a6/* Single */, a7/* Single */) { return CS.Call(4, 1, 4, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            BoxCastAll: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */) { return CS.Call(4, 1, 5, true, a0, a1, a2, a3); },
            BoxCastAll$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */) { return CS.Call(4, 1, 6, true, a0, a1, a2, a3, a4); },
            BoxCastAll$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 1, 7, true, a0, a1, a2, a3, a4, a5); },
            BoxCastAll$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */, a5/* Int32 */, a6/* Single */) { return CS.Call(4, 1, 8, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCastAll$4: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* Single */, a5/* Int32 */, a6/* Single */, a7/* Single */) { return CS.Call(4, 1, 9, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            BoxCastNonAlloc: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* RaycastHit2D[] */) { return CS.Call(4, 1, 10, true, a0, a1, a2, a3, a4); },
            BoxCastNonAlloc$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* RaycastHit2D[] */, a5/* Single */) { return CS.Call(4, 1, 11, true, a0, a1, a2, a3, a4, a5); },
            BoxCastNonAlloc$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* RaycastHit2D[] */, a5/* Single */, a6/* Int32 */) { return CS.Call(4, 1, 12, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCastNonAlloc$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* RaycastHit2D[] */, a5/* Single */, a6/* Int32 */, a7/* Single */) { return CS.Call(4, 1, 13, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            BoxCastNonAlloc$4: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Vector2 */, a4/* RaycastHit2D[] */, a5/* Single */, a6/* Int32 */, a7/* Single */, a8/* Single */) { return CS.Call(4, 1, 14, true, a0, a1, a2, a3, a4, a5, a6, a7, a8); },
            CircleCast: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */) { return CS.Call(4, 1, 15, true, a0, a1, a2); },
            CircleCast$1: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */) { return CS.Call(4, 1, 16, true, a0, a1, a2, a3); },
            CircleCast$2: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 1, 17, true, a0, a1, a2, a3, a4); },
            CircleCast$3: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */, a4/* Int32 */, a5/* Single */) { return CS.Call(4, 1, 18, true, a0, a1, a2, a3, a4, a5); },
            CircleCast$4: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */, a4/* Int32 */, a5/* Single */, a6/* Single */) { return CS.Call(4, 1, 19, true, a0, a1, a2, a3, a4, a5, a6); },
            CircleCastAll: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */) { return CS.Call(4, 1, 20, true, a0, a1, a2); },
            CircleCastAll$1: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */) { return CS.Call(4, 1, 21, true, a0, a1, a2, a3); },
            CircleCastAll$2: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 1, 22, true, a0, a1, a2, a3, a4); },
            CircleCastAll$3: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */, a4/* Int32 */, a5/* Single */) { return CS.Call(4, 1, 23, true, a0, a1, a2, a3, a4, a5); },
            CircleCastAll$4: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* Single */, a4/* Int32 */, a5/* Single */, a6/* Single */) { return CS.Call(4, 1, 24, true, a0, a1, a2, a3, a4, a5, a6); },
            CircleCastNonAlloc: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* RaycastHit2D[] */) { return CS.Call(4, 1, 25, true, a0, a1, a2, a3); },
            CircleCastNonAlloc$1: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* RaycastHit2D[] */, a4/* Single */) { return CS.Call(4, 1, 26, true, a0, a1, a2, a3, a4); },
            CircleCastNonAlloc$2: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* RaycastHit2D[] */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 1, 27, true, a0, a1, a2, a3, a4, a5); },
            CircleCastNonAlloc$3: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* RaycastHit2D[] */, a4/* Single */, a5/* Int32 */, a6/* Single */) { return CS.Call(4, 1, 28, true, a0, a1, a2, a3, a4, a5, a6); },
            CircleCastNonAlloc$4: function (a0/* Vector2 */, a1/* Single */, a2/* Vector2 */, a3/* RaycastHit2D[] */, a4/* Single */, a5/* Int32 */, a6/* Single */, a7/* Single */) { return CS.Call(4, 1, 29, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            GetIgnoreCollision: function (a0/* Collider2D */, a1/* Collider2D */) { return CS.Call(4, 1, 30, true, a0, a1); },
            GetIgnoreLayerCollision: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 1, 31, true, a0, a1); },
            GetLayerCollisionMask: function (a0/* Int32 */) { return CS.Call(4, 1, 32, true, a0); },
            GetRayIntersection: function (a0/* Ray */) { return CS.Call(4, 1, 33, true, a0); },
            GetRayIntersection$1: function (a0/* Ray */, a1/* Single */) { return CS.Call(4, 1, 34, true, a0, a1); },
            GetRayIntersection$2: function (a0/* Ray */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 1, 35, true, a0, a1, a2); },
            GetRayIntersectionAll: function (a0/* Ray */) { return CS.Call(4, 1, 36, true, a0); },
            GetRayIntersectionAll$1: function (a0/* Ray */, a1/* Single */) { return CS.Call(4, 1, 37, true, a0, a1); },
            GetRayIntersectionAll$2: function (a0/* Ray */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 1, 38, true, a0, a1, a2); },
            GetRayIntersectionNonAlloc: function (a0/* Ray */, a1/* RaycastHit2D[] */) { return CS.Call(4, 1, 39, true, a0, a1); },
            GetRayIntersectionNonAlloc$1: function (a0/* Ray */, a1/* RaycastHit2D[] */, a2/* Single */) { return CS.Call(4, 1, 40, true, a0, a1, a2); },
            GetRayIntersectionNonAlloc$2: function (a0/* Ray */, a1/* RaycastHit2D[] */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 1, 41, true, a0, a1, a2, a3); },
            IgnoreCollision: function (a0/* Collider2D */, a1/* Collider2D */) { return CS.Call(4, 1, 42, true, a0, a1); },
            IgnoreCollision$1: function (a0/* Collider2D */, a1/* Collider2D */, a2/* Boolean */) { return CS.Call(4, 1, 43, true, a0, a1, a2); },
            IgnoreLayerCollision: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 1, 44, true, a0, a1); },
            IgnoreLayerCollision$1: function (a0/* Int32 */, a1/* Int32 */, a2/* Boolean */) { return CS.Call(4, 1, 45, true, a0, a1, a2); },
            IsTouching: function (a0/* Collider2D */, a1/* Collider2D */) { return CS.Call(4, 1, 46, true, a0, a1); },
            IsTouchingLayers: function (a0/* Collider2D */) { return CS.Call(4, 1, 47, true, a0); },
            IsTouchingLayers$1: function (a0/* Collider2D */, a1/* Int32 */) { return CS.Call(4, 1, 48, true, a0, a1); },
            Linecast: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 1, 49, true, a0, a1); },
            Linecast$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */) { return CS.Call(4, 1, 50, true, a0, a1, a2); },
            Linecast$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 51, true, a0, a1, a2, a3); },
            Linecast$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 52, true, a0, a1, a2, a3, a4); },
            LinecastAll: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 1, 53, true, a0, a1); },
            LinecastAll$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */) { return CS.Call(4, 1, 54, true, a0, a1, a2); },
            LinecastAll$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 55, true, a0, a1, a2, a3); },
            LinecastAll$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 56, true, a0, a1, a2, a3, a4); },
            LinecastNonAlloc: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */) { return CS.Call(4, 1, 57, true, a0, a1, a2); },
            LinecastNonAlloc$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Int32 */) { return CS.Call(4, 1, 58, true, a0, a1, a2, a3); },
            LinecastNonAlloc$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 59, true, a0, a1, a2, a3, a4); },
            LinecastNonAlloc$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 60, true, a0, a1, a2, a3, a4, a5); },
            OverlapArea: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 1, 61, true, a0, a1); },
            OverlapArea$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */) { return CS.Call(4, 1, 62, true, a0, a1, a2); },
            OverlapArea$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 63, true, a0, a1, a2, a3); },
            OverlapArea$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 64, true, a0, a1, a2, a3, a4); },
            OverlapAreaAll: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 1, 65, true, a0, a1); },
            OverlapAreaAll$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */) { return CS.Call(4, 1, 66, true, a0, a1, a2); },
            OverlapAreaAll$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 67, true, a0, a1, a2, a3); },
            OverlapAreaAll$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 68, true, a0, a1, a2, a3, a4); },
            OverlapAreaNonAlloc: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Collider2D[] */) { return CS.Call(4, 1, 69, true, a0, a1, a2); },
            OverlapAreaNonAlloc$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Collider2D[] */, a3/* Int32 */) { return CS.Call(4, 1, 70, true, a0, a1, a2, a3); },
            OverlapAreaNonAlloc$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Collider2D[] */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 71, true, a0, a1, a2, a3, a4); },
            OverlapAreaNonAlloc$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Collider2D[] */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 72, true, a0, a1, a2, a3, a4, a5); },
            OverlapBox: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 1, 73, true, a0, a1, a2); },
            OverlapBox$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 1, 74, true, a0, a1, a2, a3); },
            OverlapBox$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 75, true, a0, a1, a2, a3, a4); },
            OverlapBox$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 76, true, a0, a1, a2, a3, a4, a5); },
            OverlapBoxAll: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 1, 77, true, a0, a1, a2); },
            OverlapBoxAll$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 1, 78, true, a0, a1, a2, a3); },
            OverlapBoxAll$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 79, true, a0, a1, a2, a3, a4); },
            OverlapBoxAll$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 80, true, a0, a1, a2, a3, a4, a5); },
            OverlapBoxNonAlloc: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Collider2D[] */) { return CS.Call(4, 1, 81, true, a0, a1, a2, a3); },
            OverlapBoxNonAlloc$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Collider2D[] */, a4/* Int32 */) { return CS.Call(4, 1, 82, true, a0, a1, a2, a3, a4); },
            OverlapBoxNonAlloc$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Collider2D[] */, a4/* Int32 */, a5/* Single */) { return CS.Call(4, 1, 83, true, a0, a1, a2, a3, a4, a5); },
            OverlapBoxNonAlloc$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Collider2D[] */, a4/* Int32 */, a5/* Single */, a6/* Single */) { return CS.Call(4, 1, 84, true, a0, a1, a2, a3, a4, a5, a6); },
            OverlapCircle: function (a0/* Vector2 */, a1/* Single */) { return CS.Call(4, 1, 85, true, a0, a1); },
            OverlapCircle$1: function (a0/* Vector2 */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 1, 86, true, a0, a1, a2); },
            OverlapCircle$2: function (a0/* Vector2 */, a1/* Single */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 87, true, a0, a1, a2, a3); },
            OverlapCircle$3: function (a0/* Vector2 */, a1/* Single */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 88, true, a0, a1, a2, a3, a4); },
            OverlapCircleAll: function (a0/* Vector2 */, a1/* Single */) { return CS.Call(4, 1, 89, true, a0, a1); },
            OverlapCircleAll$1: function (a0/* Vector2 */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 1, 90, true, a0, a1, a2); },
            OverlapCircleAll$2: function (a0/* Vector2 */, a1/* Single */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 91, true, a0, a1, a2, a3); },
            OverlapCircleAll$3: function (a0/* Vector2 */, a1/* Single */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 92, true, a0, a1, a2, a3, a4); },
            OverlapCircleNonAlloc: function (a0/* Vector2 */, a1/* Single */, a2/* Collider2D[] */) { return CS.Call(4, 1, 93, true, a0, a1, a2); },
            OverlapCircleNonAlloc$1: function (a0/* Vector2 */, a1/* Single */, a2/* Collider2D[] */, a3/* Int32 */) { return CS.Call(4, 1, 94, true, a0, a1, a2, a3); },
            OverlapCircleNonAlloc$2: function (a0/* Vector2 */, a1/* Single */, a2/* Collider2D[] */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 95, true, a0, a1, a2, a3, a4); },
            OverlapCircleNonAlloc$3: function (a0/* Vector2 */, a1/* Single */, a2/* Collider2D[] */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 96, true, a0, a1, a2, a3, a4, a5); },
            OverlapPoint: function (a0/* Vector2 */) { return CS.Call(4, 1, 97, true, a0); },
            OverlapPoint$1: function (a0/* Vector2 */, a1/* Int32 */) { return CS.Call(4, 1, 98, true, a0, a1); },
            OverlapPoint$2: function (a0/* Vector2 */, a1/* Int32 */, a2/* Single */) { return CS.Call(4, 1, 99, true, a0, a1, a2); },
            OverlapPoint$3: function (a0/* Vector2 */, a1/* Int32 */, a2/* Single */, a3/* Single */) { return CS.Call(4, 1, 100, true, a0, a1, a2, a3); },
            OverlapPointAll: function (a0/* Vector2 */) { return CS.Call(4, 1, 101, true, a0); },
            OverlapPointAll$1: function (a0/* Vector2 */, a1/* Int32 */) { return CS.Call(4, 1, 102, true, a0, a1); },
            OverlapPointAll$2: function (a0/* Vector2 */, a1/* Int32 */, a2/* Single */) { return CS.Call(4, 1, 103, true, a0, a1, a2); },
            OverlapPointAll$3: function (a0/* Vector2 */, a1/* Int32 */, a2/* Single */, a3/* Single */) { return CS.Call(4, 1, 104, true, a0, a1, a2, a3); },
            OverlapPointNonAlloc: function (a0/* Vector2 */, a1/* Collider2D[] */) { return CS.Call(4, 1, 105, true, a0, a1); },
            OverlapPointNonAlloc$1: function (a0/* Vector2 */, a1/* Collider2D[] */, a2/* Int32 */) { return CS.Call(4, 1, 106, true, a0, a1, a2); },
            OverlapPointNonAlloc$2: function (a0/* Vector2 */, a1/* Collider2D[] */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 1, 107, true, a0, a1, a2, a3); },
            OverlapPointNonAlloc$3: function (a0/* Vector2 */, a1/* Collider2D[] */, a2/* Int32 */, a3/* Single */, a4/* Single */) { return CS.Call(4, 1, 108, true, a0, a1, a2, a3, a4); },
            Raycast: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 1, 109, true, a0, a1); },
            Raycast$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 1, 110, true, a0, a1, a2); },
            Raycast$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 1, 111, true, a0, a1, a2, a3); },
            Raycast$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 112, true, a0, a1, a2, a3, a4); },
            Raycast$4: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 113, true, a0, a1, a2, a3, a4, a5); },
            RaycastAll: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 1, 114, true, a0, a1); },
            RaycastAll$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 1, 115, true, a0, a1, a2); },
            RaycastAll$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 1, 116, true, a0, a1, a2, a3); },
            RaycastAll$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 1, 117, true, a0, a1, a2, a3, a4); },
            RaycastAll$4: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 1, 118, true, a0, a1, a2, a3, a4, a5); },
            RaycastNonAlloc: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */) { return CS.Call(4, 1, 119, true, a0, a1, a2); },
            RaycastNonAlloc$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Single */) { return CS.Call(4, 1, 120, true, a0, a1, a2, a3); },
            RaycastNonAlloc$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 1, 121, true, a0, a1, a2, a3, a4); },
            RaycastNonAlloc$3: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Single */, a4/* Int32 */, a5/* Single */) { return CS.Call(4, 1, 122, true, a0, a1, a2, a3, a4, a5); },
            RaycastNonAlloc$4: function (a0/* Vector2 */, a1/* Vector2 */, a2/* RaycastHit2D[] */, a3/* Single */, a4/* Int32 */, a5/* Single */, a6/* Single */) { return CS.Call(4, 1, 123, true, a0, a1, a2, a3, a4, a5, a6); },
            SetLayerCollisionMask: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 1, 124, true, a0, a1); },
        },
        ctor: function () {
            CS.Call(5, 1, 0, true, this);
        },
    });
    if ($hc < 3) { return; }
     
    Bridge.define("UnityEngine.Collision2D", {
        statics: {
        },
        ctor: function () {
            CS.Call(5, 2, 0, true, this);
        },
        getcollider: function () { return CS.Call(2, 2, 0, false, this); },
        setcollider: function (v) { return CS.Call(3, 2, 0, false, this, v); },
        getcontacts: function () { return CS.Call(2, 2, 1, false, this); },
        setcontacts: function (v) { return CS.Call(3, 2, 1, false, this, v); },
        getenabled: function () { return CS.Call(2, 2, 2, false, this); },
        setenabled: function (v) { return CS.Call(3, 2, 2, false, this, v); },
        getgameObject: function () { return CS.Call(2, 2, 3, false, this); },
        setgameObject: function (v) { return CS.Call(3, 2, 3, false, this, v); },
        getrelativeVelocity: function () { return CS.Call(2, 2, 4, false, this); },
        setrelativeVelocity: function (v) { return CS.Call(3, 2, 4, false, this, v); },
        getrigidbody: function () { return CS.Call(2, 2, 5, false, this); },
        setrigidbody: function (v) { return CS.Call(3, 2, 5, false, this, v); },
        gettransform: function () { return CS.Call(2, 2, 6, false, this); },
        settransform: function (v) { return CS.Call(3, 2, 6, false, this, v); },
    });
    if ($hc < 4) { return; }
     
    Bridge.define("UnityEngine.Resources", {
        statics: {
            FindObjectsOfTypeAll: function (T) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 3, 0, true, $T);
            },
            FindObjectsOfTypeAll$1: function (a0/* Type */) { return CS.Call(4, 3, 1, true, a0); },
            GetBuiltinResource: function (T, a0/* String */) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 3, 2, true, $T, a0);
            },
            GetBuiltinResource$1: function (a0/* Type */, a1/* String */) { return CS.Call(4, 3, 3, true, a0, a1); },
            Load: function (T, a0/* String */) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 3, 4, true, $T, a0);
            },
            Load$1: function (a0/* String */) { return CS.Call(4, 3, 5, true, a0); },
            Load$2: function (a0/* String */, a1/* Type */) { return CS.Call(4, 3, 6, true, a0, a1); },
            LoadAll: function (T, a0/* String */) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 3, 7, true, $T, a0);
            },
            LoadAll$1: function (a0/* String */) { return CS.Call(4, 3, 8, true, a0); },
            LoadAll$2: function (a0/* String */, a1/* Type */) { return CS.Call(4, 3, 9, true, a0, a1); },
            LoadAsync: function (a0/* String */) { return CS.Call(4, 3, 10, true, a0); },
            LoadAsync$1: function (a0/* String */, a1/* Type */) { return CS.Call(4, 3, 11, true, a0, a1); },
            LoadAsync$2: function (T, a0/* String */) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 3, 12, true, $T, a0);
            },
            UnloadAsset: function (a0/* Object */) { return CS.Call(4, 3, 13, true, a0); },
            UnloadUnusedAssets: function () { return CS.Call(4, 3, 14, true); },
        },
        ctor: function () {
            CS.Call(5, 3, 0, true, this);
        },
    });
    if ($hc < 5) { return; }
     
    Bridge.define("UnityEngine.WWW", {
        inherits: [System.IDisposable],
        statics: {
            EscapeURL: function (a0/* String */) { return CS.Call(4, 4, 9, true, a0); },
            EscapeURL$1: function (a0/* String */, a1/* Encoding */) { return CS.Call(4, 4, 10, true, a0, a1); },
            LoadFromCacheOrDownload: function (a0/* String */, a1/* Int32 */) { return CS.Call(4, 4, 11, true, a0, a1); },
            LoadFromCacheOrDownload$1: function (a0/* String */, a1/* Int32 */, a2/* UInt32 */) { return CS.Call(4, 4, 12, true, a0, a1, a2); },
            LoadFromCacheOrDownload$2: function (a0/* String */, a1/* Hash128 */) { return CS.Call(4, 4, 13, true, a0, a1); },
            LoadFromCacheOrDownload$3: function (a0/* String */, a1/* Hash128 */, a2/* UInt32 */) { return CS.Call(4, 4, 14, true, a0, a1, a2); },
            UnEscapeURL: function (a0/* String */) { return CS.Call(4, 4, 15, true, a0); },
            UnEscapeURL$1: function (a0/* String */, a1/* Encoding */) { return CS.Call(4, 4, 16, true, a0, a1); },
        },
        ctor: function (a0) {
            CS.Call(5, 4, 0, true, this, a0);
        },
        $ctor1: function (a0, a1) {
            CS.Call(5, 4, 1, true, this, a0, a1);
        },
        $ctor2: function (a0, a1, a2) {
            CS.Call(5, 4, 2, true, this, a0, a1, a2);
        },
        $ctor3: function (a0, a1) {
            CS.Call(5, 4, 3, true, this, a0, a1);
        },
        getassetBundle: function () { return CS.Call(2, 4, 0, false, this); },
        setassetBundle: function (v) { return CS.Call(3, 4, 0, false, this, v); },
        getaudioClip: function () { return CS.Call(2, 4, 1, false, this); },
        setaudioClip: function (v) { return CS.Call(3, 4, 1, false, this, v); },
        getbytes: function () { return CS.Call(2, 4, 2, false, this); },
        setbytes: function (v) { return CS.Call(3, 4, 2, false, this, v); },
        getbytesDownloaded: function () { return CS.Call(2, 4, 3, false, this); },
        setbytesDownloaded: function (v) { return CS.Call(3, 4, 3, false, this, v); },
        geterror: function () { return CS.Call(2, 4, 4, false, this); },
        seterror: function (v) { return CS.Call(3, 4, 4, false, this, v); },
        getisDone: function () { return CS.Call(2, 4, 5, false, this); },
        setisDone: function (v) { return CS.Call(3, 4, 5, false, this, v); },
        getmovie: function () { return CS.Call(2, 4, 6, false, this); },
        setmovie: function (v) { return CS.Call(3, 4, 6, false, this, v); },
        getprogress: function () { return CS.Call(2, 4, 7, false, this); },
        setprogress: function (v) { return CS.Call(3, 4, 7, false, this, v); },
        getresponseHeaders: function () { return CS.Call(2, 4, 8, false, this); },
        setresponseHeaders: function (v) { return CS.Call(3, 4, 8, false, this, v); },
        getsize: function () { return CS.Call(2, 4, 9, false, this); },
        setsize: function (v) { return CS.Call(3, 4, 9, false, this, v); },
        gettext: function () { return CS.Call(2, 4, 10, false, this); },
        settext: function (v) { return CS.Call(3, 4, 10, false, this, v); },
        gettexture: function () { return CS.Call(2, 4, 11, false, this); },
        settexture: function (v) { return CS.Call(3, 4, 11, false, this, v); },
        gettextureNonReadable: function () { return CS.Call(2, 4, 12, false, this); },
        settextureNonReadable: function (v) { return CS.Call(3, 4, 12, false, this, v); },
        getthreadPriority: function () { return CS.Call(2, 4, 13, false, this); },
        setthreadPriority: function (v) { return CS.Call(3, 4, 13, false, this, v); },
        getuploadProgress: function () { return CS.Call(2, 4, 14, false, this); },
        setuploadProgress: function (v) { return CS.Call(3, 4, 14, false, this, v); },
        geturl: function () { return CS.Call(2, 4, 15, false, this); },
        seturl: function (v) { return CS.Call(3, 4, 15, false, this, v); },
        Dispose: function () { return CS.Call(4, 4, 0, false, this); },
        GetAudioClip: function (a0/* Boolean */) { return CS.Call(4, 4, 1, false, this, a0); },
        GetAudioClip$1: function (a0/* Boolean */, a1/* Boolean */) { return CS.Call(4, 4, 2, false, this, a0, a1); },
        GetAudioClip$2: function (a0/* Boolean */, a1/* Boolean */, a2/* AudioType */) { return CS.Call(4, 4, 3, false, this, a0, a1, a2); },
        GetAudioClipCompressed: function () { return CS.Call(4, 4, 4, false, this); },
        GetAudioClipCompressed$1: function (a0/* Boolean */) { return CS.Call(4, 4, 5, false, this, a0); },
        GetAudioClipCompressed$2: function (a0/* Boolean */, a1/* AudioType */) { return CS.Call(4, 4, 6, false, this, a0, a1); },
        InitWWW: function (a0/* String */, a1/* Byte[] */, a2/* String[] */) { return CS.Call(4, 4, 7, false, this, a0, a1, a2); },
        LoadImageIntoTexture: function (a0/* Texture2D */) { return CS.Call(4, 4, 8, false, this, a0); },
    });
    if ($hc < 6) { return; }
     
    Bridge.define("UnityEngine.Application", {
        statics: {
            getabsoluteURL: function () { return CS.Call(2, 5, 0, true); },
            setabsoluteURL: function (v) { return CS.Call(3, 5, 0, true, v); },
            getbackgroundLoadingPriority: function () { return CS.Call(2, 5, 1, true); },
            setbackgroundLoadingPriority: function (v) { return CS.Call(3, 5, 1, true, v); },
            getbundleIdentifier: function () { return CS.Call(2, 5, 2, true); },
            setbundleIdentifier: function (v) { return CS.Call(3, 5, 2, true, v); },
            getcloudProjectId: function () { return CS.Call(2, 5, 3, true); },
            setcloudProjectId: function (v) { return CS.Call(3, 5, 3, true, v); },
            getcompanyName: function () { return CS.Call(2, 5, 4, true); },
            setcompanyName: function (v) { return CS.Call(3, 5, 4, true, v); },
            getdataPath: function () { return CS.Call(2, 5, 5, true); },
            setdataPath: function (v) { return CS.Call(3, 5, 5, true, v); },
            getgenuine: function () { return CS.Call(2, 5, 6, true); },
            setgenuine: function (v) { return CS.Call(3, 5, 6, true, v); },
            getgenuineCheckAvailable: function () { return CS.Call(2, 5, 7, true); },
            setgenuineCheckAvailable: function (v) { return CS.Call(3, 5, 7, true, v); },
            getinstallMode: function () { return CS.Call(2, 5, 8, true); },
            setinstallMode: function (v) { return CS.Call(3, 5, 8, true, v); },
            getinternetReachability: function () { return CS.Call(2, 5, 9, true); },
            setinternetReachability: function (v) { return CS.Call(3, 5, 9, true, v); },
            getisConsolePlatform: function () { return CS.Call(2, 5, 10, true); },
            setisConsolePlatform: function (v) { return CS.Call(3, 5, 10, true, v); },
            getisEditor: function () { return CS.Call(2, 5, 11, true); },
            setisEditor: function (v) { return CS.Call(3, 5, 11, true, v); },
            getisMobilePlatform: function () { return CS.Call(2, 5, 12, true); },
            setisMobilePlatform: function (v) { return CS.Call(3, 5, 12, true, v); },
            getisPlaying: function () { return CS.Call(2, 5, 13, true); },
            setisPlaying: function (v) { return CS.Call(3, 5, 13, true, v); },
            getisShowingSplashScreen: function () { return CS.Call(2, 5, 14, true); },
            setisShowingSplashScreen: function (v) { return CS.Call(3, 5, 14, true, v); },
            getisWebPlayer: function () { return CS.Call(2, 5, 15, true); },
            setisWebPlayer: function (v) { return CS.Call(3, 5, 15, true, v); },
            getpersistentDataPath: function () { return CS.Call(2, 5, 16, true); },
            setpersistentDataPath: function (v) { return CS.Call(3, 5, 16, true, v); },
            getplatform: function () { return CS.Call(2, 5, 17, true); },
            setplatform: function (v) { return CS.Call(3, 5, 17, true, v); },
            getproductName: function () { return CS.Call(2, 5, 18, true); },
            setproductName: function (v) { return CS.Call(3, 5, 18, true, v); },
            getrunInBackground: function () { return CS.Call(2, 5, 19, true); },
            setrunInBackground: function (v) { return CS.Call(3, 5, 19, true, v); },
            getsandboxType: function () { return CS.Call(2, 5, 20, true); },
            setsandboxType: function (v) { return CS.Call(3, 5, 20, true, v); },
            getsrcValue: function () { return CS.Call(2, 5, 21, true); },
            setsrcValue: function (v) { return CS.Call(3, 5, 21, true, v); },
            getstreamedBytes: function () { return CS.Call(2, 5, 22, true); },
            setstreamedBytes: function (v) { return CS.Call(3, 5, 22, true, v); },
            getstreamingAssetsPath: function () { return CS.Call(2, 5, 23, true); },
            setstreamingAssetsPath: function (v) { return CS.Call(3, 5, 23, true, v); },
            getsystemLanguage: function () { return CS.Call(2, 5, 24, true); },
            setsystemLanguage: function (v) { return CS.Call(3, 5, 24, true, v); },
            gettargetFrameRate: function () { return CS.Call(2, 5, 25, true); },
            settargetFrameRate: function (v) { return CS.Call(3, 5, 25, true, v); },
            gettemporaryCachePath: function () { return CS.Call(2, 5, 26, true); },
            settemporaryCachePath: function (v) { return CS.Call(3, 5, 26, true, v); },
            getunityVersion: function () { return CS.Call(2, 5, 27, true); },
            setunityVersion: function (v) { return CS.Call(3, 5, 27, true, v); },
            getversion: function () { return CS.Call(2, 5, 28, true); },
            setversion: function (v) { return CS.Call(3, 5, 28, true, v); },
            getwebSecurityEnabled: function () { return CS.Call(2, 5, 29, true); },
            setwebSecurityEnabled: function (v) { return CS.Call(3, 5, 29, true, v); },
            getwebSecurityHostUrl: function () { return CS.Call(2, 5, 30, true); },
            setwebSecurityHostUrl: function (v) { return CS.Call(3, 5, 30, true, v); },
            CancelQuit: function () { return CS.Call(4, 5, 0, true); },
            CanStreamedLevelBeLoaded: function (a0/* Int32 */) { return CS.Call(4, 5, 1, true, a0); },
            CanStreamedLevelBeLoaded$1: function (a0/* String */) { return CS.Call(4, 5, 2, true, a0); },
            CaptureScreenshot: function (a0/* String */) { return CS.Call(4, 5, 3, true, a0); },
            CaptureScreenshot$1: function (a0/* String */, a1/* Int32 */) { return CS.Call(4, 5, 4, true, a0, a1); },
            ExternalCall: function (a0/* String */, a1/* Object[] */) { return CS.Call(4, 5, 5, true, a0, a1); },
            GetStackTraceLogType: function (a0/* LogType */) { return CS.Call(4, 5, 6, true, a0); },
            GetStreamProgressForLevel: function (a0/* Int32 */) { return CS.Call(4, 5, 7, true, a0); },
            GetStreamProgressForLevel$1: function (a0/* String */) { return CS.Call(4, 5, 8, true, a0); },
            HasProLicense: function () { return CS.Call(4, 5, 9, true); },
            HasUserAuthorization: function (a0/* UserAuthorization */) { return CS.Call(4, 5, 10, true, a0); },
            OpenURL: function (a0/* String */) { return CS.Call(4, 5, 11, true, a0); },
            Quit: function () { return CS.Call(4, 5, 12, true); },
            RequestAdvertisingIdentifierAsync: function (a0/* AdvertisingIdentifierCallback */) { return CS.Call(4, 5, 13, true, a0); },
            RequestUserAuthorization: function (a0/* UserAuthorization */) { return CS.Call(4, 5, 14, true, a0); },
            SetStackTraceLogType: function (a0/* LogType */, a1/* StackTraceLogType */) { return CS.Call(4, 5, 15, true, a0, a1); },
        },
        ctor: function () {
            CS.Call(5, 5, 0, true, this);
        },
    });
    if ($hc < 7) { return; }
     
    Bridge.define("UnityEngine.Time", {
        statics: {
            getcaptureFramerate: function () { return CS.Call(2, 6, 0, true); },
            setcaptureFramerate: function (v) { return CS.Call(3, 6, 0, true, v); },
            getdeltaTime: function () { return CS.Call(2, 6, 1, true); },
            setdeltaTime: function (v) { return CS.Call(3, 6, 1, true, v); },
            getfixedDeltaTime: function () { return CS.Call(2, 6, 2, true); },
            setfixedDeltaTime: function (v) { return CS.Call(3, 6, 2, true, v); },
            getfixedTime: function () { return CS.Call(2, 6, 3, true); },
            setfixedTime: function (v) { return CS.Call(3, 6, 3, true, v); },
            getframeCount: function () { return CS.Call(2, 6, 4, true); },
            setframeCount: function (v) { return CS.Call(3, 6, 4, true, v); },
            getmaximumDeltaTime: function () { return CS.Call(2, 6, 5, true); },
            setmaximumDeltaTime: function (v) { return CS.Call(3, 6, 5, true, v); },
            getrealtimeSinceStartup: function () { return CS.Call(2, 6, 6, true); },
            setrealtimeSinceStartup: function (v) { return CS.Call(3, 6, 6, true, v); },
            getrenderedFrameCount: function () { return CS.Call(2, 6, 7, true); },
            setrenderedFrameCount: function (v) { return CS.Call(3, 6, 7, true, v); },
            getsmoothDeltaTime: function () { return CS.Call(2, 6, 8, true); },
            setsmoothDeltaTime: function (v) { return CS.Call(3, 6, 8, true, v); },
            gettime: function () { return CS.Call(2, 6, 9, true); },
            settime: function (v) { return CS.Call(3, 6, 9, true, v); },
            gettimeScale: function () { return CS.Call(2, 6, 10, true); },
            settimeScale: function (v) { return CS.Call(3, 6, 10, true, v); },
            gettimeSinceLevelLoad: function () { return CS.Call(2, 6, 11, true); },
            settimeSinceLevelLoad: function (v) { return CS.Call(3, 6, 11, true, v); },
            getunscaledDeltaTime: function () { return CS.Call(2, 6, 12, true); },
            setunscaledDeltaTime: function (v) { return CS.Call(3, 6, 12, true, v); },
            getunscaledTime: function () { return CS.Call(2, 6, 13, true); },
            setunscaledTime: function (v) { return CS.Call(3, 6, 13, true, v); },
        },
        ctor: function () {
            CS.Call(5, 6, 0, true, this);
        },
    });
    if ($hc < 8) { return; }
     
    Bridge.define("UnityEngine.RaycastHit2D", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.RaycastHit2D(); },
            op_Implicit: function (a0/* RaycastHit2D */) { return CS.Call(4, 7, 1, true, a0); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.RaycastHit2D)) {
                return false;
            }
            return true;
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.RaycastHit2D();
            return s;
        },
        ctor: function () {
            CS.Call(5, 7, 0, true, this);
        },
        getcentroid: function () { return CS.Call(2, 7, 0, false, this); },
        setcentroid: function (v) { return CS.Call(3, 7, 0, false, this, v); },
        getcollider: function () { return CS.Call(2, 7, 1, false, this); },
        setcollider: function (v) { return CS.Call(3, 7, 1, false, this, v); },
        getdistance: function () { return CS.Call(2, 7, 2, false, this); },
        setdistance: function (v) { return CS.Call(3, 7, 2, false, this, v); },
        getfraction: function () { return CS.Call(2, 7, 3, false, this); },
        setfraction: function (v) { return CS.Call(3, 7, 3, false, this, v); },
        getnormal: function () { return CS.Call(2, 7, 4, false, this); },
        setnormal: function (v) { return CS.Call(3, 7, 4, false, this, v); },
        getpoint: function () { return CS.Call(2, 7, 5, false, this); },
        setpoint: function (v) { return CS.Call(3, 7, 5, false, this, v); },
        getrigidbody: function () { return CS.Call(2, 7, 6, false, this); },
        setrigidbody: function (v) { return CS.Call(3, 7, 6, false, this, v); },
        gettransform: function () { return CS.Call(2, 7, 7, false, this); },
        settransform: function (v) { return CS.Call(3, 7, 7, false, this, v); },
        CompareTo: function (a0/* RaycastHit2D */) { return CS.Call(4, 7, 0, false, this, a0); },
    });
    if ($hc < 9) { return; }
     
    Bridge.define("UnityEngine.YieldInstruction", {
        statics: {
        },
        ctor: function () {
            CS.Call(5, 8, 0, true, this);
        },
    });
    if ($hc < 10) { return; }
     
    Bridge.define("UnityEngine.Quaternion", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Quaternion(); },
            $fields: {
                kEpsilon: {
                    get: function () { return CS.Call(0, 9, 0, true); },
                    set: function (v) { return CS.Call(1, 9, 0, true, v); }
                },
            },
            getidentity: function () { return CS.Call(2, 9, 2, true); },
            setidentity: function (v) { return CS.Call(3, 9, 2, true, v); },
            Angle: function (a0/* Quaternion */, a1/* Quaternion */) { return CS.Call(4, 9, 9, true, a0, a1); },
            AngleAxis: function (a0/* Single */, a1/* Vector3 */) { return CS.Call(4, 9, 10, true, a0, a1); },
            Dot: function (a0/* Quaternion */, a1/* Quaternion */) { return CS.Call(4, 9, 11, true, a0, a1); },
            Euler: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 9, 12, true, a0, a1, a2); },
            Euler$1: function (a0/* Vector3 */) { return CS.Call(4, 9, 13, true, a0); },
            FromToRotation: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 9, 14, true, a0, a1); },
            Inverse: function (a0/* Quaternion */) { return CS.Call(4, 9, 15, true, a0); },
            Lerp: function (a0/* Quaternion */, a1/* Quaternion */, a2/* Single */) { return CS.Call(4, 9, 16, true, a0, a1, a2); },
            LerpUnclamped: function (a0/* Quaternion */, a1/* Quaternion */, a2/* Single */) { return CS.Call(4, 9, 17, true, a0, a1, a2); },
            LookRotation: function (a0/* Vector3 */) { return CS.Call(4, 9, 18, true, a0); },
            LookRotation$1: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 9, 19, true, a0, a1); },
            op_Equality: function (a0/* Quaternion */, a1/* Quaternion */) { return CS.Call(4, 9, 20, true, a0, a1); },
            op_Inequality: function (a0/* Quaternion */, a1/* Quaternion */) { return CS.Call(4, 9, 21, true, a0, a1); },
            op_Multiply: function (a0/* Quaternion */, a1/* Quaternion */) { return CS.Call(4, 9, 22, true, a0, a1); },
            op_Multiply$1: function (a0/* Quaternion */, a1/* Vector3 */) { return CS.Call(4, 9, 23, true, a0, a1); },
            RotateTowards: function (a0/* Quaternion */, a1/* Quaternion */, a2/* Single */) { return CS.Call(4, 9, 24, true, a0, a1, a2); },
            Slerp: function (a0/* Quaternion */, a1/* Quaternion */, a2/* Single */) { return CS.Call(4, 9, 25, true, a0, a1, a2); },
            SlerpUnclamped: function (a0/* Quaternion */, a1/* Quaternion */, a2/* Single */) { return CS.Call(4, 9, 26, true, a0, a1, a2); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Quaternion)) {
                return false;
            }
            Bridge.equals(this.kEpsilon, o.kEpsilon) && Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y) && Bridge.equals(this.z, o.z) && Bridge.equals(this.w, o.w);
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.Quaternion();
            s.kEpsilon = this.kEpsilon;
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            s.w = this.w;
            return s;
        },
        ctor: function () {
            CS.Call(5, 9, 0, true, this);
        },
        $ctor1: function (a0, a1, a2, a3) {
            CS.Call(5, 9, 1, true, this, a0, a1, a2, a3);
        },
        $fields: {
            x: {
                get: function () { return CS.Call(0, 9, 1, false, this); },
                set: function (v) { return CS.Call(1, 9, 1, false, this, v); }
            },
            y: {
                get: function () { return CS.Call(0, 9, 2, false, this); },
                set: function (v) { return CS.Call(1, 9, 2, false, this, v); }
            },
            z: {
                get: function () { return CS.Call(0, 9, 3, false, this); },
                set: function (v) { return CS.Call(1, 9, 3, false, this, v); }
            },
            w: {
                get: function () { return CS.Call(0, 9, 4, false, this); },
                set: function (v) { return CS.Call(1, 9, 4, false, this, v); }
            },
        },
        geteulerAngles: function () { return CS.Call(2, 9, 0, false, this); },
        seteulerAngles: function (v) { return CS.Call(3, 9, 0, false, this, v); },
        getItem: function (ind0) { return CS.Call(2, 9, 1, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 9, 1, false, this, ind0, v); },
        Equals: function (a0/* Object */) { return CS.Call(4, 9, 0, false, this, a0); },
        GetHashCode: function () { return CS.Call(4, 9, 1, false, this); },
        Set: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 9, 2, false, this, a0, a1, a2, a3); },
        SetFromToRotation: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 9, 3, false, this, a0, a1); },
        SetLookRotation: function (a0/* Vector3 */) { return CS.Call(4, 9, 4, false, this, a0); },
        SetLookRotation$1: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 9, 5, false, this, a0, a1); },
        ToAngleAxis: function (a0/* Single& */, a1/* Vector3& */) { return CS.Call(4, 9, 6, false, this, a0, a1); },
        ToString: function () { return CS.Call(4, 9, 7, false, this); },
        ToString$1: function (a0/* String */) { return CS.Call(4, 9, 8, false, this, a0); },
    });
    if ($hc < 11) { return; }
     
    Bridge.define("UnityEngine.Mathf", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Mathf(); },
            $fields: {
                PI: {
                    get: function () { return CS.Call(0, 10, 0, true); },
                    set: function (v) { return CS.Call(1, 10, 0, true, v); }
                },
                Infinity: {
                    get: function () { return CS.Call(0, 10, 1, true); },
                    set: function (v) { return CS.Call(1, 10, 1, true, v); }
                },
                NegativeInfinity: {
                    get: function () { return CS.Call(0, 10, 2, true); },
                    set: function (v) { return CS.Call(1, 10, 2, true, v); }
                },
                Deg2Rad: {
                    get: function () { return CS.Call(0, 10, 3, true); },
                    set: function (v) { return CS.Call(1, 10, 3, true, v); }
                },
                Rad2Deg: {
                    get: function () { return CS.Call(0, 10, 4, true); },
                    set: function (v) { return CS.Call(1, 10, 4, true, v); }
                },
                Epsilon: {
                    get: function () { return CS.Call(0, 10, 5, true); },
                    set: function (v) { return CS.Call(1, 10, 5, true, v); }
                },
            },
            Abs: function (a0/* Int32 */) { return CS.Call(4, 10, 0, true, a0); },
            Abs$1: function (a0/* Single */) { return CS.Call(4, 10, 1, true, a0); },
            Acos: function (a0/* Single */) { return CS.Call(4, 10, 2, true, a0); },
            Approximately: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 3, true, a0, a1); },
            Asin: function (a0/* Single */) { return CS.Call(4, 10, 4, true, a0); },
            Atan: function (a0/* Single */) { return CS.Call(4, 10, 5, true, a0); },
            Atan2: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 6, true, a0, a1); },
            Ceil: function (a0/* Single */) { return CS.Call(4, 10, 7, true, a0); },
            CeilToInt: function (a0/* Single */) { return CS.Call(4, 10, 8, true, a0); },
            Clamp: function (a0/* Int32 */, a1/* Int32 */, a2/* Int32 */) { return CS.Call(4, 10, 9, true, a0, a1, a2); },
            Clamp$1: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 10, true, a0, a1, a2); },
            Clamp01: function (a0/* Single */) { return CS.Call(4, 10, 11, true, a0); },
            ClosestPowerOfTwo: function (a0/* Int32 */) { return CS.Call(4, 10, 12, true, a0); },
            Cos: function (a0/* Single */) { return CS.Call(4, 10, 13, true, a0); },
            DeltaAngle: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 14, true, a0, a1); },
            Exp: function (a0/* Single */) { return CS.Call(4, 10, 15, true, a0); },
            FloatToHalf: function (a0/* Single */) { return CS.Call(4, 10, 16, true, a0); },
            Floor: function (a0/* Single */) { return CS.Call(4, 10, 17, true, a0); },
            FloorToInt: function (a0/* Single */) { return CS.Call(4, 10, 18, true, a0); },
            Gamma: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 19, true, a0, a1, a2); },
            GammaToLinearSpace: function (a0/* Single */) { return CS.Call(4, 10, 20, true, a0); },
            HalfToFloat: function (a0/* UInt16 */) { return CS.Call(4, 10, 21, true, a0); },
            InverseLerp: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 22, true, a0, a1, a2); },
            IsPowerOfTwo: function (a0/* Int32 */) { return CS.Call(4, 10, 23, true, a0); },
            Lerp: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 24, true, a0, a1, a2); },
            LerpAngle: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 25, true, a0, a1, a2); },
            LerpUnclamped: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 26, true, a0, a1, a2); },
            LinearToGammaSpace: function (a0/* Single */) { return CS.Call(4, 10, 27, true, a0); },
            Log: function (a0/* Single */) { return CS.Call(4, 10, 28, true, a0); },
            Log$1: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 29, true, a0, a1); },
            Log10: function (a0/* Single */) { return CS.Call(4, 10, 30, true, a0); },
            Max: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 10, 31, true, a0, a1); },
            Max$1: function (a0/* Int32[] */) { return CS.Call(4, 10, 32, true, a0); },
            Max$2: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 33, true, a0, a1); },
            Max$3: function (a0/* Single[] */) { return CS.Call(4, 10, 34, true, a0); },
            Min: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 10, 35, true, a0, a1); },
            Min$1: function (a0/* Int32[] */) { return CS.Call(4, 10, 36, true, a0); },
            Min$2: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 37, true, a0, a1); },
            Min$3: function (a0/* Single[] */) { return CS.Call(4, 10, 38, true, a0); },
            MoveTowards: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 39, true, a0, a1, a2); },
            MoveTowardsAngle: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 40, true, a0, a1, a2); },
            NextPowerOfTwo: function (a0/* Int32 */) { return CS.Call(4, 10, 41, true, a0); },
            PerlinNoise: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 42, true, a0, a1); },
            PingPong: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 43, true, a0, a1); },
            Pow: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 44, true, a0, a1); },
            Repeat: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 10, 45, true, a0, a1); },
            Round: function (a0/* Single */) { return CS.Call(4, 10, 46, true, a0); },
            RoundToInt: function (a0/* Single */) { return CS.Call(4, 10, 47, true, a0); },
            Sign: function (a0/* Single */) { return CS.Call(4, 10, 48, true, a0); },
            Sin: function (a0/* Single */) { return CS.Call(4, 10, 49, true, a0); },
            SmoothDamp: function (a0/* Single */, a1/* Single */, a2/* Single& */, a3/* Single */) { return CS.Call(4, 10, 50, true, a0, a1, a2, a3); },
            SmoothDamp$1: function (a0/* Single */, a1/* Single */, a2/* Single& */, a3/* Single */, a4/* Single */) { return CS.Call(4, 10, 51, true, a0, a1, a2, a3, a4); },
            SmoothDamp$2: function (a0/* Single */, a1/* Single */, a2/* Single& */, a3/* Single */, a4/* Single */, a5/* Single */) { return CS.Call(4, 10, 52, true, a0, a1, a2, a3, a4, a5); },
            SmoothDampAngle: function (a0/* Single */, a1/* Single */, a2/* Single& */, a3/* Single */) { return CS.Call(4, 10, 53, true, a0, a1, a2, a3); },
            SmoothDampAngle$1: function (a0/* Single */, a1/* Single */, a2/* Single& */, a3/* Single */, a4/* Single */) { return CS.Call(4, 10, 54, true, a0, a1, a2, a3, a4); },
            SmoothDampAngle$2: function (a0/* Single */, a1/* Single */, a2/* Single& */, a3/* Single */, a4/* Single */, a5/* Single */) { return CS.Call(4, 10, 55, true, a0, a1, a2, a3, a4, a5); },
            SmoothStep: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 10, 56, true, a0, a1, a2); },
            Sqrt: function (a0/* Single */) { return CS.Call(4, 10, 57, true, a0); },
            Tan: function (a0/* Single */) { return CS.Call(4, 10, 58, true, a0); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Mathf)) {
                return false;
            }
            Bridge.equals(this.PI, o.PI) && Bridge.equals(this.Infinity, o.Infinity) && Bridge.equals(this.NegativeInfinity, o.NegativeInfinity) && Bridge.equals(this.Deg2Rad, o.Deg2Rad) && Bridge.equals(this.Rad2Deg, o.Rad2Deg) && Bridge.equals(this.Epsilon, o.Epsilon);
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.Mathf();
            s.PI = this.PI;
            s.Infinity = this.Infinity;
            s.NegativeInfinity = this.NegativeInfinity;
            s.Deg2Rad = this.Deg2Rad;
            s.Rad2Deg = this.Rad2Deg;
            s.Epsilon = this.Epsilon;
            return s;
        },
        ctor: function () {
            CS.Call(5, 10, 0, true, this);
        },
    });
    if ($hc < 12) { return; }
     
    Bridge.define("UnityEngine.Color", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Color(); },
            getblack: function () { return CS.Call(2, 11, 5, true); },
            setblack: function (v) { return CS.Call(3, 11, 5, true, v); },
            getblue: function () { return CS.Call(2, 11, 6, true); },
            setblue: function (v) { return CS.Call(3, 11, 6, true, v); },
            getclear: function () { return CS.Call(2, 11, 7, true); },
            setclear: function (v) { return CS.Call(3, 11, 7, true, v); },
            getcyan: function () { return CS.Call(2, 11, 8, true); },
            setcyan: function (v) { return CS.Call(3, 11, 8, true, v); },
            getgray: function () { return CS.Call(2, 11, 9, true); },
            setgray: function (v) { return CS.Call(3, 11, 9, true, v); },
            getgreen: function () { return CS.Call(2, 11, 10, true); },
            setgreen: function (v) { return CS.Call(3, 11, 10, true, v); },
            getgrey: function () { return CS.Call(2, 11, 11, true); },
            setgrey: function (v) { return CS.Call(3, 11, 11, true, v); },
            getmagenta: function () { return CS.Call(2, 11, 12, true); },
            setmagenta: function (v) { return CS.Call(3, 11, 12, true, v); },
            getred: function () { return CS.Call(2, 11, 13, true); },
            setred: function (v) { return CS.Call(3, 11, 13, true, v); },
            getwhite: function () { return CS.Call(2, 11, 14, true); },
            setwhite: function (v) { return CS.Call(3, 11, 14, true, v); },
            getyellow: function () { return CS.Call(2, 11, 15, true); },
            setyellow: function (v) { return CS.Call(3, 11, 15, true, v); },
            HSVToRGB: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 11, 4, true, a0, a1, a2); },
            HSVToRGB$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Boolean */) { return CS.Call(4, 11, 5, true, a0, a1, a2, a3); },
            Lerp: function (a0/* Color */, a1/* Color */, a2/* Single */) { return CS.Call(4, 11, 6, true, a0, a1, a2); },
            LerpUnclamped: function (a0/* Color */, a1/* Color */, a2/* Single */) { return CS.Call(4, 11, 7, true, a0, a1, a2); },
            op_Addition: function (a0/* Color */, a1/* Color */) { return CS.Call(4, 11, 8, true, a0, a1); },
            op_Division: function (a0/* Color */, a1/* Single */) { return CS.Call(4, 11, 9, true, a0, a1); },
            op_Equality: function (a0/* Color */, a1/* Color */) { return CS.Call(4, 11, 10, true, a0, a1); },
            op_Implicit: function (a0/* Vector4 */) { return CS.Call(4, 11, 11, true, a0); },
            op_Implicit$1: function (a0/* Color */) { return CS.Call(4, 11, 12, true, a0); },
            op_Inequality: function (a0/* Color */, a1/* Color */) { return CS.Call(4, 11, 13, true, a0, a1); },
            op_Multiply: function (a0/* Single */, a1/* Color */) { return CS.Call(4, 11, 14, true, a0, a1); },
            op_Multiply$1: function (a0/* Color */, a1/* Single */) { return CS.Call(4, 11, 15, true, a0, a1); },
            op_Multiply$2: function (a0/* Color */, a1/* Color */) { return CS.Call(4, 11, 16, true, a0, a1); },
            op_Subtraction: function (a0/* Color */, a1/* Color */) { return CS.Call(4, 11, 17, true, a0, a1); },
            RGBToHSV: function (a0/* Color */, a1/* Single& */, a2/* Single& */, a3/* Single& */) { return CS.Call(4, 11, 18, true, a0, a1, a2, a3); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Color)) {
                return false;
            }
            Bridge.equals(this.r, o.r) && Bridge.equals(this.g, o.g) && Bridge.equals(this.b, o.b) && Bridge.equals(this.a, o.a);
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.Color();
            s.r = this.r;
            s.g = this.g;
            s.b = this.b;
            s.a = this.a;
            return s;
        },
        ctor: function () {
            CS.Call(5, 11, 0, true, this);
        },
        $ctor1: function (a0, a1, a2) {
            CS.Call(5, 11, 1, true, this, a0, a1, a2);
        },
        $ctor2: function (a0, a1, a2, a3) {
            CS.Call(5, 11, 2, true, this, a0, a1, a2, a3);
        },
        $fields: {
            r: {
                get: function () { return CS.Call(0, 11, 0, false, this); },
                set: function (v) { return CS.Call(1, 11, 0, false, this, v); }
            },
            g: {
                get: function () { return CS.Call(0, 11, 1, false, this); },
                set: function (v) { return CS.Call(1, 11, 1, false, this, v); }
            },
            b: {
                get: function () { return CS.Call(0, 11, 2, false, this); },
                set: function (v) { return CS.Call(1, 11, 2, false, this, v); }
            },
            a: {
                get: function () { return CS.Call(0, 11, 3, false, this); },
                set: function (v) { return CS.Call(1, 11, 3, false, this, v); }
            },
        },
        getgamma: function () { return CS.Call(2, 11, 0, false, this); },
        setgamma: function (v) { return CS.Call(3, 11, 0, false, this, v); },
        getgrayscale: function () { return CS.Call(2, 11, 1, false, this); },
        setgrayscale: function (v) { return CS.Call(3, 11, 1, false, this, v); },
        getItem: function (ind0) { return CS.Call(2, 11, 2, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 11, 2, false, this, ind0, v); },
        getlinear: function () { return CS.Call(2, 11, 3, false, this); },
        setlinear: function (v) { return CS.Call(3, 11, 3, false, this, v); },
        getmaxColorComponent: function () { return CS.Call(2, 11, 4, false, this); },
        setmaxColorComponent: function (v) { return CS.Call(3, 11, 4, false, this, v); },
        Equals: function (a0/* Object */) { return CS.Call(4, 11, 0, false, this, a0); },
        GetHashCode: function () { return CS.Call(4, 11, 1, false, this); },
        ToString: function () { return CS.Call(4, 11, 2, false, this); },
        ToString$1: function (a0/* String */) { return CS.Call(4, 11, 3, false, this, a0); },
    });
    if ($hc < 13) { return; }
     
    Bridge.define("UnityEngine.Physics", {
        statics: {
            $fields: {
                IgnoreRaycastLayer: {
                    get: function () { return CS.Call(0, 12, 0, true); },
                    set: function (v) { return CS.Call(1, 12, 0, true, v); }
                },
                DefaultRaycastLayers: {
                    get: function () { return CS.Call(0, 12, 1, true); },
                    set: function (v) { return CS.Call(1, 12, 1, true, v); }
                },
                AllLayers: {
                    get: function () { return CS.Call(0, 12, 2, true); },
                    set: function (v) { return CS.Call(1, 12, 2, true, v); }
                },
            },
            getbounceThreshold: function () { return CS.Call(2, 12, 0, true); },
            setbounceThreshold: function (v) { return CS.Call(3, 12, 0, true, v); },
            getdefaultContactOffset: function () { return CS.Call(2, 12, 1, true); },
            setdefaultContactOffset: function (v) { return CS.Call(3, 12, 1, true, v); },
            getdefaultSolverIterations: function () { return CS.Call(2, 12, 2, true); },
            setdefaultSolverIterations: function (v) { return CS.Call(3, 12, 2, true, v); },
            getdefaultSolverVelocityIterations: function () { return CS.Call(2, 12, 3, true); },
            setdefaultSolverVelocityIterations: function (v) { return CS.Call(3, 12, 3, true, v); },
            getgravity: function () { return CS.Call(2, 12, 4, true); },
            setgravity: function (v) { return CS.Call(3, 12, 4, true, v); },
            getqueriesHitTriggers: function () { return CS.Call(2, 12, 5, true); },
            setqueriesHitTriggers: function (v) { return CS.Call(3, 12, 5, true, v); },
            getsleepThreshold: function () { return CS.Call(2, 12, 6, true); },
            setsleepThreshold: function (v) { return CS.Call(3, 12, 6, true, v); },
            BoxCast: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */) { return CS.Call(4, 12, 0, true, a0, a1, a2); },
            BoxCast$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */) { return CS.Call(4, 12, 1, true, a0, a1, a2, a3); },
            BoxCast$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */, a4/* Single */) { return CS.Call(4, 12, 2, true, a0, a1, a2, a3, a4); },
            BoxCast$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 12, 3, true, a0, a1, a2, a3, a4, a5); },
            BoxCast$4: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */, a4/* Single */, a5/* Int32 */, a6/* QueryTriggerInteraction */) { return CS.Call(4, 12, 4, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCast$5: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit& */) { return CS.Call(4, 12, 5, true, a0, a1, a2, a3); },
            BoxCast$6: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Quaternion */) { return CS.Call(4, 12, 6, true, a0, a1, a2, a3, a4); },
            BoxCast$7: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Quaternion */, a5/* Single */) { return CS.Call(4, 12, 7, true, a0, a1, a2, a3, a4, a5); },
            BoxCast$8: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Quaternion */, a5/* Single */, a6/* Int32 */) { return CS.Call(4, 12, 8, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCast$9: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Quaternion */, a5/* Single */, a6/* Int32 */, a7/* QueryTriggerInteraction */) { return CS.Call(4, 12, 9, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            BoxCastAll: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */) { return CS.Call(4, 12, 10, true, a0, a1, a2); },
            BoxCastAll$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */) { return CS.Call(4, 12, 11, true, a0, a1, a2, a3); },
            BoxCastAll$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */, a4/* Single */) { return CS.Call(4, 12, 12, true, a0, a1, a2, a3, a4); },
            BoxCastAll$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 12, 13, true, a0, a1, a2, a3, a4, a5); },
            BoxCastAll$4: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* Quaternion */, a4/* Single */, a5/* Int32 */, a6/* QueryTriggerInteraction */) { return CS.Call(4, 12, 14, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCastNonAlloc: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit[] */) { return CS.Call(4, 12, 15, true, a0, a1, a2, a3); },
            BoxCastNonAlloc$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Quaternion */) { return CS.Call(4, 12, 16, true, a0, a1, a2, a3, a4); },
            BoxCastNonAlloc$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Quaternion */, a5/* Single */) { return CS.Call(4, 12, 17, true, a0, a1, a2, a3, a4, a5); },
            BoxCastNonAlloc$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Quaternion */, a5/* Single */, a6/* Int32 */) { return CS.Call(4, 12, 18, true, a0, a1, a2, a3, a4, a5, a6); },
            BoxCastNonAlloc$4: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Quaternion */, a5/* Single */, a6/* Int32 */, a7/* QueryTriggerInteraction */) { return CS.Call(4, 12, 19, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            CapsuleCast: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */) { return CS.Call(4, 12, 20, true, a0, a1, a2, a3); },
            CapsuleCast$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* Single */) { return CS.Call(4, 12, 21, true, a0, a1, a2, a3, a4); },
            CapsuleCast$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 12, 22, true, a0, a1, a2, a3, a4, a5); },
            CapsuleCast$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* Single */, a5/* Int32 */, a6/* QueryTriggerInteraction */) { return CS.Call(4, 12, 23, true, a0, a1, a2, a3, a4, a5, a6); },
            CapsuleCast$4: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit& */) { return CS.Call(4, 12, 24, true, a0, a1, a2, a3, a4); },
            CapsuleCast$5: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit& */, a5/* Single */) { return CS.Call(4, 12, 25, true, a0, a1, a2, a3, a4, a5); },
            CapsuleCast$6: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit& */, a5/* Single */, a6/* Int32 */) { return CS.Call(4, 12, 26, true, a0, a1, a2, a3, a4, a5, a6); },
            CapsuleCast$7: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit& */, a5/* Single */, a6/* Int32 */, a7/* QueryTriggerInteraction */) { return CS.Call(4, 12, 27, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            CapsuleCastAll: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */) { return CS.Call(4, 12, 28, true, a0, a1, a2, a3); },
            CapsuleCastAll$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* Single */) { return CS.Call(4, 12, 29, true, a0, a1, a2, a3, a4); },
            CapsuleCastAll$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 12, 30, true, a0, a1, a2, a3, a4, a5); },
            CapsuleCastAll$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* Single */, a5/* Int32 */, a6/* QueryTriggerInteraction */) { return CS.Call(4, 12, 31, true, a0, a1, a2, a3, a4, a5, a6); },
            CapsuleCastNonAlloc: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit[] */) { return CS.Call(4, 12, 32, true, a0, a1, a2, a3, a4); },
            CapsuleCastNonAlloc$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit[] */, a5/* Single */) { return CS.Call(4, 12, 33, true, a0, a1, a2, a3, a4, a5); },
            CapsuleCastNonAlloc$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit[] */, a5/* Single */, a6/* Int32 */) { return CS.Call(4, 12, 34, true, a0, a1, a2, a3, a4, a5, a6); },
            CapsuleCastNonAlloc$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Vector3 */, a4/* RaycastHit[] */, a5/* Single */, a6/* Int32 */, a7/* QueryTriggerInteraction */) { return CS.Call(4, 12, 35, true, a0, a1, a2, a3, a4, a5, a6, a7); },
            CheckBox: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 12, 36, true, a0, a1); },
            CheckBox$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Quaternion */) { return CS.Call(4, 12, 37, true, a0, a1, a2); },
            CheckBox$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Quaternion */, a3/* Int32 */) { return CS.Call(4, 12, 38, true, a0, a1, a2, a3); },
            CheckBox$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Quaternion */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 39, true, a0, a1, a2, a3, a4); },
            CheckCapsule: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 12, 40, true, a0, a1, a2); },
            CheckCapsule$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 41, true, a0, a1, a2, a3); },
            CheckCapsule$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 42, true, a0, a1, a2, a3, a4); },
            CheckSphere: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 12, 43, true, a0, a1); },
            CheckSphere$1: function (a0/* Vector3 */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 12, 44, true, a0, a1, a2); },
            CheckSphere$2: function (a0/* Vector3 */, a1/* Single */, a2/* Int32 */, a3/* QueryTriggerInteraction */) { return CS.Call(4, 12, 45, true, a0, a1, a2, a3); },
            GetIgnoreLayerCollision: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 12, 46, true, a0, a1); },
            IgnoreCollision: function (a0/* Collider */, a1/* Collider */) { return CS.Call(4, 12, 47, true, a0, a1); },
            IgnoreCollision$1: function (a0/* Collider */, a1/* Collider */, a2/* Boolean */) { return CS.Call(4, 12, 48, true, a0, a1, a2); },
            IgnoreLayerCollision: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 12, 49, true, a0, a1); },
            IgnoreLayerCollision$1: function (a0/* Int32 */, a1/* Int32 */, a2/* Boolean */) { return CS.Call(4, 12, 50, true, a0, a1, a2); },
            Linecast: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 12, 51, true, a0, a1); },
            Linecast$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Int32 */) { return CS.Call(4, 12, 52, true, a0, a1, a2); },
            Linecast$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Int32 */, a3/* QueryTriggerInteraction */) { return CS.Call(4, 12, 53, true, a0, a1, a2, a3); },
            Linecast$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */) { return CS.Call(4, 12, 54, true, a0, a1, a2); },
            Linecast$4: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */, a3/* Int32 */) { return CS.Call(4, 12, 55, true, a0, a1, a2, a3); },
            Linecast$5: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 56, true, a0, a1, a2, a3, a4); },
            OverlapBox: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 12, 57, true, a0, a1); },
            OverlapBox$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Quaternion */) { return CS.Call(4, 12, 58, true, a0, a1, a2); },
            OverlapBox$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Quaternion */, a3/* Int32 */) { return CS.Call(4, 12, 59, true, a0, a1, a2, a3); },
            OverlapBox$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Quaternion */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 60, true, a0, a1, a2, a3, a4); },
            OverlapBoxNonAlloc: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Collider[] */) { return CS.Call(4, 12, 61, true, a0, a1, a2); },
            OverlapBoxNonAlloc$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Collider[] */, a3/* Quaternion */) { return CS.Call(4, 12, 62, true, a0, a1, a2, a3); },
            OverlapBoxNonAlloc$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Collider[] */, a3/* Quaternion */, a4/* Int32 */) { return CS.Call(4, 12, 63, true, a0, a1, a2, a3, a4); },
            OverlapBoxNonAlloc$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Collider[] */, a3/* Quaternion */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 64, true, a0, a1, a2, a3, a4, a5); },
            OverlapCapsule: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 12, 65, true, a0, a1, a2); },
            OverlapCapsule$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 66, true, a0, a1, a2, a3); },
            OverlapCapsule$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 67, true, a0, a1, a2, a3, a4); },
            OverlapCapsuleNonAlloc: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Collider[] */) { return CS.Call(4, 12, 68, true, a0, a1, a2, a3); },
            OverlapCapsuleNonAlloc$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Collider[] */, a4/* Int32 */) { return CS.Call(4, 12, 69, true, a0, a1, a2, a3, a4); },
            OverlapCapsuleNonAlloc$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Collider[] */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 70, true, a0, a1, a2, a3, a4, a5); },
            OverlapSphere: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 12, 71, true, a0, a1); },
            OverlapSphere$1: function (a0/* Vector3 */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 12, 72, true, a0, a1, a2); },
            OverlapSphere$2: function (a0/* Vector3 */, a1/* Single */, a2/* Int32 */, a3/* QueryTriggerInteraction */) { return CS.Call(4, 12, 73, true, a0, a1, a2, a3); },
            OverlapSphereNonAlloc: function (a0/* Vector3 */, a1/* Single */, a2/* Collider[] */) { return CS.Call(4, 12, 74, true, a0, a1, a2); },
            OverlapSphereNonAlloc$1: function (a0/* Vector3 */, a1/* Single */, a2/* Collider[] */, a3/* Int32 */) { return CS.Call(4, 12, 75, true, a0, a1, a2, a3); },
            OverlapSphereNonAlloc$2: function (a0/* Vector3 */, a1/* Single */, a2/* Collider[] */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 76, true, a0, a1, a2, a3, a4); },
            Raycast: function (a0/* Ray */) { return CS.Call(4, 12, 77, true, a0); },
            Raycast$1: function (a0/* Ray */, a1/* Single */) { return CS.Call(4, 12, 78, true, a0, a1); },
            Raycast$2: function (a0/* Ray */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 12, 79, true, a0, a1, a2); },
            Raycast$3: function (a0/* Ray */, a1/* Single */, a2/* Int32 */, a3/* QueryTriggerInteraction */) { return CS.Call(4, 12, 80, true, a0, a1, a2, a3); },
            Raycast$4: function (a0/* Ray */, a1/* RaycastHit& */) { return CS.Call(4, 12, 81, true, a0, a1); },
            Raycast$5: function (a0/* Ray */, a1/* RaycastHit& */, a2/* Single */) { return CS.Call(4, 12, 82, true, a0, a1, a2); },
            Raycast$6: function (a0/* Ray */, a1/* RaycastHit& */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 83, true, a0, a1, a2, a3); },
            Raycast$7: function (a0/* Ray */, a1/* RaycastHit& */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 84, true, a0, a1, a2, a3, a4); },
            Raycast$8: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 12, 85, true, a0, a1); },
            Raycast$9: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 12, 86, true, a0, a1, a2); },
            Raycast$10: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 87, true, a0, a1, a2, a3); },
            Raycast$11: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 88, true, a0, a1, a2, a3, a4); },
            Raycast$12: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */) { return CS.Call(4, 12, 89, true, a0, a1, a2); },
            Raycast$13: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */, a3/* Single */) { return CS.Call(4, 12, 90, true, a0, a1, a2, a3); },
            Raycast$14: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 12, 91, true, a0, a1, a2, a3, a4); },
            Raycast$15: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit& */, a3/* Single */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 92, true, a0, a1, a2, a3, a4, a5); },
            RaycastAll: function (a0/* Ray */) { return CS.Call(4, 12, 93, true, a0); },
            RaycastAll$1: function (a0/* Ray */, a1/* Single */) { return CS.Call(4, 12, 94, true, a0, a1); },
            RaycastAll$2: function (a0/* Ray */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 12, 95, true, a0, a1, a2); },
            RaycastAll$3: function (a0/* Ray */, a1/* Single */, a2/* Int32 */, a3/* QueryTriggerInteraction */) { return CS.Call(4, 12, 96, true, a0, a1, a2, a3); },
            RaycastAll$4: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 12, 97, true, a0, a1); },
            RaycastAll$5: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 12, 98, true, a0, a1, a2); },
            RaycastAll$6: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 99, true, a0, a1, a2, a3); },
            RaycastAll$7: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 100, true, a0, a1, a2, a3, a4); },
            RaycastNonAlloc: function (a0/* Ray */, a1/* RaycastHit[] */) { return CS.Call(4, 12, 101, true, a0, a1); },
            RaycastNonAlloc$1: function (a0/* Ray */, a1/* RaycastHit[] */, a2/* Single */) { return CS.Call(4, 12, 102, true, a0, a1, a2); },
            RaycastNonAlloc$2: function (a0/* Ray */, a1/* RaycastHit[] */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 103, true, a0, a1, a2, a3); },
            RaycastNonAlloc$3: function (a0/* Ray */, a1/* RaycastHit[] */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 104, true, a0, a1, a2, a3, a4); },
            RaycastNonAlloc$4: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit[] */) { return CS.Call(4, 12, 105, true, a0, a1, a2); },
            RaycastNonAlloc$5: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit[] */, a3/* Single */) { return CS.Call(4, 12, 106, true, a0, a1, a2, a3); },
            RaycastNonAlloc$6: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit[] */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 12, 107, true, a0, a1, a2, a3, a4); },
            RaycastNonAlloc$7: function (a0/* Vector3 */, a1/* Vector3 */, a2/* RaycastHit[] */, a3/* Single */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 108, true, a0, a1, a2, a3, a4, a5); },
            SphereCast: function (a0/* Ray */, a1/* Single */) { return CS.Call(4, 12, 109, true, a0, a1); },
            SphereCast$1: function (a0/* Ray */, a1/* Single */, a2/* Single */) { return CS.Call(4, 12, 110, true, a0, a1, a2); },
            SphereCast$2: function (a0/* Ray */, a1/* Single */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 111, true, a0, a1, a2, a3); },
            SphereCast$3: function (a0/* Ray */, a1/* Single */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 112, true, a0, a1, a2, a3, a4); },
            SphereCast$4: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit& */) { return CS.Call(4, 12, 113, true, a0, a1, a2); },
            SphereCast$5: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit& */, a3/* Single */) { return CS.Call(4, 12, 114, true, a0, a1, a2, a3); },
            SphereCast$6: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit& */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 12, 115, true, a0, a1, a2, a3, a4); },
            SphereCast$7: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit& */, a3/* Single */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 116, true, a0, a1, a2, a3, a4, a5); },
            SphereCast$8: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit& */) { return CS.Call(4, 12, 117, true, a0, a1, a2, a3); },
            SphereCast$9: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Single */) { return CS.Call(4, 12, 118, true, a0, a1, a2, a3, a4); },
            SphereCast$10: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 12, 119, true, a0, a1, a2, a3, a4, a5); },
            SphereCast$11: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit& */, a4/* Single */, a5/* Int32 */, a6/* QueryTriggerInteraction */) { return CS.Call(4, 12, 120, true, a0, a1, a2, a3, a4, a5, a6); },
            SphereCastAll: function (a0/* Ray */, a1/* Single */) { return CS.Call(4, 12, 121, true, a0, a1); },
            SphereCastAll$1: function (a0/* Ray */, a1/* Single */, a2/* Single */) { return CS.Call(4, 12, 122, true, a0, a1, a2); },
            SphereCastAll$2: function (a0/* Ray */, a1/* Single */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 12, 123, true, a0, a1, a2, a3); },
            SphereCastAll$3: function (a0/* Ray */, a1/* Single */, a2/* Single */, a3/* Int32 */, a4/* QueryTriggerInteraction */) { return CS.Call(4, 12, 124, true, a0, a1, a2, a3, a4); },
            SphereCastAll$4: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */) { return CS.Call(4, 12, 125, true, a0, a1, a2); },
            SphereCastAll$5: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* Single */) { return CS.Call(4, 12, 126, true, a0, a1, a2, a3); },
            SphereCastAll$6: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 12, 127, true, a0, a1, a2, a3, a4); },
            SphereCastAll$7: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* Single */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 128, true, a0, a1, a2, a3, a4, a5); },
            SphereCastNonAlloc: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit[] */) { return CS.Call(4, 12, 129, true, a0, a1, a2); },
            SphereCastNonAlloc$1: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit[] */, a3/* Single */) { return CS.Call(4, 12, 130, true, a0, a1, a2, a3); },
            SphereCastNonAlloc$2: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit[] */, a3/* Single */, a4/* Int32 */) { return CS.Call(4, 12, 131, true, a0, a1, a2, a3, a4); },
            SphereCastNonAlloc$3: function (a0/* Ray */, a1/* Single */, a2/* RaycastHit[] */, a3/* Single */, a4/* Int32 */, a5/* QueryTriggerInteraction */) { return CS.Call(4, 12, 132, true, a0, a1, a2, a3, a4, a5); },
            SphereCastNonAlloc$4: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit[] */) { return CS.Call(4, 12, 133, true, a0, a1, a2, a3); },
            SphereCastNonAlloc$5: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Single */) { return CS.Call(4, 12, 134, true, a0, a1, a2, a3, a4); },
            SphereCastNonAlloc$6: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Single */, a5/* Int32 */) { return CS.Call(4, 12, 135, true, a0, a1, a2, a3, a4, a5); },
            SphereCastNonAlloc$7: function (a0/* Vector3 */, a1/* Single */, a2/* Vector3 */, a3/* RaycastHit[] */, a4/* Single */, a5/* Int32 */, a6/* QueryTriggerInteraction */) { return CS.Call(4, 12, 136, true, a0, a1, a2, a3, a4, a5, a6); },
        },
        ctor: function () {
            CS.Call(5, 12, 0, true, this);
        },
    });
    if ($hc < 14) { return; }
     
    Bridge.define("UnityEngine.Rect", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Rect(); },
            MinMaxRect: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 13, 10, true, a0, a1, a2, a3); },
            NormalizedToPoint: function (a0/* Rect */, a1/* Vector2 */) { return CS.Call(4, 13, 11, true, a0, a1); },
            op_Equality: function (a0/* Rect */, a1/* Rect */) { return CS.Call(4, 13, 12, true, a0, a1); },
            op_Inequality: function (a0/* Rect */, a1/* Rect */) { return CS.Call(4, 13, 13, true, a0, a1); },
            PointToNormalized: function (a0/* Rect */, a1/* Vector2 */) { return CS.Call(4, 13, 14, true, a0, a1); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Rect)) {
                return false;
            }
            return true;
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.Rect();
            return s;
        },
        ctor: function () {
            CS.Call(5, 13, 0, true, this);
        },
        $ctor1: function (a0, a1, a2, a3) {
            CS.Call(5, 13, 1, true, this, a0, a1, a2, a3);
        },
        $ctor2: function (a0) {
            CS.Call(5, 13, 2, true, this, a0);
        },
        $ctor3: function (a0, a1) {
            CS.Call(5, 13, 3, true, this, a0, a1);
        },
        getcenter: function () { return CS.Call(2, 13, 0, false, this); },
        setcenter: function (v) { return CS.Call(3, 13, 0, false, this, v); },
        getheight: function () { return CS.Call(2, 13, 1, false, this); },
        setheight: function (v) { return CS.Call(3, 13, 1, false, this, v); },
        getmax: function () { return CS.Call(2, 13, 2, false, this); },
        setmax: function (v) { return CS.Call(3, 13, 2, false, this, v); },
        getmin: function () { return CS.Call(2, 13, 3, false, this); },
        setmin: function (v) { return CS.Call(3, 13, 3, false, this, v); },
        getposition: function () { return CS.Call(2, 13, 4, false, this); },
        setposition: function (v) { return CS.Call(3, 13, 4, false, this, v); },
        getsize: function () { return CS.Call(2, 13, 5, false, this); },
        setsize: function (v) { return CS.Call(3, 13, 5, false, this, v); },
        getwidth: function () { return CS.Call(2, 13, 6, false, this); },
        setwidth: function (v) { return CS.Call(3, 13, 6, false, this, v); },
        getx: function () { return CS.Call(2, 13, 7, false, this); },
        setx: function (v) { return CS.Call(3, 13, 7, false, this, v); },
        getxMax: function () { return CS.Call(2, 13, 8, false, this); },
        setxMax: function (v) { return CS.Call(3, 13, 8, false, this, v); },
        getxMin: function () { return CS.Call(2, 13, 9, false, this); },
        setxMin: function (v) { return CS.Call(3, 13, 9, false, this, v); },
        gety: function () { return CS.Call(2, 13, 10, false, this); },
        sety: function (v) { return CS.Call(3, 13, 10, false, this, v); },
        getyMax: function () { return CS.Call(2, 13, 11, false, this); },
        setyMax: function (v) { return CS.Call(3, 13, 11, false, this, v); },
        getyMin: function () { return CS.Call(2, 13, 12, false, this); },
        setyMin: function (v) { return CS.Call(3, 13, 12, false, this, v); },
        Contains: function (a0/* Vector2 */) { return CS.Call(4, 13, 0, false, this, a0); },
        Contains$1: function (a0/* Vector3 */) { return CS.Call(4, 13, 1, false, this, a0); },
        Contains$2: function (a0/* Vector3 */, a1/* Boolean */) { return CS.Call(4, 13, 2, false, this, a0, a1); },
        Equals: function (a0/* Object */) { return CS.Call(4, 13, 3, false, this, a0); },
        GetHashCode: function () { return CS.Call(4, 13, 4, false, this); },
        Overlaps: function (a0/* Rect */) { return CS.Call(4, 13, 5, false, this, a0); },
        Overlaps$1: function (a0/* Rect */, a1/* Boolean */) { return CS.Call(4, 13, 6, false, this, a0, a1); },
        Set: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 13, 7, false, this, a0, a1, a2, a3); },
        ToString: function () { return CS.Call(4, 13, 8, false, this); },
        ToString$1: function (a0/* String */) { return CS.Call(4, 13, 9, false, this, a0); },
    });
    if ($hc < 15) { return; }
     
    Bridge.define("UnityEngine.NavMeshPath", {
        statics: {
        },
        ctor: function () {
            CS.Call(5, 14, 0, true, this);
        },
        getcorners: function () { return CS.Call(2, 14, 0, false, this); },
        setcorners: function (v) { return CS.Call(3, 14, 0, false, this, v); },
        getstatus: function () { return CS.Call(2, 14, 1, false, this); },
        setstatus: function (v) { return CS.Call(3, 14, 1, false, this, v); },
        ClearCorners: function () { return CS.Call(4, 14, 0, false, this); },
        GetCornersNonAlloc: function (a0/* Vector3[] */) { return CS.Call(4, 14, 1, false, this, a0); },
    });
    if ($hc < 16) { return; }
     
    Bridge.define("UnityEngine.Screen", {
        statics: {
            getautorotateToLandscapeLeft: function () { return CS.Call(2, 15, 0, true); },
            setautorotateToLandscapeLeft: function (v) { return CS.Call(3, 15, 0, true, v); },
            getautorotateToLandscapeRight: function () { return CS.Call(2, 15, 1, true); },
            setautorotateToLandscapeRight: function (v) { return CS.Call(3, 15, 1, true, v); },
            getautorotateToPortrait: function () { return CS.Call(2, 15, 2, true); },
            setautorotateToPortrait: function (v) { return CS.Call(3, 15, 2, true, v); },
            getautorotateToPortraitUpsideDown: function () { return CS.Call(2, 15, 3, true); },
            setautorotateToPortraitUpsideDown: function (v) { return CS.Call(3, 15, 3, true, v); },
            getcurrentResolution: function () { return CS.Call(2, 15, 4, true); },
            setcurrentResolution: function (v) { return CS.Call(3, 15, 4, true, v); },
            getdpi: function () { return CS.Call(2, 15, 5, true); },
            setdpi: function (v) { return CS.Call(3, 15, 5, true, v); },
            getfullScreen: function () { return CS.Call(2, 15, 6, true); },
            setfullScreen: function (v) { return CS.Call(3, 15, 6, true, v); },
            getheight: function () { return CS.Call(2, 15, 7, true); },
            setheight: function (v) { return CS.Call(3, 15, 7, true, v); },
            getorientation: function () { return CS.Call(2, 15, 8, true); },
            setorientation: function (v) { return CS.Call(3, 15, 8, true, v); },
            getresolutions: function () { return CS.Call(2, 15, 9, true); },
            setresolutions: function (v) { return CS.Call(3, 15, 9, true, v); },
            getsleepTimeout: function () { return CS.Call(2, 15, 10, true); },
            setsleepTimeout: function (v) { return CS.Call(3, 15, 10, true, v); },
            getwidth: function () { return CS.Call(2, 15, 11, true); },
            setwidth: function (v) { return CS.Call(3, 15, 11, true, v); },
            SetResolution: function (a0/* Int32 */, a1/* Int32 */, a2/* Boolean */) { return CS.Call(4, 15, 0, true, a0, a1, a2); },
            SetResolution$1: function (a0/* Int32 */, a1/* Int32 */, a2/* Boolean */, a3/* Int32 */) { return CS.Call(4, 15, 1, true, a0, a1, a2, a3); },
        },
        ctor: function () {
            CS.Call(5, 15, 0, true, this);
        },
    });
    if ($hc < 17) { return; }
     
    Bridge.define("System.Runtime.Serialization.ISerializable", {
        $kind: "interface",
        statics: {
        },
        GetObjectData: function (a0/* SerializationInfo */, a1/* StreamingContext */) { return CS.Call(4, 16, 0, false, this, a0, a1); },
    });
    if ($hc < 18) { return; }
     
    Bridge.define("UnityEngine.AnimatorStateInfo", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.AnimatorStateInfo(); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.AnimatorStateInfo)) {
                return false;
            }
            return true;
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.AnimatorStateInfo();
            return s;
        },
        ctor: function () {
            CS.Call(5, 17, 0, true, this);
        },
        getfullPathHash: function () { return CS.Call(2, 17, 0, false, this); },
        setfullPathHash: function (v) { return CS.Call(3, 17, 0, false, this, v); },
        getlength: function () { return CS.Call(2, 17, 1, false, this); },
        setlength: function (v) { return CS.Call(3, 17, 1, false, this, v); },
        getloop: function () { return CS.Call(2, 17, 2, false, this); },
        setloop: function (v) { return CS.Call(3, 17, 2, false, this, v); },
        getnormalizedTime: function () { return CS.Call(2, 17, 3, false, this); },
        setnormalizedTime: function (v) { return CS.Call(3, 17, 3, false, this, v); },
        getshortNameHash: function () { return CS.Call(2, 17, 4, false, this); },
        setshortNameHash: function (v) { return CS.Call(3, 17, 4, false, this, v); },
        getspeed: function () { return CS.Call(2, 17, 5, false, this); },
        setspeed: function (v) { return CS.Call(3, 17, 5, false, this, v); },
        getspeedMultiplier: function () { return CS.Call(2, 17, 6, false, this); },
        setspeedMultiplier: function (v) { return CS.Call(3, 17, 6, false, this, v); },
        gettagHash: function () { return CS.Call(2, 17, 7, false, this); },
        settagHash: function (v) { return CS.Call(3, 17, 7, false, this, v); },
        IsName: function (a0/* String */) { return CS.Call(4, 17, 0, false, this, a0); },
        IsTag: function (a0/* String */) { return CS.Call(4, 17, 1, false, this, a0); },
    });
    if ($hc < 19) { return; }
     
    Bridge.define("System.Collections.IDictionary", {
        inherits: [System.Collections.IEnumerable, System.Collections.ICollection],
        $kind: "interface",
        statics: {
        },
        getIsFixedSize: function () { return CS.Call(2, 18, 0, false, this); },
        setIsFixedSize: function (v) { return CS.Call(3, 18, 0, false, this, v); },
        getIsReadOnly: function () { return CS.Call(2, 18, 1, false, this); },
        setIsReadOnly: function (v) { return CS.Call(3, 18, 1, false, this, v); },
        getItem: function (ind0) { return CS.Call(2, 18, 2, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 18, 2, false, this, ind0, v); },
        getKeys: function () { return CS.Call(2, 18, 3, false, this); },
        setKeys: function (v) { return CS.Call(3, 18, 3, false, this, v); },
        getValues: function () { return CS.Call(2, 18, 4, false, this); },
        setValues: function (v) { return CS.Call(3, 18, 4, false, this, v); },
        Add: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 18, 0, false, this, a0, a1); },
        Clear: function () { return CS.Call(4, 18, 1, false, this); },
        Contains: function (a0/* Object */) { return CS.Call(4, 18, 2, false, this, a0); },
        GetEnumerator: function () { return CS.Call(4, 18, 3, false, this); },
        Remove: function (a0/* Object */) { return CS.Call(4, 18, 4, false, this, a0); },
    });
    if ($hc < 20) { return; }
     
    Bridge.define("UnityEngine.Debug", {
        statics: {
            getdeveloperConsoleVisible: function () { return CS.Call(2, 19, 0, true); },
            setdeveloperConsoleVisible: function (v) { return CS.Call(3, 19, 0, true, v); },
            getisDebugBuild: function () { return CS.Call(2, 19, 1, true); },
            setisDebugBuild: function (v) { return CS.Call(3, 19, 1, true, v); },
            getlogger: function () { return CS.Call(2, 19, 2, true); },
            setlogger: function (v) { return CS.Call(3, 19, 2, true, v); },
            Assert: function (a0/* Boolean */) { return CS.Call(4, 19, 0, true, a0); },
            Assert$1: function (a0/* Boolean */, a1/* Object */) { return CS.Call(4, 19, 1, true, a0, a1); },
            Assert$2: function (a0/* Boolean */, a1/* Object */, a2/* Object */) { return CS.Call(4, 19, 2, true, a0, a1, a2); },
            Assert$3: function (a0/* Boolean */, a1/* String */) { return CS.Call(4, 19, 3, true, a0, a1); },
            Assert$4: function (a0/* Boolean */, a1/* String */, a2/* Object */) { return CS.Call(4, 19, 4, true, a0, a1, a2); },
            Assert$5: function (a0/* Boolean */, a1/* Object */) { return CS.Call(4, 19, 5, true, a0, a1); },
            AssertFormat: function (a0/* Boolean */, a1/* String */, a2/* Object[] */) { return CS.Call(4, 19, 6, true, a0, a1, a2); },
            AssertFormat$1: function (a0/* Boolean */, a1/* Object */, a2/* String */, a3/* Object[] */) { return CS.Call(4, 19, 7, true, a0, a1, a2, a3); },
            Break: function () { return CS.Call(4, 19, 8, true); },
            ClearDeveloperConsole: function () { return CS.Call(4, 19, 9, true); },
            DebugBreak: function () { return CS.Call(4, 19, 10, true); },
            DrawLine: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 19, 11, true, a0, a1); },
            DrawLine$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Color */) { return CS.Call(4, 19, 12, true, a0, a1, a2); },
            DrawLine$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Color */, a3/* Single */) { return CS.Call(4, 19, 13, true, a0, a1, a2, a3); },
            DrawLine$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Color */, a3/* Single */, a4/* Boolean */) { return CS.Call(4, 19, 14, true, a0, a1, a2, a3, a4); },
            DrawRay: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 19, 15, true, a0, a1); },
            DrawRay$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Color */) { return CS.Call(4, 19, 16, true, a0, a1, a2); },
            DrawRay$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Color */, a3/* Single */) { return CS.Call(4, 19, 17, true, a0, a1, a2, a3); },
            DrawRay$3: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Color */, a3/* Single */, a4/* Boolean */) { return CS.Call(4, 19, 18, true, a0, a1, a2, a3, a4); },
            Log: function (a0/* Object */) { return CS.Call(4, 19, 19, true, a0); },
            Log$1: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 19, 20, true, a0, a1); },
            LogAssertion: function (a0/* Object */) { return CS.Call(4, 19, 21, true, a0); },
            LogAssertion$1: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 19, 22, true, a0, a1); },
            LogAssertionFormat: function (a0/* String */, a1/* Object[] */) { return CS.Call(4, 19, 23, true, a0, a1); },
            LogAssertionFormat$1: function (a0/* Object */, a1/* String */, a2/* Object[] */) { return CS.Call(4, 19, 24, true, a0, a1, a2); },
            LogError: function (a0/* Object */) { return CS.Call(4, 19, 25, true, a0); },
            LogError$1: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 19, 26, true, a0, a1); },
            LogErrorFormat: function (a0/* String */, a1/* Object[] */) { return CS.Call(4, 19, 27, true, a0, a1); },
            LogErrorFormat$1: function (a0/* Object */, a1/* String */, a2/* Object[] */) { return CS.Call(4, 19, 28, true, a0, a1, a2); },
            LogException: function (a0/* Exception */) { return CS.Call(4, 19, 29, true, a0); },
            LogException$1: function (a0/* Exception */, a1/* Object */) { return CS.Call(4, 19, 30, true, a0, a1); },
            LogFormat: function (a0/* String */, a1/* Object[] */) { return CS.Call(4, 19, 31, true, a0, a1); },
            LogFormat$1: function (a0/* Object */, a1/* String */, a2/* Object[] */) { return CS.Call(4, 19, 32, true, a0, a1, a2); },
            LogWarning: function (a0/* Object */) { return CS.Call(4, 19, 33, true, a0); },
            LogWarning$1: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 19, 34, true, a0, a1); },
            LogWarningFormat: function (a0/* String */, a1/* Object[] */) { return CS.Call(4, 19, 35, true, a0, a1); },
            LogWarningFormat$1: function (a0/* Object */, a1/* String */, a2/* Object[] */) { return CS.Call(4, 19, 36, true, a0, a1, a2); },
        },
        ctor: function () {
            CS.Call(5, 19, 0, true, this);
        },
    });
    if ($hc < 21) { return; }
     
    Bridge.define("UnityEngine.SceneManagement.SceneManager", {
        statics: {
            getsceneCount: function () { return CS.Call(2, 20, 0, true); },
            setsceneCount: function (v) { return CS.Call(3, 20, 0, true, v); },
            getsceneCountInBuildSettings: function () { return CS.Call(2, 20, 1, true); },
            setsceneCountInBuildSettings: function (v) { return CS.Call(3, 20, 1, true, v); },
            CreateScene: function (a0/* String */) { return CS.Call(4, 20, 0, true, a0); },
            GetActiveScene: function () { return CS.Call(4, 20, 1, true); },
            GetSceneAt: function (a0/* Int32 */) { return CS.Call(4, 20, 2, true, a0); },
            GetSceneByName: function (a0/* String */) { return CS.Call(4, 20, 3, true, a0); },
            GetSceneByPath: function (a0/* String */) { return CS.Call(4, 20, 4, true, a0); },
            LoadScene: function (a0/* Int32 */) { return CS.Call(4, 20, 5, true, a0); },
            LoadScene$1: function (a0/* Int32 */, a1/* LoadSceneMode */) { return CS.Call(4, 20, 6, true, a0, a1); },
            LoadScene$2: function (a0/* String */) { return CS.Call(4, 20, 7, true, a0); },
            LoadScene$3: function (a0/* String */, a1/* LoadSceneMode */) { return CS.Call(4, 20, 8, true, a0, a1); },
            LoadSceneAsync: function (a0/* Int32 */) { return CS.Call(4, 20, 9, true, a0); },
            LoadSceneAsync$1: function (a0/* Int32 */, a1/* LoadSceneMode */) { return CS.Call(4, 20, 10, true, a0, a1); },
            LoadSceneAsync$2: function (a0/* String */) { return CS.Call(4, 20, 11, true, a0); },
            LoadSceneAsync$3: function (a0/* String */, a1/* LoadSceneMode */) { return CS.Call(4, 20, 12, true, a0, a1); },
            MergeScenes: function (a0/* Scene */, a1/* Scene */) { return CS.Call(4, 20, 13, true, a0, a1); },
            MoveGameObjectToScene: function (a0/* GameObject */, a1/* Scene */) { return CS.Call(4, 20, 14, true, a0, a1); },
            SetActiveScene: function (a0/* Scene */) { return CS.Call(4, 20, 15, true, a0); },
            UnloadScene: function (a0/* Int32 */) { return CS.Call(4, 20, 16, true, a0); },
            UnloadScene$1: function (a0/* String */) { return CS.Call(4, 20, 17, true, a0); },
            UnloadScene$2: function (a0/* Scene */) { return CS.Call(4, 20, 18, true, a0); },
        },
        ctor: function () {
            CS.Call(5, 20, 0, true, this);
        },
    });
    if ($hc < 22) { return; }
     
    Bridge.define("UnityEngine.Input", {
        statics: {
            getacceleration: function () { return CS.Call(2, 21, 0, true); },
            setacceleration: function (v) { return CS.Call(3, 21, 0, true, v); },
            getaccelerationEventCount: function () { return CS.Call(2, 21, 1, true); },
            setaccelerationEventCount: function (v) { return CS.Call(3, 21, 1, true, v); },
            getaccelerationEvents: function () { return CS.Call(2, 21, 2, true); },
            setaccelerationEvents: function (v) { return CS.Call(3, 21, 2, true, v); },
            getanyKey: function () { return CS.Call(2, 21, 3, true); },
            setanyKey: function (v) { return CS.Call(3, 21, 3, true, v); },
            getanyKeyDown: function () { return CS.Call(2, 21, 4, true); },
            setanyKeyDown: function (v) { return CS.Call(3, 21, 4, true, v); },
            getbackButtonLeavesApp: function () { return CS.Call(2, 21, 5, true); },
            setbackButtonLeavesApp: function (v) { return CS.Call(3, 21, 5, true, v); },
            getcompass: function () { return CS.Call(2, 21, 6, true); },
            setcompass: function (v) { return CS.Call(3, 21, 6, true, v); },
            getcompensateSensors: function () { return CS.Call(2, 21, 7, true); },
            setcompensateSensors: function (v) { return CS.Call(3, 21, 7, true, v); },
            getcompositionCursorPos: function () { return CS.Call(2, 21, 8, true); },
            setcompositionCursorPos: function (v) { return CS.Call(3, 21, 8, true, v); },
            getcompositionString: function () { return CS.Call(2, 21, 9, true); },
            setcompositionString: function (v) { return CS.Call(3, 21, 9, true, v); },
            getdeviceOrientation: function () { return CS.Call(2, 21, 10, true); },
            setdeviceOrientation: function (v) { return CS.Call(3, 21, 10, true, v); },
            getgyro: function () { return CS.Call(2, 21, 11, true); },
            setgyro: function (v) { return CS.Call(3, 21, 11, true, v); },
            getimeCompositionMode: function () { return CS.Call(2, 21, 12, true); },
            setimeCompositionMode: function (v) { return CS.Call(3, 21, 12, true, v); },
            getimeIsSelected: function () { return CS.Call(2, 21, 13, true); },
            setimeIsSelected: function (v) { return CS.Call(3, 21, 13, true, v); },
            getinputString: function () { return CS.Call(2, 21, 14, true); },
            setinputString: function (v) { return CS.Call(3, 21, 14, true, v); },
            getlocation: function () { return CS.Call(2, 21, 15, true); },
            setlocation: function (v) { return CS.Call(3, 21, 15, true, v); },
            getmousePosition: function () { return CS.Call(2, 21, 16, true); },
            setmousePosition: function (v) { return CS.Call(3, 21, 16, true, v); },
            getmousePresent: function () { return CS.Call(2, 21, 17, true); },
            setmousePresent: function (v) { return CS.Call(3, 21, 17, true, v); },
            getmouseScrollDelta: function () { return CS.Call(2, 21, 18, true); },
            setmouseScrollDelta: function (v) { return CS.Call(3, 21, 18, true, v); },
            getmultiTouchEnabled: function () { return CS.Call(2, 21, 19, true); },
            setmultiTouchEnabled: function (v) { return CS.Call(3, 21, 19, true, v); },
            getsimulateMouseWithTouches: function () { return CS.Call(2, 21, 20, true); },
            setsimulateMouseWithTouches: function (v) { return CS.Call(3, 21, 20, true, v); },
            getstylusTouchSupported: function () { return CS.Call(2, 21, 21, true); },
            setstylusTouchSupported: function (v) { return CS.Call(3, 21, 21, true, v); },
            gettouchCount: function () { return CS.Call(2, 21, 22, true); },
            settouchCount: function (v) { return CS.Call(3, 21, 22, true, v); },
            gettouches: function () { return CS.Call(2, 21, 23, true); },
            settouches: function (v) { return CS.Call(3, 21, 23, true, v); },
            gettouchPressureSupported: function () { return CS.Call(2, 21, 24, true); },
            settouchPressureSupported: function (v) { return CS.Call(3, 21, 24, true, v); },
            gettouchSupported: function () { return CS.Call(2, 21, 25, true); },
            settouchSupported: function (v) { return CS.Call(3, 21, 25, true, v); },
            GetAccelerationEvent: function (a0/* Int32 */) { return CS.Call(4, 21, 0, true, a0); },
            GetAxis: function (a0/* String */) { return CS.Call(4, 21, 1, true, a0); },
            GetAxisRaw: function (a0/* String */) { return CS.Call(4, 21, 2, true, a0); },
            GetButton: function (a0/* String */) { return CS.Call(4, 21, 3, true, a0); },
            GetButtonDown: function (a0/* String */) { return CS.Call(4, 21, 4, true, a0); },
            GetButtonUp: function (a0/* String */) { return CS.Call(4, 21, 5, true, a0); },
            GetJoystickNames: function () { return CS.Call(4, 21, 6, true); },
            GetKey: function (a0/* String */) { return CS.Call(4, 21, 7, true, a0); },
            GetKey$1: function (a0/* KeyCode */) { return CS.Call(4, 21, 8, true, a0); },
            GetKeyDown: function (a0/* String */) { return CS.Call(4, 21, 9, true, a0); },
            GetKeyDown$1: function (a0/* KeyCode */) { return CS.Call(4, 21, 10, true, a0); },
            GetKeyUp: function (a0/* String */) { return CS.Call(4, 21, 11, true, a0); },
            GetKeyUp$1: function (a0/* KeyCode */) { return CS.Call(4, 21, 12, true, a0); },
            GetMouseButton: function (a0/* Int32 */) { return CS.Call(4, 21, 13, true, a0); },
            GetMouseButtonDown: function (a0/* Int32 */) { return CS.Call(4, 21, 14, true, a0); },
            GetMouseButtonUp: function (a0/* Int32 */) { return CS.Call(4, 21, 15, true, a0); },
            GetTouch: function (a0/* Int32 */) { return CS.Call(4, 21, 16, true, a0); },
            ResetInputAxes: function () { return CS.Call(4, 21, 17, true); },
        },
        ctor: function () {
            CS.Call(5, 21, 0, true, this);
        },
    });
    if ($hc < 23) { return; }
     
    Bridge.define("UnityEngine.RaycastHit", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.RaycastHit(); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.RaycastHit)) {
                return false;
            }
            return true;
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.RaycastHit();
            return s;
        },
        ctor: function () {
            CS.Call(5, 22, 0, true, this);
        },
        getbarycentricCoordinate: function () { return CS.Call(2, 22, 0, false, this); },
        setbarycentricCoordinate: function (v) { return CS.Call(3, 22, 0, false, this, v); },
        getcollider: function () { return CS.Call(2, 22, 1, false, this); },
        setcollider: function (v) { return CS.Call(3, 22, 1, false, this, v); },
        getdistance: function () { return CS.Call(2, 22, 2, false, this); },
        setdistance: function (v) { return CS.Call(3, 22, 2, false, this, v); },
        getlightmapCoord: function () { return CS.Call(2, 22, 3, false, this); },
        setlightmapCoord: function (v) { return CS.Call(3, 22, 3, false, this, v); },
        getnormal: function () { return CS.Call(2, 22, 4, false, this); },
        setnormal: function (v) { return CS.Call(3, 22, 4, false, this, v); },
        getpoint: function () { return CS.Call(2, 22, 5, false, this); },
        setpoint: function (v) { return CS.Call(3, 22, 5, false, this, v); },
        getrigidbody: function () { return CS.Call(2, 22, 6, false, this); },
        setrigidbody: function (v) { return CS.Call(3, 22, 6, false, this, v); },
        gettextureCoord: function () { return CS.Call(2, 22, 7, false, this); },
        settextureCoord: function (v) { return CS.Call(3, 22, 7, false, this, v); },
        gettextureCoord2: function () { return CS.Call(2, 22, 8, false, this); },
        settextureCoord2: function (v) { return CS.Call(3, 22, 8, false, this, v); },
        gettransform: function () { return CS.Call(2, 22, 9, false, this); },
        settransform: function (v) { return CS.Call(3, 22, 9, false, this, v); },
        gettriangleIndex: function () { return CS.Call(2, 22, 10, false, this); },
        settriangleIndex: function (v) { return CS.Call(3, 22, 10, false, this, v); },
    });
    if ($hc < 24) { return; }
     
    Bridge.define("UnityEngine.Vector3", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Vector3(); },
            $fields: {
                kEpsilon: {
                    get: function () { return CS.Call(0, 23, 0, true); },
                    set: function (v) { return CS.Call(1, 23, 0, true, v); }
                },
            },
            getback: function () { return CS.Call(2, 23, 4, true); },
            setback: function (v) { return CS.Call(3, 23, 4, true, v); },
            getdown: function () { return CS.Call(2, 23, 5, true); },
            setdown: function (v) { return CS.Call(3, 23, 5, true, v); },
            getforward: function () { return CS.Call(2, 23, 6, true); },
            setforward: function (v) { return CS.Call(3, 23, 6, true, v); },
            getleft: function () { return CS.Call(2, 23, 7, true); },
            setleft: function (v) { return CS.Call(3, 23, 7, true, v); },
            getone: function () { return CS.Call(2, 23, 8, true); },
            setone: function (v) { return CS.Call(3, 23, 8, true, v); },
            getright: function () { return CS.Call(2, 23, 9, true); },
            setright: function (v) { return CS.Call(3, 23, 9, true, v); },
            getup: function () { return CS.Call(2, 23, 10, true); },
            setup: function (v) { return CS.Call(3, 23, 10, true, v); },
            getzero: function () { return CS.Call(2, 23, 11, true); },
            setzero: function (v) { return CS.Call(3, 23, 11, true, v); },
            Angle: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 7, true, a0, a1); },
            ClampMagnitude: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 23, 8, true, a0, a1); },
            Cross: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 9, true, a0, a1); },
            Distance: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 10, true, a0, a1); },
            Dot: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 11, true, a0, a1); },
            Lerp: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 23, 12, true, a0, a1, a2); },
            LerpUnclamped: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 23, 13, true, a0, a1, a2); },
            Magnitude: function (a0/* Vector3 */) { return CS.Call(4, 23, 14, true, a0); },
            Max: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 15, true, a0, a1); },
            Min: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 16, true, a0, a1); },
            MoveTowards: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 23, 17, true, a0, a1, a2); },
            Normalize: function (a0/* Vector3 */) { return CS.Call(4, 23, 18, true, a0); },
            op_Addition: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 19, true, a0, a1); },
            op_Division: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 23, 20, true, a0, a1); },
            op_Equality: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 21, true, a0, a1); },
            op_Inequality: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 22, true, a0, a1); },
            op_Multiply: function (a0/* Single */, a1/* Vector3 */) { return CS.Call(4, 23, 23, true, a0, a1); },
            op_Multiply$1: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 23, 24, true, a0, a1); },
            op_Subtraction: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 25, true, a0, a1); },
            op_UnaryNegation: function (a0/* Vector3 */) { return CS.Call(4, 23, 26, true, a0); },
            OrthoNormalize: function (a0/* Vector3& */, a1/* Vector3& */) { return CS.Call(4, 23, 27, true, a0, a1); },
            OrthoNormalize$1: function (a0/* Vector3& */, a1/* Vector3& */, a2/* Vector3& */) { return CS.Call(4, 23, 28, true, a0, a1, a2); },
            Project: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 29, true, a0, a1); },
            ProjectOnPlane: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 30, true, a0, a1); },
            Reflect: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 31, true, a0, a1); },
            RotateTowards: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */, a3/* Single */) { return CS.Call(4, 23, 32, true, a0, a1, a2, a3); },
            Scale: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 23, 33, true, a0, a1); },
            Slerp: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 23, 34, true, a0, a1, a2); },
            SlerpUnclamped: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 23, 35, true, a0, a1, a2); },
            SmoothDamp: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3& */, a3/* Single */) { return CS.Call(4, 23, 36, true, a0, a1, a2, a3); },
            SmoothDamp$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3& */, a3/* Single */, a4/* Single */) { return CS.Call(4, 23, 37, true, a0, a1, a2, a3, a4); },
            SmoothDamp$2: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Vector3& */, a3/* Single */, a4/* Single */, a5/* Single */) { return CS.Call(4, 23, 38, true, a0, a1, a2, a3, a4, a5); },
            SqrMagnitude: function (a0/* Vector3 */) { return CS.Call(4, 23, 39, true, a0); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Vector3)) {
                return false;
            }
            Bridge.equals(this.kEpsilon, o.kEpsilon) && Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y) && Bridge.equals(this.z, o.z);
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.Vector3();
            s.kEpsilon = this.kEpsilon;
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            return s;
        },
        ctor: function () {
            CS.Call(5, 23, 0, true, this);
        },
        $ctor1: function (a0, a1) {
            CS.Call(5, 23, 1, true, this, a0, a1);
        },
        $ctor2: function (a0, a1, a2) {
            CS.Call(5, 23, 2, true, this, a0, a1, a2);
        },
        $fields: {
            x: {
                get: function () { return CS.Call(0, 23, 1, false, this); },
                set: function (v) { return CS.Call(1, 23, 1, false, this, v); }
            },
            y: {
                get: function () { return CS.Call(0, 23, 2, false, this); },
                set: function (v) { return CS.Call(1, 23, 2, false, this, v); }
            },
            z: {
                get: function () { return CS.Call(0, 23, 3, false, this); },
                set: function (v) { return CS.Call(1, 23, 3, false, this, v); }
            },
        },
        getItem: function (ind0) { return CS.Call(2, 23, 0, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 23, 0, false, this, ind0, v); },
        getmagnitude: function () { return CS.Call(2, 23, 1, false, this); },
        setmagnitude: function (v) { return CS.Call(3, 23, 1, false, this, v); },
        getnormalized: function () { return CS.Call(2, 23, 2, false, this); },
        setnormalized: function (v) { return CS.Call(3, 23, 2, false, this, v); },
        getsqrMagnitude: function () { return CS.Call(2, 23, 3, false, this); },
        setsqrMagnitude: function (v) { return CS.Call(3, 23, 3, false, this, v); },
        Equals: function (a0/* Object */) { return CS.Call(4, 23, 0, false, this, a0); },
        GetHashCode: function () { return CS.Call(4, 23, 1, false, this); },
        Normalize: function () { return CS.Call(4, 23, 2, false, this); },
        Scale: function (a0/* Vector3 */) { return CS.Call(4, 23, 3, false, this, a0); },
        Set: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 23, 4, false, this, a0, a1, a2); },
        ToString: function () { return CS.Call(4, 23, 5, false, this); },
        ToString$1: function (a0/* String */) { return CS.Call(4, 23, 6, false, this, a0); },
    });
    if ($hc < 25) { return; }
     
    Bridge.define("UnityEngine.Object", {
        statics: {
            Destroy: function (a0/* Object */) { return CS.Call(4, 24, 4, true, a0); },
            Destroy$1: function (a0/* Object */, a1/* Single */) { return CS.Call(4, 24, 5, true, a0, a1); },
            DestroyImmediate: function (a0/* Object */) { return CS.Call(4, 24, 6, true, a0); },
            DestroyImmediate$1: function (a0/* Object */, a1/* Boolean */) { return CS.Call(4, 24, 7, true, a0, a1); },
            DestroyObject: function (a0/* Object */) { return CS.Call(4, 24, 8, true, a0); },
            DestroyObject$1: function (a0/* Object */, a1/* Single */) { return CS.Call(4, 24, 9, true, a0, a1); },
            DontDestroyOnLoad: function (a0/* Object */) { return CS.Call(4, 24, 10, true, a0); },
            FindObjectOfType: function (T) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 24, 11, true, $T);
            },
            FindObjectOfType$1: function (a0/* Type */) { return CS.Call(4, 24, 12, true, a0); },
            FindObjectsOfType: function (T) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 24, 13, true, $T);
            },
            FindObjectsOfType$1: function (a0/* Type */) { return CS.Call(4, 24, 14, true, a0); },
            Instantiate: function (T, a0/* T */) {
                var $T = Bridge.Reflection.getTypeFullName(T);
                return CS.Call(4, 24, 15, true, $T, a0);
            },
            Instantiate$1: function (a0/* Object */) { return CS.Call(4, 24, 16, true, a0); },
            Instantiate$2: function (a0/* Object */, a1/* Transform */) { return CS.Call(4, 24, 17, true, a0, a1); },
            Instantiate$3: function (a0/* Object */, a1/* Transform */, a2/* Boolean */) { return CS.Call(4, 24, 18, true, a0, a1, a2); },
            Instantiate$4: function (a0/* Object */, a1/* Vector3 */, a2/* Quaternion */) { return CS.Call(4, 24, 19, true, a0, a1, a2); },
            Instantiate$5: function (a0/* Object */, a1/* Vector3 */, a2/* Quaternion */, a3/* Transform */) { return CS.Call(4, 24, 20, true, a0, a1, a2, a3); },
            op_Equality: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 24, 21, true, a0, a1); },
            op_Implicit: function (a0/* Object */) { return CS.Call(4, 24, 22, true, a0); },
            op_Inequality: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 24, 23, true, a0, a1); },
        },
        ctor: function () {
            CS.Call(5, 24, 0, true, this);
        },
        gethideFlags: function () { return CS.Call(2, 24, 0, false, this); },
        sethideFlags: function (v) { return CS.Call(3, 24, 0, false, this, v); },
        getname: function () { return CS.Call(2, 24, 1, false, this); },
        setname: function (v) { return CS.Call(3, 24, 1, false, this, v); },
        Equals: function (a0/* Object */) { return CS.Call(4, 24, 0, false, this, a0); },
        GetHashCode: function () { return CS.Call(4, 24, 1, false, this); },
        GetInstanceID: function () { return CS.Call(4, 24, 2, false, this); },
        ToString: function () { return CS.Call(4, 24, 3, false, this); },
    });
    if ($hc < 26) { return; }
     
    Bridge.define("System.Runtime.Serialization.IDeserializationCallback", {
        $kind: "interface",
        statics: {
        },
        OnDeserialization: function (a0/* Object */) { return CS.Call(4, 25, 0, false, this, a0); },
    });
    if ($hc < 27) { return; }
     
    Bridge.define("UnityEngine.Vector2", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new UnityEngine.Vector2(); },
            $fields: {
                kEpsilon: {
                    get: function () { return CS.Call(0, 26, 0, true); },
                    set: function (v) { return CS.Call(1, 26, 0, true, v); }
                },
            },
            getdown: function () { return CS.Call(2, 26, 4, true); },
            setdown: function (v) { return CS.Call(3, 26, 4, true, v); },
            getleft: function () { return CS.Call(2, 26, 5, true); },
            setleft: function (v) { return CS.Call(3, 26, 5, true, v); },
            getone: function () { return CS.Call(2, 26, 6, true); },
            setone: function (v) { return CS.Call(3, 26, 6, true, v); },
            getright: function () { return CS.Call(2, 26, 7, true); },
            setright: function (v) { return CS.Call(3, 26, 7, true, v); },
            getup: function () { return CS.Call(2, 26, 8, true); },
            setup: function (v) { return CS.Call(3, 26, 8, true, v); },
            getzero: function () { return CS.Call(2, 26, 9, true); },
            setzero: function (v) { return CS.Call(3, 26, 9, true, v); },
            Angle: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 8, true, a0, a1); },
            ClampMagnitude: function (a0/* Vector2 */, a1/* Single */) { return CS.Call(4, 26, 9, true, a0, a1); },
            Distance: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 10, true, a0, a1); },
            Dot: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 11, true, a0, a1); },
            Lerp: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 26, 12, true, a0, a1, a2); },
            LerpUnclamped: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 26, 13, true, a0, a1, a2); },
            Max: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 14, true, a0, a1); },
            Min: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 15, true, a0, a1); },
            MoveTowards: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Single */) { return CS.Call(4, 26, 16, true, a0, a1, a2); },
            op_Addition: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 17, true, a0, a1); },
            op_Division: function (a0/* Vector2 */, a1/* Single */) { return CS.Call(4, 26, 18, true, a0, a1); },
            op_Equality: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 19, true, a0, a1); },
            op_Implicit: function (a0/* Vector3 */) { return CS.Call(4, 26, 20, true, a0); },
            op_Implicit$1: function (a0/* Vector2 */) { return CS.Call(4, 26, 21, true, a0); },
            op_Inequality: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 22, true, a0, a1); },
            op_Multiply: function (a0/* Single */, a1/* Vector2 */) { return CS.Call(4, 26, 23, true, a0, a1); },
            op_Multiply$1: function (a0/* Vector2 */, a1/* Single */) { return CS.Call(4, 26, 24, true, a0, a1); },
            op_Subtraction: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 25, true, a0, a1); },
            op_UnaryNegation: function (a0/* Vector2 */) { return CS.Call(4, 26, 26, true, a0); },
            Reflect: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 27, true, a0, a1); },
            Scale: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 26, 28, true, a0, a1); },
            SmoothDamp: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Vector2& */, a3/* Single */) { return CS.Call(4, 26, 29, true, a0, a1, a2, a3); },
            SmoothDamp$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Vector2& */, a3/* Single */, a4/* Single */) { return CS.Call(4, 26, 30, true, a0, a1, a2, a3, a4); },
            SmoothDamp$2: function (a0/* Vector2 */, a1/* Vector2 */, a2/* Vector2& */, a3/* Single */, a4/* Single */, a5/* Single */) { return CS.Call(4, 26, 31, true, a0, a1, a2, a3, a4, a5); },
            SqrMagnitude: function (a0/* Vector2 */) { return CS.Call(4, 26, 32, true, a0); },
        },
        equals: function (o) {
            if (!Bridge.is(o, UnityEngine.Vector2)) {
                return false;
            }
            Bridge.equals(this.kEpsilon, o.kEpsilon) && Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        $clone: function (to) {
            return this; // don't clone
             
            var s = to || new UnityEngine.Vector2();
            s.kEpsilon = this.kEpsilon;
            s.x = this.x;
            s.y = this.y;
            return s;
        },
        ctor: function () {
            CS.Call(5, 26, 0, true, this);
        },
        $ctor1: function (a0, a1) {
            CS.Call(5, 26, 1, true, this, a0, a1);
        },
        $fields: {
            x: {
                get: function () { return CS.Call(0, 26, 1, false, this); },
                set: function (v) { return CS.Call(1, 26, 1, false, this, v); }
            },
            y: {
                get: function () { return CS.Call(0, 26, 2, false, this); },
                set: function (v) { return CS.Call(1, 26, 2, false, this, v); }
            },
        },
        getItem: function (ind0) { return CS.Call(2, 26, 0, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 26, 0, false, this, ind0, v); },
        getmagnitude: function () { return CS.Call(2, 26, 1, false, this); },
        setmagnitude: function (v) { return CS.Call(3, 26, 1, false, this, v); },
        getnormalized: function () { return CS.Call(2, 26, 2, false, this); },
        setnormalized: function (v) { return CS.Call(3, 26, 2, false, this, v); },
        getsqrMagnitude: function () { return CS.Call(2, 26, 3, false, this); },
        setsqrMagnitude: function (v) { return CS.Call(3, 26, 3, false, this, v); },
        Equals: function (a0/* Object */) { return CS.Call(4, 26, 0, false, this, a0); },
        GetHashCode: function () { return CS.Call(4, 26, 1, false, this); },
        Normalize: function () { return CS.Call(4, 26, 2, false, this); },
        Scale: function (a0/* Vector2 */) { return CS.Call(4, 26, 3, false, this, a0); },
        Set: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 26, 4, false, this, a0, a1); },
        SqrMagnitude: function () { return CS.Call(4, 26, 5, false, this); },
        ToString: function () { return CS.Call(4, 26, 6, false, this); },
        ToString$1: function (a0/* String */) { return CS.Call(4, 26, 7, false, this, a0); },
    });
    if ($hc < 28) { return; }
     
    Bridge.define("ResourceManager", {
        statics: {
            CreatPrefab: function (a0/* String */, a1/* GameObject */) { return CS.Call(4, 27, 0, true, a0, a1); },
            Load: function (a0/* String */, a1/* String */) { return CS.Call(4, 27, 1, true, a0, a1); },
            LoadPrefab: function (a0/* String */, a1/* String */) { return CS.Call(4, 27, 2, true, a0, a1); },
            Unload: function (a0/* String */, a1/* String */) { return CS.Call(4, 27, 3, true, a0, a1); },
        },
        ctor: function () {
            CS.Call(5, 27, 0, true, this);
        },
    });
    if ($hc < 29) { return; }
     
    Bridge.define("UnityEngine.Sprite", {
        inherits: [UnityEngine.Object],
        statics: {
            Create: function (a0/* Texture2D */, a1/* Rect */, a2/* Vector2 */) { return CS.Call(4, 28, 1, true, a0, a1, a2); },
            Create$1: function (a0/* Texture2D */, a1/* Rect */, a2/* Vector2 */, a3/* Single */) { return CS.Call(4, 28, 2, true, a0, a1, a2, a3); },
            Create$2: function (a0/* Texture2D */, a1/* Rect */, a2/* Vector2 */, a3/* Single */, a4/* UInt32 */) { return CS.Call(4, 28, 3, true, a0, a1, a2, a3, a4); },
            Create$3: function (a0/* Texture2D */, a1/* Rect */, a2/* Vector2 */, a3/* Single */, a4/* UInt32 */, a5/* SpriteMeshType */) { return CS.Call(4, 28, 4, true, a0, a1, a2, a3, a4, a5); },
            Create$4: function (a0/* Texture2D */, a1/* Rect */, a2/* Vector2 */, a3/* Single */, a4/* UInt32 */, a5/* SpriteMeshType */, a6/* Vector4 */) { return CS.Call(4, 28, 5, true, a0, a1, a2, a3, a4, a5, a6); },
        },
        ctor: function () {
            CS.Call(5, 28, 0, true, this);
        },
        getassociatedAlphaSplitTexture: function () { return CS.Call(2, 28, 0, false, this); },
        setassociatedAlphaSplitTexture: function (v) { return CS.Call(3, 28, 0, false, this, v); },
        getborder: function () { return CS.Call(2, 28, 1, false, this); },
        setborder: function (v) { return CS.Call(3, 28, 1, false, this, v); },
        getbounds: function () { return CS.Call(2, 28, 2, false, this); },
        setbounds: function (v) { return CS.Call(3, 28, 2, false, this, v); },
        getpacked: function () { return CS.Call(2, 28, 3, false, this); },
        setpacked: function (v) { return CS.Call(3, 28, 3, false, this, v); },
        getpackingMode: function () { return CS.Call(2, 28, 4, false, this); },
        setpackingMode: function (v) { return CS.Call(3, 28, 4, false, this, v); },
        getpackingRotation: function () { return CS.Call(2, 28, 5, false, this); },
        setpackingRotation: function (v) { return CS.Call(3, 28, 5, false, this, v); },
        getpivot: function () { return CS.Call(2, 28, 6, false, this); },
        setpivot: function (v) { return CS.Call(3, 28, 6, false, this, v); },
        getpixelsPerUnit: function () { return CS.Call(2, 28, 7, false, this); },
        setpixelsPerUnit: function (v) { return CS.Call(3, 28, 7, false, this, v); },
        getrect: function () { return CS.Call(2, 28, 8, false, this); },
        setrect: function (v) { return CS.Call(3, 28, 8, false, this, v); },
        gettexture: function () { return CS.Call(2, 28, 9, false, this); },
        settexture: function (v) { return CS.Call(3, 28, 9, false, this, v); },
        gettextureRect: function () { return CS.Call(2, 28, 10, false, this); },
        settextureRect: function (v) { return CS.Call(3, 28, 10, false, this, v); },
        gettextureRectOffset: function () { return CS.Call(2, 28, 11, false, this); },
        settextureRectOffset: function (v) { return CS.Call(3, 28, 11, false, this, v); },
        gettriangles: function () { return CS.Call(2, 28, 12, false, this); },
        settriangles: function (v) { return CS.Call(3, 28, 12, false, this, v); },
        getuv: function () { return CS.Call(2, 28, 13, false, this); },
        setuv: function (v) { return CS.Call(3, 28, 13, false, this, v); },
        getvertices: function () { return CS.Call(2, 28, 14, false, this); },
        setvertices: function (v) { return CS.Call(3, 28, 14, false, this, v); },
        OverrideGeometry: function (a0/* Vector2[] */, a1/* UInt16[] */) { return CS.Call(4, 28, 0, false, this, a0, a1); },
    });
    if ($hc < 30) { return; }
     
    Bridge.define("UnityEngine.Material", {
        inherits: [UnityEngine.Object],
        statics: {
        },
        ctor: function (a0) {
            CS.Call(5, 29, 0, true, this, a0);
        },
        $ctor1: function (a0) {
            CS.Call(5, 29, 1, true, this, a0);
        },
        getcolor: function () { return CS.Call(2, 29, 0, false, this); },
        setcolor: function (v) { return CS.Call(3, 29, 0, false, this, v); },
        getglobalIlluminationFlags: function () { return CS.Call(2, 29, 1, false, this); },
        setglobalIlluminationFlags: function (v) { return CS.Call(3, 29, 1, false, this, v); },
        getmainTexture: function () { return CS.Call(2, 29, 2, false, this); },
        setmainTexture: function (v) { return CS.Call(3, 29, 2, false, this, v); },
        getmainTextureOffset: function () { return CS.Call(2, 29, 3, false, this); },
        setmainTextureOffset: function (v) { return CS.Call(3, 29, 3, false, this, v); },
        getmainTextureScale: function () { return CS.Call(2, 29, 4, false, this); },
        setmainTextureScale: function (v) { return CS.Call(3, 29, 4, false, this, v); },
        getpassCount: function () { return CS.Call(2, 29, 5, false, this); },
        setpassCount: function (v) { return CS.Call(3, 29, 5, false, this, v); },
        getrenderQueue: function () { return CS.Call(2, 29, 6, false, this); },
        setrenderQueue: function (v) { return CS.Call(3, 29, 6, false, this, v); },
        getshader: function () { return CS.Call(2, 29, 7, false, this); },
        setshader: function (v) { return CS.Call(3, 29, 7, false, this, v); },
        getshaderKeywords: function () { return CS.Call(2, 29, 8, false, this); },
        setshaderKeywords: function (v) { return CS.Call(3, 29, 8, false, this, v); },
        CopyPropertiesFromMaterial: function (a0/* Material */) { return CS.Call(4, 29, 0, false, this, a0); },
        DisableKeyword: function (a0/* String */) { return CS.Call(4, 29, 1, false, this, a0); },
        EnableKeyword: function (a0/* String */) { return CS.Call(4, 29, 2, false, this, a0); },
        GetColor: function (a0/* Int32 */) { return CS.Call(4, 29, 3, false, this, a0); },
        GetColor$1: function (a0/* String */) { return CS.Call(4, 29, 4, false, this, a0); },
        GetFloat: function (a0/* Int32 */) { return CS.Call(4, 29, 5, false, this, a0); },
        GetFloat$1: function (a0/* String */) { return CS.Call(4, 29, 6, false, this, a0); },
        GetInt: function (a0/* Int32 */) { return CS.Call(4, 29, 7, false, this, a0); },
        GetInt$1: function (a0/* String */) { return CS.Call(4, 29, 8, false, this, a0); },
        GetMatrix: function (a0/* Int32 */) { return CS.Call(4, 29, 9, false, this, a0); },
        GetMatrix$1: function (a0/* String */) { return CS.Call(4, 29, 10, false, this, a0); },
        GetTag: function (a0/* String */, a1/* Boolean */) { return CS.Call(4, 29, 11, false, this, a0, a1); },
        GetTag$1: function (a0/* String */, a1/* Boolean */, a2/* String */) { return CS.Call(4, 29, 12, false, this, a0, a1, a2); },
        GetTexture: function (a0/* Int32 */) { return CS.Call(4, 29, 13, false, this, a0); },
        GetTexture$1: function (a0/* String */) { return CS.Call(4, 29, 14, false, this, a0); },
        GetTextureOffset: function (a0/* String */) { return CS.Call(4, 29, 15, false, this, a0); },
        GetTextureScale: function (a0/* String */) { return CS.Call(4, 29, 16, false, this, a0); },
        GetVector: function (a0/* Int32 */) { return CS.Call(4, 29, 17, false, this, a0); },
        GetVector$1: function (a0/* String */) { return CS.Call(4, 29, 18, false, this, a0); },
        HasProperty: function (a0/* Int32 */) { return CS.Call(4, 29, 19, false, this, a0); },
        HasProperty$1: function (a0/* String */) { return CS.Call(4, 29, 20, false, this, a0); },
        IsKeywordEnabled: function (a0/* String */) { return CS.Call(4, 29, 21, false, this, a0); },
        Lerp: function (a0/* Material */, a1/* Material */, a2/* Single */) { return CS.Call(4, 29, 22, false, this, a0, a1, a2); },
        SetBuffer: function (a0/* String */, a1/* ComputeBuffer */) { return CS.Call(4, 29, 23, false, this, a0, a1); },
        SetColor: function (a0/* Int32 */, a1/* Color */) { return CS.Call(4, 29, 24, false, this, a0, a1); },
        SetColor$1: function (a0/* String */, a1/* Color */) { return CS.Call(4, 29, 25, false, this, a0, a1); },
        SetColorArray: function (a0/* Int32 */, a1/* Color[] */) { return CS.Call(4, 29, 26, false, this, a0, a1); },
        SetColorArray$1: function (a0/* String */, a1/* Color[] */) { return CS.Call(4, 29, 27, false, this, a0, a1); },
        SetFloat: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 29, 28, false, this, a0, a1); },
        SetFloat$1: function (a0/* String */, a1/* Single */) { return CS.Call(4, 29, 29, false, this, a0, a1); },
        SetFloatArray: function (a0/* Int32 */, a1/* Single[] */) { return CS.Call(4, 29, 30, false, this, a0, a1); },
        SetFloatArray$1: function (a0/* String */, a1/* Single[] */) { return CS.Call(4, 29, 31, false, this, a0, a1); },
        SetInt: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 29, 32, false, this, a0, a1); },
        SetInt$1: function (a0/* String */, a1/* Int32 */) { return CS.Call(4, 29, 33, false, this, a0, a1); },
        SetMatrix: function (a0/* Int32 */, a1/* Matrix4x4 */) { return CS.Call(4, 29, 34, false, this, a0, a1); },
        SetMatrix$1: function (a0/* String */, a1/* Matrix4x4 */) { return CS.Call(4, 29, 35, false, this, a0, a1); },
        SetMatrixArray: function (a0/* Int32 */, a1/* Matrix4x4[] */) { return CS.Call(4, 29, 36, false, this, a0, a1); },
        SetMatrixArray$1: function (a0/* String */, a1/* Matrix4x4[] */) { return CS.Call(4, 29, 37, false, this, a0, a1); },
        SetOverrideTag: function (a0/* String */, a1/* String */) { return CS.Call(4, 29, 38, false, this, a0, a1); },
        SetPass: function (a0/* Int32 */) { return CS.Call(4, 29, 39, false, this, a0); },
        SetTexture: function (a0/* Int32 */, a1/* Texture */) { return CS.Call(4, 29, 40, false, this, a0, a1); },
        SetTexture$1: function (a0/* String */, a1/* Texture */) { return CS.Call(4, 29, 41, false, this, a0, a1); },
        SetTextureOffset: function (a0/* String */, a1/* Vector2 */) { return CS.Call(4, 29, 42, false, this, a0, a1); },
        SetTextureScale: function (a0/* String */, a1/* Vector2 */) { return CS.Call(4, 29, 43, false, this, a0, a1); },
        SetVector: function (a0/* Int32 */, a1/* Vector4 */) { return CS.Call(4, 29, 44, false, this, a0, a1); },
        SetVector$1: function (a0/* String */, a1/* Vector4 */) { return CS.Call(4, 29, 45, false, this, a0, a1); },
        SetVectorArray: function (a0/* Int32 */, a1/* Vector4[] */) { return CS.Call(4, 29, 46, false, this, a0, a1); },
        SetVectorArray$1: function (a0/* String */, a1/* Vector4[] */) { return CS.Call(4, 29, 47, false, this, a0, a1); },
    });
    if ($hc < 31) { return; }
     
    Bridge.define("System.Collections.Hashtable", {
        inherits: [System.Collections.IEnumerable, System.ICloneable, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.IDictionary, System.Runtime.Serialization.IDeserializationCallback],
        statics: {
            Synchronized: function (a0/* Hashtable */) { return CS.Call(4, 30, 11, true, a0); },
        },
        ctor: function () {
            CS.Call(5, 30, 0, true, this);
        },
        $ctor1: function (a0) {
            CS.Call(5, 30, 1, true, this, a0);
        },
        $ctor2: function (a0, a1) {
            CS.Call(5, 30, 2, true, this, a0, a1);
        },
        $ctor3: function (a0, a1) {
            CS.Call(5, 30, 3, true, this, a0, a1);
        },
        $ctor4: function (a0, a1, a2) {
            CS.Call(5, 30, 4, true, this, a0, a1, a2);
        },
        $ctor5: function (a0) {
            CS.Call(5, 30, 5, true, this, a0);
        },
        $ctor6: function (a0) {
            CS.Call(5, 30, 6, true, this, a0);
        },
        $ctor7: function (a0, a1) {
            CS.Call(5, 30, 7, true, this, a0, a1);
        },
        $ctor8: function (a0, a1) {
            CS.Call(5, 30, 8, true, this, a0, a1);
        },
        $ctor9: function (a0, a1, a2) {
            CS.Call(5, 30, 9, true, this, a0, a1, a2);
        },
        getCount: function () { return CS.Call(2, 30, 0, false, this); },
        setCount: function (v) { return CS.Call(3, 30, 0, false, this, v); },
        getIsFixedSize: function () { return CS.Call(2, 30, 1, false, this); },
        setIsFixedSize: function (v) { return CS.Call(3, 30, 1, false, this, v); },
        getIsReadOnly: function () { return CS.Call(2, 30, 2, false, this); },
        setIsReadOnly: function (v) { return CS.Call(3, 30, 2, false, this, v); },
        getIsSynchronized: function () { return CS.Call(2, 30, 3, false, this); },
        setIsSynchronized: function (v) { return CS.Call(3, 30, 3, false, this, v); },
        getItem: function (ind0) { return CS.Call(2, 30, 4, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 30, 4, false, this, ind0, v); },
        getKeys: function () { return CS.Call(2, 30, 5, false, this); },
        setKeys: function (v) { return CS.Call(3, 30, 5, false, this, v); },
        getSyncRoot: function () { return CS.Call(2, 30, 6, false, this); },
        setSyncRoot: function (v) { return CS.Call(3, 30, 6, false, this, v); },
        getValues: function () { return CS.Call(2, 30, 7, false, this); },
        setValues: function (v) { return CS.Call(3, 30, 7, false, this, v); },
        Add: function (a0/* Object */, a1/* Object */) { return CS.Call(4, 30, 0, false, this, a0, a1); },
        Clear: function () { return CS.Call(4, 30, 1, false, this); },
        Clone: function () { return CS.Call(4, 30, 2, false, this); },
        Contains: function (a0/* Object */) { return CS.Call(4, 30, 3, false, this, a0); },
        ContainsKey: function (a0/* Object */) { return CS.Call(4, 30, 4, false, this, a0); },
        ContainsValue: function (a0/* Object */) { return CS.Call(4, 30, 5, false, this, a0); },
        CopyTo: function (a0/* Array */, a1/* Int32 */) { return CS.Call(4, 30, 6, false, this, a0, a1); },
        GetEnumerator: function () { return CS.Call(4, 30, 7, false, this); },
        GetObjectData: function (a0/* SerializationInfo */, a1/* StreamingContext */) { return CS.Call(4, 30, 8, false, this, a0, a1); },
        OnDeserialization: function (a0/* Object */) { return CS.Call(4, 30, 9, false, this, a0); },
        Remove: function (a0/* Object */) { return CS.Call(4, 30, 10, false, this, a0); },
    });
    if ($hc < 32) { return; }
     
    Bridge.define("UnityEngine.TextAsset", {
        inherits: [UnityEngine.Object],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 31, 0, true, this);
        },
        getbytes: function () { return CS.Call(2, 31, 0, false, this); },
        setbytes: function (v) { return CS.Call(3, 31, 0, false, this, v); },
        gettext: function () { return CS.Call(2, 31, 1, false, this); },
        settext: function (v) { return CS.Call(3, 31, 1, false, this, v); },
        ToString: function () { return CS.Call(4, 31, 0, false, this); },
    });
    if ($hc < 33) { return; }
     
    Bridge.define("UnityEngine.WaitForSeconds", {
        inherits: [UnityEngine.YieldInstruction],
        statics: {
        },
        ctor: function (a0) {
            this.$totalTime = a0;
            this.$elapsedTime = 0;
            this.$finished = false;
        },
    });
    if ($hc < 34) { return; }
     
    Bridge.define("UnityEngine.Component", {
        inherits: [UnityEngine.Object],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 33, 0, true, this);
        },
        getgameObject: function () { return CS.Call(2, 33, 0, false, this); },
        setgameObject: function (v) { return CS.Call(3, 33, 0, false, this, v); },
        gettag: function () { return CS.Call(2, 33, 1, false, this); },
        settag: function (v) { return CS.Call(3, 33, 1, false, this, v); },
        gettransform: function () { return CS.Call(2, 33, 2, false, this); },
        settransform: function (v) { return CS.Call(3, 33, 2, false, this, v); },
        BroadcastMessage: function (a0/* String */) { return CS.Call(4, 33, 0, false, this, a0); },
        BroadcastMessage$1: function (a0/* String */, a1/* Object */) { return CS.Call(4, 33, 1, false, this, a0, a1); },
        BroadcastMessage$2: function (a0/* String */, a1/* Object */, a2/* SendMessageOptions */) { return CS.Call(4, 33, 2, false, this, a0, a1, a2); },
        BroadcastMessage$3: function (a0/* String */, a1/* SendMessageOptions */) { return CS.Call(4, 33, 3, false, this, a0, a1); },
        CompareTag: function (a0/* String */) { return CS.Call(4, 33, 4, false, this, a0); },
        GetComponent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 5, false, this, $T);
        },
        GetComponent$1: function (a0/* String */) { return CS.Call(4, 33, 6, false, this, a0); },
        GetComponent$2: function (a0/* Type */) { return CS.Call(4, 33, 7, false, this, a0); },
        GetComponentInChildren: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 8, false, this, $T);
        },
        GetComponentInChildren$1: function (T, a0/* Boolean */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 9, false, this, $T, a0);
        },
        GetComponentInChildren$2: function (a0/* Type */) { return CS.Call(4, 33, 10, false, this, a0); },
        GetComponentInChildren$3: function (a0/* Type */, a1/* Boolean */) { return CS.Call(4, 33, 11, false, this, a0, a1); },
        GetComponentInParent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 12, false, this, $T);
        },
        GetComponentInParent$1: function (a0/* Type */) { return CS.Call(4, 33, 13, false, this, a0); },
        GetComponents: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 14, false, this, $T);
        },
        GetComponents$1: function (a0/* Type */, a1/* List`1 */) { return CS.Call(4, 33, 15, false, this, a0, a1); },
        GetComponents$2: function (T, a0/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 16, false, this, $T, a0);
        },
        GetComponents$3: function (a0/* Type */) { return CS.Call(4, 33, 17, false, this, a0); },
        GetComponentsInChildren: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 18, false, this, $T);
        },
        GetComponentsInChildren$1: function (T, a0/* Boolean */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 19, false, this, $T, a0);
        },
        GetComponentsInChildren$2: function (T, a0/* Boolean */, a1/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 20, false, this, $T, a0, a1);
        },
        GetComponentsInChildren$3: function (T, a0/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 21, false, this, $T, a0);
        },
        GetComponentsInChildren$4: function (a0/* Type */) { return CS.Call(4, 33, 22, false, this, a0); },
        GetComponentsInChildren$5: function (a0/* Type */, a1/* Boolean */) { return CS.Call(4, 33, 23, false, this, a0, a1); },
        GetComponentsInParent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 24, false, this, $T);
        },
        GetComponentsInParent$1: function (T, a0/* Boolean */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 25, false, this, $T, a0);
        },
        GetComponentsInParent$2: function (T, a0/* Boolean */, a1/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 33, 26, false, this, $T, a0, a1);
        },
        GetComponentsInParent$3: function (a0/* Type */) { return CS.Call(4, 33, 27, false, this, a0); },
        GetComponentsInParent$4: function (a0/* Type */, a1/* Boolean */) { return CS.Call(4, 33, 28, false, this, a0, a1); },
        SendMessage: function (a0/* String */) { return CS.Call(4, 33, 29, false, this, a0); },
        SendMessage$1: function (a0/* String */, a1/* Object */) { return CS.Call(4, 33, 30, false, this, a0, a1); },
        SendMessage$2: function (a0/* String */, a1/* Object */, a2/* SendMessageOptions */) { return CS.Call(4, 33, 31, false, this, a0, a1, a2); },
        SendMessage$3: function (a0/* String */, a1/* SendMessageOptions */) { return CS.Call(4, 33, 32, false, this, a0, a1); },
        SendMessageUpwards: function (a0/* String */) { return CS.Call(4, 33, 33, false, this, a0); },
        SendMessageUpwards$1: function (a0/* String */, a1/* Object */) { return CS.Call(4, 33, 34, false, this, a0, a1); },
        SendMessageUpwards$2: function (a0/* String */, a1/* Object */, a2/* SendMessageOptions */) { return CS.Call(4, 33, 35, false, this, a0, a1, a2); },
        SendMessageUpwards$3: function (a0/* String */, a1/* SendMessageOptions */) { return CS.Call(4, 33, 36, false, this, a0, a1); },
    });
    if ($hc < 35) { return; }
     
    Bridge.define("UnityEngine.AudioClip", {
        inherits: [UnityEngine.Object],
        statics: {
            Create: function (a0/* String */, a1/* Int32 */, a2/* Int32 */, a3/* Int32 */, a4/* Boolean */) { return CS.Call(4, 34, 4, true, a0, a1, a2, a3, a4); },
            Create$1: function (a0/* String */, a1/* Int32 */, a2/* Int32 */, a3/* Int32 */, a4/* Boolean */, a5/* PCMReaderCallback */) { return CS.Call(4, 34, 5, true, a0, a1, a2, a3, a4, a5); },
            Create$2: function (a0/* String */, a1/* Int32 */, a2/* Int32 */, a3/* Int32 */, a4/* Boolean */, a5/* PCMReaderCallback */, a6/* PCMSetPositionCallback */) { return CS.Call(4, 34, 6, true, a0, a1, a2, a3, a4, a5, a6); },
        },
        ctor: function () {
            CS.Call(5, 34, 0, true, this);
        },
        getchannels: function () { return CS.Call(2, 34, 0, false, this); },
        setchannels: function (v) { return CS.Call(3, 34, 0, false, this, v); },
        getfrequency: function () { return CS.Call(2, 34, 1, false, this); },
        setfrequency: function (v) { return CS.Call(3, 34, 1, false, this, v); },
        getlength: function () { return CS.Call(2, 34, 2, false, this); },
        setlength: function (v) { return CS.Call(3, 34, 2, false, this, v); },
        getloadInBackground: function () { return CS.Call(2, 34, 3, false, this); },
        setloadInBackground: function (v) { return CS.Call(3, 34, 3, false, this, v); },
        getloadState: function () { return CS.Call(2, 34, 4, false, this); },
        setloadState: function (v) { return CS.Call(3, 34, 4, false, this, v); },
        getloadType: function () { return CS.Call(2, 34, 5, false, this); },
        setloadType: function (v) { return CS.Call(3, 34, 5, false, this, v); },
        getpreloadAudioData: function () { return CS.Call(2, 34, 6, false, this); },
        setpreloadAudioData: function (v) { return CS.Call(3, 34, 6, false, this, v); },
        getsamples: function () { return CS.Call(2, 34, 7, false, this); },
        setsamples: function (v) { return CS.Call(3, 34, 7, false, this, v); },
        GetData: function (a0/* Single[] */, a1/* Int32 */) { return CS.Call(4, 34, 0, false, this, a0, a1); },
        LoadAudioData: function () { return CS.Call(4, 34, 1, false, this); },
        SetData: function (a0/* Single[] */, a1/* Int32 */) { return CS.Call(4, 34, 2, false, this, a0, a1); },
        UnloadAudioData: function () { return CS.Call(4, 34, 3, false, this); },
    });
    if ($hc < 36) { return; }
     
    Bridge.define("UnityEngine.GameObject", {
        inherits: [UnityEngine.Object],
        statics: {
            CreatePrimitive: function (a0/* PrimitiveType */) { return CS.Call(4, 35, 40, true, a0); },
            Find: function (a0/* String */) { return CS.Call(4, 35, 41, true, a0); },
            FindGameObjectsWithTag: function (a0/* String */) { return CS.Call(4, 35, 42, true, a0); },
            FindGameObjectWithTag: function (a0/* String */) { return CS.Call(4, 35, 43, true, a0); },
            FindWithTag: function (a0/* String */) { return CS.Call(4, 35, 44, true, a0); },
        },
        ctor: function () {
            CS.Call(5, 35, 0, true, this);
        },
        $ctor1: function (a0) {
            CS.Call(5, 35, 1, true, this, a0);
        },
        $ctor2: function (a0, a1) {
            CS.Call(5, 35, 2, true, this, a0, a1);
        },
        getactiveInHierarchy: function () { return CS.Call(2, 35, 0, false, this); },
        setactiveInHierarchy: function (v) { return CS.Call(3, 35, 0, false, this, v); },
        getactiveSelf: function () { return CS.Call(2, 35, 1, false, this); },
        setactiveSelf: function (v) { return CS.Call(3, 35, 1, false, this, v); },
        getgameObject: function () { return CS.Call(2, 35, 2, false, this); },
        setgameObject: function (v) { return CS.Call(3, 35, 2, false, this, v); },
        getisStatic: function () { return CS.Call(2, 35, 3, false, this); },
        setisStatic: function (v) { return CS.Call(3, 35, 3, false, this, v); },
        getlayer: function () { return CS.Call(2, 35, 4, false, this); },
        setlayer: function (v) { return CS.Call(3, 35, 4, false, this, v); },
        getscene: function () { return CS.Call(2, 35, 5, false, this); },
        setscene: function (v) { return CS.Call(3, 35, 5, false, this, v); },
        gettag: function () { return CS.Call(2, 35, 6, false, this); },
        settag: function (v) { return CS.Call(3, 35, 6, false, this, v); },
        gettransform: function () { return CS.Call(2, 35, 7, false, this); },
        settransform: function (v) { return CS.Call(3, 35, 7, false, this, v); },
        AddComponent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 0, false, this, $T);
        },
        AddComponent$1: function (a0/* Type */) { return CS.Call(4, 35, 1, false, this, Bridge.Reflection.getTypeFullName(a0)); },
        BroadcastMessage: function (a0/* String */) { return CS.Call(4, 35, 2, false, this, a0); },
        BroadcastMessage$1: function (a0/* String */, a1/* Object */) { return CS.Call(4, 35, 3, false, this, a0, a1); },
        BroadcastMessage$2: function (a0/* String */, a1/* Object */, a2/* SendMessageOptions */) { return CS.Call(4, 35, 4, false, this, a0, a1, a2); },
        BroadcastMessage$3: function (a0/* String */, a1/* SendMessageOptions */) { return CS.Call(4, 35, 5, false, this, a0, a1); },
        CompareTag: function (a0/* String */) { return CS.Call(4, 35, 6, false, this, a0); },
        GetComponent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 7, false, this, $T);
        },
        GetComponent$1: function (a0/* String */) { return CS.Call(4, 35, 8, false, this, a0); },
        GetComponent$2: function (a0/* Type */) { return CS.Call(4, 35, 9, false, this, a0); },
        GetComponentInChildren: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 10, false, this, $T);
        },
        GetComponentInChildren$1: function (T, a0/* Boolean */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 11, false, this, $T, a0);
        },
        GetComponentInChildren$2: function (a0/* Type */) { return CS.Call(4, 35, 12, false, this, a0); },
        GetComponentInChildren$3: function (a0/* Type */, a1/* Boolean */) { return CS.Call(4, 35, 13, false, this, a0, a1); },
        GetComponentInParent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 14, false, this, $T);
        },
        GetComponentInParent$1: function (a0/* Type */) { return CS.Call(4, 35, 15, false, this, a0); },
        GetComponents: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 16, false, this, $T);
        },
        GetComponents$1: function (a0/* Type */, a1/* List`1 */) { return CS.Call(4, 35, 17, false, this, a0, a1); },
        GetComponents$2: function (T, a0/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 18, false, this, $T, a0);
        },
        GetComponents$3: function (a0/* Type */) { return CS.Call(4, 35, 19, false, this, a0); },
        GetComponentsInChildren: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 20, false, this, $T);
        },
        GetComponentsInChildren$1: function (T, a0/* Boolean */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 21, false, this, $T, a0);
        },
        GetComponentsInChildren$2: function (T, a0/* Boolean */, a1/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 22, false, this, $T, a0, a1);
        },
        GetComponentsInChildren$3: function (T, a0/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 23, false, this, $T, a0);
        },
        GetComponentsInChildren$4: function (a0/* Type */) { return CS.Call(4, 35, 24, false, this, a0); },
        GetComponentsInChildren$5: function (a0/* Type */, a1/* Boolean */) { return CS.Call(4, 35, 25, false, this, a0, a1); },
        GetComponentsInParent: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 26, false, this, $T);
        },
        GetComponentsInParent$1: function (T, a0/* Boolean */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 27, false, this, $T, a0);
        },
        GetComponentsInParent$2: function (T, a0/* Boolean */, a1/* List`1 */) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 35, 28, false, this, $T, a0, a1);
        },
        GetComponentsInParent$3: function (a0/* Type */) { return CS.Call(4, 35, 29, false, this, a0); },
        GetComponentsInParent$4: function (a0/* Type */, a1/* Boolean */) { return CS.Call(4, 35, 30, false, this, a0, a1); },
        SendMessage: function (a0/* String */) { return CS.Call(4, 35, 31, false, this, a0); },
        SendMessage$1: function (a0/* String */, a1/* Object */) { return CS.Call(4, 35, 32, false, this, a0, a1); },
        SendMessage$2: function (a0/* String */, a1/* Object */, a2/* SendMessageOptions */) { return CS.Call(4, 35, 33, false, this, a0, a1, a2); },
        SendMessage$3: function (a0/* String */, a1/* SendMessageOptions */) { return CS.Call(4, 35, 34, false, this, a0, a1); },
        SendMessageUpwards: function (a0/* String */) { return CS.Call(4, 35, 35, false, this, a0); },
        SendMessageUpwards$1: function (a0/* String */, a1/* Object */) { return CS.Call(4, 35, 36, false, this, a0, a1); },
        SendMessageUpwards$2: function (a0/* String */, a1/* Object */, a2/* SendMessageOptions */) { return CS.Call(4, 35, 37, false, this, a0, a1, a2); },
        SendMessageUpwards$3: function (a0/* String */, a1/* SendMessageOptions */) { return CS.Call(4, 35, 38, false, this, a0, a1); },
        SetActive: function (a0/* Boolean */) { return CS.Call(4, 35, 39, false, this, a0); },
    });
    if ($hc < 37) { return; }
     
    Bridge.define("UnityEngine.Collider", {
        inherits: [UnityEngine.Component],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 36, 0, true, this);
        },
        getattachedRigidbody: function () { return CS.Call(2, 36, 0, false, this); },
        setattachedRigidbody: function (v) { return CS.Call(3, 36, 0, false, this, v); },
        getbounds: function () { return CS.Call(2, 36, 1, false, this); },
        setbounds: function (v) { return CS.Call(3, 36, 1, false, this, v); },
        getcontactOffset: function () { return CS.Call(2, 36, 2, false, this); },
        setcontactOffset: function (v) { return CS.Call(3, 36, 2, false, this, v); },
        getenabled: function () { return CS.Call(2, 36, 3, false, this); },
        setenabled: function (v) { return CS.Call(3, 36, 3, false, this, v); },
        getisTrigger: function () { return CS.Call(2, 36, 4, false, this); },
        setisTrigger: function (v) { return CS.Call(3, 36, 4, false, this, v); },
        getmaterial: function () { return CS.Call(2, 36, 5, false, this); },
        setmaterial: function (v) { return CS.Call(3, 36, 5, false, this, v); },
        getsharedMaterial: function () { return CS.Call(2, 36, 6, false, this); },
        setsharedMaterial: function (v) { return CS.Call(3, 36, 6, false, this, v); },
        ClosestPointOnBounds: function (a0/* Vector3 */) { return CS.Call(4, 36, 0, false, this, a0); },
        Raycast: function (a0/* Ray */, a1/* RaycastHit& */, a2/* Single */) { return CS.Call(4, 36, 1, false, this, a0, a1, a2); },
    });
    if ($hc < 38) { return; }
     
    Bridge.define("UnityEngine.Rigidbody", {
        inherits: [UnityEngine.Component],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 37, 0, true, this);
        },
        getangularDrag: function () { return CS.Call(2, 37, 0, false, this); },
        setangularDrag: function (v) { return CS.Call(3, 37, 0, false, this, v); },
        getangularVelocity: function () { return CS.Call(2, 37, 1, false, this); },
        setangularVelocity: function (v) { return CS.Call(3, 37, 1, false, this, v); },
        getcenterOfMass: function () { return CS.Call(2, 37, 2, false, this); },
        setcenterOfMass: function (v) { return CS.Call(3, 37, 2, false, this, v); },
        getcollisionDetectionMode: function () { return CS.Call(2, 37, 3, false, this); },
        setcollisionDetectionMode: function (v) { return CS.Call(3, 37, 3, false, this, v); },
        getconstraints: function () { return CS.Call(2, 37, 4, false, this); },
        setconstraints: function (v) { return CS.Call(3, 37, 4, false, this, v); },
        getdetectCollisions: function () { return CS.Call(2, 37, 5, false, this); },
        setdetectCollisions: function (v) { return CS.Call(3, 37, 5, false, this, v); },
        getdrag: function () { return CS.Call(2, 37, 6, false, this); },
        setdrag: function (v) { return CS.Call(3, 37, 6, false, this, v); },
        getfreezeRotation: function () { return CS.Call(2, 37, 7, false, this); },
        setfreezeRotation: function (v) { return CS.Call(3, 37, 7, false, this, v); },
        getinertiaTensor: function () { return CS.Call(2, 37, 8, false, this); },
        setinertiaTensor: function (v) { return CS.Call(3, 37, 8, false, this, v); },
        getinertiaTensorRotation: function () { return CS.Call(2, 37, 9, false, this); },
        setinertiaTensorRotation: function (v) { return CS.Call(3, 37, 9, false, this, v); },
        getinterpolation: function () { return CS.Call(2, 37, 10, false, this); },
        setinterpolation: function (v) { return CS.Call(3, 37, 10, false, this, v); },
        getisKinematic: function () { return CS.Call(2, 37, 11, false, this); },
        setisKinematic: function (v) { return CS.Call(3, 37, 11, false, this, v); },
        getmass: function () { return CS.Call(2, 37, 12, false, this); },
        setmass: function (v) { return CS.Call(3, 37, 12, false, this, v); },
        getmaxAngularVelocity: function () { return CS.Call(2, 37, 13, false, this); },
        setmaxAngularVelocity: function (v) { return CS.Call(3, 37, 13, false, this, v); },
        getmaxDepenetrationVelocity: function () { return CS.Call(2, 37, 14, false, this); },
        setmaxDepenetrationVelocity: function (v) { return CS.Call(3, 37, 14, false, this, v); },
        getposition: function () { return CS.Call(2, 37, 15, false, this); },
        setposition: function (v) { return CS.Call(3, 37, 15, false, this, v); },
        getrotation: function () { return CS.Call(2, 37, 16, false, this); },
        setrotation: function (v) { return CS.Call(3, 37, 16, false, this, v); },
        getsleepThreshold: function () { return CS.Call(2, 37, 17, false, this); },
        setsleepThreshold: function (v) { return CS.Call(3, 37, 17, false, this, v); },
        getsolverIterations: function () { return CS.Call(2, 37, 18, false, this); },
        setsolverIterations: function (v) { return CS.Call(3, 37, 18, false, this, v); },
        getsolverVelocityIterations: function () { return CS.Call(2, 37, 19, false, this); },
        setsolverVelocityIterations: function (v) { return CS.Call(3, 37, 19, false, this, v); },
        getuseConeFriction: function () { return CS.Call(2, 37, 20, false, this); },
        setuseConeFriction: function (v) { return CS.Call(3, 37, 20, false, this, v); },
        getuseGravity: function () { return CS.Call(2, 37, 21, false, this); },
        setuseGravity: function (v) { return CS.Call(3, 37, 21, false, this, v); },
        getvelocity: function () { return CS.Call(2, 37, 22, false, this); },
        setvelocity: function (v) { return CS.Call(3, 37, 22, false, this, v); },
        getworldCenterOfMass: function () { return CS.Call(2, 37, 23, false, this); },
        setworldCenterOfMass: function (v) { return CS.Call(3, 37, 23, false, this, v); },
        AddExplosionForce: function (a0/* Single */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 37, 0, false, this, a0, a1, a2); },
        AddExplosionForce$1: function (a0/* Single */, a1/* Vector3 */, a2/* Single */, a3/* Single */) { return CS.Call(4, 37, 1, false, this, a0, a1, a2, a3); },
        AddExplosionForce$2: function (a0/* Single */, a1/* Vector3 */, a2/* Single */, a3/* Single */, a4/* ForceMode */) { return CS.Call(4, 37, 2, false, this, a0, a1, a2, a3, a4); },
        AddForce: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 37, 3, false, this, a0, a1, a2); },
        AddForce$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* ForceMode */) { return CS.Call(4, 37, 4, false, this, a0, a1, a2, a3); },
        AddForce$2: function (a0/* Vector3 */) { return CS.Call(4, 37, 5, false, this, a0); },
        AddForce$3: function (a0/* Vector3 */, a1/* ForceMode */) { return CS.Call(4, 37, 6, false, this, a0, a1); },
        AddForceAtPosition: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 37, 7, false, this, a0, a1); },
        AddForceAtPosition$1: function (a0/* Vector3 */, a1/* Vector3 */, a2/* ForceMode */) { return CS.Call(4, 37, 8, false, this, a0, a1, a2); },
        AddRelativeForce: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 37, 9, false, this, a0, a1, a2); },
        AddRelativeForce$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* ForceMode */) { return CS.Call(4, 37, 10, false, this, a0, a1, a2, a3); },
        AddRelativeForce$2: function (a0/* Vector3 */) { return CS.Call(4, 37, 11, false, this, a0); },
        AddRelativeForce$3: function (a0/* Vector3 */, a1/* ForceMode */) { return CS.Call(4, 37, 12, false, this, a0, a1); },
        AddRelativeTorque: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 37, 13, false, this, a0, a1, a2); },
        AddRelativeTorque$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* ForceMode */) { return CS.Call(4, 37, 14, false, this, a0, a1, a2, a3); },
        AddRelativeTorque$2: function (a0/* Vector3 */) { return CS.Call(4, 37, 15, false, this, a0); },
        AddRelativeTorque$3: function (a0/* Vector3 */, a1/* ForceMode */) { return CS.Call(4, 37, 16, false, this, a0, a1); },
        AddTorque: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 37, 17, false, this, a0, a1, a2); },
        AddTorque$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* ForceMode */) { return CS.Call(4, 37, 18, false, this, a0, a1, a2, a3); },
        AddTorque$2: function (a0/* Vector3 */) { return CS.Call(4, 37, 19, false, this, a0); },
        AddTorque$3: function (a0/* Vector3 */, a1/* ForceMode */) { return CS.Call(4, 37, 20, false, this, a0, a1); },
        ClosestPointOnBounds: function (a0/* Vector3 */) { return CS.Call(4, 37, 21, false, this, a0); },
        GetPointVelocity: function (a0/* Vector3 */) { return CS.Call(4, 37, 22, false, this, a0); },
        GetRelativePointVelocity: function (a0/* Vector3 */) { return CS.Call(4, 37, 23, false, this, a0); },
        IsSleeping: function () { return CS.Call(4, 37, 24, false, this); },
        MovePosition: function (a0/* Vector3 */) { return CS.Call(4, 37, 25, false, this, a0); },
        MoveRotation: function (a0/* Quaternion */) { return CS.Call(4, 37, 26, false, this, a0); },
        ResetCenterOfMass: function () { return CS.Call(4, 37, 27, false, this); },
        ResetInertiaTensor: function () { return CS.Call(4, 37, 28, false, this); },
        SetDensity: function (a0/* Single */) { return CS.Call(4, 37, 29, false, this, a0); },
        Sleep: function () { return CS.Call(4, 37, 30, false, this); },
        SweepTest: function (a0/* Vector3 */, a1/* RaycastHit& */) { return CS.Call(4, 37, 31, false, this, a0, a1); },
        SweepTest$1: function (a0/* Vector3 */, a1/* RaycastHit& */, a2/* Single */) { return CS.Call(4, 37, 32, false, this, a0, a1, a2); },
        SweepTest$2: function (a0/* Vector3 */, a1/* RaycastHit& */, a2/* Single */, a3/* QueryTriggerInteraction */) { return CS.Call(4, 37, 33, false, this, a0, a1, a2, a3); },
        SweepTestAll: function (a0/* Vector3 */) { return CS.Call(4, 37, 34, false, this, a0); },
        SweepTestAll$1: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 37, 35, false, this, a0, a1); },
        SweepTestAll$2: function (a0/* Vector3 */, a1/* Single */, a2/* QueryTriggerInteraction */) { return CS.Call(4, 37, 36, false, this, a0, a1, a2); },
        WakeUp: function () { return CS.Call(4, 37, 37, false, this); },
    });
    if ($hc < 39) { return; }
     
    Bridge.define("UnityEngine.ParticleSystem", {
        inherits: [UnityEngine.Component],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 38, 0, true, this);
        },
        getcollision: function () { return CS.Call(2, 38, 0, false, this); },
        setcollision: function (v) { return CS.Call(3, 38, 0, false, this, v); },
        getcolorBySpeed: function () { return CS.Call(2, 38, 1, false, this); },
        setcolorBySpeed: function (v) { return CS.Call(3, 38, 1, false, this, v); },
        getcolorOverLifetime: function () { return CS.Call(2, 38, 2, false, this); },
        setcolorOverLifetime: function (v) { return CS.Call(3, 38, 2, false, this, v); },
        getduration: function () { return CS.Call(2, 38, 3, false, this); },
        setduration: function (v) { return CS.Call(3, 38, 3, false, this, v); },
        getemission: function () { return CS.Call(2, 38, 4, false, this); },
        setemission: function (v) { return CS.Call(3, 38, 4, false, this, v); },
        getexternalForces: function () { return CS.Call(2, 38, 5, false, this); },
        setexternalForces: function (v) { return CS.Call(3, 38, 5, false, this, v); },
        getforceOverLifetime: function () { return CS.Call(2, 38, 6, false, this); },
        setforceOverLifetime: function (v) { return CS.Call(3, 38, 6, false, this, v); },
        getgravityModifier: function () { return CS.Call(2, 38, 7, false, this); },
        setgravityModifier: function (v) { return CS.Call(3, 38, 7, false, this, v); },
        getinheritVelocity: function () { return CS.Call(2, 38, 8, false, this); },
        setinheritVelocity: function (v) { return CS.Call(3, 38, 8, false, this, v); },
        getisPaused: function () { return CS.Call(2, 38, 9, false, this); },
        setisPaused: function (v) { return CS.Call(3, 38, 9, false, this, v); },
        getisPlaying: function () { return CS.Call(2, 38, 10, false, this); },
        setisPlaying: function (v) { return CS.Call(3, 38, 10, false, this, v); },
        getisStopped: function () { return CS.Call(2, 38, 11, false, this); },
        setisStopped: function (v) { return CS.Call(3, 38, 11, false, this, v); },
        getlimitVelocityOverLifetime: function () { return CS.Call(2, 38, 12, false, this); },
        setlimitVelocityOverLifetime: function (v) { return CS.Call(3, 38, 12, false, this, v); },
        getloop: function () { return CS.Call(2, 38, 13, false, this); },
        setloop: function (v) { return CS.Call(3, 38, 13, false, this, v); },
        getmaxParticles: function () { return CS.Call(2, 38, 14, false, this); },
        setmaxParticles: function (v) { return CS.Call(3, 38, 14, false, this, v); },
        getparticleCount: function () { return CS.Call(2, 38, 15, false, this); },
        setparticleCount: function (v) { return CS.Call(3, 38, 15, false, this, v); },
        getplaybackSpeed: function () { return CS.Call(2, 38, 16, false, this); },
        setplaybackSpeed: function (v) { return CS.Call(3, 38, 16, false, this, v); },
        getplayOnAwake: function () { return CS.Call(2, 38, 17, false, this); },
        setplayOnAwake: function (v) { return CS.Call(3, 38, 17, false, this, v); },
        getrandomSeed: function () { return CS.Call(2, 38, 18, false, this); },
        setrandomSeed: function (v) { return CS.Call(3, 38, 18, false, this, v); },
        getrotationBySpeed: function () { return CS.Call(2, 38, 19, false, this); },
        setrotationBySpeed: function (v) { return CS.Call(3, 38, 19, false, this, v); },
        getrotationOverLifetime: function () { return CS.Call(2, 38, 20, false, this); },
        setrotationOverLifetime: function (v) { return CS.Call(3, 38, 20, false, this, v); },
        getscalingMode: function () { return CS.Call(2, 38, 21, false, this); },
        setscalingMode: function (v) { return CS.Call(3, 38, 21, false, this, v); },
        getshape: function () { return CS.Call(2, 38, 22, false, this); },
        setshape: function (v) { return CS.Call(3, 38, 22, false, this, v); },
        getsimulationSpace: function () { return CS.Call(2, 38, 23, false, this); },
        setsimulationSpace: function (v) { return CS.Call(3, 38, 23, false, this, v); },
        getsizeBySpeed: function () { return CS.Call(2, 38, 24, false, this); },
        setsizeBySpeed: function (v) { return CS.Call(3, 38, 24, false, this, v); },
        getsizeOverLifetime: function () { return CS.Call(2, 38, 25, false, this); },
        setsizeOverLifetime: function (v) { return CS.Call(3, 38, 25, false, this, v); },
        getstartColor: function () { return CS.Call(2, 38, 26, false, this); },
        setstartColor: function (v) { return CS.Call(3, 38, 26, false, this, v); },
        getstartDelay: function () { return CS.Call(2, 38, 27, false, this); },
        setstartDelay: function (v) { return CS.Call(3, 38, 27, false, this, v); },
        getstartLifetime: function () { return CS.Call(2, 38, 28, false, this); },
        setstartLifetime: function (v) { return CS.Call(3, 38, 28, false, this, v); },
        getstartRotation: function () { return CS.Call(2, 38, 29, false, this); },
        setstartRotation: function (v) { return CS.Call(3, 38, 29, false, this, v); },
        getstartRotation3D: function () { return CS.Call(2, 38, 30, false, this); },
        setstartRotation3D: function (v) { return CS.Call(3, 38, 30, false, this, v); },
        getstartSize: function () { return CS.Call(2, 38, 31, false, this); },
        setstartSize: function (v) { return CS.Call(3, 38, 31, false, this, v); },
        getstartSpeed: function () { return CS.Call(2, 38, 32, false, this); },
        setstartSpeed: function (v) { return CS.Call(3, 38, 32, false, this, v); },
        getsubEmitters: function () { return CS.Call(2, 38, 33, false, this); },
        setsubEmitters: function (v) { return CS.Call(3, 38, 33, false, this, v); },
        gettextureSheetAnimation: function () { return CS.Call(2, 38, 34, false, this); },
        settextureSheetAnimation: function (v) { return CS.Call(3, 38, 34, false, this, v); },
        gettime: function () { return CS.Call(2, 38, 35, false, this); },
        settime: function (v) { return CS.Call(3, 38, 35, false, this, v); },
        gettrigger: function () { return CS.Call(2, 38, 36, false, this); },
        settrigger: function (v) { return CS.Call(3, 38, 36, false, this, v); },
        getuseAutoRandomSeed: function () { return CS.Call(2, 38, 37, false, this); },
        setuseAutoRandomSeed: function (v) { return CS.Call(3, 38, 37, false, this, v); },
        getvelocityOverLifetime: function () { return CS.Call(2, 38, 38, false, this); },
        setvelocityOverLifetime: function (v) { return CS.Call(3, 38, 38, false, this, v); },
        Clear: function () { return CS.Call(4, 38, 0, false, this); },
        Clear$1: function (a0/* Boolean */) { return CS.Call(4, 38, 1, false, this, a0); },
        Emit: function (a0/* Int32 */) { return CS.Call(4, 38, 2, false, this, a0); },
        Emit$1: function (a0/* EmitParams */, a1/* Int32 */) { return CS.Call(4, 38, 3, false, this, a0, a1); },
        GetParticles: function (a0/* Particle[] */) { return CS.Call(4, 38, 4, false, this, a0); },
        IsAlive: function () { return CS.Call(4, 38, 5, false, this); },
        IsAlive$1: function (a0/* Boolean */) { return CS.Call(4, 38, 6, false, this, a0); },
        Pause: function () { return CS.Call(4, 38, 7, false, this); },
        Pause$1: function (a0/* Boolean */) { return CS.Call(4, 38, 8, false, this, a0); },
        Play: function () { return CS.Call(4, 38, 9, false, this); },
        Play$1: function (a0/* Boolean */) { return CS.Call(4, 38, 10, false, this, a0); },
        SetParticles: function (a0/* Particle[] */, a1/* Int32 */) { return CS.Call(4, 38, 11, false, this, a0, a1); },
        Simulate: function (a0/* Single */) { return CS.Call(4, 38, 12, false, this, a0); },
        Simulate$1: function (a0/* Single */, a1/* Boolean */) { return CS.Call(4, 38, 13, false, this, a0, a1); },
        Simulate$2: function (a0/* Single */, a1/* Boolean */, a2/* Boolean */) { return CS.Call(4, 38, 14, false, this, a0, a1, a2); },
        Simulate$3: function (a0/* Single */, a1/* Boolean */, a2/* Boolean */, a3/* Boolean */) { return CS.Call(4, 38, 15, false, this, a0, a1, a2, a3); },
        Stop: function () { return CS.Call(4, 38, 16, false, this); },
        Stop$1: function (a0/* Boolean */) { return CS.Call(4, 38, 17, false, this, a0); },
    });
    if ($hc < 40) { return; }
     
    Bridge.define("UnityEngine.Renderer", {
        inherits: [UnityEngine.Component],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 39, 0, true, this);
        },
        getbounds: function () { return CS.Call(2, 39, 0, false, this); },
        setbounds: function (v) { return CS.Call(3, 39, 0, false, this, v); },
        getenabled: function () { return CS.Call(2, 39, 1, false, this); },
        setenabled: function (v) { return CS.Call(3, 39, 1, false, this, v); },
        getisPartOfStaticBatch: function () { return CS.Call(2, 39, 2, false, this); },
        setisPartOfStaticBatch: function (v) { return CS.Call(3, 39, 2, false, this, v); },
        getisVisible: function () { return CS.Call(2, 39, 3, false, this); },
        setisVisible: function (v) { return CS.Call(3, 39, 3, false, this, v); },
        getlightmapIndex: function () { return CS.Call(2, 39, 4, false, this); },
        setlightmapIndex: function (v) { return CS.Call(3, 39, 4, false, this, v); },
        getlightmapScaleOffset: function () { return CS.Call(2, 39, 5, false, this); },
        setlightmapScaleOffset: function (v) { return CS.Call(3, 39, 5, false, this, v); },
        getlightProbeProxyVolumeOverride: function () { return CS.Call(2, 39, 6, false, this); },
        setlightProbeProxyVolumeOverride: function (v) { return CS.Call(3, 39, 6, false, this, v); },
        getlightProbeUsage: function () { return CS.Call(2, 39, 7, false, this); },
        setlightProbeUsage: function (v) { return CS.Call(3, 39, 7, false, this, v); },
        getlocalToWorldMatrix: function () { return CS.Call(2, 39, 8, false, this); },
        setlocalToWorldMatrix: function (v) { return CS.Call(3, 39, 8, false, this, v); },
        getmaterial: function () { return CS.Call(2, 39, 9, false, this); },
        setmaterial: function (v) { return CS.Call(3, 39, 9, false, this, v); },
        getmaterials: function () { return CS.Call(2, 39, 10, false, this); },
        setmaterials: function (v) { return CS.Call(3, 39, 10, false, this, v); },
        getmotionVectors: function () { return CS.Call(2, 39, 11, false, this); },
        setmotionVectors: function (v) { return CS.Call(3, 39, 11, false, this, v); },
        getprobeAnchor: function () { return CS.Call(2, 39, 12, false, this); },
        setprobeAnchor: function (v) { return CS.Call(3, 39, 12, false, this, v); },
        getrealtimeLightmapIndex: function () { return CS.Call(2, 39, 13, false, this); },
        setrealtimeLightmapIndex: function (v) { return CS.Call(3, 39, 13, false, this, v); },
        getrealtimeLightmapScaleOffset: function () { return CS.Call(2, 39, 14, false, this); },
        setrealtimeLightmapScaleOffset: function (v) { return CS.Call(3, 39, 14, false, this, v); },
        getreceiveShadows: function () { return CS.Call(2, 39, 15, false, this); },
        setreceiveShadows: function (v) { return CS.Call(3, 39, 15, false, this, v); },
        getreflectionProbeUsage: function () { return CS.Call(2, 39, 16, false, this); },
        setreflectionProbeUsage: function (v) { return CS.Call(3, 39, 16, false, this, v); },
        getshadowCastingMode: function () { return CS.Call(2, 39, 17, false, this); },
        setshadowCastingMode: function (v) { return CS.Call(3, 39, 17, false, this, v); },
        getsharedMaterial: function () { return CS.Call(2, 39, 18, false, this); },
        setsharedMaterial: function (v) { return CS.Call(3, 39, 18, false, this, v); },
        getsharedMaterials: function () { return CS.Call(2, 39, 19, false, this); },
        setsharedMaterials: function (v) { return CS.Call(3, 39, 19, false, this, v); },
        getsortingLayerID: function () { return CS.Call(2, 39, 20, false, this); },
        setsortingLayerID: function (v) { return CS.Call(3, 39, 20, false, this, v); },
        getsortingLayerName: function () { return CS.Call(2, 39, 21, false, this); },
        setsortingLayerName: function (v) { return CS.Call(3, 39, 21, false, this, v); },
        getsortingOrder: function () { return CS.Call(2, 39, 22, false, this); },
        setsortingOrder: function (v) { return CS.Call(3, 39, 22, false, this, v); },
        getworldToLocalMatrix: function () { return CS.Call(2, 39, 23, false, this); },
        setworldToLocalMatrix: function (v) { return CS.Call(3, 39, 23, false, this, v); },
        GetClosestReflectionProbes: function (a0/* List`1 */) { return CS.Call(4, 39, 0, false, this, a0); },
        GetPropertyBlock: function (a0/* MaterialPropertyBlock */) { return CS.Call(4, 39, 1, false, this, a0); },
        SetPropertyBlock: function (a0/* MaterialPropertyBlock */) { return CS.Call(4, 39, 2, false, this, a0); },
    });
    if ($hc < 41) { return; }
     
    Bridge.define("UnityEngine.Rigidbody2D", {
        inherits: [UnityEngine.Component],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 40, 0, true, this);
        },
        getangularDrag: function () { return CS.Call(2, 40, 0, false, this); },
        setangularDrag: function (v) { return CS.Call(3, 40, 0, false, this, v); },
        getangularVelocity: function () { return CS.Call(2, 40, 1, false, this); },
        setangularVelocity: function (v) { return CS.Call(3, 40, 1, false, this, v); },
        getcenterOfMass: function () { return CS.Call(2, 40, 2, false, this); },
        setcenterOfMass: function (v) { return CS.Call(3, 40, 2, false, this, v); },
        getcollisionDetectionMode: function () { return CS.Call(2, 40, 3, false, this); },
        setcollisionDetectionMode: function (v) { return CS.Call(3, 40, 3, false, this, v); },
        getconstraints: function () { return CS.Call(2, 40, 4, false, this); },
        setconstraints: function (v) { return CS.Call(3, 40, 4, false, this, v); },
        getdrag: function () { return CS.Call(2, 40, 5, false, this); },
        setdrag: function (v) { return CS.Call(3, 40, 5, false, this, v); },
        getfreezeRotation: function () { return CS.Call(2, 40, 6, false, this); },
        setfreezeRotation: function (v) { return CS.Call(3, 40, 6, false, this, v); },
        getgravityScale: function () { return CS.Call(2, 40, 7, false, this); },
        setgravityScale: function (v) { return CS.Call(3, 40, 7, false, this, v); },
        getinertia: function () { return CS.Call(2, 40, 8, false, this); },
        setinertia: function (v) { return CS.Call(3, 40, 8, false, this, v); },
        getinterpolation: function () { return CS.Call(2, 40, 9, false, this); },
        setinterpolation: function (v) { return CS.Call(3, 40, 9, false, this, v); },
        getisKinematic: function () { return CS.Call(2, 40, 10, false, this); },
        setisKinematic: function (v) { return CS.Call(3, 40, 10, false, this, v); },
        getmass: function () { return CS.Call(2, 40, 11, false, this); },
        setmass: function (v) { return CS.Call(3, 40, 11, false, this, v); },
        getposition: function () { return CS.Call(2, 40, 12, false, this); },
        setposition: function (v) { return CS.Call(3, 40, 12, false, this, v); },
        getrotation: function () { return CS.Call(2, 40, 13, false, this); },
        setrotation: function (v) { return CS.Call(3, 40, 13, false, this, v); },
        getsimulated: function () { return CS.Call(2, 40, 14, false, this); },
        setsimulated: function (v) { return CS.Call(3, 40, 14, false, this, v); },
        getsleepMode: function () { return CS.Call(2, 40, 15, false, this); },
        setsleepMode: function (v) { return CS.Call(3, 40, 15, false, this, v); },
        getuseAutoMass: function () { return CS.Call(2, 40, 16, false, this); },
        setuseAutoMass: function (v) { return CS.Call(3, 40, 16, false, this, v); },
        getvelocity: function () { return CS.Call(2, 40, 17, false, this); },
        setvelocity: function (v) { return CS.Call(3, 40, 17, false, this, v); },
        getworldCenterOfMass: function () { return CS.Call(2, 40, 18, false, this); },
        setworldCenterOfMass: function (v) { return CS.Call(3, 40, 18, false, this, v); },
        AddForce: function (a0/* Vector2 */) { return CS.Call(4, 40, 0, false, this, a0); },
        AddForce$1: function (a0/* Vector2 */, a1/* ForceMode2D */) { return CS.Call(4, 40, 1, false, this, a0, a1); },
        AddForceAtPosition: function (a0/* Vector2 */, a1/* Vector2 */) { return CS.Call(4, 40, 2, false, this, a0, a1); },
        AddForceAtPosition$1: function (a0/* Vector2 */, a1/* Vector2 */, a2/* ForceMode2D */) { return CS.Call(4, 40, 3, false, this, a0, a1, a2); },
        AddRelativeForce: function (a0/* Vector2 */) { return CS.Call(4, 40, 4, false, this, a0); },
        AddRelativeForce$1: function (a0/* Vector2 */, a1/* ForceMode2D */) { return CS.Call(4, 40, 5, false, this, a0, a1); },
        AddTorque: function (a0/* Single */) { return CS.Call(4, 40, 6, false, this, a0); },
        AddTorque$1: function (a0/* Single */, a1/* ForceMode2D */) { return CS.Call(4, 40, 7, false, this, a0, a1); },
        Cast: function (a0/* Vector2 */, a1/* RaycastHit2D[] */) { return CS.Call(4, 40, 8, false, this, a0, a1); },
        Cast$1: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */) { return CS.Call(4, 40, 9, false, this, a0, a1, a2); },
        GetPoint: function (a0/* Vector2 */) { return CS.Call(4, 40, 10, false, this, a0); },
        GetPointVelocity: function (a0/* Vector2 */) { return CS.Call(4, 40, 11, false, this, a0); },
        GetRelativePoint: function (a0/* Vector2 */) { return CS.Call(4, 40, 12, false, this, a0); },
        GetRelativePointVelocity: function (a0/* Vector2 */) { return CS.Call(4, 40, 13, false, this, a0); },
        GetRelativeVector: function (a0/* Vector2 */) { return CS.Call(4, 40, 14, false, this, a0); },
        GetVector: function (a0/* Vector2 */) { return CS.Call(4, 40, 15, false, this, a0); },
        IsAwake: function () { return CS.Call(4, 40, 16, false, this); },
        IsSleeping: function () { return CS.Call(4, 40, 17, false, this); },
        IsTouching: function (a0/* Collider2D */) { return CS.Call(4, 40, 18, false, this, a0); },
        IsTouchingLayers: function () { return CS.Call(4, 40, 19, false, this); },
        IsTouchingLayers$1: function (a0/* Int32 */) { return CS.Call(4, 40, 20, false, this, a0); },
        MovePosition: function (a0/* Vector2 */) { return CS.Call(4, 40, 21, false, this, a0); },
        MoveRotation: function (a0/* Single */) { return CS.Call(4, 40, 22, false, this, a0); },
        OverlapPoint: function (a0/* Vector2 */) { return CS.Call(4, 40, 23, false, this, a0); },
        Sleep: function () { return CS.Call(4, 40, 24, false, this); },
        WakeUp: function () { return CS.Call(4, 40, 25, false, this); },
    });
    if ($hc < 42) { return; }
     
    Bridge.define("UnityEngine.Transform", {
        inherits: [UnityEngine.Component, System.Collections.IEnumerable],
        statics: {
        },
        getchildCount: function () { return CS.Call(2, 41, 0, false, this); },
        setchildCount: function (v) { return CS.Call(3, 41, 0, false, this, v); },
        geteulerAngles: function () { return CS.Call(2, 41, 1, false, this); },
        seteulerAngles: function (v) { return CS.Call(3, 41, 1, false, this, v); },
        getforward: function () { return CS.Call(2, 41, 2, false, this); },
        setforward: function (v) { return CS.Call(3, 41, 2, false, this, v); },
        gethasChanged: function () { return CS.Call(2, 41, 3, false, this); },
        sethasChanged: function (v) { return CS.Call(3, 41, 3, false, this, v); },
        gethierarchyCapacity: function () { return CS.Call(2, 41, 4, false, this); },
        sethierarchyCapacity: function (v) { return CS.Call(3, 41, 4, false, this, v); },
        gethierarchyCount: function () { return CS.Call(2, 41, 5, false, this); },
        sethierarchyCount: function (v) { return CS.Call(3, 41, 5, false, this, v); },
        getlocalEulerAngles: function () { return CS.Call(2, 41, 6, false, this); },
        setlocalEulerAngles: function (v) { return CS.Call(3, 41, 6, false, this, v); },
        getlocalPosition: function () { return CS.Call(2, 41, 7, false, this); },
        setlocalPosition: function (v) { return CS.Call(3, 41, 7, false, this, v); },
        getlocalRotation: function () { return CS.Call(2, 41, 8, false, this); },
        setlocalRotation: function (v) { return CS.Call(3, 41, 8, false, this, v); },
        getlocalScale: function () { return CS.Call(2, 41, 9, false, this); },
        setlocalScale: function (v) { return CS.Call(3, 41, 9, false, this, v); },
        getlocalToWorldMatrix: function () { return CS.Call(2, 41, 10, false, this); },
        setlocalToWorldMatrix: function (v) { return CS.Call(3, 41, 10, false, this, v); },
        getlossyScale: function () { return CS.Call(2, 41, 11, false, this); },
        setlossyScale: function (v) { return CS.Call(3, 41, 11, false, this, v); },
        getparent: function () { return CS.Call(2, 41, 12, false, this); },
        setparent: function (v) { return CS.Call(3, 41, 12, false, this, v); },
        getposition: function () { return CS.Call(2, 41, 13, false, this); },
        setposition: function (v) { return CS.Call(3, 41, 13, false, this, v); },
        getright: function () { return CS.Call(2, 41, 14, false, this); },
        setright: function (v) { return CS.Call(3, 41, 14, false, this, v); },
        getroot: function () { return CS.Call(2, 41, 15, false, this); },
        setroot: function (v) { return CS.Call(3, 41, 15, false, this, v); },
        getrotation: function () { return CS.Call(2, 41, 16, false, this); },
        setrotation: function (v) { return CS.Call(3, 41, 16, false, this, v); },
        getup: function () { return CS.Call(2, 41, 17, false, this); },
        setup: function (v) { return CS.Call(3, 41, 17, false, this, v); },
        getworldToLocalMatrix: function () { return CS.Call(2, 41, 18, false, this); },
        setworldToLocalMatrix: function (v) { return CS.Call(3, 41, 18, false, this, v); },
        DetachChildren: function () { return CS.Call(4, 41, 0, false, this); },
        Find: function (a0/* String */) { return CS.Call(4, 41, 1, false, this, a0); },
        FindChild: function (a0/* String */) { return CS.Call(4, 41, 2, false, this, a0); },
        GetChild: function (a0/* Int32 */) { return CS.Call(4, 41, 3, false, this, a0); },
        GetEnumerator: function () { return CS.Call(4, 41, 4, false, this); },
        GetSiblingIndex: function () { return CS.Call(4, 41, 5, false, this); },
        InverseTransformDirection: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 6, false, this, a0, a1, a2); },
        InverseTransformDirection$1: function (a0/* Vector3 */) { return CS.Call(4, 41, 7, false, this, a0); },
        InverseTransformPoint: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 8, false, this, a0, a1, a2); },
        InverseTransformPoint$1: function (a0/* Vector3 */) { return CS.Call(4, 41, 9, false, this, a0); },
        InverseTransformVector: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 10, false, this, a0, a1, a2); },
        InverseTransformVector$1: function (a0/* Vector3 */) { return CS.Call(4, 41, 11, false, this, a0); },
        IsChildOf: function (a0/* Transform */) { return CS.Call(4, 41, 12, false, this, a0); },
        LookAt: function (a0/* Transform */) { return CS.Call(4, 41, 13, false, this, a0); },
        LookAt$1: function (a0/* Transform */, a1/* Vector3 */) { return CS.Call(4, 41, 14, false, this, a0, a1); },
        LookAt$2: function (a0/* Vector3 */) { return CS.Call(4, 41, 15, false, this, a0); },
        LookAt$3: function (a0/* Vector3 */, a1/* Vector3 */) { return CS.Call(4, 41, 16, false, this, a0, a1); },
        Rotate: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 17, false, this, a0, a1, a2); },
        Rotate$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Space */) { return CS.Call(4, 41, 18, false, this, a0, a1, a2, a3); },
        Rotate$2: function (a0/* Vector3 */) { return CS.Call(4, 41, 19, false, this, a0); },
        Rotate$3: function (a0/* Vector3 */, a1/* Single */) { return CS.Call(4, 41, 20, false, this, a0, a1); },
        Rotate$4: function (a0/* Vector3 */, a1/* Single */, a2/* Space */) { return CS.Call(4, 41, 21, false, this, a0, a1, a2); },
        Rotate$5: function (a0/* Vector3 */, a1/* Space */) { return CS.Call(4, 41, 22, false, this, a0, a1); },
        RotateAround: function (a0/* Vector3 */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 41, 23, false, this, a0, a1, a2); },
        SetAsFirstSibling: function () { return CS.Call(4, 41, 24, false, this); },
        SetAsLastSibling: function () { return CS.Call(4, 41, 25, false, this); },
        SetParent: function (a0/* Transform */) { return CS.Call(4, 41, 26, false, this, a0); },
        SetParent$1: function (a0/* Transform */, a1/* Boolean */) { return CS.Call(4, 41, 27, false, this, a0, a1); },
        SetSiblingIndex: function (a0/* Int32 */) { return CS.Call(4, 41, 28, false, this, a0); },
        TransformDirection: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 29, false, this, a0, a1, a2); },
        TransformDirection$1: function (a0/* Vector3 */) { return CS.Call(4, 41, 30, false, this, a0); },
        TransformPoint: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 31, false, this, a0, a1, a2); },
        TransformPoint$1: function (a0/* Vector3 */) { return CS.Call(4, 41, 32, false, this, a0); },
        TransformVector: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 33, false, this, a0, a1, a2); },
        TransformVector$1: function (a0/* Vector3 */) { return CS.Call(4, 41, 34, false, this, a0); },
        Translate: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 41, 35, false, this, a0, a1, a2); },
        Translate$1: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Space */) { return CS.Call(4, 41, 36, false, this, a0, a1, a2, a3); },
        Translate$2: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Transform */) { return CS.Call(4, 41, 37, false, this, a0, a1, a2, a3); },
        Translate$3: function (a0/* Vector3 */) { return CS.Call(4, 41, 38, false, this, a0); },
        Translate$4: function (a0/* Vector3 */, a1/* Space */) { return CS.Call(4, 41, 39, false, this, a0, a1); },
        Translate$5: function (a0/* Vector3 */, a1/* Transform */) { return CS.Call(4, 41, 40, false, this, a0, a1); },
    });
    if ($hc < 43) { return; }
     
    Bridge.define("UnityEngine.Behaviour", {
        inherits: [UnityEngine.Component],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 42, 0, true, this);
        },
        getenabled: function () { return CS.Call(2, 42, 0, false, this); },
        setenabled: function (v) { return CS.Call(3, 42, 0, false, this, v); },
        getisActiveAndEnabled: function () { return CS.Call(2, 42, 1, false, this); },
        setisActiveAndEnabled: function (v) { return CS.Call(3, 42, 1, false, this, v); },
    });
    if ($hc < 44) { return; }
     
    Bridge.define("UnityEngine.MeshCollider", {
        inherits: [UnityEngine.Collider],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 43, 0, true, this);
        },
        getconvex: function () { return CS.Call(2, 43, 0, false, this); },
        setconvex: function (v) { return CS.Call(3, 43, 0, false, this, v); },
        getsharedMesh: function () { return CS.Call(2, 43, 1, false, this); },
        setsharedMesh: function (v) { return CS.Call(3, 43, 1, false, this, v); },
    });
    if ($hc < 45) { return; }
     
    Bridge.define("UnityEngine.MeshRenderer", {
        inherits: [UnityEngine.Renderer],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 44, 0, true, this);
        },
        getadditionalVertexStreams: function () { return CS.Call(2, 44, 0, false, this); },
        setadditionalVertexStreams: function (v) { return CS.Call(3, 44, 0, false, this, v); },
    });
    if ($hc < 46) { return; }
     
    Bridge.define("UnityEngine.SphereCollider", {
        inherits: [UnityEngine.Collider],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 45, 0, true, this);
        },
        getcenter: function () { return CS.Call(2, 45, 0, false, this); },
        setcenter: function (v) { return CS.Call(3, 45, 0, false, this, v); },
        getradius: function () { return CS.Call(2, 45, 1, false, this); },
        setradius: function (v) { return CS.Call(3, 45, 1, false, this, v); },
    });
    if ($hc < 47) { return; }
     
    Bridge.define("UnityEngine.LineRenderer", {
        inherits: [UnityEngine.Renderer],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 46, 0, true, this);
        },
        getuseWorldSpace: function () { return CS.Call(2, 46, 0, false, this); },
        setuseWorldSpace: function (v) { return CS.Call(3, 46, 0, false, this, v); },
        SetColors: function (a0/* Color */, a1/* Color */) { return CS.Call(4, 46, 0, false, this, a0, a1); },
        SetPosition: function (a0/* Int32 */, a1/* Vector3 */) { return CS.Call(4, 46, 1, false, this, a0, a1); },
        SetPositions: function (a0/* Vector3[] */) { return CS.Call(4, 46, 2, false, this, a0); },
        SetVertexCount: function (a0/* Int32 */) { return CS.Call(4, 46, 3, false, this, a0); },
        SetWidth: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 46, 4, false, this, a0, a1); },
    });
    if ($hc < 48) { return; }
     
    Bridge.define("UnityEngine.MonoBehaviour", {
        inherits: [UnityEngine.Behaviour],
        statics: {
            print: function (a0/* Object */) { return CS.Call(4, 47, 14, true, a0); },
        },
        ctor: function () {},
        getuseGUILayout: function () { return CS.Call(2, 47, 0, false, this); },
        setuseGUILayout: function (v) { return CS.Call(3, 47, 0, false, this, v); },
        CancelInvoke: function () { return CS.Call(4, 47, 0, false, this); },
        CancelInvoke$1: function (a0/* String */) { return CS.Call(4, 47, 1, false, this, a0); },
        Invoke: function (a0/* String */, a1/* Single */) { return CS.Call(4, 47, 2, false, this, a0, a1); },
        InvokeRepeating: function (a0/* String */, a1/* Single */, a2/* Single */) { return CS.Call(4, 47, 3, false, this, a0, a1, a2); },
        IsInvoking: function () { return CS.Call(4, 47, 4, false, this); },
        IsInvoking$1: function (a0/* String */) { return CS.Call(4, 47, 5, false, this, a0); },
        StartCoroutine: function (a0/* IEnumerator */) { return CS.Call(4, 47, 6, false, this, a0); },
        StartCoroutine$1: function (a0/* String */) { return CS.Call(4, 47, 7, false, this, a0); },
        StartCoroutine$2: function (a0/* String */, a1/* Object */) { return CS.Call(4, 47, 8, false, this, a0, a1); },
        StartCoroutine_Auto: function (a0/* IEnumerator */) { return CS.Call(4, 47, 9, false, this, a0); },
        StopAllCoroutines: function () { return CS.Call(4, 47, 10, false, this); },
        StopCoroutine: function (a0/* IEnumerator */) { return CS.Call(4, 47, 11, false, this, a0); },
        StopCoroutine$1: function (a0/* String */) { return CS.Call(4, 47, 12, false, this, a0); },
        StopCoroutine$2: function (a0/* Coroutine */) { return CS.Call(4, 47, 13, false, this, a0); },
    });
    if ($hc < 49) { return; }
     
    Bridge.define("UnityEngine.RectTransform", {
        inherits: [UnityEngine.Transform, System.Collections.IEnumerable],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 48, 0, true, this);
        },
        getanchoredPosition: function () { return CS.Call(2, 48, 0, false, this); },
        setanchoredPosition: function (v) { return CS.Call(3, 48, 0, false, this, v); },
        getanchoredPosition3D: function () { return CS.Call(2, 48, 1, false, this); },
        setanchoredPosition3D: function (v) { return CS.Call(3, 48, 1, false, this, v); },
        getanchorMax: function () { return CS.Call(2, 48, 2, false, this); },
        setanchorMax: function (v) { return CS.Call(3, 48, 2, false, this, v); },
        getanchorMin: function () { return CS.Call(2, 48, 3, false, this); },
        setanchorMin: function (v) { return CS.Call(3, 48, 3, false, this, v); },
        getoffsetMax: function () { return CS.Call(2, 48, 4, false, this); },
        setoffsetMax: function (v) { return CS.Call(3, 48, 4, false, this, v); },
        getoffsetMin: function () { return CS.Call(2, 48, 5, false, this); },
        setoffsetMin: function (v) { return CS.Call(3, 48, 5, false, this, v); },
        getpivot: function () { return CS.Call(2, 48, 6, false, this); },
        setpivot: function (v) { return CS.Call(3, 48, 6, false, this, v); },
        getrect: function () { return CS.Call(2, 48, 7, false, this); },
        setrect: function (v) { return CS.Call(3, 48, 7, false, this, v); },
        getsizeDelta: function () { return CS.Call(2, 48, 8, false, this); },
        setsizeDelta: function (v) { return CS.Call(3, 48, 8, false, this, v); },
        GetLocalCorners: function (a0/* Vector3[] */) { return CS.Call(4, 48, 0, false, this, a0); },
        GetWorldCorners: function (a0/* Vector3[] */) { return CS.Call(4, 48, 1, false, this, a0); },
        SetInsetAndSizeFromParentEdge: function (a0/* Edge */, a1/* Single */, a2/* Single */) { return CS.Call(4, 48, 2, false, this, a0, a1, a2); },
        SetSizeWithCurrentAnchors: function (a0/* Axis */, a1/* Single */) { return CS.Call(4, 48, 3, false, this, a0, a1); },
    });
    if ($hc < 50) { return; }
     
    Bridge.define("UnityEngine.Camera", {
        inherits: [UnityEngine.Behaviour],
        statics: {
            $fields: {
                onPreCull: {
                    get: function () { return CS.Call(0, 49, 0, true); },
                    set: function (v) { return CS.Call(1, 49, 0, true, v); }
                },
                onPreRender: {
                    get: function () { return CS.Call(0, 49, 1, true); },
                    set: function (v) { return CS.Call(1, 49, 1, true, v); }
                },
                onPostRender: {
                    get: function () { return CS.Call(0, 49, 2, true); },
                    set: function (v) { return CS.Call(1, 49, 2, true, v); }
                },
            },
            getallCameras: function () { return CS.Call(2, 49, 40, true); },
            setallCameras: function (v) { return CS.Call(3, 49, 40, true, v); },
            getallCamerasCount: function () { return CS.Call(2, 49, 41, true); },
            setallCamerasCount: function (v) { return CS.Call(3, 49, 41, true, v); },
            getcurrent: function () { return CS.Call(2, 49, 42, true); },
            setcurrent: function (v) { return CS.Call(3, 49, 42, true, v); },
            getmain: function () { return CS.Call(2, 49, 43, true); },
            setmain: function (v) { return CS.Call(3, 49, 43, true, v); },
            GetAllCameras: function (a0/* Camera[] */) { return CS.Call(4, 49, 39, true, a0); },
            SetupCurrent: function (a0/* Camera */) { return CS.Call(4, 49, 40, true, a0); },
        },
        ctor: function () {
            CS.Call(5, 49, 0, true, this);
        },
        getactualRenderingPath: function () { return CS.Call(2, 49, 0, false, this); },
        setactualRenderingPath: function (v) { return CS.Call(3, 49, 0, false, this, v); },
        getaspect: function () { return CS.Call(2, 49, 1, false, this); },
        setaspect: function (v) { return CS.Call(3, 49, 1, false, this, v); },
        getbackgroundColor: function () { return CS.Call(2, 49, 2, false, this); },
        setbackgroundColor: function (v) { return CS.Call(3, 49, 2, false, this, v); },
        getcameraToWorldMatrix: function () { return CS.Call(2, 49, 3, false, this); },
        setcameraToWorldMatrix: function (v) { return CS.Call(3, 49, 3, false, this, v); },
        getcameraType: function () { return CS.Call(2, 49, 4, false, this); },
        setcameraType: function (v) { return CS.Call(3, 49, 4, false, this, v); },
        getclearFlags: function () { return CS.Call(2, 49, 5, false, this); },
        setclearFlags: function (v) { return CS.Call(3, 49, 5, false, this, v); },
        getclearStencilAfterLightingPass: function () { return CS.Call(2, 49, 6, false, this); },
        setclearStencilAfterLightingPass: function (v) { return CS.Call(3, 49, 6, false, this, v); },
        getcommandBufferCount: function () { return CS.Call(2, 49, 7, false, this); },
        setcommandBufferCount: function (v) { return CS.Call(3, 49, 7, false, this, v); },
        getcullingMask: function () { return CS.Call(2, 49, 8, false, this); },
        setcullingMask: function (v) { return CS.Call(3, 49, 8, false, this, v); },
        getcullingMatrix: function () { return CS.Call(2, 49, 9, false, this); },
        setcullingMatrix: function (v) { return CS.Call(3, 49, 9, false, this, v); },
        getdepth: function () { return CS.Call(2, 49, 10, false, this); },
        setdepth: function (v) { return CS.Call(3, 49, 10, false, this, v); },
        getdepthTextureMode: function () { return CS.Call(2, 49, 11, false, this); },
        setdepthTextureMode: function (v) { return CS.Call(3, 49, 11, false, this, v); },
        geteventMask: function () { return CS.Call(2, 49, 12, false, this); },
        seteventMask: function (v) { return CS.Call(3, 49, 12, false, this, v); },
        getfarClipPlane: function () { return CS.Call(2, 49, 13, false, this); },
        setfarClipPlane: function (v) { return CS.Call(3, 49, 13, false, this, v); },
        getfieldOfView: function () { return CS.Call(2, 49, 14, false, this); },
        setfieldOfView: function (v) { return CS.Call(3, 49, 14, false, this, v); },
        gethdr: function () { return CS.Call(2, 49, 15, false, this); },
        sethdr: function (v) { return CS.Call(3, 49, 15, false, this, v); },
        getlayerCullDistances: function () { return CS.Call(2, 49, 16, false, this); },
        setlayerCullDistances: function (v) { return CS.Call(3, 49, 16, false, this, v); },
        getlayerCullSpherical: function () { return CS.Call(2, 49, 17, false, this); },
        setlayerCullSpherical: function (v) { return CS.Call(3, 49, 17, false, this, v); },
        getnearClipPlane: function () { return CS.Call(2, 49, 18, false, this); },
        setnearClipPlane: function (v) { return CS.Call(3, 49, 18, false, this, v); },
        getnonJitteredProjectionMatrix: function () { return CS.Call(2, 49, 19, false, this); },
        setnonJitteredProjectionMatrix: function (v) { return CS.Call(3, 49, 19, false, this, v); },
        getopaqueSortMode: function () { return CS.Call(2, 49, 20, false, this); },
        setopaqueSortMode: function (v) { return CS.Call(3, 49, 20, false, this, v); },
        getorthographic: function () { return CS.Call(2, 49, 21, false, this); },
        setorthographic: function (v) { return CS.Call(3, 49, 21, false, this, v); },
        getorthographicSize: function () { return CS.Call(2, 49, 22, false, this); },
        setorthographicSize: function (v) { return CS.Call(3, 49, 22, false, this, v); },
        getpixelHeight: function () { return CS.Call(2, 49, 23, false, this); },
        setpixelHeight: function (v) { return CS.Call(3, 49, 23, false, this, v); },
        getpixelRect: function () { return CS.Call(2, 49, 24, false, this); },
        setpixelRect: function (v) { return CS.Call(3, 49, 24, false, this, v); },
        getpixelWidth: function () { return CS.Call(2, 49, 25, false, this); },
        setpixelWidth: function (v) { return CS.Call(3, 49, 25, false, this, v); },
        getprojectionMatrix: function () { return CS.Call(2, 49, 26, false, this); },
        setprojectionMatrix: function (v) { return CS.Call(3, 49, 26, false, this, v); },
        getrect: function () { return CS.Call(2, 49, 27, false, this); },
        setrect: function (v) { return CS.Call(3, 49, 27, false, this, v); },
        getrenderingPath: function () { return CS.Call(2, 49, 28, false, this); },
        setrenderingPath: function (v) { return CS.Call(3, 49, 28, false, this, v); },
        getstereoConvergence: function () { return CS.Call(2, 49, 29, false, this); },
        setstereoConvergence: function (v) { return CS.Call(3, 49, 29, false, this, v); },
        getstereoEnabled: function () { return CS.Call(2, 49, 30, false, this); },
        setstereoEnabled: function (v) { return CS.Call(3, 49, 30, false, this, v); },
        getstereoMirrorMode: function () { return CS.Call(2, 49, 31, false, this); },
        setstereoMirrorMode: function (v) { return CS.Call(3, 49, 31, false, this, v); },
        getstereoSeparation: function () { return CS.Call(2, 49, 32, false, this); },
        setstereoSeparation: function (v) { return CS.Call(3, 49, 32, false, this, v); },
        getstereoTargetEye: function () { return CS.Call(2, 49, 33, false, this); },
        setstereoTargetEye: function (v) { return CS.Call(3, 49, 33, false, this, v); },
        gettargetDisplay: function () { return CS.Call(2, 49, 34, false, this); },
        settargetDisplay: function (v) { return CS.Call(3, 49, 34, false, this, v); },
        gettargetTexture: function () { return CS.Call(2, 49, 35, false, this); },
        settargetTexture: function (v) { return CS.Call(3, 49, 35, false, this, v); },
        gettransparencySortMode: function () { return CS.Call(2, 49, 36, false, this); },
        settransparencySortMode: function (v) { return CS.Call(3, 49, 36, false, this, v); },
        getuseOcclusionCulling: function () { return CS.Call(2, 49, 37, false, this); },
        setuseOcclusionCulling: function (v) { return CS.Call(3, 49, 37, false, this, v); },
        getvelocity: function () { return CS.Call(2, 49, 38, false, this); },
        setvelocity: function (v) { return CS.Call(3, 49, 38, false, this, v); },
        getworldToCameraMatrix: function () { return CS.Call(2, 49, 39, false, this); },
        setworldToCameraMatrix: function (v) { return CS.Call(3, 49, 39, false, this, v); },
        AddCommandBuffer: function (a0/* CameraEvent */, a1/* CommandBuffer */) { return CS.Call(4, 49, 0, false, this, a0, a1); },
        CalculateObliqueMatrix: function (a0/* Vector4 */) { return CS.Call(4, 49, 1, false, this, a0); },
        CopyFrom: function (a0/* Camera */) { return CS.Call(4, 49, 2, false, this, a0); },
        GetCommandBuffers: function (a0/* CameraEvent */) { return CS.Call(4, 49, 3, false, this, a0); },
        GetStereoProjectionMatrix: function (a0/* StereoscopicEye */) { return CS.Call(4, 49, 4, false, this, a0); },
        GetStereoViewMatrix: function (a0/* StereoscopicEye */) { return CS.Call(4, 49, 5, false, this, a0); },
        RemoveAllCommandBuffers: function () { return CS.Call(4, 49, 6, false, this); },
        RemoveCommandBuffer: function (a0/* CameraEvent */, a1/* CommandBuffer */) { return CS.Call(4, 49, 7, false, this, a0, a1); },
        RemoveCommandBuffers: function (a0/* CameraEvent */) { return CS.Call(4, 49, 8, false, this, a0); },
        Render: function () { return CS.Call(4, 49, 9, false, this); },
        RenderDontRestore: function () { return CS.Call(4, 49, 10, false, this); },
        RenderToCubemap: function (a0/* Cubemap */) { return CS.Call(4, 49, 11, false, this, a0); },
        RenderToCubemap$1: function (a0/* Cubemap */, a1/* Int32 */) { return CS.Call(4, 49, 12, false, this, a0, a1); },
        RenderToCubemap$2: function (a0/* RenderTexture */) { return CS.Call(4, 49, 13, false, this, a0); },
        RenderToCubemap$3: function (a0/* RenderTexture */, a1/* Int32 */) { return CS.Call(4, 49, 14, false, this, a0, a1); },
        RenderWithShader: function (a0/* Shader */, a1/* String */) { return CS.Call(4, 49, 15, false, this, a0, a1); },
        ResetAspect: function () { return CS.Call(4, 49, 16, false, this); },
        ResetCullingMatrix: function () { return CS.Call(4, 49, 17, false, this); },
        ResetFieldOfView: function () { return CS.Call(4, 49, 18, false, this); },
        ResetProjectionMatrix: function () { return CS.Call(4, 49, 19, false, this); },
        ResetReplacementShader: function () { return CS.Call(4, 49, 20, false, this); },
        ResetStereoProjectionMatrices: function () { return CS.Call(4, 49, 21, false, this); },
        ResetStereoViewMatrices: function () { return CS.Call(4, 49, 22, false, this); },
        ResetWorldToCameraMatrix: function () { return CS.Call(4, 49, 23, false, this); },
        ScreenPointToRay: function (a0/* Vector3 */) { return CS.Call(4, 49, 24, false, this, a0); },
        ScreenToViewportPoint: function (a0/* Vector3 */) { return CS.Call(4, 49, 25, false, this, a0); },
        ScreenToWorldPoint: function (a0/* Vector3 */) { return CS.Call(4, 49, 26, false, this, a0); },
        SetReplacementShader: function (a0/* Shader */, a1/* String */) { return CS.Call(4, 49, 27, false, this, a0, a1); },
        SetStereoProjectionMatrices: function (a0/* Matrix4x4 */, a1/* Matrix4x4 */) { return CS.Call(4, 49, 28, false, this, a0, a1); },
        SetStereoProjectionMatrix: function (a0/* StereoscopicEye */, a1/* Matrix4x4 */) { return CS.Call(4, 49, 29, false, this, a0, a1); },
        SetStereoViewMatrices: function (a0/* Matrix4x4 */, a1/* Matrix4x4 */) { return CS.Call(4, 49, 30, false, this, a0, a1); },
        SetStereoViewMatrix: function (a0/* StereoscopicEye */, a1/* Matrix4x4 */) { return CS.Call(4, 49, 31, false, this, a0, a1); },
        SetTargetBuffers: function (a0/* RenderBuffer */, a1/* RenderBuffer */) { return CS.Call(4, 49, 32, false, this, a0, a1); },
        SetTargetBuffers$1: function (a0/* RenderBuffer[] */, a1/* RenderBuffer */) { return CS.Call(4, 49, 33, false, this, a0, a1); },
        ViewportPointToRay: function (a0/* Vector3 */) { return CS.Call(4, 49, 34, false, this, a0); },
        ViewportToScreenPoint: function (a0/* Vector3 */) { return CS.Call(4, 49, 35, false, this, a0); },
        ViewportToWorldPoint: function (a0/* Vector3 */) { return CS.Call(4, 49, 36, false, this, a0); },
        WorldToScreenPoint: function (a0/* Vector3 */) { return CS.Call(4, 49, 37, false, this, a0); },
        WorldToViewportPoint: function (a0/* Vector3 */) { return CS.Call(4, 49, 38, false, this, a0); },
    });
    if ($hc < 51) { return; }
     
    Bridge.define("UnityEngine.BoxCollider", {
        inherits: [UnityEngine.Collider],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 50, 0, true, this);
        },
        getcenter: function () { return CS.Call(2, 50, 0, false, this); },
        setcenter: function (v) { return CS.Call(3, 50, 0, false, this, v); },
        getsize: function () { return CS.Call(2, 50, 1, false, this); },
        setsize: function (v) { return CS.Call(3, 50, 1, false, this, v); },
    });
    if ($hc < 52) { return; }
     
    Bridge.define("UnityEngine.CapsuleCollider", {
        inherits: [UnityEngine.Collider],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 51, 0, true, this);
        },
        getcenter: function () { return CS.Call(2, 51, 0, false, this); },
        setcenter: function (v) { return CS.Call(3, 51, 0, false, this, v); },
        getdirection: function () { return CS.Call(2, 51, 1, false, this); },
        setdirection: function (v) { return CS.Call(3, 51, 1, false, this, v); },
        getheight: function () { return CS.Call(2, 51, 2, false, this); },
        setheight: function (v) { return CS.Call(3, 51, 2, false, this, v); },
        getradius: function () { return CS.Call(2, 51, 3, false, this); },
        setradius: function (v) { return CS.Call(3, 51, 3, false, this, v); },
    });
    if ($hc < 53) { return; }
     
    Bridge.define("UnityEngine.SpriteRenderer", {
        inherits: [UnityEngine.Renderer],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 52, 0, true, this);
        },
        getcolor: function () { return CS.Call(2, 52, 0, false, this); },
        setcolor: function (v) { return CS.Call(3, 52, 0, false, this, v); },
        getflipX: function () { return CS.Call(2, 52, 1, false, this); },
        setflipX: function (v) { return CS.Call(3, 52, 1, false, this, v); },
        getflipY: function () { return CS.Call(2, 52, 2, false, this); },
        setflipY: function (v) { return CS.Call(3, 52, 2, false, this, v); },
        getsprite: function () { return CS.Call(2, 52, 3, false, this); },
        setsprite: function (v) { return CS.Call(3, 52, 3, false, this, v); },
    });
    if ($hc < 54) { return; }
     
    Bridge.define("UnityEngine.Collider2D", {
        inherits: [UnityEngine.Behaviour],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 53, 0, true, this);
        },
        getattachedRigidbody: function () { return CS.Call(2, 53, 0, false, this); },
        setattachedRigidbody: function (v) { return CS.Call(3, 53, 0, false, this, v); },
        getbounds: function () { return CS.Call(2, 53, 1, false, this); },
        setbounds: function (v) { return CS.Call(3, 53, 1, false, this, v); },
        getdensity: function () { return CS.Call(2, 53, 2, false, this); },
        setdensity: function (v) { return CS.Call(3, 53, 2, false, this, v); },
        getisTrigger: function () { return CS.Call(2, 53, 3, false, this); },
        setisTrigger: function (v) { return CS.Call(3, 53, 3, false, this, v); },
        getoffset: function () { return CS.Call(2, 53, 4, false, this); },
        setoffset: function (v) { return CS.Call(3, 53, 4, false, this, v); },
        getshapeCount: function () { return CS.Call(2, 53, 5, false, this); },
        setshapeCount: function (v) { return CS.Call(3, 53, 5, false, this, v); },
        getsharedMaterial: function () { return CS.Call(2, 53, 6, false, this); },
        setsharedMaterial: function (v) { return CS.Call(3, 53, 6, false, this, v); },
        getusedByEffector: function () { return CS.Call(2, 53, 7, false, this); },
        setusedByEffector: function (v) { return CS.Call(3, 53, 7, false, this, v); },
        Cast: function (a0/* Vector2 */, a1/* RaycastHit2D[] */) { return CS.Call(4, 53, 0, false, this, a0, a1); },
        Cast$1: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */) { return CS.Call(4, 53, 1, false, this, a0, a1, a2); },
        Cast$2: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */, a3/* Boolean */) { return CS.Call(4, 53, 2, false, this, a0, a1, a2, a3); },
        IsTouching: function (a0/* Collider2D */) { return CS.Call(4, 53, 3, false, this, a0); },
        IsTouchingLayers: function () { return CS.Call(4, 53, 4, false, this); },
        IsTouchingLayers$1: function (a0/* Int32 */) { return CS.Call(4, 53, 5, false, this, a0); },
        OverlapPoint: function (a0/* Vector2 */) { return CS.Call(4, 53, 6, false, this, a0); },
        Raycast: function (a0/* Vector2 */, a1/* RaycastHit2D[] */) { return CS.Call(4, 53, 7, false, this, a0, a1); },
        Raycast$1: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */) { return CS.Call(4, 53, 8, false, this, a0, a1, a2); },
        Raycast$2: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */, a3/* Int32 */) { return CS.Call(4, 53, 9, false, this, a0, a1, a2, a3); },
        Raycast$3: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */, a3/* Int32 */, a4/* Single */) { return CS.Call(4, 53, 10, false, this, a0, a1, a2, a3, a4); },
        Raycast$4: function (a0/* Vector2 */, a1/* RaycastHit2D[] */, a2/* Single */, a3/* Int32 */, a4/* Single */, a5/* Single */) { return CS.Call(4, 53, 11, false, this, a0, a1, a2, a3, a4, a5); },
    });
    if ($hc < 55) { return; }
     
    Bridge.define("UnityEngine.Animation", {
        inherits: [UnityEngine.Behaviour, System.Collections.IEnumerable],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 54, 0, true, this);
        },
        getanimatePhysics: function () { return CS.Call(2, 54, 0, false, this); },
        setanimatePhysics: function (v) { return CS.Call(3, 54, 0, false, this, v); },
        getclip: function () { return CS.Call(2, 54, 1, false, this); },
        setclip: function (v) { return CS.Call(3, 54, 1, false, this, v); },
        getcullingType: function () { return CS.Call(2, 54, 2, false, this); },
        setcullingType: function (v) { return CS.Call(3, 54, 2, false, this, v); },
        getisPlaying: function () { return CS.Call(2, 54, 3, false, this); },
        setisPlaying: function (v) { return CS.Call(3, 54, 3, false, this, v); },
        getItem: function (ind0) { return CS.Call(2, 54, 4, false, this, ind0); },
        setItem: function (ind0, v) { return CS.Call(3, 54, 4, false, this, ind0, v); },
        getlocalBounds: function () { return CS.Call(2, 54, 5, false, this); },
        setlocalBounds: function (v) { return CS.Call(3, 54, 5, false, this, v); },
        getplayAutomatically: function () { return CS.Call(2, 54, 6, false, this); },
        setplayAutomatically: function (v) { return CS.Call(3, 54, 6, false, this, v); },
        getwrapMode: function () { return CS.Call(2, 54, 7, false, this); },
        setwrapMode: function (v) { return CS.Call(3, 54, 7, false, this, v); },
        AddClip: function (a0/* AnimationClip */, a1/* String */) { return CS.Call(4, 54, 0, false, this, a0, a1); },
        AddClip$1: function (a0/* AnimationClip */, a1/* String */, a2/* Int32 */, a3/* Int32 */) { return CS.Call(4, 54, 1, false, this, a0, a1, a2, a3); },
        AddClip$2: function (a0/* AnimationClip */, a1/* String */, a2/* Int32 */, a3/* Int32 */, a4/* Boolean */) { return CS.Call(4, 54, 2, false, this, a0, a1, a2, a3, a4); },
        Blend: function (a0/* String */) { return CS.Call(4, 54, 3, false, this, a0); },
        Blend$1: function (a0/* String */, a1/* Single */) { return CS.Call(4, 54, 4, false, this, a0, a1); },
        Blend$2: function (a0/* String */, a1/* Single */, a2/* Single */) { return CS.Call(4, 54, 5, false, this, a0, a1, a2); },
        CrossFade: function (a0/* String */) { return CS.Call(4, 54, 6, false, this, a0); },
        CrossFade$1: function (a0/* String */, a1/* Single */) { return CS.Call(4, 54, 7, false, this, a0, a1); },
        CrossFade$2: function (a0/* String */, a1/* Single */, a2/* PlayMode */) { return CS.Call(4, 54, 8, false, this, a0, a1, a2); },
        CrossFadeQueued: function (a0/* String */) { return CS.Call(4, 54, 9, false, this, a0); },
        CrossFadeQueued$1: function (a0/* String */, a1/* Single */) { return CS.Call(4, 54, 10, false, this, a0, a1); },
        CrossFadeQueued$2: function (a0/* String */, a1/* Single */, a2/* QueueMode */) { return CS.Call(4, 54, 11, false, this, a0, a1, a2); },
        CrossFadeQueued$3: function (a0/* String */, a1/* Single */, a2/* QueueMode */, a3/* PlayMode */) { return CS.Call(4, 54, 12, false, this, a0, a1, a2, a3); },
        GetClip: function (a0/* String */) { return CS.Call(4, 54, 13, false, this, a0); },
        GetClipCount: function () { return CS.Call(4, 54, 14, false, this); },
        GetEnumerator: function () { return CS.Call(4, 54, 15, false, this); },
        IsPlaying: function (a0/* String */) { return CS.Call(4, 54, 16, false, this, a0); },
        Play: function () { return CS.Call(4, 54, 17, false, this); },
        Play$1: function (a0/* String */) { return CS.Call(4, 54, 18, false, this, a0); },
        Play$2: function (a0/* String */, a1/* PlayMode */) { return CS.Call(4, 54, 19, false, this, a0, a1); },
        Play$3: function (a0/* PlayMode */) { return CS.Call(4, 54, 20, false, this, a0); },
        PlayQueued: function (a0/* String */) { return CS.Call(4, 54, 21, false, this, a0); },
        PlayQueued$1: function (a0/* String */, a1/* QueueMode */) { return CS.Call(4, 54, 22, false, this, a0, a1); },
        PlayQueued$2: function (a0/* String */, a1/* QueueMode */, a2/* PlayMode */) { return CS.Call(4, 54, 23, false, this, a0, a1, a2); },
        RemoveClip: function (a0/* String */) { return CS.Call(4, 54, 24, false, this, a0); },
        RemoveClip$1: function (a0/* AnimationClip */) { return CS.Call(4, 54, 25, false, this, a0); },
        Rewind: function () { return CS.Call(4, 54, 26, false, this); },
        Rewind$1: function (a0/* String */) { return CS.Call(4, 54, 27, false, this, a0); },
        Sample: function () { return CS.Call(4, 54, 28, false, this); },
        Stop: function () { return CS.Call(4, 54, 29, false, this); },
        Stop$1: function (a0/* String */) { return CS.Call(4, 54, 30, false, this, a0); },
        SyncLayer: function (a0/* Int32 */) { return CS.Call(4, 54, 31, false, this, a0); },
    });
    if ($hc < 56) { return; }
     
    Bridge.define("UnityEngine.GUIElement", {
        inherits: [UnityEngine.Behaviour],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 55, 0, true, this);
        },
        GetScreenRect: function () { return CS.Call(4, 55, 0, false, this); },
        GetScreenRect$1: function (a0/* Camera */) { return CS.Call(4, 55, 1, false, this, a0); },
        HitTest: function (a0/* Vector3 */) { return CS.Call(4, 55, 2, false, this, a0); },
        HitTest$1: function (a0/* Vector3 */, a1/* Camera */) { return CS.Call(4, 55, 3, false, this, a0, a1); },
    });
    if ($hc < 57) { return; }
     
    Bridge.define("UnityEngine.ParticleSystemRenderer", {
        inherits: [UnityEngine.Renderer],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 56, 0, true, this);
        },
        getalignment: function () { return CS.Call(2, 56, 0, false, this); },
        setalignment: function (v) { return CS.Call(3, 56, 0, false, this, v); },
        getcameraVelocityScale: function () { return CS.Call(2, 56, 1, false, this); },
        setcameraVelocityScale: function (v) { return CS.Call(3, 56, 1, false, this, v); },
        getlengthScale: function () { return CS.Call(2, 56, 2, false, this); },
        setlengthScale: function (v) { return CS.Call(3, 56, 2, false, this, v); },
        getmaxParticleSize: function () { return CS.Call(2, 56, 3, false, this); },
        setmaxParticleSize: function (v) { return CS.Call(3, 56, 3, false, this, v); },
        getmesh: function () { return CS.Call(2, 56, 4, false, this); },
        setmesh: function (v) { return CS.Call(3, 56, 4, false, this, v); },
        getmeshCount: function () { return CS.Call(2, 56, 5, false, this); },
        setmeshCount: function (v) { return CS.Call(3, 56, 5, false, this, v); },
        getminParticleSize: function () { return CS.Call(2, 56, 6, false, this); },
        setminParticleSize: function (v) { return CS.Call(3, 56, 6, false, this, v); },
        getnormalDirection: function () { return CS.Call(2, 56, 7, false, this); },
        setnormalDirection: function (v) { return CS.Call(3, 56, 7, false, this, v); },
        getpivot: function () { return CS.Call(2, 56, 8, false, this); },
        setpivot: function (v) { return CS.Call(3, 56, 8, false, this, v); },
        getrenderMode: function () { return CS.Call(2, 56, 9, false, this); },
        setrenderMode: function (v) { return CS.Call(3, 56, 9, false, this, v); },
        getsortingFudge: function () { return CS.Call(2, 56, 10, false, this); },
        setsortingFudge: function (v) { return CS.Call(3, 56, 10, false, this, v); },
        getsortMode: function () { return CS.Call(2, 56, 11, false, this); },
        setsortMode: function (v) { return CS.Call(3, 56, 11, false, this, v); },
        getvelocityScale: function () { return CS.Call(2, 56, 12, false, this); },
        setvelocityScale: function (v) { return CS.Call(3, 56, 12, false, this, v); },
        GetMeshes: function (a0/* Mesh[] */) { return CS.Call(4, 56, 0, false, this, a0); },
        SetMeshes: function (a0/* Mesh[] */) { return CS.Call(4, 56, 1, false, this, a0); },
        SetMeshes$1: function (a0/* Mesh[] */, a1/* Int32 */) { return CS.Call(4, 56, 2, false, this, a0, a1); },
    });
    if ($hc < 58) { return; }
     
    Bridge.define("UnityEngine.Experimental.Director.DirectorPlayer", {
        inherits: [UnityEngine.Behaviour],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 57, 0, true, this);
        },
        GetTime: function () { return CS.Call(4, 57, 0, false, this); },
        GetTimeUpdateMode: function () { return CS.Call(4, 57, 1, false, this); },
        Play: function (a0/* Playable */) { return CS.Call(4, 57, 2, false, this, a0); },
        SetTime: function (a0/* Double */) { return CS.Call(4, 57, 3, false, this, a0); },
        SetTimeUpdateMode: function (a0/* DirectorUpdateMode */) { return CS.Call(4, 57, 4, false, this, a0); },
        Stop: function () { return CS.Call(4, 57, 5, false, this); },
    });
    if ($hc < 59) { return; }
     
    Bridge.define("UnityEngine.AudioSource", {
        inherits: [UnityEngine.Behaviour],
        statics: {
            PlayClipAtPoint: function (a0/* AudioClip */, a1/* Vector3 */) { return CS.Call(4, 58, 17, true, a0, a1); },
            PlayClipAtPoint$1: function (a0/* AudioClip */, a1/* Vector3 */, a2/* Single */) { return CS.Call(4, 58, 18, true, a0, a1, a2); },
        },
        ctor: function () {
            CS.Call(5, 58, 0, true, this);
        },
        getbypassEffects: function () { return CS.Call(2, 58, 0, false, this); },
        setbypassEffects: function (v) { return CS.Call(3, 58, 0, false, this, v); },
        getbypassListenerEffects: function () { return CS.Call(2, 58, 1, false, this); },
        setbypassListenerEffects: function (v) { return CS.Call(3, 58, 1, false, this, v); },
        getbypassReverbZones: function () { return CS.Call(2, 58, 2, false, this); },
        setbypassReverbZones: function (v) { return CS.Call(3, 58, 2, false, this, v); },
        getclip: function () { return CS.Call(2, 58, 3, false, this); },
        setclip: function (v) { return CS.Call(3, 58, 3, false, this, v); },
        getdopplerLevel: function () { return CS.Call(2, 58, 4, false, this); },
        setdopplerLevel: function (v) { return CS.Call(3, 58, 4, false, this, v); },
        getignoreListenerPause: function () { return CS.Call(2, 58, 5, false, this); },
        setignoreListenerPause: function (v) { return CS.Call(3, 58, 5, false, this, v); },
        getignoreListenerVolume: function () { return CS.Call(2, 58, 6, false, this); },
        setignoreListenerVolume: function (v) { return CS.Call(3, 58, 6, false, this, v); },
        getisPlaying: function () { return CS.Call(2, 58, 7, false, this); },
        setisPlaying: function (v) { return CS.Call(3, 58, 7, false, this, v); },
        getisVirtual: function () { return CS.Call(2, 58, 8, false, this); },
        setisVirtual: function (v) { return CS.Call(3, 58, 8, false, this, v); },
        getloop: function () { return CS.Call(2, 58, 9, false, this); },
        setloop: function (v) { return CS.Call(3, 58, 9, false, this, v); },
        getmaxDistance: function () { return CS.Call(2, 58, 10, false, this); },
        setmaxDistance: function (v) { return CS.Call(3, 58, 10, false, this, v); },
        getminDistance: function () { return CS.Call(2, 58, 11, false, this); },
        setminDistance: function (v) { return CS.Call(3, 58, 11, false, this, v); },
        getmute: function () { return CS.Call(2, 58, 12, false, this); },
        setmute: function (v) { return CS.Call(3, 58, 12, false, this, v); },
        getoutputAudioMixerGroup: function () { return CS.Call(2, 58, 13, false, this); },
        setoutputAudioMixerGroup: function (v) { return CS.Call(3, 58, 13, false, this, v); },
        getpanStereo: function () { return CS.Call(2, 58, 14, false, this); },
        setpanStereo: function (v) { return CS.Call(3, 58, 14, false, this, v); },
        getpitch: function () { return CS.Call(2, 58, 15, false, this); },
        setpitch: function (v) { return CS.Call(3, 58, 15, false, this, v); },
        getplayOnAwake: function () { return CS.Call(2, 58, 16, false, this); },
        setplayOnAwake: function (v) { return CS.Call(3, 58, 16, false, this, v); },
        getpriority: function () { return CS.Call(2, 58, 17, false, this); },
        setpriority: function (v) { return CS.Call(3, 58, 17, false, this, v); },
        getreverbZoneMix: function () { return CS.Call(2, 58, 18, false, this); },
        setreverbZoneMix: function (v) { return CS.Call(3, 58, 18, false, this, v); },
        getrolloffMode: function () { return CS.Call(2, 58, 19, false, this); },
        setrolloffMode: function (v) { return CS.Call(3, 58, 19, false, this, v); },
        getspatialBlend: function () { return CS.Call(2, 58, 20, false, this); },
        setspatialBlend: function (v) { return CS.Call(3, 58, 20, false, this, v); },
        getspatialize: function () { return CS.Call(2, 58, 21, false, this); },
        setspatialize: function (v) { return CS.Call(3, 58, 21, false, this, v); },
        getspread: function () { return CS.Call(2, 58, 22, false, this); },
        setspread: function (v) { return CS.Call(3, 58, 22, false, this, v); },
        gettime: function () { return CS.Call(2, 58, 23, false, this); },
        settime: function (v) { return CS.Call(3, 58, 23, false, this, v); },
        gettimeSamples: function () { return CS.Call(2, 58, 24, false, this); },
        settimeSamples: function (v) { return CS.Call(3, 58, 24, false, this, v); },
        getvelocityUpdateMode: function () { return CS.Call(2, 58, 25, false, this); },
        setvelocityUpdateMode: function (v) { return CS.Call(3, 58, 25, false, this, v); },
        getvolume: function () { return CS.Call(2, 58, 26, false, this); },
        setvolume: function (v) { return CS.Call(3, 58, 26, false, this, v); },
        GetCustomCurve: function (a0/* AudioSourceCurveType */) { return CS.Call(4, 58, 0, false, this, a0); },
        GetOutputData: function (a0/* Single[] */, a1/* Int32 */) { return CS.Call(4, 58, 1, false, this, a0, a1); },
        GetSpatializerFloat: function (a0/* Int32 */, a1/* Single& */) { return CS.Call(4, 58, 2, false, this, a0, a1); },
        GetSpectrumData: function (a0/* Single[] */, a1/* Int32 */, a2/* FFTWindow */) { return CS.Call(4, 58, 3, false, this, a0, a1, a2); },
        Pause: function () { return CS.Call(4, 58, 4, false, this); },
        Play: function () { return CS.Call(4, 58, 5, false, this); },
        Play$1: function (a0/* UInt64 */) { return CS.Call(4, 58, 6, false, this, a0); },
        PlayDelayed: function (a0/* Single */) { return CS.Call(4, 58, 7, false, this, a0); },
        PlayOneShot: function (a0/* AudioClip */) { return CS.Call(4, 58, 8, false, this, a0); },
        PlayOneShot$1: function (a0/* AudioClip */, a1/* Single */) { return CS.Call(4, 58, 9, false, this, a0, a1); },
        PlayScheduled: function (a0/* Double */) { return CS.Call(4, 58, 10, false, this, a0); },
        SetCustomCurve: function (a0/* AudioSourceCurveType */, a1/* AnimationCurve */) { return CS.Call(4, 58, 11, false, this, a0, a1); },
        SetScheduledEndTime: function (a0/* Double */) { return CS.Call(4, 58, 12, false, this, a0); },
        SetScheduledStartTime: function (a0/* Double */) { return CS.Call(4, 58, 13, false, this, a0); },
        SetSpatializerFloat: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 58, 14, false, this, a0, a1); },
        Stop: function () { return CS.Call(4, 58, 15, false, this); },
        UnPause: function () { return CS.Call(4, 58, 16, false, this); },
    });
    if ($hc < 60) { return; }
     
    Bridge.define("UnityEngine.Light", {
        inherits: [UnityEngine.Behaviour],
        statics: {
            GetLights: function (a0/* LightType */, a1/* Int32 */) { return CS.Call(4, 59, 5, true, a0, a1); },
        },
        ctor: function () {
            CS.Call(5, 59, 0, true, this);
        },
        getbakedIndex: function () { return CS.Call(2, 59, 0, false, this); },
        setbakedIndex: function (v) { return CS.Call(3, 59, 0, false, this, v); },
        getbounceIntensity: function () { return CS.Call(2, 59, 1, false, this); },
        setbounceIntensity: function (v) { return CS.Call(3, 59, 1, false, this, v); },
        getcolor: function () { return CS.Call(2, 59, 2, false, this); },
        setcolor: function (v) { return CS.Call(3, 59, 2, false, this, v); },
        getcommandBufferCount: function () { return CS.Call(2, 59, 3, false, this); },
        setcommandBufferCount: function (v) { return CS.Call(3, 59, 3, false, this, v); },
        getcookie: function () { return CS.Call(2, 59, 4, false, this); },
        setcookie: function (v) { return CS.Call(3, 59, 4, false, this, v); },
        getcookieSize: function () { return CS.Call(2, 59, 5, false, this); },
        setcookieSize: function (v) { return CS.Call(3, 59, 5, false, this, v); },
        getcullingMask: function () { return CS.Call(2, 59, 6, false, this); },
        setcullingMask: function (v) { return CS.Call(3, 59, 6, false, this, v); },
        getflare: function () { return CS.Call(2, 59, 7, false, this); },
        setflare: function (v) { return CS.Call(3, 59, 7, false, this, v); },
        getintensity: function () { return CS.Call(2, 59, 8, false, this); },
        setintensity: function (v) { return CS.Call(3, 59, 8, false, this, v); },
        getisBaked: function () { return CS.Call(2, 59, 9, false, this); },
        setisBaked: function (v) { return CS.Call(3, 59, 9, false, this, v); },
        getrange: function () { return CS.Call(2, 59, 10, false, this); },
        setrange: function (v) { return CS.Call(3, 59, 10, false, this, v); },
        getrenderMode: function () { return CS.Call(2, 59, 11, false, this); },
        setrenderMode: function (v) { return CS.Call(3, 59, 11, false, this, v); },
        getshadowBias: function () { return CS.Call(2, 59, 12, false, this); },
        setshadowBias: function (v) { return CS.Call(3, 59, 12, false, this, v); },
        getshadowCustomResolution: function () { return CS.Call(2, 59, 13, false, this); },
        setshadowCustomResolution: function (v) { return CS.Call(3, 59, 13, false, this, v); },
        getshadowNearPlane: function () { return CS.Call(2, 59, 14, false, this); },
        setshadowNearPlane: function (v) { return CS.Call(3, 59, 14, false, this, v); },
        getshadowNormalBias: function () { return CS.Call(2, 59, 15, false, this); },
        setshadowNormalBias: function (v) { return CS.Call(3, 59, 15, false, this, v); },
        getshadowResolution: function () { return CS.Call(2, 59, 16, false, this); },
        setshadowResolution: function (v) { return CS.Call(3, 59, 16, false, this, v); },
        getshadows: function () { return CS.Call(2, 59, 17, false, this); },
        setshadows: function (v) { return CS.Call(3, 59, 17, false, this, v); },
        getshadowStrength: function () { return CS.Call(2, 59, 18, false, this); },
        setshadowStrength: function (v) { return CS.Call(3, 59, 18, false, this, v); },
        getspotAngle: function () { return CS.Call(2, 59, 19, false, this); },
        setspotAngle: function (v) { return CS.Call(3, 59, 19, false, this, v); },
        gettype: function () { return CS.Call(2, 59, 20, false, this); },
        settype: function (v) { return CS.Call(3, 59, 20, false, this, v); },
        AddCommandBuffer: function (a0/* LightEvent */, a1/* CommandBuffer */) { return CS.Call(4, 59, 0, false, this, a0, a1); },
        GetCommandBuffers: function (a0/* LightEvent */) { return CS.Call(4, 59, 1, false, this, a0); },
        RemoveAllCommandBuffers: function () { return CS.Call(4, 59, 2, false, this); },
        RemoveCommandBuffer: function (a0/* LightEvent */, a1/* CommandBuffer */) { return CS.Call(4, 59, 3, false, this, a0, a1); },
        RemoveCommandBuffers: function (a0/* LightEvent */) { return CS.Call(4, 59, 4, false, this, a0); },
    });
    if ($hc < 61) { return; }
     
    Bridge.define("UnityEngine.NavMeshAgent", {
        inherits: [UnityEngine.Behaviour],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 60, 0, true, this);
        },
        getacceleration: function () { return CS.Call(2, 60, 0, false, this); },
        setacceleration: function (v) { return CS.Call(3, 60, 0, false, this, v); },
        getangularSpeed: function () { return CS.Call(2, 60, 1, false, this); },
        setangularSpeed: function (v) { return CS.Call(3, 60, 1, false, this, v); },
        getareaMask: function () { return CS.Call(2, 60, 2, false, this); },
        setareaMask: function (v) { return CS.Call(3, 60, 2, false, this, v); },
        getautoBraking: function () { return CS.Call(2, 60, 3, false, this); },
        setautoBraking: function (v) { return CS.Call(3, 60, 3, false, this, v); },
        getautoRepath: function () { return CS.Call(2, 60, 4, false, this); },
        setautoRepath: function (v) { return CS.Call(3, 60, 4, false, this, v); },
        getautoTraverseOffMeshLink: function () { return CS.Call(2, 60, 5, false, this); },
        setautoTraverseOffMeshLink: function (v) { return CS.Call(3, 60, 5, false, this, v); },
        getavoidancePriority: function () { return CS.Call(2, 60, 6, false, this); },
        setavoidancePriority: function (v) { return CS.Call(3, 60, 6, false, this, v); },
        getbaseOffset: function () { return CS.Call(2, 60, 7, false, this); },
        setbaseOffset: function (v) { return CS.Call(3, 60, 7, false, this, v); },
        getcurrentOffMeshLinkData: function () { return CS.Call(2, 60, 8, false, this); },
        setcurrentOffMeshLinkData: function (v) { return CS.Call(3, 60, 8, false, this, v); },
        getdesiredVelocity: function () { return CS.Call(2, 60, 9, false, this); },
        setdesiredVelocity: function (v) { return CS.Call(3, 60, 9, false, this, v); },
        getdestination: function () { return CS.Call(2, 60, 10, false, this); },
        setdestination: function (v) { return CS.Call(3, 60, 10, false, this, v); },
        gethasPath: function () { return CS.Call(2, 60, 11, false, this); },
        sethasPath: function (v) { return CS.Call(3, 60, 11, false, this, v); },
        getheight: function () { return CS.Call(2, 60, 12, false, this); },
        setheight: function (v) { return CS.Call(3, 60, 12, false, this, v); },
        getisOnNavMesh: function () { return CS.Call(2, 60, 13, false, this); },
        setisOnNavMesh: function (v) { return CS.Call(3, 60, 13, false, this, v); },
        getisOnOffMeshLink: function () { return CS.Call(2, 60, 14, false, this); },
        setisOnOffMeshLink: function (v) { return CS.Call(3, 60, 14, false, this, v); },
        getisPathStale: function () { return CS.Call(2, 60, 15, false, this); },
        setisPathStale: function (v) { return CS.Call(3, 60, 15, false, this, v); },
        getnextOffMeshLinkData: function () { return CS.Call(2, 60, 16, false, this); },
        setnextOffMeshLinkData: function (v) { return CS.Call(3, 60, 16, false, this, v); },
        getnextPosition: function () { return CS.Call(2, 60, 17, false, this); },
        setnextPosition: function (v) { return CS.Call(3, 60, 17, false, this, v); },
        getobstacleAvoidanceType: function () { return CS.Call(2, 60, 18, false, this); },
        setobstacleAvoidanceType: function (v) { return CS.Call(3, 60, 18, false, this, v); },
        getpath: function () { return CS.Call(2, 60, 19, false, this); },
        setpath: function (v) { return CS.Call(3, 60, 19, false, this, v); },
        getpathEndPosition: function () { return CS.Call(2, 60, 20, false, this); },
        setpathEndPosition: function (v) { return CS.Call(3, 60, 20, false, this, v); },
        getpathPending: function () { return CS.Call(2, 60, 21, false, this); },
        setpathPending: function (v) { return CS.Call(3, 60, 21, false, this, v); },
        getpathStatus: function () { return CS.Call(2, 60, 22, false, this); },
        setpathStatus: function (v) { return CS.Call(3, 60, 22, false, this, v); },
        getradius: function () { return CS.Call(2, 60, 23, false, this); },
        setradius: function (v) { return CS.Call(3, 60, 23, false, this, v); },
        getremainingDistance: function () { return CS.Call(2, 60, 24, false, this); },
        setremainingDistance: function (v) { return CS.Call(3, 60, 24, false, this, v); },
        getspeed: function () { return CS.Call(2, 60, 25, false, this); },
        setspeed: function (v) { return CS.Call(3, 60, 25, false, this, v); },
        getsteeringTarget: function () { return CS.Call(2, 60, 26, false, this); },
        setsteeringTarget: function (v) { return CS.Call(3, 60, 26, false, this, v); },
        getstoppingDistance: function () { return CS.Call(2, 60, 27, false, this); },
        setstoppingDistance: function (v) { return CS.Call(3, 60, 27, false, this, v); },
        getupdatePosition: function () { return CS.Call(2, 60, 28, false, this); },
        setupdatePosition: function (v) { return CS.Call(3, 60, 28, false, this, v); },
        getupdateRotation: function () { return CS.Call(2, 60, 29, false, this); },
        setupdateRotation: function (v) { return CS.Call(3, 60, 29, false, this, v); },
        getvelocity: function () { return CS.Call(2, 60, 30, false, this); },
        setvelocity: function (v) { return CS.Call(3, 60, 30, false, this, v); },
        ActivateCurrentOffMeshLink: function (a0/* Boolean */) { return CS.Call(4, 60, 0, false, this, a0); },
        CalculatePath: function (a0/* Vector3 */, a1/* NavMeshPath */) { return CS.Call(4, 60, 1, false, this, a0, a1); },
        CompleteOffMeshLink: function () { return CS.Call(4, 60, 2, false, this); },
        FindClosestEdge: function (a0/* NavMeshHit& */) { return CS.Call(4, 60, 3, false, this, a0); },
        GetAreaCost: function (a0/* Int32 */) { return CS.Call(4, 60, 4, false, this, a0); },
        Move: function (a0/* Vector3 */) { return CS.Call(4, 60, 5, false, this, a0); },
        Raycast: function (a0/* Vector3 */, a1/* NavMeshHit& */) { return CS.Call(4, 60, 6, false, this, a0, a1); },
        ResetPath: function () { return CS.Call(4, 60, 7, false, this); },
        Resume: function () { return CS.Call(4, 60, 8, false, this); },
        SamplePathPosition: function (a0/* Int32 */, a1/* Single */, a2/* NavMeshHit& */) { return CS.Call(4, 60, 9, false, this, a0, a1, a2); },
        SetAreaCost: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 60, 10, false, this, a0, a1); },
        SetDestination: function (a0/* Vector3 */) { return CS.Call(4, 60, 11, false, this, a0); },
        SetPath: function (a0/* NavMeshPath */) { return CS.Call(4, 60, 12, false, this, a0); },
        Stop: function () { return CS.Call(4, 60, 13, false, this); },
        Warp: function (a0/* Vector3 */) { return CS.Call(4, 60, 14, false, this, a0); },
    });
    if ($hc < 62) { return; }
     
    Bridge.define("UIRect", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
        },
        $fields: {
            leftAnchor: {
                get: function () { return CS.Call(0, 61, 0, false, this); },
                set: function (v) { return CS.Call(1, 61, 0, false, this, v); }
            },
            rightAnchor: {
                get: function () { return CS.Call(0, 61, 1, false, this); },
                set: function (v) { return CS.Call(1, 61, 1, false, this, v); }
            },
            bottomAnchor: {
                get: function () { return CS.Call(0, 61, 2, false, this); },
                set: function (v) { return CS.Call(1, 61, 2, false, this, v); }
            },
            topAnchor: {
                get: function () { return CS.Call(0, 61, 3, false, this); },
                set: function (v) { return CS.Call(1, 61, 3, false, this, v); }
            },
            updateAnchors: {
                get: function () { return CS.Call(0, 61, 4, false, this); },
                set: function (v) { return CS.Call(1, 61, 4, false, this, v); }
            },
            finalAlpha: {
                get: function () { return CS.Call(0, 61, 5, false, this); },
                set: function (v) { return CS.Call(1, 61, 5, false, this, v); }
            },
        },
        getalpha: function () { return CS.Call(2, 61, 0, false, this); },
        setalpha: function (v) { return CS.Call(3, 61, 0, false, this, v); },
        getanchorCamera: function () { return CS.Call(2, 61, 1, false, this); },
        setanchorCamera: function (v) { return CS.Call(3, 61, 1, false, this, v); },
        getcachedGameObject: function () { return CS.Call(2, 61, 2, false, this); },
        setcachedGameObject: function (v) { return CS.Call(3, 61, 2, false, this, v); },
        getcachedTransform: function () { return CS.Call(2, 61, 3, false, this); },
        setcachedTransform: function (v) { return CS.Call(3, 61, 3, false, this, v); },
        getcanBeAnchored: function () { return CS.Call(2, 61, 4, false, this); },
        setcanBeAnchored: function (v) { return CS.Call(3, 61, 4, false, this, v); },
        getisAnchored: function () { return CS.Call(2, 61, 5, false, this); },
        setisAnchored: function (v) { return CS.Call(3, 61, 5, false, this, v); },
        getisAnchoredHorizontally: function () { return CS.Call(2, 61, 6, false, this); },
        setisAnchoredHorizontally: function (v) { return CS.Call(3, 61, 6, false, this, v); },
        getisAnchoredVertically: function () { return CS.Call(2, 61, 7, false, this); },
        setisAnchoredVertically: function (v) { return CS.Call(3, 61, 7, false, this, v); },
        getisFullyAnchored: function () { return CS.Call(2, 61, 8, false, this); },
        setisFullyAnchored: function (v) { return CS.Call(3, 61, 8, false, this, v); },
        getlocalCorners: function () { return CS.Call(2, 61, 9, false, this); },
        setlocalCorners: function (v) { return CS.Call(3, 61, 9, false, this, v); },
        getparent: function () { return CS.Call(2, 61, 10, false, this); },
        setparent: function (v) { return CS.Call(3, 61, 10, false, this, v); },
        getroot: function () { return CS.Call(2, 61, 11, false, this); },
        setroot: function (v) { return CS.Call(3, 61, 11, false, this, v); },
        getworldCorners: function () { return CS.Call(2, 61, 12, false, this); },
        setworldCorners: function (v) { return CS.Call(3, 61, 12, false, this, v); },
        CalculateFinalAlpha: function (a0/* Int32 */) { return CS.Call(4, 61, 0, false, this, a0); },
        GetSides: function (a0/* Transform */) { return CS.Call(4, 61, 1, false, this, a0); },
        Invalidate: function (a0/* Boolean */) { return CS.Call(4, 61, 2, false, this, a0); },
        ParentHasChanged: function () { return CS.Call(4, 61, 3, false, this); },
        ResetAnchors: function () { return CS.Call(4, 61, 4, false, this); },
        ResetAndUpdateAnchors: function () { return CS.Call(4, 61, 5, false, this); },
        SetAnchor: function (a0/* GameObject */) { return CS.Call(4, 61, 6, false, this, a0); },
        SetAnchor$1: function (a0/* GameObject */, a1/* Int32 */, a2/* Int32 */, a3/* Int32 */, a4/* Int32 */) { return CS.Call(4, 61, 7, false, this, a0, a1, a2, a3, a4); },
        SetAnchor$2: function (a0/* Transform */) { return CS.Call(4, 61, 8, false, this, a0); },
        SetRect: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 61, 9, false, this, a0, a1, a2, a3); },
        Update: function () { return CS.Call(4, 61, 10, false, this); },
        UpdateAnchors: function () { return CS.Call(4, 61, 11, false, this); },
    });
    if ($hc < 63) { return; }
     
    Bridge.define("UIWidgetContainer", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 62, 0, true, this);
        },
    });
    if ($hc < 64) { return; }
     
    Bridge.define("UnityEngine.Animator", {
        inherits: [UnityEngine.Experimental.Director.DirectorPlayer],
        statics: {
            StringToHash: function (a0/* String */) { return CS.Call(4, 63, 90, true, a0); },
        },
        ctor: function () {
            CS.Call(5, 63, 0, true, this);
        },
        getangularVelocity: function () { return CS.Call(2, 63, 0, false, this); },
        setangularVelocity: function (v) { return CS.Call(3, 63, 0, false, this, v); },
        getapplyRootMotion: function () { return CS.Call(2, 63, 1, false, this); },
        setapplyRootMotion: function (v) { return CS.Call(3, 63, 1, false, this, v); },
        getavatar: function () { return CS.Call(2, 63, 2, false, this); },
        setavatar: function (v) { return CS.Call(3, 63, 2, false, this, v); },
        getbodyPosition: function () { return CS.Call(2, 63, 3, false, this); },
        setbodyPosition: function (v) { return CS.Call(3, 63, 3, false, this, v); },
        getbodyRotation: function () { return CS.Call(2, 63, 4, false, this); },
        setbodyRotation: function (v) { return CS.Call(3, 63, 4, false, this, v); },
        getcullingMode: function () { return CS.Call(2, 63, 5, false, this); },
        setcullingMode: function (v) { return CS.Call(3, 63, 5, false, this, v); },
        getdeltaPosition: function () { return CS.Call(2, 63, 6, false, this); },
        setdeltaPosition: function (v) { return CS.Call(3, 63, 6, false, this, v); },
        getdeltaRotation: function () { return CS.Call(2, 63, 7, false, this); },
        setdeltaRotation: function (v) { return CS.Call(3, 63, 7, false, this, v); },
        getfeetPivotActive: function () { return CS.Call(2, 63, 8, false, this); },
        setfeetPivotActive: function (v) { return CS.Call(3, 63, 8, false, this, v); },
        getfireEvents: function () { return CS.Call(2, 63, 9, false, this); },
        setfireEvents: function (v) { return CS.Call(3, 63, 9, false, this, v); },
        getgravityWeight: function () { return CS.Call(2, 63, 10, false, this); },
        setgravityWeight: function (v) { return CS.Call(3, 63, 10, false, this, v); },
        gethasRootMotion: function () { return CS.Call(2, 63, 11, false, this); },
        sethasRootMotion: function (v) { return CS.Call(3, 63, 11, false, this, v); },
        gethasTransformHierarchy: function () { return CS.Call(2, 63, 12, false, this); },
        sethasTransformHierarchy: function (v) { return CS.Call(3, 63, 12, false, this, v); },
        gethumanScale: function () { return CS.Call(2, 63, 13, false, this); },
        sethumanScale: function (v) { return CS.Call(3, 63, 13, false, this, v); },
        getisHuman: function () { return CS.Call(2, 63, 14, false, this); },
        setisHuman: function (v) { return CS.Call(3, 63, 14, false, this, v); },
        getisInitialized: function () { return CS.Call(2, 63, 15, false, this); },
        setisInitialized: function (v) { return CS.Call(3, 63, 15, false, this, v); },
        getisMatchingTarget: function () { return CS.Call(2, 63, 16, false, this); },
        setisMatchingTarget: function (v) { return CS.Call(3, 63, 16, false, this, v); },
        getisOptimizable: function () { return CS.Call(2, 63, 17, false, this); },
        setisOptimizable: function (v) { return CS.Call(3, 63, 17, false, this, v); },
        getlayerCount: function () { return CS.Call(2, 63, 18, false, this); },
        setlayerCount: function (v) { return CS.Call(3, 63, 18, false, this, v); },
        getlayersAffectMassCenter: function () { return CS.Call(2, 63, 19, false, this); },
        setlayersAffectMassCenter: function (v) { return CS.Call(3, 63, 19, false, this, v); },
        getleftFeetBottomHeight: function () { return CS.Call(2, 63, 20, false, this); },
        setleftFeetBottomHeight: function (v) { return CS.Call(3, 63, 20, false, this, v); },
        getlinearVelocityBlending: function () { return CS.Call(2, 63, 21, false, this); },
        setlinearVelocityBlending: function (v) { return CS.Call(3, 63, 21, false, this, v); },
        getlogWarnings: function () { return CS.Call(2, 63, 22, false, this); },
        setlogWarnings: function (v) { return CS.Call(3, 63, 22, false, this, v); },
        getparameterCount: function () { return CS.Call(2, 63, 23, false, this); },
        setparameterCount: function (v) { return CS.Call(3, 63, 23, false, this, v); },
        getparameters: function () { return CS.Call(2, 63, 24, false, this); },
        setparameters: function (v) { return CS.Call(3, 63, 24, false, this, v); },
        getpivotPosition: function () { return CS.Call(2, 63, 25, false, this); },
        setpivotPosition: function (v) { return CS.Call(3, 63, 25, false, this, v); },
        getpivotWeight: function () { return CS.Call(2, 63, 26, false, this); },
        setpivotWeight: function (v) { return CS.Call(3, 63, 26, false, this, v); },
        getplaybackTime: function () { return CS.Call(2, 63, 27, false, this); },
        setplaybackTime: function (v) { return CS.Call(3, 63, 27, false, this, v); },
        getrecorderMode: function () { return CS.Call(2, 63, 28, false, this); },
        setrecorderMode: function (v) { return CS.Call(3, 63, 28, false, this, v); },
        getrecorderStartTime: function () { return CS.Call(2, 63, 29, false, this); },
        setrecorderStartTime: function (v) { return CS.Call(3, 63, 29, false, this, v); },
        getrecorderStopTime: function () { return CS.Call(2, 63, 30, false, this); },
        setrecorderStopTime: function (v) { return CS.Call(3, 63, 30, false, this, v); },
        getrightFeetBottomHeight: function () { return CS.Call(2, 63, 31, false, this); },
        setrightFeetBottomHeight: function (v) { return CS.Call(3, 63, 31, false, this, v); },
        getrootPosition: function () { return CS.Call(2, 63, 32, false, this); },
        setrootPosition: function (v) { return CS.Call(3, 63, 32, false, this, v); },
        getrootRotation: function () { return CS.Call(2, 63, 33, false, this); },
        setrootRotation: function (v) { return CS.Call(3, 63, 33, false, this, v); },
        getruntimeAnimatorController: function () { return CS.Call(2, 63, 34, false, this); },
        setruntimeAnimatorController: function (v) { return CS.Call(3, 63, 34, false, this, v); },
        getspeed: function () { return CS.Call(2, 63, 35, false, this); },
        setspeed: function (v) { return CS.Call(3, 63, 35, false, this, v); },
        getstabilizeFeet: function () { return CS.Call(2, 63, 36, false, this); },
        setstabilizeFeet: function (v) { return CS.Call(3, 63, 36, false, this, v); },
        gettargetPosition: function () { return CS.Call(2, 63, 37, false, this); },
        settargetPosition: function (v) { return CS.Call(3, 63, 37, false, this, v); },
        gettargetRotation: function () { return CS.Call(2, 63, 38, false, this); },
        settargetRotation: function (v) { return CS.Call(3, 63, 38, false, this, v); },
        getupdateMode: function () { return CS.Call(2, 63, 39, false, this); },
        setupdateMode: function (v) { return CS.Call(3, 63, 39, false, this, v); },
        getvelocity: function () { return CS.Call(2, 63, 40, false, this); },
        setvelocity: function (v) { return CS.Call(3, 63, 40, false, this, v); },
        ApplyBuiltinRootMotion: function () { return CS.Call(4, 63, 0, false, this); },
        CrossFade: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 63, 1, false, this, a0, a1); },
        CrossFade$1: function (a0/* Int32 */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 63, 2, false, this, a0, a1, a2); },
        CrossFade$2: function (a0/* Int32 */, a1/* Single */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 63, 3, false, this, a0, a1, a2, a3); },
        CrossFade$3: function (a0/* String */, a1/* Single */) { return CS.Call(4, 63, 4, false, this, a0, a1); },
        CrossFade$4: function (a0/* String */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 63, 5, false, this, a0, a1, a2); },
        CrossFade$5: function (a0/* String */, a1/* Single */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 63, 6, false, this, a0, a1, a2, a3); },
        CrossFadeInFixedTime: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 63, 7, false, this, a0, a1); },
        CrossFadeInFixedTime$1: function (a0/* Int32 */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 63, 8, false, this, a0, a1, a2); },
        CrossFadeInFixedTime$2: function (a0/* Int32 */, a1/* Single */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 63, 9, false, this, a0, a1, a2, a3); },
        CrossFadeInFixedTime$3: function (a0/* String */, a1/* Single */) { return CS.Call(4, 63, 10, false, this, a0, a1); },
        CrossFadeInFixedTime$4: function (a0/* String */, a1/* Single */, a2/* Int32 */) { return CS.Call(4, 63, 11, false, this, a0, a1, a2); },
        CrossFadeInFixedTime$5: function (a0/* String */, a1/* Single */, a2/* Int32 */, a3/* Single */) { return CS.Call(4, 63, 12, false, this, a0, a1, a2, a3); },
        GetAnimatorTransitionInfo: function (a0/* Int32 */) { return CS.Call(4, 63, 13, false, this, a0); },
        GetBehaviour: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 63, 14, false, this, $T);
        },
        GetBehaviours: function (T) {
            var $T = Bridge.Reflection.getTypeFullName(T);
            return CS.Call(4, 63, 15, false, this, $T);
        },
        GetBoneTransform: function (a0/* HumanBodyBones */) { return CS.Call(4, 63, 16, false, this, a0); },
        GetBool: function (a0/* Int32 */) { return CS.Call(4, 63, 17, false, this, a0); },
        GetBool$1: function (a0/* String */) { return CS.Call(4, 63, 18, false, this, a0); },
        GetCurrentAnimatorClipInfo: function (a0/* Int32 */) { return CS.Call(4, 63, 19, false, this, a0); },
        GetCurrentAnimatorStateInfo: function (a0/* Int32 */) { return CS.Call(4, 63, 20, false, this, a0); },
        GetFloat: function (a0/* Int32 */) { return CS.Call(4, 63, 21, false, this, a0); },
        GetFloat$1: function (a0/* String */) { return CS.Call(4, 63, 22, false, this, a0); },
        GetIKHintPosition: function (a0/* AvatarIKHint */) { return CS.Call(4, 63, 23, false, this, a0); },
        GetIKHintPositionWeight: function (a0/* AvatarIKHint */) { return CS.Call(4, 63, 24, false, this, a0); },
        GetIKPosition: function (a0/* AvatarIKGoal */) { return CS.Call(4, 63, 25, false, this, a0); },
        GetIKPositionWeight: function (a0/* AvatarIKGoal */) { return CS.Call(4, 63, 26, false, this, a0); },
        GetIKRotation: function (a0/* AvatarIKGoal */) { return CS.Call(4, 63, 27, false, this, a0); },
        GetIKRotationWeight: function (a0/* AvatarIKGoal */) { return CS.Call(4, 63, 28, false, this, a0); },
        GetInteger: function (a0/* Int32 */) { return CS.Call(4, 63, 29, false, this, a0); },
        GetInteger$1: function (a0/* String */) { return CS.Call(4, 63, 30, false, this, a0); },
        GetLayerIndex: function (a0/* String */) { return CS.Call(4, 63, 31, false, this, a0); },
        GetLayerName: function (a0/* Int32 */) { return CS.Call(4, 63, 32, false, this, a0); },
        GetLayerWeight: function (a0/* Int32 */) { return CS.Call(4, 63, 33, false, this, a0); },
        GetNextAnimatorClipInfo: function (a0/* Int32 */) { return CS.Call(4, 63, 34, false, this, a0); },
        GetNextAnimatorStateInfo: function (a0/* Int32 */) { return CS.Call(4, 63, 35, false, this, a0); },
        GetParameter: function (a0/* Int32 */) { return CS.Call(4, 63, 36, false, this, a0); },
        HasState: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 63, 37, false, this, a0, a1); },
        InterruptMatchTarget: function () { return CS.Call(4, 63, 38, false, this); },
        InterruptMatchTarget$1: function (a0/* Boolean */) { return CS.Call(4, 63, 39, false, this, a0); },
        IsInTransition: function (a0/* Int32 */) { return CS.Call(4, 63, 40, false, this, a0); },
        IsParameterControlledByCurve: function (a0/* Int32 */) { return CS.Call(4, 63, 41, false, this, a0); },
        IsParameterControlledByCurve$1: function (a0/* String */) { return CS.Call(4, 63, 42, false, this, a0); },
        MatchTarget: function (a0/* Vector3 */, a1/* Quaternion */, a2/* AvatarTarget */, a3/* MatchTargetWeightMask */, a4/* Single */) { return CS.Call(4, 63, 43, false, this, a0, a1, a2, a3, a4); },
        MatchTarget$1: function (a0/* Vector3 */, a1/* Quaternion */, a2/* AvatarTarget */, a3/* MatchTargetWeightMask */, a4/* Single */, a5/* Single */) { return CS.Call(4, 63, 44, false, this, a0, a1, a2, a3, a4, a5); },
        Play: function (a0/* Int32 */) { return CS.Call(4, 63, 45, false, this, a0); },
        Play$1: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 63, 46, false, this, a0, a1); },
        Play$2: function (a0/* Int32 */, a1/* Int32 */, a2/* Single */) { return CS.Call(4, 63, 47, false, this, a0, a1, a2); },
        Play$3: function (a0/* String */) { return CS.Call(4, 63, 48, false, this, a0); },
        Play$4: function (a0/* String */, a1/* Int32 */) { return CS.Call(4, 63, 49, false, this, a0, a1); },
        Play$5: function (a0/* String */, a1/* Int32 */, a2/* Single */) { return CS.Call(4, 63, 50, false, this, a0, a1, a2); },
        PlayInFixedTime: function (a0/* Int32 */) { return CS.Call(4, 63, 51, false, this, a0); },
        PlayInFixedTime$1: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 63, 52, false, this, a0, a1); },
        PlayInFixedTime$2: function (a0/* Int32 */, a1/* Int32 */, a2/* Single */) { return CS.Call(4, 63, 53, false, this, a0, a1, a2); },
        PlayInFixedTime$3: function (a0/* String */) { return CS.Call(4, 63, 54, false, this, a0); },
        PlayInFixedTime$4: function (a0/* String */, a1/* Int32 */) { return CS.Call(4, 63, 55, false, this, a0, a1); },
        PlayInFixedTime$5: function (a0/* String */, a1/* Int32 */, a2/* Single */) { return CS.Call(4, 63, 56, false, this, a0, a1, a2); },
        Rebind: function () { return CS.Call(4, 63, 57, false, this); },
        ResetTrigger: function (a0/* Int32 */) { return CS.Call(4, 63, 58, false, this, a0); },
        ResetTrigger$1: function (a0/* String */) { return CS.Call(4, 63, 59, false, this, a0); },
        SetBoneLocalRotation: function (a0/* HumanBodyBones */, a1/* Quaternion */) { return CS.Call(4, 63, 60, false, this, a0, a1); },
        SetBool: function (a0/* Int32 */, a1/* Boolean */) { return CS.Call(4, 63, 61, false, this, a0, a1); },
        SetBool$1: function (a0/* String */, a1/* Boolean */) { return CS.Call(4, 63, 62, false, this, a0, a1); },
        SetFloat: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 63, 63, false, this, a0, a1); },
        SetFloat$1: function (a0/* Int32 */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 63, 64, false, this, a0, a1, a2, a3); },
        SetFloat$2: function (a0/* String */, a1/* Single */) { return CS.Call(4, 63, 65, false, this, a0, a1); },
        SetFloat$3: function (a0/* String */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 63, 66, false, this, a0, a1, a2, a3); },
        SetIKHintPosition: function (a0/* AvatarIKHint */, a1/* Vector3 */) { return CS.Call(4, 63, 67, false, this, a0, a1); },
        SetIKHintPositionWeight: function (a0/* AvatarIKHint */, a1/* Single */) { return CS.Call(4, 63, 68, false, this, a0, a1); },
        SetIKPosition: function (a0/* AvatarIKGoal */, a1/* Vector3 */) { return CS.Call(4, 63, 69, false, this, a0, a1); },
        SetIKPositionWeight: function (a0/* AvatarIKGoal */, a1/* Single */) { return CS.Call(4, 63, 70, false, this, a0, a1); },
        SetIKRotation: function (a0/* AvatarIKGoal */, a1/* Quaternion */) { return CS.Call(4, 63, 71, false, this, a0, a1); },
        SetIKRotationWeight: function (a0/* AvatarIKGoal */, a1/* Single */) { return CS.Call(4, 63, 72, false, this, a0, a1); },
        SetInteger: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 63, 73, false, this, a0, a1); },
        SetInteger$1: function (a0/* String */, a1/* Int32 */) { return CS.Call(4, 63, 74, false, this, a0, a1); },
        SetLayerWeight: function (a0/* Int32 */, a1/* Single */) { return CS.Call(4, 63, 75, false, this, a0, a1); },
        SetLookAtPosition: function (a0/* Vector3 */) { return CS.Call(4, 63, 76, false, this, a0); },
        SetLookAtWeight: function (a0/* Single */) { return CS.Call(4, 63, 77, false, this, a0); },
        SetLookAtWeight$1: function (a0/* Single */, a1/* Single */) { return CS.Call(4, 63, 78, false, this, a0, a1); },
        SetLookAtWeight$2: function (a0/* Single */, a1/* Single */, a2/* Single */) { return CS.Call(4, 63, 79, false, this, a0, a1, a2); },
        SetLookAtWeight$3: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 63, 80, false, this, a0, a1, a2, a3); },
        SetLookAtWeight$4: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */, a4/* Single */) { return CS.Call(4, 63, 81, false, this, a0, a1, a2, a3, a4); },
        SetTarget: function (a0/* AvatarTarget */, a1/* Single */) { return CS.Call(4, 63, 82, false, this, a0, a1); },
        SetTrigger: function (a0/* Int32 */) { return CS.Call(4, 63, 83, false, this, a0); },
        SetTrigger$1: function (a0/* String */) { return CS.Call(4, 63, 84, false, this, a0); },
        StartPlayback: function () { return CS.Call(4, 63, 85, false, this); },
        StartRecording: function (a0/* Int32 */) { return CS.Call(4, 63, 86, false, this, a0); },
        StopPlayback: function () { return CS.Call(4, 63, 87, false, this); },
        StopRecording: function () { return CS.Call(4, 63, 88, false, this); },
        Update: function (a0/* Single */) { return CS.Call(4, 63, 89, false, this, a0); },
    });
    if ($hc < 65) { return; }
     
    Bridge.define("UnityEngine.GUITexture", {
        inherits: [UnityEngine.GUIElement],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 64, 0, true, this);
        },
        getborder: function () { return CS.Call(2, 64, 0, false, this); },
        setborder: function (v) { return CS.Call(3, 64, 0, false, this, v); },
        getcolor: function () { return CS.Call(2, 64, 1, false, this); },
        setcolor: function (v) { return CS.Call(3, 64, 1, false, this, v); },
        getpixelInset: function () { return CS.Call(2, 64, 2, false, this); },
        setpixelInset: function (v) { return CS.Call(3, 64, 2, false, this, v); },
        gettexture: function () { return CS.Call(2, 64, 3, false, this); },
        settexture: function (v) { return CS.Call(3, 64, 3, false, this, v); },
    });
    if ($hc < 66) { return; }
     
    Bridge.define("UnityEngine.GUIText", {
        inherits: [UnityEngine.GUIElement],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 65, 0, true, this);
        },
        getalignment: function () { return CS.Call(2, 65, 0, false, this); },
        setalignment: function (v) { return CS.Call(3, 65, 0, false, this, v); },
        getanchor: function () { return CS.Call(2, 65, 1, false, this); },
        setanchor: function (v) { return CS.Call(3, 65, 1, false, this, v); },
        getcolor: function () { return CS.Call(2, 65, 2, false, this); },
        setcolor: function (v) { return CS.Call(3, 65, 2, false, this, v); },
        getfont: function () { return CS.Call(2, 65, 3, false, this); },
        setfont: function (v) { return CS.Call(3, 65, 3, false, this, v); },
        getfontSize: function () { return CS.Call(2, 65, 4, false, this); },
        setfontSize: function (v) { return CS.Call(3, 65, 4, false, this, v); },
        getfontStyle: function () { return CS.Call(2, 65, 5, false, this); },
        setfontStyle: function (v) { return CS.Call(3, 65, 5, false, this, v); },
        getlineSpacing: function () { return CS.Call(2, 65, 6, false, this); },
        setlineSpacing: function (v) { return CS.Call(3, 65, 6, false, this, v); },
        getmaterial: function () { return CS.Call(2, 65, 7, false, this); },
        setmaterial: function (v) { return CS.Call(3, 65, 7, false, this, v); },
        getpixelOffset: function () { return CS.Call(2, 65, 8, false, this); },
        setpixelOffset: function (v) { return CS.Call(3, 65, 8, false, this, v); },
        getrichText: function () { return CS.Call(2, 65, 9, false, this); },
        setrichText: function (v) { return CS.Call(3, 65, 9, false, this, v); },
        gettabSize: function () { return CS.Call(2, 65, 10, false, this); },
        settabSize: function (v) { return CS.Call(3, 65, 10, false, this, v); },
        gettext: function () { return CS.Call(2, 65, 11, false, this); },
        settext: function (v) { return CS.Call(3, 65, 11, false, this, v); },
    });
    if ($hc < 67) { return; }
     
    Bridge.define("UnityEngine.BoxCollider2D", {
        inherits: [UnityEngine.Collider2D],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 66, 0, true, this);
        },
        getsize: function () { return CS.Call(2, 66, 0, false, this); },
        setsize: function (v) { return CS.Call(3, 66, 0, false, this, v); },
    });
    if ($hc < 68) { return; }
     
    Bridge.define("UnityEngine.CircleCollider2D", {
        inherits: [UnityEngine.Collider2D],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 67, 0, true, this);
        },
        getradius: function () { return CS.Call(2, 67, 0, false, this); },
        setradius: function (v) { return CS.Call(3, 67, 0, false, this, v); },
    });
    if ($hc < 69) { return; }
     
    Bridge.define("UnityEngine.PolygonCollider2D", {
        inherits: [UnityEngine.Collider2D],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 68, 0, true, this);
        },
        getpathCount: function () { return CS.Call(2, 68, 0, false, this); },
        setpathCount: function (v) { return CS.Call(3, 68, 0, false, this, v); },
        getpoints: function () { return CS.Call(2, 68, 1, false, this); },
        setpoints: function (v) { return CS.Call(3, 68, 1, false, this, v); },
        CreatePrimitive: function (a0/* Int32 */) { return CS.Call(4, 68, 0, false, this, a0); },
        CreatePrimitive$1: function (a0/* Int32 */, a1/* Vector2 */) { return CS.Call(4, 68, 1, false, this, a0, a1); },
        CreatePrimitive$2: function (a0/* Int32 */, a1/* Vector2 */, a2/* Vector2 */) { return CS.Call(4, 68, 2, false, this, a0, a1, a2); },
        GetPath: function (a0/* Int32 */) { return CS.Call(4, 68, 3, false, this, a0); },
        GetTotalPointCount: function () { return CS.Call(4, 68, 4, false, this); },
        SetPath: function (a0/* Int32 */, a1/* Vector2[] */) { return CS.Call(4, 68, 5, false, this, a0, a1); },
    });
    if ($hc < 70) { return; }
     
    Bridge.define("UIProgressBar", {
        inherits: [UIWidgetContainer],
        statics: {
            $fields: {
                current: {
                    get: function () { return CS.Call(0, 69, 0, true); },
                    set: function (v) { return CS.Call(1, 69, 0, true, v); }
                },
            },
        },
        ctor: function () {
            CS.Call(5, 69, 0, true, this);
        },
        $fields: {
            onDragFinished: {
                get: function () { return CS.Call(0, 69, 1, false, this); },
                set: function (v) { return CS.Call(1, 69, 1, false, this, v); }
            },
            thumb: {
                get: function () { return CS.Call(0, 69, 2, false, this); },
                set: function (v) { return CS.Call(1, 69, 2, false, this, v); }
            },
            numberOfSteps: {
                get: function () { return CS.Call(0, 69, 3, false, this); },
                set: function (v) { return CS.Call(1, 69, 3, false, this, v); }
            },
            onChange: {
                get: function () { return CS.Call(0, 69, 4, false, this); },
                set: function (v) { return CS.Call(1, 69, 4, false, this, v); }
            },
        },
        getalpha: function () { return CS.Call(2, 69, 0, false, this); },
        setalpha: function (v) { return CS.Call(3, 69, 0, false, this, v); },
        getbackgroundWidget: function () { return CS.Call(2, 69, 1, false, this); },
        setbackgroundWidget: function (v) { return CS.Call(3, 69, 1, false, this, v); },
        getcachedCamera: function () { return CS.Call(2, 69, 2, false, this); },
        setcachedCamera: function (v) { return CS.Call(3, 69, 2, false, this, v); },
        getcachedTransform: function () { return CS.Call(2, 69, 3, false, this); },
        setcachedTransform: function (v) { return CS.Call(3, 69, 3, false, this, v); },
        getfillDirection: function () { return CS.Call(2, 69, 4, false, this); },
        setfillDirection: function (v) { return CS.Call(3, 69, 4, false, this, v); },
        getforegroundWidget: function () { return CS.Call(2, 69, 5, false, this); },
        setforegroundWidget: function (v) { return CS.Call(3, 69, 5, false, this, v); },
        getvalue: function () { return CS.Call(2, 69, 6, false, this); },
        setvalue: function (v) { return CS.Call(3, 69, 6, false, this, v); },
        ForceUpdate: function () { return CS.Call(4, 69, 0, false, this); },
    });
    if ($hc < 71) { return; }
     
    Bridge.define("UIWidget", {
        inherits: [UIRect],
        statics: {
            FullCompareFunc: function (a0/* UIWidget */, a1/* UIWidget */) { return CS.Call(4, 70, 21, true, a0, a1); },
            PanelCompareFunc: function (a0/* UIWidget */, a1/* UIWidget */) { return CS.Call(4, 70, 22, true, a0, a1); },
        },
        ctor: function () {
            CS.Call(5, 70, 0, true, this);
        },
        $fields: {
            onChange: {
                get: function () { return CS.Call(0, 70, 0, false, this); },
                set: function (v) { return CS.Call(1, 70, 0, false, this, v); }
            },
            onPostFill: {
                get: function () { return CS.Call(0, 70, 1, false, this); },
                set: function (v) { return CS.Call(1, 70, 1, false, this, v); }
            },
            mOnRender: {
                get: function () { return CS.Call(0, 70, 2, false, this); },
                set: function (v) { return CS.Call(1, 70, 2, false, this, v); }
            },
            autoResizeBoxCollider: {
                get: function () { return CS.Call(0, 70, 3, false, this); },
                set: function (v) { return CS.Call(1, 70, 3, false, this, v); }
            },
            hideIfOffScreen: {
                get: function () { return CS.Call(0, 70, 4, false, this); },
                set: function (v) { return CS.Call(1, 70, 4, false, this, v); }
            },
            keepAspectRatio: {
                get: function () { return CS.Call(0, 70, 5, false, this); },
                set: function (v) { return CS.Call(1, 70, 5, false, this, v); }
            },
            aspectRatio: {
                get: function () { return CS.Call(0, 70, 6, false, this); },
                set: function (v) { return CS.Call(1, 70, 6, false, this, v); }
            },
            hitCheck: {
                get: function () { return CS.Call(0, 70, 7, false, this); },
                set: function (v) { return CS.Call(1, 70, 7, false, this, v); }
            },
            panel: {
                get: function () { return CS.Call(0, 70, 8, false, this); },
                set: function (v) { return CS.Call(1, 70, 8, false, this, v); }
            },
            geometry: {
                get: function () { return CS.Call(0, 70, 9, false, this); },
                set: function (v) { return CS.Call(1, 70, 9, false, this, v); }
            },
            fillGeometry: {
                get: function () { return CS.Call(0, 70, 10, false, this); },
                set: function (v) { return CS.Call(1, 70, 10, false, this, v); }
            },
            drawCall: {
                get: function () { return CS.Call(0, 70, 11, false, this); },
                set: function (v) { return CS.Call(1, 70, 11, false, this, v); }
            },
        },
        getalpha: function () { return CS.Call(2, 70, 0, false, this); },
        setalpha: function (v) { return CS.Call(3, 70, 0, false, this, v); },
        getborder: function () { return CS.Call(2, 70, 1, false, this); },
        setborder: function (v) { return CS.Call(3, 70, 1, false, this, v); },
        getcolor: function () { return CS.Call(2, 70, 2, false, this); },
        setcolor: function (v) { return CS.Call(3, 70, 2, false, this, v); },
        getdepth: function () { return CS.Call(2, 70, 3, false, this); },
        setdepth: function (v) { return CS.Call(3, 70, 3, false, this, v); },
        getdrawingDimensions: function () { return CS.Call(2, 70, 4, false, this); },
        setdrawingDimensions: function (v) { return CS.Call(3, 70, 4, false, this, v); },
        getdrawRegion: function () { return CS.Call(2, 70, 5, false, this); },
        setdrawRegion: function (v) { return CS.Call(3, 70, 5, false, this, v); },
        gethasBoxCollider: function () { return CS.Call(2, 70, 6, false, this); },
        sethasBoxCollider: function (v) { return CS.Call(3, 70, 6, false, this, v); },
        gethasVertices: function () { return CS.Call(2, 70, 7, false, this); },
        sethasVertices: function (v) { return CS.Call(3, 70, 7, false, this, v); },
        getheight: function () { return CS.Call(2, 70, 8, false, this); },
        setheight: function (v) { return CS.Call(3, 70, 8, false, this, v); },
        getisVisible: function () { return CS.Call(2, 70, 9, false, this); },
        setisVisible: function (v) { return CS.Call(3, 70, 9, false, this, v); },
        getlocalCenter: function () { return CS.Call(2, 70, 10, false, this); },
        setlocalCenter: function (v) { return CS.Call(3, 70, 10, false, this, v); },
        getlocalCorners: function () { return CS.Call(2, 70, 11, false, this); },
        setlocalCorners: function (v) { return CS.Call(3, 70, 11, false, this, v); },
        getlocalSize: function () { return CS.Call(2, 70, 12, false, this); },
        setlocalSize: function (v) { return CS.Call(3, 70, 12, false, this, v); },
        getmainTexture: function () { return CS.Call(2, 70, 13, false, this); },
        setmainTexture: function (v) { return CS.Call(3, 70, 13, false, this, v); },
        getmaterial: function () { return CS.Call(2, 70, 14, false, this); },
        setmaterial: function (v) { return CS.Call(3, 70, 14, false, this, v); },
        getminHeight: function () { return CS.Call(2, 70, 15, false, this); },
        setminHeight: function (v) { return CS.Call(3, 70, 15, false, this, v); },
        getminWidth: function () { return CS.Call(2, 70, 16, false, this); },
        setminWidth: function (v) { return CS.Call(3, 70, 16, false, this, v); },
        getonRender: function () { return CS.Call(2, 70, 17, false, this); },
        setonRender: function (v) { return CS.Call(3, 70, 17, false, this, v); },
        getpivot: function () { return CS.Call(2, 70, 18, false, this); },
        setpivot: function (v) { return CS.Call(3, 70, 18, false, this, v); },
        getpivotOffset: function () { return CS.Call(2, 70, 19, false, this); },
        setpivotOffset: function (v) { return CS.Call(3, 70, 19, false, this, v); },
        getrawPivot: function () { return CS.Call(2, 70, 20, false, this); },
        setrawPivot: function (v) { return CS.Call(3, 70, 20, false, this, v); },
        getraycastDepth: function () { return CS.Call(2, 70, 21, false, this); },
        setraycastDepth: function (v) { return CS.Call(3, 70, 21, false, this, v); },
        getshader: function () { return CS.Call(2, 70, 22, false, this); },
        setshader: function (v) { return CS.Call(3, 70, 22, false, this, v); },
        getwidth: function () { return CS.Call(2, 70, 23, false, this); },
        setwidth: function (v) { return CS.Call(3, 70, 23, false, this, v); },
        getworldCenter: function () { return CS.Call(2, 70, 24, false, this); },
        setworldCenter: function (v) { return CS.Call(3, 70, 24, false, this, v); },
        getworldCorners: function () { return CS.Call(2, 70, 25, false, this); },
        setworldCorners: function (v) { return CS.Call(3, 70, 25, false, this, v); },
        CalculateBounds: function () { return CS.Call(4, 70, 0, false, this); },
        CalculateBounds$1: function (a0/* Transform */) { return CS.Call(4, 70, 1, false, this, a0); },
        CalculateCumulativeAlpha: function (a0/* Int32 */) { return CS.Call(4, 70, 2, false, this, a0); },
        CalculateFinalAlpha: function (a0/* Int32 */) { return CS.Call(4, 70, 3, false, this, a0); },
        CheckLayer: function () { return CS.Call(4, 70, 4, false, this); },
        CreatePanel: function () { return CS.Call(4, 70, 5, false, this); },
        GetSides: function (a0/* Transform */) { return CS.Call(4, 70, 6, false, this, a0); },
        Invalidate: function (a0/* Boolean */) { return CS.Call(4, 70, 7, false, this, a0); },
        MakePixelPerfect: function () { return CS.Call(4, 70, 8, false, this); },
        MarkAsChanged: function () { return CS.Call(4, 70, 9, false, this); },
        OnFill: function (a0/* BetterList`1 */, a1/* BetterList`1 */, a2/* BetterList`1 */) { return CS.Call(4, 70, 10, false, this, a0, a1, a2); },
        ParentHasChanged: function () { return CS.Call(4, 70, 11, false, this); },
        RemoveFromPanel: function () { return CS.Call(4, 70, 12, false, this); },
        ResizeCollider: function () { return CS.Call(4, 70, 13, false, this); },
        SetDimensions: function (a0/* Int32 */, a1/* Int32 */) { return CS.Call(4, 70, 14, false, this, a0, a1); },
        SetDirty: function () { return CS.Call(4, 70, 15, false, this); },
        SetRect: function (a0/* Single */, a1/* Single */, a2/* Single */, a3/* Single */) { return CS.Call(4, 70, 16, false, this, a0, a1, a2, a3); },
        UpdateGeometry: function (a0/* Int32 */) { return CS.Call(4, 70, 17, false, this, a0); },
        UpdateTransform: function (a0/* Int32 */) { return CS.Call(4, 70, 18, false, this, a0); },
        UpdateVisibility: function (a0/* Boolean */, a1/* Boolean */) { return CS.Call(4, 70, 19, false, this, a0, a1); },
        WriteToBuffers: function (a0/* BetterList`1 */, a1/* BetterList`1 */, a2/* BetterList`1 */, a3/* BetterList`1 */, a4/* BetterList`1 */) { return CS.Call(4, 70, 20, false, this, a0, a1, a2, a3, a4); },
    });
    if ($hc < 72) { return; }
     
    Bridge.define("UISlider", {
        inherits: [UIProgressBar],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 71, 0, true, this);
        },
    });
    if ($hc < 73) { return; }
     
    Bridge.define("UILabel", {
        inherits: [UIWidget],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 72, 0, true, this);
        },
        $fields: {
            keepCrispWhenShrunk: {
                get: function () { return CS.Call(0, 72, 0, false, this); },
                set: function (v) { return CS.Call(1, 72, 0, false, this, v); }
            },
        },
        getalignment: function () { return CS.Call(2, 72, 0, false, this); },
        setalignment: function (v) { return CS.Call(3, 72, 0, false, this, v); },
        getambigiousFont: function () { return CS.Call(2, 72, 1, false, this); },
        setambigiousFont: function (v) { return CS.Call(3, 72, 1, false, this, v); },
        getapplyGradient: function () { return CS.Call(2, 72, 2, false, this); },
        setapplyGradient: function (v) { return CS.Call(3, 72, 2, false, this, v); },
        getbitmapFont: function () { return CS.Call(2, 72, 3, false, this); },
        setbitmapFont: function (v) { return CS.Call(3, 72, 3, false, this, v); },
        getdefaultFontSize: function () { return CS.Call(2, 72, 4, false, this); },
        setdefaultFontSize: function (v) { return CS.Call(3, 72, 4, false, this, v); },
        getdrawingDimensions: function () { return CS.Call(2, 72, 5, false, this); },
        setdrawingDimensions: function (v) { return CS.Call(3, 72, 5, false, this, v); },
        geteffectColor: function () { return CS.Call(2, 72, 6, false, this); },
        seteffectColor: function (v) { return CS.Call(3, 72, 6, false, this, v); },
        geteffectDistance: function () { return CS.Call(2, 72, 7, false, this); },
        seteffectDistance: function (v) { return CS.Call(3, 72, 7, false, this, v); },
        geteffectStyle: function () { return CS.Call(2, 72, 8, false, this); },
        seteffectStyle: function (v) { return CS.Call(3, 72, 8, false, this, v); },
        getfontSize: function () { return CS.Call(2, 72, 9, false, this); },
        setfontSize: function (v) { return CS.Call(3, 72, 9, false, this, v); },
        getfontStyle: function () { return CS.Call(2, 72, 10, false, this); },
        setfontStyle: function (v) { return CS.Call(3, 72, 10, false, this, v); },
        getgradientBottom: function () { return CS.Call(2, 72, 11, false, this); },
        setgradientBottom: function (v) { return CS.Call(3, 72, 11, false, this, v); },
        getgradientTop: function () { return CS.Call(2, 72, 12, false, this); },
        setgradientTop: function (v) { return CS.Call(3, 72, 12, false, this, v); },
        getisAnchoredHorizontally: function () { return CS.Call(2, 72, 13, false, this); },
        setisAnchoredHorizontally: function (v) { return CS.Call(3, 72, 13, false, this, v); },
        getisAnchoredVertically: function () { return CS.Call(2, 72, 14, false, this); },
        setisAnchoredVertically: function (v) { return CS.Call(3, 72, 14, false, this, v); },
        getlocalCorners: function () { return CS.Call(2, 72, 15, false, this); },
        setlocalCorners: function (v) { return CS.Call(3, 72, 15, false, this, v); },
        getlocalSize: function () { return CS.Call(2, 72, 16, false, this); },
        setlocalSize: function (v) { return CS.Call(3, 72, 16, false, this, v); },
        getmaterial: function () { return CS.Call(2, 72, 17, false, this); },
        setmaterial: function (v) { return CS.Call(3, 72, 17, false, this, v); },
        getmaxLineCount: function () { return CS.Call(2, 72, 18, false, this); },
        setmaxLineCount: function (v) { return CS.Call(3, 72, 18, false, this, v); },
        getmultiLine: function () { return CS.Call(2, 72, 19, false, this); },
        setmultiLine: function (v) { return CS.Call(3, 72, 19, false, this, v); },
        getoverflowMethod: function () { return CS.Call(2, 72, 20, false, this); },
        setoverflowMethod: function (v) { return CS.Call(3, 72, 20, false, this, v); },
        getprintedSize: function () { return CS.Call(2, 72, 21, false, this); },
        setprintedSize: function (v) { return CS.Call(3, 72, 21, false, this, v); },
        getprocessedText: function () { return CS.Call(2, 72, 22, false, this); },
        setprocessedText: function (v) { return CS.Call(3, 72, 22, false, this, v); },
        getspacingX: function () { return CS.Call(2, 72, 23, false, this); },
        setspacingX: function (v) { return CS.Call(3, 72, 23, false, this, v); },
        getspacingY: function () { return CS.Call(2, 72, 24, false, this); },
        setspacingY: function (v) { return CS.Call(3, 72, 24, false, this, v); },
        getsupportEncoding: function () { return CS.Call(2, 72, 25, false, this); },
        setsupportEncoding: function (v) { return CS.Call(3, 72, 25, false, this, v); },
        getsymbolStyle: function () { return CS.Call(2, 72, 26, false, this); },
        setsymbolStyle: function (v) { return CS.Call(3, 72, 26, false, this, v); },
        gettext: function () { return CS.Call(2, 72, 27, false, this); },
        settext: function (v) { return CS.Call(3, 72, 27, false, this, v); },
        gettrueTypeFont: function () { return CS.Call(2, 72, 28, false, this); },
        settrueTypeFont: function (v) { return CS.Call(3, 72, 28, false, this, v); },
        getworldCorners: function () { return CS.Call(2, 72, 29, false, this); },
        setworldCorners: function (v) { return CS.Call(3, 72, 29, false, this, v); },
        ApplyOffset: function (a0/* BetterList`1 */, a1/* Int32 */) { return CS.Call(4, 72, 0, false, this, a0, a1); },
        ApplyShadow: function (a0/* BetterList`1 */, a1/* BetterList`1 */, a2/* BetterList`1 */, a3/* Int32 */, a4/* Int32 */, a5/* Single */, a6/* Single */) { return CS.Call(4, 72, 1, false, this, a0, a1, a2, a3, a4, a5, a6); },
        AssumeNaturalSize: function () { return CS.Call(4, 72, 2, false, this); },
        CalculateOffsetToFit: function (a0/* String */) { return CS.Call(4, 72, 3, false, this, a0); },
        GetCharacterIndex: function (a0/* Int32 */, a1/* KeyCode */) { return CS.Call(4, 72, 4, false, this, a0, a1); },
        GetCharacterIndexAtPosition: function (a0/* Vector2 */, a1/* Boolean */) { return CS.Call(4, 72, 5, false, this, a0, a1); },
        GetCharacterIndexAtPosition$1: function (a0/* Vector3 */, a1/* Boolean */) { return CS.Call(4, 72, 6, false, this, a0, a1); },
        GetSides: function (a0/* Transform */) { return CS.Call(4, 72, 7, false, this, a0); },
        GetUrlAtCharacterIndex: function (a0/* Int32 */) { return CS.Call(4, 72, 8, false, this, a0); },
        GetUrlAtPosition: function (a0/* Vector2 */) { return CS.Call(4, 72, 9, false, this, a0); },
        GetUrlAtPosition$1: function (a0/* Vector3 */) { return CS.Call(4, 72, 10, false, this, a0); },
        GetWordAtCharacterIndex: function (a0/* Int32 */) { return CS.Call(4, 72, 11, false, this, a0); },
        GetWordAtPosition: function (a0/* Vector2 */) { return CS.Call(4, 72, 12, false, this, a0); },
        GetWordAtPosition$1: function (a0/* Vector3 */) { return CS.Call(4, 72, 13, false, this, a0); },
        MakePixelPerfect: function () { return CS.Call(4, 72, 14, false, this); },
        MarkAsChanged: function () { return CS.Call(4, 72, 15, false, this); },
        OnFill: function (a0/* BetterList`1 */, a1/* BetterList`1 */, a2/* BetterList`1 */) { return CS.Call(4, 72, 16, false, this, a0, a1, a2); },
        PrintOverlay: function (a0/* Int32 */, a1/* Int32 */, a2/* UIGeometry */, a3/* UIGeometry */, a4/* Color */, a5/* Color */) { return CS.Call(4, 72, 17, false, this, a0, a1, a2, a3, a4, a5); },
        ProcessText: function () { return CS.Call(4, 72, 18, false, this); },
        SetCurrentPercent: function () { return CS.Call(4, 72, 19, false, this); },
        SetCurrentProgress: function () { return CS.Call(4, 72, 20, false, this); },
        SetCurrentSelection: function () { return CS.Call(4, 72, 21, false, this); },
        UpdateNGUIText: function () { return CS.Call(4, 72, 22, false, this); },
        Wrap: function (a0/* String */, a1/* String& */) { return CS.Call(4, 72, 23, false, this, a0, a1); },
        Wrap$1: function (a0/* String */, a1/* String& */, a2/* Int32 */) { return CS.Call(4, 72, 24, false, this, a0, a1, a2); },
    });
    if ($hc < 74) { return; }
     
    Bridge.define("UIBasicSprite", {
        inherits: [UIWidget],
        statics: {
        },
        $fields: {
            centerType: {
                get: function () { return CS.Call(0, 73, 0, false, this); },
                set: function (v) { return CS.Call(1, 73, 0, false, this, v); }
            },
            leftType: {
                get: function () { return CS.Call(0, 73, 1, false, this); },
                set: function (v) { return CS.Call(1, 73, 1, false, this, v); }
            },
            rightType: {
                get: function () { return CS.Call(0, 73, 2, false, this); },
                set: function (v) { return CS.Call(1, 73, 2, false, this, v); }
            },
            bottomType: {
                get: function () { return CS.Call(0, 73, 3, false, this); },
                set: function (v) { return CS.Call(1, 73, 3, false, this, v); }
            },
            topType: {
                get: function () { return CS.Call(0, 73, 4, false, this); },
                set: function (v) { return CS.Call(1, 73, 4, false, this, v); }
            },
        },
        getfillAmount: function () { return CS.Call(2, 73, 0, false, this); },
        setfillAmount: function (v) { return CS.Call(3, 73, 0, false, this, v); },
        getfillDirection: function () { return CS.Call(2, 73, 1, false, this); },
        setfillDirection: function (v) { return CS.Call(3, 73, 1, false, this, v); },
        getflip: function () { return CS.Call(2, 73, 2, false, this); },
        setflip: function (v) { return CS.Call(3, 73, 2, false, this, v); },
        gethasBorder: function () { return CS.Call(2, 73, 3, false, this); },
        sethasBorder: function (v) { return CS.Call(3, 73, 3, false, this, v); },
        getinvert: function () { return CS.Call(2, 73, 4, false, this); },
        setinvert: function (v) { return CS.Call(3, 73, 4, false, this, v); },
        getminHeight: function () { return CS.Call(2, 73, 5, false, this); },
        setminHeight: function (v) { return CS.Call(3, 73, 5, false, this, v); },
        getminWidth: function () { return CS.Call(2, 73, 6, false, this); },
        setminWidth: function (v) { return CS.Call(3, 73, 6, false, this, v); },
        getpixelSize: function () { return CS.Call(2, 73, 7, false, this); },
        setpixelSize: function (v) { return CS.Call(3, 73, 7, false, this, v); },
        getpremultipliedAlpha: function () { return CS.Call(2, 73, 8, false, this); },
        setpremultipliedAlpha: function (v) { return CS.Call(3, 73, 8, false, this, v); },
        gettype: function () { return CS.Call(2, 73, 9, false, this); },
        settype: function (v) { return CS.Call(3, 73, 9, false, this, v); },
    });
    if ($hc < 75) { return; }
     
    Bridge.define("UISprite", {
        inherits: [UIBasicSprite],
        statics: {
        },
        ctor: function () {
            CS.Call(5, 74, 0, true, this);
        },
        getatlas: function () { return CS.Call(2, 74, 0, false, this); },
        setatlas: function (v) { return CS.Call(3, 74, 0, false, this, v); },
        getborder: function () { return CS.Call(2, 74, 1, false, this); },
        setborder: function (v) { return CS.Call(3, 74, 1, false, this, v); },
        getdrawingDimensions: function () { return CS.Call(2, 74, 2, false, this); },
        setdrawingDimensions: function (v) { return CS.Call(3, 74, 2, false, this, v); },
        getisValid: function () { return CS.Call(2, 74, 3, false, this); },
        setisValid: function (v) { return CS.Call(3, 74, 3, false, this, v); },
        getmaterial: function () { return CS.Call(2, 74, 4, false, this); },
        setmaterial: function (v) { return CS.Call(3, 74, 4, false, this, v); },
        getminHeight: function () { return CS.Call(2, 74, 5, false, this); },
        setminHeight: function (v) { return CS.Call(3, 74, 5, false, this, v); },
        getminWidth: function () { return CS.Call(2, 74, 6, false, this); },
        setminWidth: function (v) { return CS.Call(3, 74, 6, false, this, v); },
        getpixelSize: function () { return CS.Call(2, 74, 7, false, this); },
        setpixelSize: function (v) { return CS.Call(3, 74, 7, false, this, v); },
        getpremultipliedAlpha: function () { return CS.Call(2, 74, 8, false, this); },
        setpremultipliedAlpha: function (v) { return CS.Call(3, 74, 8, false, this, v); },
        getspriteName: function () { return CS.Call(2, 74, 9, false, this); },
        setspriteName: function (v) { return CS.Call(3, 74, 9, false, this, v); },
        GetAtlasSprite: function () { return CS.Call(4, 74, 0, false, this); },
        MakePixelPerfect: function () { return CS.Call(4, 74, 1, false, this); },
        OnFill: function (a0/* BetterList`1 */, a1/* BetterList`1 */, a2/* BetterList`1 */) { return CS.Call(4, 74, 2, false, this, a0, a1, a2); },
    });
})(1000000);