// canvas 要素を取得
const canvas = document.getElementById("renderCanvas"); 
// BABYLON 3D エンジンを作成
const engine = new BABYLON.Engine(canvas, true); 

// Playground のフォーマットに合った自分のコードを追加
var createScene = function() 
{
        // シーンにカメラを追加し、それを canvas にアタッチ
        // シーンを作成
        const scene = new BABYLON.Scene(engine);

        // カメラを作成
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0) );
        // ユーザからの入力でカメラをコントロールするため、カメラをキャンバスにアタッチ
        camera.attachControl(canvas, true);
        // ライトを作成
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0) );

        
        // モデルのロード
        // 箱を生成
        // BABYLON.MeshBuilder.CreateBox("box", {});
        // BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon");



        return scene;
};

// createScene を呼ぶ
const scene = createScene(); 

// シーンを継続的にレンダリングするためにレンダーループに登録する
engine.runRenderLoop(function () 
{
        scene.render();
});

// ブラウザーのリサイズイベントを監視する
window.addEventListener("resize", function () 
{
        engine.resize();
});