// import "./style.css";
import "./style.css";

import { Engine, loadAssetContainerAsync, Scene, Color4, Layer } from "@babylonjs/core";

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
  new Layer('bg', "assets/sky.jpg", scene, true ); 

  scene.createDefaultCameraOrLight(true, true, true);

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());

  // ここで読み込んでる
  await loadAssetContainerAsync( "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz" ,scene);
  // await loadAssetContainerAsync( spzUrl,scene);
  
};

main();
