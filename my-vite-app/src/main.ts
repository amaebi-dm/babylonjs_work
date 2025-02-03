
import "./style.css";

import 
{ 
  Engine, 
  Mesh, 
  loadAssetContainerAsync, 
  Scene, 
  Color3, 
  Color4, 
  Vector3, 
  Layer,
  // FlyCamera, 
  ArcRotateCamera,
  HemisphericLight, 
  MeshBuilder, 
  StandardMaterial, 
  Animation, 
  SceneLoader, 
  // UtilityLayerRenderer,
  // PositionGizmo,
  SineEase
} 
from "@babylonjs/core";

// import { HtmlMeshRenderer, HtmlMesh } from "babylon-htmlmesh";

import '@babylonjs/loaders/glTF';

import * as GUI from "@babylonjs/gui";
// import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';

// GaussianSplattingのローダを有効化
import "@babylonjs/loaders/SPLAT";

// SPZファイルのパス(公式サンプルデータのracoonfamily)
// import spzUrl from "/assets/racoonfamily.spz?url";
// import spzUrl from "/assets/test.spz?url";
// import spzUrl from "/assets/pod.spz?url";
// import spzUrl from "/assets/test600.spz?url";
// import spzUrl from "/assets/light.spz?url";
// import bgUrl from "/assets/bg.jpeg?url";


// import { Scene } from "@babylonjs/core/scene";
// import { Engine } from "@babylonjs/core/Engines/engine";
// import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
// import { ActionManager } from "@babylonjs/core/Actions/actionManager";
// import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";
// import { Color4 } from "@babylonjs/core/Maths/math.color";
// import "@babylonjs/core/Helpers/sceneHelpers";

// import { HtmlMeshRenderer } from "./node_modules/babylon-htmlmesh/dist/babylon-htmlmesh-renderer";
// import { HtmlMesh } from "./src/html-mesh";




// const createHtmlMeshInstances = ( scene : Scene ) => 
// {
//   // var windowKey : String;
//   // var htmlMeshPackage : Window;
//   for (const [key, value] of Object.entries(window)) 
//   {
//     if ( key == "babylon-htmlmesh" ) console.log( value );
//     else console.log( "-----" );
//   }
//   const htmlMeshPackage = window[ "babylon-htmlmesh" ];
//   const HtmlMesh = htmlMeshPackage.HtmlMesh;
//   const HtmlMeshRenderer = htmlMeshPackage.HtmlMeshRenderer;

//   // Create the HtmlMeshRenderer
//   const htmlMeshRenderer = new HtmlMeshRenderer(scene);

//   // Shows how this can be used to include html content, such
//   // as a form, in your scene.  This can be used to create
//   // richer UIs than can be created with the standard Babylon
//   // UI control, albeit with the restriction that such UIs would
//   // not display in native mobile apps or XR applications.
//   const htmlMeshDiv = new HtmlMesh(scene, "html-mesh-div");
//   const div = document.createElement('div');
//   div.innerHTML = `
//       <form style="padding: 10px; transform-origin: 0 0; scale: 4">
//           <label for="name">Name:</label>
//           <input type="text" id="name" name="name" required><br><br>
          
//           <label for="country">Country:</label>
//           <select id="country" name="country">
//               <option value="USA">USA</option>
//               <option value="Canada">Canada</option>
//               <option value="UK">UK</option>
//               <option value="Australia">Australia</option>
//           </select><br><br>
          
//           <label for="hobbies">Hobbies:</label><br>
//           <input type="checkbox" id="hobby1" name="hobbies" value="Reading">
//           <label for="hobby1">Reading</label><br>
//           <input type="checkbox" id="hobby2" name="hobbies" value="Gaming">
//           <label for="hobby2">Gaming</label><br>
//           <input type="checkbox" id="hobby3" name="hobbies" value="Sports">
//           <label for="hobby3">Sports</label><br><br>
//       </form>
//   `;
//   div.style.backgroundColor = 'white';
//   div.style.width = '480px';
//   div.style.height = '360px';
//   // Style the form
  
//   htmlMeshDiv.setContent(div, 4, 3);
//   htmlMeshDiv.position.x = -3;
//   htmlMeshDiv.position.y = 2;

  // Shows how this can be used to include a PDF in your scene.  Note this is 
  // conceptual only.  Displaying a PDF like this works, but any links in the
  // PDF will navigate the current tab, which is probably not what you want.
  // There are other solutions out there such as PDF.js that may give you more
  // control, but ultimately proper display of PDFs is not within the scope of
  // this project.
  // const pdfUrl = 'https://cdn.glitch.com/3da1885b-3463-4252-8ded-723332b5de34%2FNew_Horizons.pdf#zoom=75?v=1599831745689'
  // const htmlMeshPdf = new HtmlMesh(scene, "html-mesh-pdf");
  // const iframePdf = document.createElement('iframe');
  // iframePdf.src = pdfUrl;
  // iframePdf.width = '480px';
  // iframePdf.height = '360px';
  // htmlMeshPdf.setContent(iframePdf, 4, 3);
  // htmlMeshPdf.position.x = 3;
  // htmlMeshPdf.position.y = 2;

  // Shows how this can be used to include a website in your scene
  // const siteUrl = 'https://www.babylonjs.com/';
  // const htmlMeshSite = new HtmlMesh(scene, "html-mesh-site");
  // const iframeSite = document.createElement('iframe');
  // iframeSite.src = siteUrl;
  // iframeSite.width = '480px';
  // iframeSite.height = '360px';
  // htmlMeshSite.setContent(iframeSite, 4, 3);
  // htmlMeshSite.position.x = -3;
  // htmlMeshSite.position.y = -2;
  // htmlMeshSite.rotation.y = Math.PI / 4;
  
  // Shows how this can be used to include a YouTube video in your scene
  // const videoId = 'zELYw2qEUjI';
  // const videoUrl = [ 'https://www.youtube.com/embed/', videoId, '?rel=0&enablejsapi=1&disablekb=1&controls=0&fs=0&modestbranding=1' ].join( '' );
  // const htmlMeshVideo = new HtmlMesh(scene, "html-mesh-video");
  // const iframeVideo = document.createElement('iframe');
  // iframeVideo.src = videoUrl;
  // iframeVideo.width = '480px';
  // iframeVideo.height = '360px';
  // htmlMeshVideo.setContent(iframeVideo, 4, 3);
  // htmlMeshVideo.position.x = 3;
  // htmlMeshVideo.position.y = -2;

  // Shows how to create an HTML Overlay
//   const overlayMesh = new HtmlMesh(scene, "html-overlay-mesh", { isCanvasOverlay: true });
//   const overlayMeshDiv = document.createElement('div');
//   overlayMeshDiv.innerHTML = `<p style="padding: 60px; font-size: 80px;">This is an overlay. It is positioned in front of the canvas. This allows it to have transparency and to be non-rectangular, but it will always show over any other content in the scene</p>`;
//   overlayMeshDiv.style.backgroundColor = 'rgba(0,255,0,0.49)';
//   overlayMeshDiv.style.width = '120px';
//   overlayMeshDiv.style.height = '90px';
//   overlayMeshDiv.style.display = 'flex';
//   overlayMeshDiv.style.alignItems = 'center';
//   overlayMeshDiv.style.justifyContent = 'center';
//   overlayMeshDiv.style.borderRadius = '20px';
//   overlayMeshDiv.style.fontSize = 'xx-small';
//   overlayMeshDiv.style.padding = '10px';
//   // Style the form

//   overlayMesh.setContent(overlayMeshDiv, 4, 3);
//   overlayMesh.position.z = 5;
// }




// const url = "https://cdn.jsdelivr.net/npm/babylon-htmlmesh/dist/umd/babylon-htmlmesh.min.js";
// const htmlMeshScript = document.createElement("script");
// htmlMeshScript.type = "module";
// htmlMeshScript.src = url;
// document.body.appendChild(htmlMeshScript);




var advancedTextureForWindow: GUI.AdvancedDynamicTexture;
var windowImg: GUI.Image;

type PostiionType = "Box" | "Chair" | "Pod" | "Sphere" | "All" ;


const main = async () => 
{
  const renderCanvas =
    document.querySelector<HTMLCanvasElement>("#renderCanvas");
  if (!renderCanvas) {
    return;
  }

  const engine = new Engine(renderCanvas);
  const scene = new Scene(engine);
  // とりあえず黒背景.
  scene.clearColor = new Color4( 0, 0, 0, 1 );
  // 背景画像設定.
  // new Layer('bg', "https://i.imgur.com/mBBxGJH.jpg", scene, true ); //https://i.imgur.com/mBBxGJH.jpg
  // new Layer('bg', "assets/sky.jpg", scene, true ); // https://github.com/amaebi-dm/babylonjs_work/blob/main/docs/assets/sky.jpg
  new Layer('bg', "https://raw.githubusercontent.com/amaebi-dm/babylonjs_work/refs/heads/main/resources/sky.jpg", scene, true );



  // Camera,Light 
  // scene.createDefaultCameraOrLight(true, true, true);
  // scene.createDefaultCameraOrLight(false, true, false);
  const camera = new ArcRotateCamera( "camera1", 0, 0, 5, new Vector3( 0, 1, 0 ), scene );
  camera.position = new Vector3( 0, 1, -5 );
  camera.attachControl( false ); 
  new HemisphericLight('light', new Vector3(0,0,0),scene);




  // Gizomo.
  // var center = MeshBuilder.CreateBox( "center", { width: 0.05, height: 0.05, depth: 0.05 }, scene);
  // var centerMat = new StandardMaterial( "centermat", scene );
  // centerMat.diffuseColor = new Color3( 1, 1, 0 );
  // center.material = centerMat;
  // const utilLayer = new UtilityLayerRenderer(scene);
  // const gizmo = new PositionGizmo(utilLayer);
  // gizmo.attachedMesh = center;


  // ground
  MeshBuilder.CreateGround( "ground", { width: 10, height: 10 } );

  // メッシュヒット.
  scene.onPointerDown = function( evt, pickInfo )
  {
    let pickedMesh : string | undefined = "";
    if( pickInfo.hit )
    {
      pickedMesh = pickInfo.pickedMesh?.name;
    }

    if( pickedMesh != null ) 
    {      
      // とりあえずヒットしたオブジェクトの名前で必要なモノを判断.
      if( pickedMesh.includes( "_MESH" ) )
      {
        console.log( "mesh にヒット ( " + pickedMesh + " )" + evt );
        onMeshHit( pickedMesh, camera, scene );
      }
    }
  }


  // box
  var box = MeshBuilder.CreateBox( "Box_MESH", { width: 0.3, height: 0.3, depth: 0.3 }, scene );
  box.position.x = 1;
  box.position.y = 0.5;
  var boxmat = new StandardMaterial( "boxmat", scene );
  boxmat.diffuseColor = new Color3( 1, 0, 0 );
  box.material = boxmat;

  var boxUiPlane =  MeshBuilder.CreatePlane("boxUiPlane", { width: 0.5, height: 0.5 });
  boxUiPlane.parent = box;
  boxUiPlane.position.y = 0.3;

  boxUiPlane.billboardMode = Mesh.BILLBOARDMODE_ALL;

  var advancedTextureBox = GUI.AdvancedDynamicTexture.CreateForMesh( boxUiPlane );

  var boxTxt = new GUI.TextBlock();
  boxTxt.text = "BOX";
  boxTxt.color = "white";
  boxTxt.fontSize = 220;
  boxTxt.isPointerBlocker = false;
  var boxButton = GUI.Button.CreateSimpleButton( "boxBtn", "🔎" );
  boxButton.width = 0.2;
  boxButton.height = 0.2;
  boxButton.color = "white";
  boxButton.fontSize = 100;
  boxButton.background = "blue";
  boxButton.left = 400;
  boxButton.top = -100;
  boxButton.zIndex = 1;
  boxButton.onPointerUpObservable.add( async function() 
  {
      console.log( "box clicked!!" );
      if ( isOpen == 0 ) oepnScreenWindow();
      else closeScreenWindow();
  });
  advancedTextureBox.addControl( boxButton );
  advancedTextureBox.addControl( boxTxt );

  // sphere
  var sphere = MeshBuilder.CreateSphere( "Sphere_MESH", { segments: 0.3, diameter: 0.3 }, scene );
  sphere.position.x = -1;
  sphere.position.y = 0.5;
  var spheremat = new StandardMaterial( "spheremat", scene );
  spheremat.diffuseColor = new Color3( 0, 0, 1 );
  sphere.material = spheremat;

  var sphereUiPlane =  MeshBuilder.CreatePlane("sphereUiPlane", { width: 0.5, height: 0.5 });
  sphereUiPlane.parent = sphere;
  sphereUiPlane.position.y = 0.3;

  sphereUiPlane.billboardMode = Mesh.BILLBOARDMODE_ALL;

  var advancedTextureSphere = GUI.AdvancedDynamicTexture.CreateForMesh( sphereUiPlane );

  var spTxt = new GUI.TextBlock();
  spTxt.text = "SPHERE";
  spTxt.color = "white";
  spTxt.fontSize = 220;
  var spButton = GUI.Button.CreateSimpleButton( "spBtn", "🔎" );
  spButton.width = 0.2;
  spButton.height = 0.2;
  spButton.color = "white";
  spButton.fontSize = 100;
  spButton.background = "blue";
  spButton.left = 400;
  spButton.top = -100;
  spButton.zIndex = 1;
  spButton.onPointerUpObservable.add( async function() 
  {
      console.log( "sphere clicked!!" );
      if ( isOpen == 0 ) oepnScreenWindow();
      else closeScreenWindow();
  });
  advancedTextureSphere.addControl( spButton );
  advancedTextureSphere.addControl( spTxt );







  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());





  // ScreenUI/Button
  advancedTextureForWindow = GUI.AdvancedDynamicTexture.CreateFullscreenUI("WindowCanvas");
  var advancedTextureButton = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

  var button = GUI.Button.CreateSimpleButton("but1", "Buttton");
  // button.left = "-300px"
  button.top = "-350px";
  button.paddingTop = "1px";
  button.width = "100px";
  button.height = "50px";
  button.color = "white";
  button.background = "green";
  button.onPointerDownObservable.add( async() => 
  {
    console.log( "click" );

    // var currentX = camera.position.x;
    // currentX --;
    // camera.position.x = currentX;
    // camera.position = new Vector3( 0, 1, -5 );
    // camera.target = new Vector3( 0, 1, 0 );
    await cameraAnimation( "All", camera, scene );
  
    
  });

  advancedTextureButton.addControl(button);

  // ScreenUI/Image
  // var img = new GUI.Image( "window", "/assets/window.png" );
  windowImg = new GUI.Image( "window", "https://raw.githubusercontent.com/amaebi-dm/babylonjs_work/refs/heads/main/resources/window.png" );
  windowImg.width = 0.5;
  windowImg.height = 0.5;
  
  



  // Pod/SPZ.
  // ここで読み込んでる
  // var pod = await loadAssetContainerAsync( "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz" ,scene);
  var pod = await loadAssetContainerAsync( "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz" ,scene);
  var podM = pod.meshes[0];
  podM.name = "Pod_SPZ_MESH";
  podM.position.x = 0;
  podM.position.y = 1.5;

  var podUiPlane =  MeshBuilder.CreatePlane("podUiPlane", { width: 0.5, height: 0.5 });
  podUiPlane.parent = podM;
  podUiPlane.position.y = 0.2;
  podUiPlane.billboardMode = Mesh.BILLBOARDMODE_ALL;

  var podAdvancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh( podUiPlane );

  var podTxt = new GUI.TextBlock();
  podTxt.text = "POD";
  podTxt.color = "white";
  podTxt.fontSize = 220;
  podAdvancedTexture.addControl( podTxt );



  // Chair/Ply
  // SceneLoader.ImportMeshAsync(null, "", "https://vxv.co.jp/bizb/wp-content/uploads/temporary/chair.ply", scene)
  SceneLoader.ImportMeshAsync(null, "", "https://raw.githubusercontent.com/amaebi-dm/babylonjs_work/refs/heads/main/resources/chair.ply", scene)
  // SceneLoader.ImportMeshAsync(null, "", "/assets/chair.ply", scene)
  .then((result) => 
  {
      var mesh = result.meshes[0];
      mesh.position.y = 1;
      mesh.name = "Chair_PLY_MESH";

      // mesh.material.pointSize = 1.5;
      // 向きと位置を修正
      // const center = Mesh.Center( result .meshes );
      // mesh.rotateAround(center, new Vector3(1, 0, 0), -Math.PI / 2);
      // mesh.position.subtractInPlace(center);
      // window.alert( "Mesh Load Comp..." );

      
      var chairUiPlane =  MeshBuilder.CreatePlane("chairUiPlane", { width: 0.5, height: 0.5 });
      chairUiPlane.parent = mesh;
      chairUiPlane.position.y = 0.1;
      chairUiPlane.billboardMode = Mesh.BILLBOARDMODE_ALL;

      var chairAdvancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh( chairUiPlane );

      var chairTxt = new GUI.TextBlock();
      chairTxt.text = "CHAIR";
      chairTxt.color = "white";
      chairTxt.fontSize = 220;
      chairAdvancedTexture.addControl( chairTxt );

  });




  // htmlMeshScript.onload = (event) => {
  //   console.log("babylon-htmlmesh loaded");
  //   createHtmlMeshInstances(scene);
  // }

  // createHtmlMeshInstances(scene);
  
  
};



main();




// function.





async function onMeshHit( hitMeshName : string, cam : ArcRotateCamera, scn : Scene )
{
  if( hitMeshName.includes( "Box" ) ) await onBoxHit( cam, scn );
  else if( hitMeshName.includes( "Sphere" ) ) onSphereHit( cam, scn );
  else if( hitMeshName.includes( "Pod" ) ) onPodHit( cam, scn );
  else if( hitMeshName.includes( "Chair" ) ) onChairHit( cam, scn );
}

async function onBoxHit( cam : ArcRotateCamera, scn : Scene )
{
  OnAnyMeshHit();
  await cameraAnimation( "Box", cam, scn );
}

async function onSphereHit( cam : ArcRotateCamera, scn : Scene )
{
  OnAnyMeshHit();
  await cameraAnimation( "Sphere", cam, scn );
}

async function onPodHit( cam : ArcRotateCamera, scn : Scene )
{
  OnAnyMeshHit();
  await cameraAnimation( "Pod", cam, scn );
}

async function onChairHit( cam : ArcRotateCamera, scn : Scene )
{
  OnAnyMeshHit();
  await cameraAnimation( "Chair", cam, scn );
}

function OnAnyMeshHit()
{

}





var currentPosition : PostiionType = "All";
var isAnimation = false;

async function cameraAnimation( goalPosition: PostiionType, targetCamera: ArcRotateCamera, scene: Scene ) 
{  
  if( isAnimation == true )
  {
    console.log( "現在アニメーション中です." );
    return;
  }

  if( currentPosition == goalPosition )
  {
    console.log( "同じ場所なのでアニメーションを中断します. isOpen : " + isOpen );
    
    // if( isOpen == 1 ) closeScreenWindow();
    // else oepnScreenWindow();
    
    return;
  }
  else
  {
    // if( isOpen = 1 ) closeScreenWindow();
    // 閉じてる時はアニメーションがあるので開かない.
  }

  isAnimation = true;

  // var start = getPostiionValue( currentPosition );
  var goal = getPostiionValue( goalPosition );
  // console.log( goal );

  // targetCamera.position = start;
  // position.
  var animation1 = new Animation( "animation", "position", 30, Animation.ANIMATIONTYPE_VECTOR3 );
  var keys = [];
  keys.push(
    { 
      frame: 0, 
      value: targetCamera.position
    });
  keys.push(
    { 
      frame: 50, 
      value: goal
    });
  animation1.setKeys( keys );
  var ease = new SineEase();
  animation1.setEasingFunction( ease );
  // var ease = new BezierCurveEase(0.32, -0.73, 0.69, 1.59);
  // animation.setEasingFunction( ease );
  targetCamera.animations = [];
  targetCamera.animations.push( animation1 );

  // target
  // var startT = getCameraTargetValue( currentPosition );
  var goalT = getCameraTargetValue( goalPosition );
  var animation2 = new Animation( "animation", "target", 30, Animation.ANIMATIONTYPE_VECTOR3 );
  var keys = [];
  keys.push(
    { 
      frame: 0, 
      value: targetCamera.target
    });
  keys.push(
    { 
      frame: 50, 
      value: goalT
    });
  animation2.setKeys( keys );
  animation2.setEasingFunction( ease );
  // targetCamera.animations = [];
  targetCamera.animations.push( animation2 );



  var anim = scene.beginAnimation( targetCamera, 0, 50, false, 2 );


  // アニメーション待機.
  await anim.waitAsync();
  // targetCamera.position = goal;
  anim.stop();

  currentPosition = goalPosition;
  targetCamera.target = getCameraTargetValue( goalPosition );

  isAnimation = false;

  
  // if( isOpen == 0 )
  // {
  //   oepnScreenWindow();
  // }

}


function getPostiionValue( key : PostiionType )
{
  switch ( key )
  {
    case "All": return new Vector3( 0, 1, -5 );
    case "Box": return new Vector3( 1, 1, -2 );
    case "Sphere": return new Vector3( -1, 1, -2 );
    case "Chair": return new Vector3( 0, 1, -2 );
    case "Pod": return new Vector3( 0, 2, -1 );
  }
}

function getCameraTargetValue( key : PostiionType )
{
  switch ( key )
  {
    case "All": return new Vector3( 0, 1, 0 );
    case "Box": return new Vector3( 1, 0.5, 0 );
    case "Sphere": return new Vector3( -1, 0.5, 0 );
    case "Chair": return new Vector3( 0, 1, 0 );
    case "Pod": return new Vector3( 0, 1.5, 0 );
  }
}



var isOpen = 0;
function oepnScreenWindow()
{
  advancedTextureForWindow.addControl( windowImg );
  isOpen = 1;
    
}

function closeScreenWindow()
{
  advancedTextureForWindow.removeControl( windowImg );
  isOpen = 0;  
}
