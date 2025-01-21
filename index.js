import "./style.css";

import { Engine, loadAssetContainerAsync, Scene } from "@babylonjs/core";

// GaussianSplattingのローダを有効化
import "@babylonjs/loaders/SPLAT";

// SPZファイルのパス(公式サンプルデータのracoonfamily)
import spzUrl from "../assets/racoonfamily.spz?url";

const main = async () => {
  const renderCanvas =
    document.querySelector<HTMLCanvasElement>("#renderCanvas");
  if (!renderCanvas) {
    return;
  }

  const engine = new Engine(renderCanvas);
  const scene = new Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());

  // ここで読み込んでる
  await loadAssetContainerAsync(spzUrl, scene);
};

main();