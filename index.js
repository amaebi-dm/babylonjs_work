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


    buildDwellings();



    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;

    // ↓ skybox がリフレクションマップ (反射マップ) (後述) でない場合でも、
    // 　 CubeTexture は ReflectionTexture を使用して適用する必要があります。
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox/skybox", scene);
    // ↓ coordinatesMode を SKYBOX_MODE に設定すると、
    // 　 反射をシミュレートするのではなく、テクスチャを直接キューブ上にペイントします。
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    
   
    return scene;
};



// 関数.
const buildDwellings = () => 
{
    const ground = buildGround();
    
    const detached_house = buildHouse( 1 );
    detached_house.rotation.y = -Math.PI / 16;
    detached_house.position.x = -6.8;
    detached_house.position.z = 2.5;

    const semi_house = buildHouse( 2 );
    semi_house .rotation.y = -Math.PI / 16;
    semi_house.position.x = -4.5;
    semi_house.position.z = 3;

    // 配置.
    const places = []; // 配列[家タイプ, 向き, x, z]
    places.push([1, -Math.PI / 16, -6.8, 2.5]);
    places.push([2, -Math.PI / 16, -4.5, 3]);
    places.push([2, -Math.PI / 16, -1.5, 4]);
    places.push([2, -Math.PI / 3, 1.5, 6]);
    places.push([2, 15 * Math.PI / 16, -6.4, -1.5]);
    places.push([1, 15 * Math.PI / 16, -4.1, -1]);
    places.push([2, 15 * Math.PI / 16, -2.1, -0.5]);
    places.push([1, 5 * Math.PI / 4, 0, -1]);
    places.push([1, Math.PI + Math.PI / 2.5, 0.5, -3]);
    places.push([2, Math.PI + Math.PI / 2.1, 0.75, -5]);
    places.push([1, Math.PI + Math.PI / 2.25, 0.75, -7]);
    places.push([2, Math.PI / 1.9, 4.75, -1]);
    places.push([1, Math.PI / 1.95, 4.5, -3]);
    places.push([2, Math.PI / 1.9, 4.75, -5]);
    places.push([1, Math.PI / 1.9, 4.75, -7]);
    places.push([2, -Math.PI / 3, 5.25, 2]);
    places.push([1, -Math.PI / 3, 6, 4]);


    // 家のインスタンスを作っていって配列に突っ込んでいく.
    const houses = [];
    for( let i = 0; i < places.length; i++ )
    {
        if( places[ i ][ 0 ] == 1 )
        {
            houses[ i ] = detached_house.createInstance( "house" + i );
        }
        else
        {
            houses[ i ] = semi_house.createInstance( "house" + i ); 
        }

        
        houses[i].rotation.y = places[i][1];
        houses[i].position.x = places[i][2];
        houses[i].position.z = places[i][3];
    }
}


const buildGround = () => 
{
    //color
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:15, height:16});
    ground.material = groundMat;
}

const buildHouse = (width) => 
{
    const box = buildBox( width );
    const roof = buildRoof( width );

    return BABYLON.Mesh.MergeMeshes( [box, roof], true, false, null, false, true );
}

const buildBox = ( width ) => 
{
    // テクスチャ
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    if( width == 2 )
    {
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png");
    }
    else
    {
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")
    }
    

    // それぞれの面に違った画像をあてるためのオプションパラメータ
    const faceUV = [];
    if ( width == 2 ) 
    {
        faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
    } 
    else
    {
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    }

    /**** World Objects *****/
    const box = BABYLON.MeshBuilder.CreateBox("box", { width : width, faceUV: faceUV, wrap: true });
    box.material = boxMat;
    box.position.y = 0.5;

    return box;
}

// 屋根組み立て
const buildRoof = ( width ) => 
{
    // テクスチャ
    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
    roof.material = roofMat;
    roof.scaling.x = 0.75;
    roof.scaling.y = width;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.22;

    return roof;
}








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