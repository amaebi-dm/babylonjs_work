
import "./style.css";

import 
{ 
  Engine, 
  // Mesh, 
  // loadAssetContainerAsync, 
  Scene, 
  Color3, 
  Color4, 
  Vector3, 
  Layer,
  // FlyCamera, 
  ArcRotateCamera,
  HemisphericLight,
  // UniversalCamera,
  // Color3,
  Vector2, 
  // MeshBuilder, 
  // StandardMaterial, 
  // Animation, 
  // SceneLoader, 
  // UtilityLayerRenderer,
  // PositionGizmo,
  // SineEase
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


import 
{ 
  // CreateMovingButtons, 
  // OnCameraUpdate 
} from "./moveButton";
import 
{ 
  LoadChairSampelPly, 
  LoadPodSampleSpz,
  // LoadHouseSampleSpz 
  LoadExSampleSpz
} from "./modelLoader";
import 
{ 
  AddBox, 
  AddGround, 
  AddSphere,
  AddMeshHit
} from "./meshCreater";
import 
{ 
  GuiUtilResize, 
  AddImage 
} from "./guiUtil";
import
{
  // CreateHtmlMesh,
  CreateHtmlMeshInWebSite
} from "./htmlMesh";







const url = "https://cdn.jsdelivr.net/npm/babylon-htmlmesh/dist/umd/babylon-htmlmesh.min.js";
const htmlMeshScript = document.createElement("script");
htmlMeshScript.type = "module";
htmlMeshScript.src = url;
document.body.appendChild(htmlMeshScript);



var htmlMeshDiv : any;


const main = async () => 
{
  const renderCanvas =
    document.querySelector<HTMLCanvasElement>("#renderCanvas");
  if (!renderCanvas) {
    return;
  };

  const engine = new Engine(renderCanvas);
  const scene = new Scene(engine);
  // とりあえず黒背景.
  // scene.clearColor = new Color4( 0, 0, 0, 1 );
  scene.clearColor = new Color4(0,0,0,0);
  // 背景画像設定.
  // new Layer('bg', "https://i.imgur.com/mBBxGJH.jpg", scene, true ); //https://i.imgur.com/mBBxGJH.jpg
  // new Layer('bg', "assets/sky.jpg", scene, true ); // https://github.com/amaebi-dm/babylonjs_work/blob/main/docs/assets/sky.jpg
  new Layer('bg', "https://raw.githubusercontent.com/amaebi-dm/babylonjs_work/refs/heads/main/resources/sky.jpg", scene, true );
  



  // Camera,Light 
  // scene.createDefaultCameraOrLight(true, true, true);
  // scene.createDefaultCameraOrLight(false, true, false);
  // const camera = new UniversalCamera( "camera1", new Vector3( 0, 1, 0 ), scene );
  const camera = new ArcRotateCamera( "camera1", 0, 0, 5, new Vector3( 0, 1, 0 ), scene );
  camera.position = new Vector3( 0, 1, -3 );
  camera.attachControl( false ); 
  new HemisphericLight('light', new Vector3(0,0,0),scene);





  // box
  AddBox( "Box", new Vector3( 0.3, 0.3, 0.3 ), new Vector3( 1, 0.5, 0 ), new Color3( 1, 0, 0 ), scene );  
  AddMeshHit( "Box_MESH", () => { console.log( "Box !!!!!!" ); } );
  // sphere
  AddSphere( "Sphere", new Vector2( 0.3, 0.3 ), new Vector3( -1, 0.5, 0 ), new Color3( 0, 0, 1 ), scene );
  AddMeshHit( "Sphere_MESH", () => { console.log( "Sphere !!!!!!" ); } );
  // Ground.
  AddGround( 10, 10 );


  // ScreenUI/Button
  // advancedTextureForWindow = GUI.AdvancedDynamicTexture.CreateFullscreenUI("WindowCanvas");
  var advancedTextureButton = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  var btn = GUI.Button.CreateSimpleButton("btn", "〇");
  btn.top = "-400px";
  btn.left = "0px";
  btn.width = "80px";
  btn.height = "80px";
  btn.color = "white";
  btn.background = "green";
  btn.onPointerClickObservable.add( () => 
  {
    console.log( "click" ); 
    if( htmlMeshDiv != null )
      {
        
        htmlMeshDiv.setContent( null );
        // const div = document.getElementById('view');
        // if( div != null ) div.innerHTML = "";
        scene.removeMesh( htmlMeshDiv );
        htmlMeshDiv = null;
      }
      else
      {
        console.log( "mesh div null" );
        // createHtmlMeshInstances(scene);
        // var html = `
        // <form style="padding: 10px; transform-origin: 0 0; scale: 4">
        //     <label for="name">Name:</label>
        //     <input type="text" id="name" name="name" required><br><br>
            
        //     <label for="country">Country:</label>
        //     <select id="country" name="country">
        //         <option value="USA">USA</option>
        //         <option value="Canada">Canada</option>
        //         <option value="UK">UK</option>
        //         <option value="Australia">Australia</option>
        //     </select><br><br>
            
        //     <label for="hobbies">Hobbies:</label><br>
        //     <input type="checkbox" id="hobby1" name="hobbies" value="Reading">
        //     <label for="hobby1">Reading</label><br>
        //     <input type="checkbox" id="hobby2" name="hobbies" value="Gaming">
        //     <label for="hobby2">Gaming</label><br>
        //     <input type="checkbox" id="hobby3" name="hobbies" value="Sports">
        //     <label for="hobby3">Sports</label><br><br>
        // </form>
        // `;
        // var html =
        // `<p style="padding: 60px; font-size: 80px;">
        //   This is an overlay. It is positioned in front of the canvas. This allows it to have transparency and to be non-rectangular, 
        //   but it will always show over any other content in the scene
        // </p>
        // <img class="img" src="https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/resources/IMG_1289.webp" alt="img" />`;
        // htmlMeshDiv = CreateHtmlMesh( scene, html );
        
        var url = 'https://www.babylonjs.com/';
        htmlMeshDiv = CreateHtmlMeshInWebSite( scene, url );
      }

  });
  advancedTextureButton.addControl( btn );


  // CreateMovingButtons( advancedTextureButton, camera );
  
  // Pod/SPZ.
  var podM = await LoadPodSampleSpz( scene );
  // var podM = await LoadHouseSampleSpz( scene );
  if( podM != null )
  {
    var current = podM.position;
    current.x = 0;
    current.y = 1.5;
    podM.position = current;
  }

  
  var ex = await LoadExSampleSpz( scene );
  if( ex != null )
  {
    var current = ex.position;
    current.x = 1;
    current.y = 2;
    ex.position = current;
  }
  
  // Chair/Ply
  await LoadChairSampelPly( scene );
  

  var advancedTextureForLogo = GUI.AdvancedDynamicTexture.CreateFullscreenUI("LogoCanvas");
  AddImage( "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/resources/IMG_1289.webp", new Vector2( 150, 150 ), advancedTextureForLogo, null, null, window );



  // htmlMeshScript.onload = (event) => 
  // {
  //   console.log("babylon-htmlmesh loaded");
  //   // createHtmlMeshInstances(scene);
  // }

  // createHtmlMeshInstances(scene);





  
  // resize.
  window.addEventListener( "resize", () => 
    { 
      engine.resize() 
      GuiUtilResize( window );
    } );
  //update.
  engine.runRenderLoop( () => 
    { 
      scene.render();
      // OnCameraUpdate( camera );
    });
  
  
};



main();




// function.





// var advancedTextureForWindow: GUI.AdvancedDynamicTexture;
// var windowImg: GUI.Image;

// type PostiionType = "Box" | "Chair" | "Pod" | "Sphere" | "All" ;
// async function onMeshHit( hitMeshName : string, cam : ArcRotateCamera, scn : Scene )
// {
//   if( hitMeshName.includes( "Box" ) ) await onBoxHit( cam, scn );
//   else if( hitMeshName.includes( "Sphere" ) ) onSphereHit( cam, scn );
//   else if( hitMeshName.includes( "Pod" ) ) console.log( "一旦無効" ); //onPodHit( cam, scn );
//   else if( hitMeshName.includes( "Chair" ) ) onChairHit( cam, scn );
// }

// async function onBoxHit( cam : ArcRotateCamera, scn : Scene )
// {
//   OnAnyMeshHit();
//   await cameraAnimation( "Box", cam, scn );
// }

// async function onSphereHit( cam : ArcRotateCamera, scn : Scene )
// {
//   OnAnyMeshHit();
//   await cameraAnimation( "Sphere", cam, scn );
// }

// async function onPodHit( cam : ArcRotateCamera, scn : Scene )
// {
//   OnAnyMeshHit();
//   await cameraAnimation( "Pod", cam, scn );
// }

// async function onChairHit( cam : ArcRotateCamera, scn : Scene )
// {
//   OnAnyMeshHit();
//   await cameraAnimation( "Chair", cam, scn );
// }

// function OnAnyMeshHit()
// {

// }





// var currentPosition : PostiionType = "All";
// var isAnimation = false;

// async function cameraAnimation( goalPosition: PostiionType, targetCamera: ArcRotateCamera, scene: Scene ) 
// {  
//   if( isAnimation == true )
//   {
//     console.log( "現在アニメーション中です." );
//     return;
//   }

//   if( currentPosition == goalPosition )
//   {
//     console.log( "同じ場所なのでアニメーションを中断します. isOpen : " + isOpen );
    
//     // if( isOpen == 1 ) closeScreenWindow();
//     // else oepnScreenWindow();
    
//     return;
//   }
//   else
//   {
//     // if( isOpen = 1 ) closeScreenWindow();
//     // 閉じてる時はアニメーションがあるので開かない.
//   }

//   isAnimation = true;

//   // var start = getPostiionValue( currentPosition );
//   var goal = getPostiionValue( goalPosition );
//   // console.log( goal );

//   // targetCamera.position = start;
//   // position.
//   var animation1 = new Animation( "animation", "position", 30, Animation.ANIMATIONTYPE_VECTOR3 );
//   var keys = [];
//   keys.push(
//     { 
//       frame: 0, 
//       value: targetCamera.position
//     });
//   keys.push(
//     { 
//       frame: 50, 
//       value: goal
//     });
//   animation1.setKeys( keys );
//   var ease = new SineEase();
//   animation1.setEasingFunction( ease );
//   // var ease = new BezierCurveEase(0.32, -0.73, 0.69, 1.59);
//   // animation.setEasingFunction( ease );
//   targetCamera.animations = [];
//   targetCamera.animations.push( animation1 );

//   // target
//   // var startT = getCameraTargetValue( currentPosition );
//   var goalT = getCameraTargetValue( goalPosition );
//   var animation2 = new Animation( "animation", "target", 30, Animation.ANIMATIONTYPE_VECTOR3 );
//   var keys = [];
//   keys.push(
//     { 
//       frame: 0, 
//       value: targetCamera.target
//     });
//   keys.push(
//     { 
//       frame: 50, 
//       value: goalT
//     });
//   animation2.setKeys( keys );
//   animation2.setEasingFunction( ease );
//   // targetCamera.animations = [];
//   targetCamera.animations.push( animation2 );



//   var anim = scene.beginAnimation( targetCamera, 0, 50, false, 2 );


//   // アニメーション待機.
//   await anim.waitAsync();
//   // targetCamera.position = goal;
//   anim.stop();

//   currentPosition = goalPosition;
//   targetCamera.target = getCameraTargetValue( goalPosition );

//   isAnimation = false;

  
//   // if( isOpen == 0 )
//   // {
//   //   oepnScreenWindow();
//   // }

// }


// function getPostiionValue( key : PostiionType )
// {
//   switch ( key )
//   {
//     case "All": return new Vector3( 0, 1, -3 );
//     case "Box": return new Vector3( 1, 1, -2 );
//     case "Sphere": return new Vector3( -1, 1, -2 );
//     case "Chair": return new Vector3( 0, 1, -2 );
//     case "Pod": return new Vector3( 0, 2, -1 );
//   }
// }

// function getCameraTargetValue( key : PostiionType )
// {
//   switch ( key )
//   {
//     case "All": return new Vector3( 0, 1, 0 );
//     case "Box": return new Vector3( 1, 0.5, 0 );
//     case "Sphere": return new Vector3( -1, 0.5, 0 );
//     case "Chair": return new Vector3( 0, 1, 0 );
//     case "Pod": return new Vector3( 0, 1.5, 0 );
//   }
// }



// var isOpen = 0;
// function oepnScreenWindow()
// {
//   // advancedTextureForWindow.addControl( windowImg );
//   isOpen = 1;
    
// }

// function closeScreenWindow()
// {
//   // advancedTextureForWindow.removeControl( windowImg );
//   isOpen = 0;  
// }
