// import "./style.css";
import "./style.css";

import { Engine, loadAssetContainerAsync, Scene, Color4, Layer } from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
// import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';

// GaussianSplattingのローダを有効化
import "@babylonjs/loaders/SPLAT";

// SPZファイルのパス(公式サンプルデータのracoonfamily)
// import spzUrl from "/assets/racoonfamily.spz?url";
// import spzUrl from "/assets/test.spz?url";
// import spzUrl from "/assets/pod.spz?url";
// import spzUrl from "/assets/test600.spz?url";

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

  scene.createDefaultCameraOrLight(true, true, true);

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());


  // UI
  var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

  var button = GUI.Button.CreateSimpleButton("but1", "Buttton");
  // button.left = "-300px"
  // button.top = "-300px";
  button.paddingTop = "1px";
  button.width = "100px";
  button.height = "50px";
  button.color = "white";
  button.background = "green";
  button.onPointerDownObservable.add(() => 
  {
    console.log( "click" );
  });
  advancedTexture.addControl(button);


  // ここで読み込んでる
  await loadAssetContainerAsync( "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz" ,scene);
  // await loadAssetContainerAsync( spzUrl,scene);
  
};

main();
