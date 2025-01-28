// import "./style.css";
import "./style.css";

// import { Engine, loadAssetContainerAsync, Scene, Color3, Color4, Vector3, Layer, FlyCamera, HemisphericLight, MeshBuilder, StandardMaterial, Animation, BezierCurveEase } from "@babylonjs/core";
import { Engine, loadAssetContainerAsync, Scene, Color4, Vector3, Layer, FlyCamera, HemisphericLight } from "@babylonjs/core";

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




  // var box = MeshBuilder.CreateBox("box", { width: 1, height: 1, depth: 1 }, scene);
  // box.position.y = 0.5;
  // var plane = MeshBuilder.CreatePlane( "plane", { width: 3, height: 3 }, scene );
  // plane.rotation = new Vector3( -50, 0, 0 );



  // scene.createDefaultCameraOrLight(true, true, true);
  // scene.createDefaultCameraOrLight(false, true, false);

  const camera = new FlyCamera( "camera1", new Vector3(0,1,-3), scene );
  camera.attachControl( false );  
  new HemisphericLight('light', new Vector3(0,0,0),scene);



  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());


  // UI
  GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

  // var button = GUI.Button.CreateSimpleButton("but1", "Buttton");
  // // button.left = "-300px"
  // // button.top = "-300px";
  // button.paddingTop = "1px";
  // button.width = "100px";
  // button.height = "50px";
  // button.color = "white";
  // button.background = "green";
  // button.onPointerDownObservable.add(() => 
  // {
  //   console.log( "click" );

  //   var currentX = camera.position.x;
  //   currentX --;
  //   camera.position.x = currentX;
  // });
  // advancedTexture.addControl(button);

  // Torus
  // var bezierTorus = MeshBuilder.CreateTorus( "torus", { diameter: 1 }, scene );
  // bezierTorus.position.x = 0;
  // bezierTorus.position.z = 0;
  // var mat = new StandardMaterial( "mat", scene );
  // mat.diffuseColor = new Color3(1, 0, 0);
  // bezierTorus.material = mat;

  // Create the animation
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
  // await loadAssetContainerAsync( "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz" ,scene);

  // https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz
  await loadAssetContainerAsync( "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz" ,scene);

  // await loadAssetContainerAsync( spzUrl,scene);

  
  
};

main();
