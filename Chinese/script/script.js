var categories = ["TopLevel", "Core", "UI", "HTMLText", "TiledMap", "Particle", "Physics", "Bone", "Filter", "3D", "输入设备"];
var classList = {};
var excludeClassList = {};

classList["TopLevel"] = ["Config", "Laya", "Laya3D", "UIConfig", "XmlDom"];

classList["Bone"] = [
    "laya.ani.bone.Skeleton",
    "laya.ani.bone.Templet",
    "laya.ani.bone.canvasmesh.SkinMeshForGraphic"
];
classList["Core"] = [
    "laya.ani.AnimationPlayer",
    "laya.ani.swf.MovieClip",
    "laya.components.CommonScript",
    "laya.components.Component",
    "laya.components.Prefab",
    "laya.components.Script",
    "laya.display.Animation",
    "laya.display.AnimationBase",
    "laya.display.BitmapFont",
    "laya.display.EffectAnimation",
    "laya.display.FrameAnimation",
    "laya.display.Graphics",
    "laya.display.Input",
    "laya.display.Node",
    "laya.display.Scene",
    "laya.display.Sprite",
    "laya.display.Stage",
    "laya.display.Text",
    "laya.display.cmd.AlphaCmd",
    "laya.display.cmd.ClipRectCmd",
    "laya.display.cmd.DrawCircleCmd",
    "laya.display.cmd.DrawCurvesCmd",
    "laya.display.cmd.DrawImageCmd",
    "laya.display.cmd.DrawLineCmd",
    "laya.display.cmd.DrawLinesCmd",
    "laya.display.cmd.DrawPathCmd",
    "laya.display.cmd.DrawPieCmd",
    "laya.display.cmd.DrawPolyCmd",
    "laya.display.cmd.DrawRectCmd",
    "laya.display.cmd.DrawTextureCmd",
    "laya.display.cmd.DrawTexturesCmd",
    "laya.display.cmd.DrawTrianglesCmd",
    "laya.display.cmd.FillBorderTextCmd",
    "laya.display.cmd.FillTextCmd",
    "laya.display.cmd.FillTextureCmd",
    "laya.display.cmd.RestoreCmd",
    "laya.display.cmd.RotateCmd",
    "laya.display.cmd.SaveCmd",
    "laya.display.cmd.ScaleCmd",
    "laya.display.cmd.StrokeTextCmd",
    "laya.display.cmd.TransformCmd",
    "laya.display.cmd.TranslateCmd",
    "laya.display.css.TextStyle",
    "laya.events.Event",
    "laya.events.EventDispatcher",
    "laya.events.Keyboard",
    "laya.events.KeyBoardManager",
    "laya.events.KeyLocation",
    "laya.events.MouseManager",
    "laya.maths.Matrix",
    "laya.maths.Point",
    "laya.maths.Rectangle",
    "laya.media.Sound",
    "laya.media.SoundChannel",
    "laya.media.SoundManager",
    "laya.net.HttpRequest",
    "laya.net.Loader",
    "laya.net.LoaderManager",
    "laya.net.LocalStorage",
    "laya.net.ResourceVersion",
    "laya.net.Socket",
    "laya.net.URL",
    "laya.resource.HTMLCanvas",
    "laya.resource.Texture",
    "laya.utils.Browser",
    "laya.utils.Byte",
    "laya.utils.ClassUtils",
    "laya.utils.Ease",
    "laya.utils.FontInfo",
    "laya.utils.Handler",
    "laya.utils.HitArea",
    "laya.utils.Log",
    "laya.utils.Mouse",
    "laya.utils.PerfData",
    "laya.utils.PerfHUD",
    "laya.utils.Pool",
    "laya.utils.Stat",
    "laya.utils.TimeLine",
    "laya.utils.Timer",
    "laya.utils.Tween",
    "laya.utils.Utils",
    "laya.utils.WeakObject"
];
classList["3D"] = [
    "Laya3D",
    "laya.d3.CastShadowList",
    "laya.d3.Input3D",
    "laya.d3.Touch",
    "laya.d3.animation.AnimationClip",
    "laya.d3.animation.AnimationEvent",
    "laya.d3.animation.AnimationNode",
    "laya.d3.animation.AnimationTransform3D",
    "laya.d3.animation.AnimatorStateScript",
    "laya.d3.animation.KeyframeNodeList",
    "laya.d3.component.Animator",
    "laya.d3.component.AnimatorControllerLayer",
    "laya.d3.component.AnimatorPlayState",
    "laya.d3.component.AnimatorState",
    "laya.d3.component.Script3D",
    "laya.d3.component.SimpleSingletonList",
    "laya.d3.component.SingletonList",
    "laya.d3.core.Avatar",
    "laya.d3.core.BaseCamera",
    "laya.d3.core.Camera",
    "laya.d3.core.FloatKeyframe",
    "laya.d3.core.Gradient",
    "laya.d3.core.GradientMode",
    "laya.d3.core.HeightMap",
    "laya.d3.core.Keyframe",
    "laya.d3.core.MeshFilter",
    "laya.d3.core.MeshRenderer",
    "laya.d3.core.MeshSprite3D",
    "laya.d3.core.MeshTerrainSprite3D",
    "laya.d3.core.QuaternionKeyframe",
    "laya.d3.core.RenderableSprite3D",
    "laya.d3.core.SkinnedMeshRenderer",
    "laya.d3.core.SkinnedMeshSprite3D",
    "laya.d3.core.Sprite3D",
    "laya.d3.core.TextureMode",
    "laya.d3.core.Transform3D",
    "laya.d3.core.Vector3Keyframe",
    "laya.d3.core.light.DirectionLight",
    "laya.d3.core.light.LightSprite",
    "laya.d3.core.light.PointLight",
    "laya.d3.core.light.SpotLight",
    "laya.d3.core.material.BaseMaterial",
    "laya.d3.core.material.BlinnPhongMaterial",
    "laya.d3.core.material.EffectMaterial",
    "laya.d3.core.material.ExtendTerrainMaterial",
    "laya.d3.core.material.PBRSpecularMaterial",
    "laya.d3.core.material.PBRStandardMaterial",
    "laya.d3.core.material.RenderState",
    "laya.d3.core.material.SkyBoxMaterial",
    "laya.d3.core.material.SkyProceduralMaterial",
    "laya.d3.core.material.TerrainMaterial",
    "laya.d3.core.material.UnlitMaterial",
    "laya.d3.core.material.WaterPrimaryMaterial",
    "laya.d3.core.particleShuriKen.ShuriKenParticle3D",
    "laya.d3.core.particleShuriKen.ShurikenParticleMaterial",
    "laya.d3.core.particleShuriKen.ShurikenParticleRenderer",
    "laya.d3.core.particleShuriKen.ShurikenParticleSystem",
    "laya.d3.core.particleShuriKen.module.Burst",
    "laya.d3.core.particleShuriKen.module.ColorOverLifetime",
    "laya.d3.core.particleShuriKen.module.Emission",
    "laya.d3.core.particleShuriKen.module.FrameOverTime",
    "laya.d3.core.particleShuriKen.module.GradientAngularVelocity",
    "laya.d3.core.particleShuriKen.module.GradientColor",
    "laya.d3.core.particleShuriKen.module.GradientDataInt",
    "laya.d3.core.particleShuriKen.module.GradientDataNumber",
    "laya.d3.core.particleShuriKen.module.GradientDataVector2",
    "laya.d3.core.particleShuriKen.module.GradientSize",
    "laya.d3.core.particleShuriKen.module.GradientVelocity",
    "laya.d3.core.particleShuriKen.module.RotationOverLifetime",
    "laya.d3.core.particleShuriKen.module.SizeOverLifetime",
    "laya.d3.core.particleShuriKen.module.StartFrame",
    "laya.d3.core.particleShuriKen.module.TextureSheetAnimation",
    "laya.d3.core.particleShuriKen.module.VelocityOverLifetime",
    "laya.d3.core.particleShuriKen.module.shape.BaseShape",
    "laya.d3.core.particleShuriKen.module.shape.BoxShape",
    "laya.d3.core.particleShuriKen.module.shape.CircleShape",
    "laya.d3.core.particleShuriKen.module.shape.ConeShape",
    "laya.d3.core.particleShuriKen.module.shape.HemisphereShape",
    "laya.d3.core.particleShuriKen.module.shape.ShapeUtils",
    "laya.d3.core.particleShuriKen.module.shape.SphereShape",
    "laya.d3.core.pixelLine.PixelLineData",
    "laya.d3.core.pixelLine.PixelLineFilter",
    "laya.d3.core.pixelLine.PixelLineMaterial",
    "laya.d3.core.pixelLine.PixelLineRenderer",
    "laya.d3.core.pixelLine.PixelLineSprite3D",
    "laya.d3.core.pixelLine.PixelLineVertex",
    "laya.d3.core.render.BaseRender",
    "laya.d3.core.render.RenderContext3D",
    "laya.d3.core.scene.BoundsOctree",
    "laya.d3.core.scene.BoundsOctreeNode",
    "laya.d3.core.scene.OctreeMotionList",
    "laya.d3.core.scene.Scene3D",
    "laya.d3.core.scene.SceneManager",
    "laya.d3.core.trail.TrailFilter",
    "laya.d3.core.trail.TrailGeometry",
    "laya.d3.core.trail.TrailMaterial",
    "laya.d3.core.trail.TrailRenderer",
    "laya.d3.core.trail.TrailSprite3D",
    "laya.d3.core.trail.VertexTrail",
    "laya.d3.graphics.IndexBuffer3D",
    "laya.d3.graphics.IVertex",
    "laya.d3.graphics.MeshRenderStaticBatchOwner",
    "laya.d3.graphics.StaticBatchManager",
    "laya.d3.graphics.VertexBuffer3D",
    "laya.d3.graphics.VertexElement",
    "laya.d3.graphics.VertexElementFormat",
    "laya.d3.graphics.Vertex.VertexMesh",
    "laya.d3.graphics.Vertex.VertexPositionTerrain",
    "laya.d3.graphics.Vertex.VertexPositionTexture0",
    "laya.d3.graphics.Vertex.VertexShuriKenParticle",
    "laya.d3.graphics.Vertex.VertexShurikenParticleBillboard",
    "laya.d3.graphics.Vertex.VertexShurikenParticleMesh",
    "laya.d3.loaders.MeshReader",
    "laya.d3.math.BoundBox",
    "laya.d3.math.BoundFrustum",
    "laya.d3.math.BoundSphere",
    "laya.d3.math.CollisionUtils",
    "laya.d3.math.Color",
    "laya.d3.math.ContainmentType",
    "laya.d3.math.HalfFloatUtils",
    "laya.d3.math.MathUtils3D",
    "laya.d3.math.Matrix3x3",
    "laya.d3.math.Matrix4x4",
    "laya.d3.math.OrientedBoundBox",
    "laya.d3.math.Plane",
    "laya.d3.math.Quaternion",
    "laya.d3.math.Rand",
    "laya.d3.math.RandX",
    "laya.d3.math.Ray",
    "laya.d3.math.Vector2",
    "laya.d3.math.Vector3",
    "laya.d3.math.Vector4",
    "laya.d3.math.Viewport",
    "laya.d3.math.Native.ConchColor",
    "laya.d3.math.Native.ConchQuaternion",
    "laya.d3.math.Native.ConchVector2",
    "laya.d3.math.Native.ConchVector3",
    "laya.d3.math.Native.ConchVector4",
    "laya.d3.physics.CharacterController",
    "laya.d3.physics.Collision",
    "laya.d3.physics.CollisionTool",
    "laya.d3.physics.Constraint3D",
    "laya.d3.physics.ContactPoint",
    "laya.d3.physics.HitResult",
    "laya.d3.physics.PhysicsCollider",
    "laya.d3.physics.PhysicsComponent",
    "laya.d3.physics.PhysicsSettings",
    "laya.d3.physics.PhysicsSimulation",
    "laya.d3.physics.PhysicsTriggerComponent",
    "laya.d3.physics.PhysicsUpdateList",
    "laya.d3.physics.Rigidbody3D",
    "laya.d3.physics.constraints.ConstraintComponent",
    "laya.d3.physics.constraints.Point2PointConstraint",
    "laya.d3.physics.shape.BoxColliderShape",
    "laya.d3.physics.shape.CapsuleColliderShape",
    "laya.d3.physics.shape.ColliderShape",
    "laya.d3.physics.shape.CompoundColliderShape",
    "laya.d3.physics.shape.ConeColliderShape",
    "laya.d3.physics.shape.CylinderColliderShape",
    "laya.d3.physics.shape.HeightfieldColliderShape",
    "laya.d3.physics.shape.MeshColliderShape",
    "laya.d3.physics.shape.SphereColliderShape",
    "laya.d3.physics.shape.StaticPlaneColliderShape",
    "laya.d3.resource.RenderTexture",
    "laya.d3.resource.TextureCube",
    "laya.d3.resource.TextureGenerator",
    "laya.d3.resource.models.Mesh",
    "laya.d3.resource.models.PrimitiveMesh",
    "laya.d3.resource.models.SkyBox",
    "laya.d3.resource.models.SkyDome",
    "laya.d3.resource.models.SkyMesh",
    "laya.d3.resource.models.SkyRenderer",
    "laya.d3.resource.models.SubMesh",
    "laya.d3.shader.DefineDatas",
    "laya.d3.shader.Shader3D",
    "laya.d3.shader.ShaderPass",
    "laya.d3.shader.SubShader",
    "laya.d3.shadowMap.ParallelSplitShadowMap",
    "laya.d3.terrain.Terrain",
    "laya.d3.terrain.TerrainChunk",
    "laya.d3.terrain.TerrainFilter",
    "laya.d3.terrain.TerrainHeightData",
    "laya.d3.terrain.TerrainLeaf",
    "laya.d3.terrain.TerrainRender",
    "laya.d3.terrain.TerrainRes",
    "laya.d3.terrain.unit.ChunkInfo",
    "laya.d3.terrain.unit.DetailTextureInfo",
    "laya.d3.terrain.unit.MaterialInfo",
    "laya.d3.text.TextMesh",
    "laya.d3.utils.Physics3DUtils",
    "laya.d3.utils.Picker",
    "laya.d3.utils.Size",
    "laya.d3.utils.Utils3D"
];
classList["输入设备"] = [
    "laya.device.Shake",
    "laya.device.geolocation.Geolocation",
    "laya.device.geolocation.GeolocationInfo",
    "laya.device.media.Media",
    "laya.device.media.Video",
    "laya.device.motion.AccelerationInfo",
    "laya.device.motion.Accelerator",
    "laya.device.motion.Gyroscope",
    "laya.device.motion.RotationInfo"
];
classList["Filter"] = [
    "laya.filters.BlurFilter",
    "laya.filters.ColorFilter",
    "laya.filters.Filter",
    "laya.filters.GlowFilter",
    "laya.filters.IFilter"
];
classList["HTMLText"] = [
    "laya.html.dom.HTMLDivElement",
    "laya.html.dom.HTMLIframeElement"
];
classList["TiledMap"] = [
    "laya.map.GridSprite",
    "laya.map.MapLayer",
    "laya.map.TileAniSprite",
    "laya.map.TiledMap",
    "laya.map.TileTexSet"
];
classList["Particle"] = [
    "laya.particle.Particle2D",
    "laya.particle.ParticleSetting",
    "laya.particle.ParticleTemplateBase",
    "laya.particle.emitter.EmitterBase",
    "laya.particle.particleUtils.PicTool"
];
classList["Physics"] = [
    "laya.physics.BoxCollider",
    "laya.physics.ChainCollider",
    "laya.physics.CircleCollider",
    "laya.physics.ColliderBase",
    "laya.physics.Physics",
    "laya.physics.PhysicsDebugDraw",
    "laya.physics.PolygonCollider",
    "laya.physics.RigidBody",
    "laya.physics.joint.DistanceJoint",
    "laya.physics.joint.GearJoint",
    "laya.physics.joint.JointBase",
    "laya.physics.joint.MotorJoint",
    "laya.physics.joint.MouseJoint",
    "laya.physics.joint.PrismaticJoint",
    "laya.physics.joint.PulleyJoint",
    "laya.physics.joint.RevoluteJoint",
    "laya.physics.joint.RopeJoint",
    "laya.physics.joint.WeldJoint",
    "laya.physics.joint.WheelJoint"
];
classList["UI"] = [
    "laya.ui.AutoBitmap",
    "laya.ui.Box",
    "laya.ui.Button",
    "laya.ui.CheckBox",
    "laya.ui.Clip",
    "laya.ui.ColorPicker",
    "laya.ui.ComboBox",
    "laya.ui.Dialog",
    "laya.ui.DialogManager",
    "laya.ui.FontClip",
    "laya.ui.HBox",
    "laya.ui.HScrollBar",
    "laya.ui.HSlider",
    "laya.ui.IBox",
    "laya.ui.IItem",
    "laya.ui.Image",
    "laya.ui.IRender",
    "laya.ui.ISelect",
    "laya.ui.Label",
    "laya.ui.LayoutBox",
    "laya.ui.List",
    "laya.ui.Panel",
    "laya.ui.ProgressBar",
    "laya.ui.Radio",
    "laya.ui.RadioGroup",
    "laya.ui.ScrollBar",
    "laya.ui.Slider",
    "laya.ui.Styles",
    "laya.ui.Tab",
    "laya.ui.TextArea",
    "laya.ui.TextInput",
    "laya.ui.TipManager",
    "laya.ui.Tree",
    "laya.ui.UIComponent",
    "laya.ui.UIEvent",
    "laya.ui.UIGroup",
    "laya.ui.UIUtils",
    "laya.ui.VBox",
    "laya.ui.View",
    "laya.ui.ViewStack",
    "laya.ui.VScrollBar",
    "laya.ui.VSlider",
    "laya.ui.Widget",
    "laya.ui.WXOpenDataViewer"
];
excludeClassList["Core"] =
    [
        "laya.events.MouseManager",
        "laya.filters.IFilter",
        "laya.resource.HTMLCanvas"
    ]
classList["Core"] = classList["Core"].concat(excludeClassList["Core"]);

var baseUrl = location.protocol + "//" + location.host + location.pathname;
var allClasses = [];

// 填充DOM
for (var i = 0; i < categories.length; ++i) {
    var categoryName = categories[i];
    var packageLi = "<li><a class='list-item' title='" + categoryName + "' href='javascript:void(0)'>" + categoryName + "</a></li>";
    $("#packageGroup").append(packageLi);

    allClasses = allClasses.concat(classList[categoryName]);
}
allClasses.sort();

// 填充所有类
for (i = 0; i < allClasses.length; i++) {
    var classItem = "<li><a href='javascript:void(0)'>" + allClasses[i] + "</a></li>";
    $("#allClassList").append(classItem);
}

$("window").ready(function () {
    // 解析pacakge
    var categoryName = getCategoryName();
    navToCategory(categoryName);
    showSelectedCategory(categoryName);

    // 解析class
    var fullClassName = getFullClassName();
    navToClass(fullClassName);
});

// 显示指定分类对应的类列表
function navToCategory(packageName) {
    $("#classGroup").empty();
    packageName = decodeURIComponent(packageName);
    for (var i = 0; i < classList[packageName].length; ++i) {
        var className = classList[packageName][i];
        var classLi = "<li><a href='javascript:void(0)'>" + className + "</a></li>";
        $("#classGroup").append(classLi);
    }

    hideExcludeClasses($("#classGroup li a"));
}


function navToClass(classFullName, memberName) {
    document.title = classFullName;

    var classPath = baseUrl.replace(/index.html/, "") + classFullName.replace(/\./g, "/") + ".html";

    $.ajax(
        {
            type: "get",
            async: true,
            url: classPath,
            timeout: 1000,
            success: function (data) {
                data = data.replace(/<link.*?>/g, '').// 删除css文件加载
                replace(/<script.*?<\/script>/gm, '').// 删除js文件加载
                replace(/\.\.\//g, "");

                $(".right-part").html(data);
                $(".titleTable").remove();

                createCodeTable();

                translate();
                removePackageHypelink();
                removeSeeAlsoHypeLink();
                replaceClassHypelink(".classHeaderTable tbody tr td a");
                replaceClassHypelink(".summaryTable tbody tr td a");
                replaceClassHypelink(".detailBody code a");
                replaceClassHypelink(".detailBody a");

                memberName || (memberName = location.hash.substr(1));
                if (memberName) {
                    setTimeout(
                        function () {
                            // 解析类成员锚链接
                            var memeberPosY = $('a[name="' + memberName + '"]')[0].scrollIntoView();
                        }.bind(this),
                        50);
                }
            },
            error: function (error) {
                console.log(error.text);
                // 如果不是本地打开，return
                if (location.protocol.indexOf('file') == -1) {
                    return;
                }
                // 获取本地资源出错
                // 可能得情况: 1) 没有使用本地服务器 2)直接打开并别没有关闭浏览器的安全限制
                if (typeof language !== 'undefined' && language == 'en') {
                    alert('Please turn off browser security restrictions or use local server access!');
                } else {
                    alert('请关闭浏览器的安全限制或使用本地服务器访问！');
                }
            }
        });
}

function createCodeTable() {
    var listings = $(".listing");
    var asPre, jsPre, tsPre;
    for (var i = 0; i < listings.length; i++) {
        var listing = listings[i];

        if (i % 3 == 2) {
            tsPre = $('<pre class="brush:as3"></pre>');
            tsPre.html(listing.firstChild.innerText);

            var codeCon = $('<div class="bs-example bs-example-tabs">');
            var codeTab = $('<div class="tab-content"></div>');
            var asPanel = $('<div role="tabpanel" class="tab-pane fade in active" aria-labelledby="as-tab"></div>');
            asPanel.attr("id", "as" + i);
            var jsPanel = $('<div role="tabpanel" class="tab-pane fade" aria-labelledby="js-tab"></div>');
            jsPanel.attr("id", "js" + i);
            var tsPanel = $('<div role="tabpanel" class="tab-pane fade" aria-labelledby="ts-tab"></div>');
            tsPanel.attr("id", "ts" + i);

            codeCon.append($(
                '<ul id="myTabs" class="nav nav-tabs" role="tablist">' +
                '<li role="presentation" class="active">' +
                '<a href="#as' + i + '" role="tab" id="as-tab' + i + '" data-toggle="tab" aria-controls="as' + i + '" aria-expanded="true">ActionScript</a>' +
                '</li>' +
                '<li role="presentation">' +
                '<a href="#js' + i + '" role="tab" id="js-tab' + i + '" data-toggle="tab" aria-controls="js' + i + '">JavaScript</a>' +
                '</li>' +
                '<li role="presentation">' +
                '<a href="#ts' + i + '" role="tab" id="ts-tab' + i + '" data-toggle="tab" aria-controls="ts' + i + '">TypeScript</a>' +
                '</li>' +
                '</ul>'));

            codeCon.append(codeTab);

            codeTab.append(asPanel);
            codeTab.append(jsPanel);
            codeTab.append(tsPanel);

            asPanel.append(asPre);
            jsPanel.append(jsPre);
            tsPanel.append(tsPre);

            $(listing.parentNode).append(codeCon);

            SyntaxHighlighter.highlight();

            $(".code .container div").css("whiteSpace", "nowrap");
        }
        else if (i % 2 == 1) {
            jsPre = $('<pre class="brush:js"></pre>');
            jsPre.html(listing.firstChild.innerText);
        }
        else {
            asPre = $('<pre class="brush:as3"></pre>');
            asPre.html(listing.firstChild.innerText);
        }

        listing.remove();
    }
}

function translate() {
    var headerTableRows = $(".classHeaderTable tbody tr");

    var innerText, newText;
    for (var i = headerTableRows.length - 1; i >= 0; i--) {
        innerText = headerTableRows[i].firstChild.innerText;
        switch (innerText) {
            case "Class":
                newText = "类";
                break;
            case "Implements":
                newText = "实现";
                break;
            case "Subclasses":
                newText = "子类";
                break;
            default:
                newText = "";
        }

        if (newText)
            headerTableRows[i].firstChild.innerText = newText;
    }

    // if(headerTableRows[3])
    // headerTableRows[3].firstChild.innerText = "子类"
}

// 更改
function removePackageHypelink() {
    var hypelinkContainer = $(".classHeaderTableLabel")[0].parentNode;

    var innerText = hypelinkContainer.childNodes[1].innerText;

    hypelinkContainer.childNodes[1].remove();

    var newElement = document.createElement("p");
    newElement.innerText = innerText;

    hypelinkContainer.appendChild(newElement);
}

function removeSeeAlsoHypeLink() {
    var seeAlsos = $(".seeAlso a");
    for (var i = seeAlsos.length - 1; i >= 0; i--) {
        var seeAlsoItem = $(seeAlsos[i]);
        var innerText = seeAlsoItem.html();

        if ((innerText.indexOf(".") == -1) && // 无.号
            (classList["TopLevel"].indexOf(innerText) == -1)) //目标类是当前类
        {
            seeAlsoItem.attr("href", "#" + innerText);
        }
        else {
            seeAlsoItem.attr("href", "javascript:void(0)");
        }
    }
    ;

    seeAlsos.click(function (e) {
        var innerText = e.target.innerText;

        if ($(e.target).attr("href") == "javascript:void(0)") {
            if (isClass(innerText)) // 目标是一个类
            {
                navToClass(innerText);
                pushToHistory(getCategoryName(), innerText);
            }
            else // 目标是其他类成员
            {
                var dotIndex = innerText.lastIndexOf(".");
                var targetClass = innerText.substring(0, dotIndex);
                var memberName = innerText.substring(dotIndex + 1);

                setTimeout(
                    function () {
                        // 解析类成员锚链接
                        var memeberPosY = $('a[name="' + memberName + '"]')[0].scrollIntoView();
                    }.bind(this),
                    50);

                if (targetClass) {
                    navToClass(targetClass);
                    pushToHistory(getCategoryName(), targetClass, memberName);
                }
            }
        }
    });

}
// 把ASDoc生成的页面跳转链接改成页内加载
// selector为JQuery的选择器
function replaceClassHypelink(selector) {
    var elementList = $(selector);
    var element;
    for (var i = elementList.length - 1; i >= 0; i--) {
        element = elementList[i];
        if (!element.attributes.href)
            continue;
        if (element.attributes.href.nodeValue.charAt(0) != "#") {
            element.setAttribute("fullName", element.attributes.href.nodeValue.replace(".html", "").replace(/\//g, "."));
            element.onclick = function (e) {
                var fullClassName = e.currentTarget.attributes.fullName.nodeValue;
                var parts = fullClassName.split("#");
                scrollTo(0);
                navToClass(parts[0], parts[1]);

                var categoryName = getClassCategary(fullClassName);

                pushToHistory(categoryName, fullClassName);
            };
            element.href = "javascript:void(0)";
        }
        else {
            // element.setAttribute("anchor", element.attributes.href.nodeValue.substring(1));
            // element.addEventListener('click', function(e)
            // {
            // 	var anchor = e.target.attributes.anchor.nodeValue;
            // 	var anchorElem = $('a[name="' + anchor + '"]');
            // 	scrollTo(anchorElem.offset().top);
            // });
        }
    }
}

// 选择包
packageGroup.onclick = function (e) {
    if (e.target.tagName != "A")
        return;

    // 导航至指定包
    var categoryName = e.target.innerText;

    pushToHistory(categoryName, classList[categoryName][0]);

    navToCategory(categoryName);

    showSelectedCategory(categoryName);
}

// 选择类
classGroup.onclick = allClassList.onclick = function (e) {
    if (e.target.tagName != "A")
        return;

    // 导航至指定类
    var categoryName = getCategoryName();

    history.pushState(
        {}, "",
        baseUrl + "?category=" + categoryName + "&class=" + e.target.innerText);

    navToClass(e.target.innerText);
    scrollTo(0);
}

// 缓动滑动到y
function scrollTo(y) {
    $("#ldc_content").animate(
        {
            scrollTop: y
        }, 0);
}

// 获取当前url的package参数
function getCategoryName() {
    var args = location.search.split("&");
    if (args[0])
        return args[0].substr(10);
    return 'Core';
}

// 获取当前url的class参数
function getFullClassName() {
    var args = location.search.split("&");
    if (args[1])
        return args[1].substr(6);
    return 'Laya';
}

// 获取当前class
function getClassName() {
    var fullName = getFullClassName();
    var dotIndex = fullName.lastIndexOf(".");
    return fullName.substr(dotIndex + 1);
}

function isClass(fullName) {
    for (var i = categories.length - 1; i >= 0; i--) {
        var classes = classList[categories[i]];
        if (classes.indexOf(fullName) > -1)
            return true;
    }
    ;
    return false;
}

classSearch.oninput = function (e) {
    var list = $("#classGroup li a");
    var searchFor = e.target.value.toLowerCase();

    if (searchFor == "")
        hideExcludeClasses(list);
    else
        searchHandler(list, searchFor);
}

searchAllClass.oninput = function (e) {
    searchHandler($("#allClassList li a"), e.target.value.toLowerCase());
}

function hideExcludeClasses(list) {
    for (var i = list.length - 1; i >= 0; i--) {
        var itemVal = list[i].innerText;
        var display;

        if (excludeClassList["Core"].indexOf(itemVal) > -1)
            display = "none";
        else
            display = "block";

        list[i].parentNode.style.display = display;
    }
}

// 符合的将显示 不符合的将隐藏
function searchHandler(list, value) {
    if (value.indexOf("laya.") == 0)
        value = value.substr(5);

    for (var i = list.length - 1; i >= 0; i--) {
        var itemVal = list[i].innerText;
        var display;

        if (itemVal.toLowerCase().indexOf(value) > -1)
            display = "block";
        else
            display = "none";

        list[i].parentNode.style.display = display;
    }
}

// 根据完全限定名称获取分类
function getClassCategary(classFullName) {
    for (var i = categories.length - 1; i >= 0; i--) {
        if (classList[categories[i]].indexOf(classFullName) > -1)
            return categories[i];
    }
    ;
    return '';
}

// 由于页面的切换无刷新 为了模拟前进后退 将切换的页面push到history中
function pushToHistory(packageName, className, search) {
    var url = baseUrl + "?category=" + packageName + "&class=" + className;

    if (search)
        url += "#" + search;

    history.pushState(
        {
            title: "",
            url: url
        }, "", url);
}

// 选中已选择的分类
function showSelectedCategory(categoryName) {
    var categories = $("#packageGroup li a");
    $("#packageGroup li").removeClass("swich");
    for (var i = categories.length - 1; i >= 0; i--) {
        if (categories[i].innerText == categoryName) {
            categories[i].setAttribute("class", "cur");
            categories[i].parentElement.setAttribute("class", "swich");
        }
        else
            categories[i].setAttribute("class", "list-item");
    }
    ;
}

// 用户执行前进或后退网页时 无刷跳转历史记录
window.onpopstate = function () {
    navToClass(getFullClassName());
}

category.style.display = "block";
classIndex.style.display = "none";

categoryRadio.onclick = function (e) {
    category.style.display = "block";
    classIndex.style.display = "none";
}

classIndexRadio.onclick = function (e) {
    category.style.display = "none";
    classIndex.style.display = "block";
}

resize();
window.onresize = resize;

function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    $(".sider-content").height(h);
    $(".col-sm-9").height(h);
    $(".classCon").height(h - 288);
    $(".col-sm-9").width(w - $(".col-md-2").width() - 45);
    $("#classIndex").height(h - 112);
}