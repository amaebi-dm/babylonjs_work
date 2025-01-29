// import "./style.css";
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
  FlyCamera, 
  HemisphericLight, 
  MeshBuilder, 
  StandardMaterial, 
  // Animation, 
  SceneLoader, 
  UtilityLayerRenderer,
  PositionGizmo
} 
from "@babylonjs/core";
// import { Engine, loadAssetContainerAsync, Scene, Color4, Layer } from "@babylonjs/core";

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


const main = async () => {
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
  const camera = new FlyCamera( "camera1", new Vector3( 0, 1, -5 ), scene );
  camera.attachControl( false );  
  new HemisphericLight('light', new Vector3(0,0,0),scene);




  // Gizomo.
  var center = MeshBuilder.CreateBox( "center", { width: 0.05, height: 0.05, depth: 0.05 }, scene);
  var centerMat = new StandardMaterial( "centermat", scene );
  centerMat.diffuseColor = new Color3( 1, 1, 0 );
  center.material = centerMat;
  const utilLayer = new UtilityLayerRenderer(scene);
  const gizmo = new PositionGizmo(utilLayer);
  gizmo.attachedMesh = center;



  MeshBuilder.CreateGround( "ground", { width: 10, height: 10 } );


  // box
  var box = MeshBuilder.CreateBox( "box", { width: 0.3, height: 0.3, depth: 0.3 }, scene );
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

  var boxButton = GUI.Button.CreateSimpleButton("but1", "Click Me");
  boxButton.width = 0.5;
  boxButton.height = 0.5;
  boxButton.color = "white";
  boxButton.fontSize = 100;
  boxButton.background = "green";
  boxButton.onPointerUpObservable.add(function() 
  {
      console.log( "box clicked!!" );
      camera.position = new Vector3( 1, 1, -2 );
  });
  advancedTextureBox.addControl( boxButton );

  // sphere
  var sphere = MeshBuilder.CreateSphere( "sphere", { segments: 0.3, diameter: 0.3 }, scene );
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

  var sphereButton = GUI.Button.CreateSimpleButton("but1", "Click Me");
  sphereButton.width = 0.5;
  sphereButton.height = 0.5;
  sphereButton.color = "white";
  sphereButton.fontSize = 100;
  sphereButton.background = "green";
  sphereButton.onPointerUpObservable.add(function() 
  {
      console.log( "sphere clicked!!" );
      camera.position = new Vector3( -1, 1, -2 );
  });
  advancedTextureSphere.addControl( sphereButton );







  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());


  // ScreenUI
  var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

  var img = new GUI.Image( "window", "/assets/window.png" );
  img.width = 0.5;
  img.height = 0.5;
  var isOpen = 0;
  

  var button = GUI.Button.CreateSimpleButton("but1", "Buttton");
  // button.left = "-300px"
  button.top = "-350px";
  button.paddingTop = "1px";
  button.width = "100px";
  button.height = "50px";
  button.color = "white";
  button.background = "green";
  button.onPointerDownObservable.add(() => 
  {
    console.log( "click" );

    // var currentX = camera.position.x;
    // currentX --;
    // camera.position.x = currentX;
    camera.position = new Vector3( 0, 1, -5 );
  
    if( isOpen == 0 ) 
    {
      advancedTexture.addControl( img );
      isOpen = 1;
    }
    else
    {
      advancedTexture.removeControl( img );
      isOpen = 0;
    }
  });

  advancedTexture.addControl(button);




  // Torus
  // var bezierTorus = MeshBuilder.CreateTorus( "torus", { diameter: 1 }, scene );
  // bezierTorus.position.x = 0;
  // bezierTorus.position.z = 0;
  // var mat = new StandardMaterial( "mat", scene );
  // mat.diffuseColor = new Color3(1, 0, 0);
  // bezierTorus.material = mat;
  // // Create the animation
  // var animationBezierTorus = new Animation("animationBezierTorus", "position", 30, Animation.ANIMATIONTYPE_VECTOR3, Animation.ANIMATIONLOOPMODE_CYCLE);
  // var keysBezierTorus = [];
  // keysBezierTorus.push({ frame: 0, value: bezierTorus.position });
  // keysBezierTorus.push({ frame: 60, value: bezierTorus.position.add(new Vector3(-10, 0, 0)) });
  // animationBezierTorus.setKeys(keysBezierTorus);
  // // var bezierEase = new BezierCurveEase(0.32, -0.73, 0.69, 1.59);
  // // animationBezierTorus.setEasingFunction(bezierEase);
  // bezierTorus.animations.push(animationBezierTorus);
  // scene.beginAnimation(bezierTorus, 0, 120, true);


  // ここで読み込んでる
  var pod = await loadAssetContainerAsync( "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz" ,scene);
  var podM = pod.meshes[0];
  podM.position.x = 1;
  podM.position.y = 2;


  // https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz
  // await loadAssetContainerAsync( "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz" ,scene);

  // await loadAssetContainerAsync( spzUrl,scene);

  
  // SceneLoader.ImportMeshAsync(null, "", "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.ply", scene)
  SceneLoader.ImportMeshAsync(null, "", "/assets/chair.ply", scene)
  .then((result) => 
  {
      const mesh = result.meshes[0];
      mesh.position.y = 2;
      // mesh.material.pointSize = 1.5;
      // 向きと位置を修正
      // const center = Mesh.Center( result.meshes );
      // mesh.rotateAround(center, new Vector3(1, 0, 0), -Math.PI / 2);
      // mesh.position.subtractInPlace(center);
      // window.alert( "Mesh Load Comp..." );
  });

  
  
};

main();
