
import 
{ 
  // Engine, 
  // Mesh, 
  loadAssetContainerAsync, 
  Scene, 
  // Color3, 
  // Color4, 
  // Layer,
  // FlyCamera, 
  // ArcRotateCamera,
  // HemisphericLight,
  // UniversalCamera, 
  MeshBuilder, 
  Mesh,
  // StandardMaterial, 
  // Animation, 
  SceneLoader,
  Vector3,
  AbstractMesh, 
  // UtilityLayerRenderer,
  // PositionGizmo,
  // SineEase,
  // ISceneLoaderAsyncResult
} 
from "@babylonjs/core";
import '@babylonjs/loaders/glTF';
import * as GUI from "@babylonjs/gui";
import "@babylonjs/loaders/SPLAT";



const sampleChairUrl = "https://raw.githubusercontent.com/amaebi-dm/babylonjs_work/refs/heads/main/resources/chair.ply";
// const sampleChairUrl = "https://vxv.co.jp/bizb/wp-content/uploads/temporary/chair.ply";
const samplePodUrl = "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz";
const sampleHouseUrl = "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz";
const sampleExUrl = "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/exSample.spz";



export async function LoadChairSampelPly( scene : Scene ) : Promise<AbstractMesh | null>
{
  console.log( ">> PLY Load Start." )
  var res = await LoadPlyModel( sampleChairUrl, "Chair", scene, "CHAIR" );
  console.log( ">> PLY Load End." )

  return res;
}

export async function LoadPodSampleSpz( scene : Scene ) : Promise<AbstractMesh | null>
{
  console.log( ">> SPZ Load Start." )
  var res = await LoadSpzModel( samplePodUrl, "Pod", scene, "POD" );
  console.log( ">> SPZ Load End." )

  return res;
}

export async function LoadExSampleSpz( scene : Scene ) : Promise<AbstractMesh | null>
{
  console.log( ">> SPZ Load Start." )
  var res = await LoadSpzModel( sampleExUrl, "exSample", scene, "EX" );
  console.log( ">> SPZ Load End." )

  return res;
}

export async function LoadHouseSampleSpz( scene : Scene ) : Promise<AbstractMesh | null>
{
  console.log( ">> SPZ Load Start." )
  var res = await LoadSpzModel( sampleHouseUrl, "house_light", scene, "" );
  console.log( ">> SPZ Load End." )

  return res;
}


export var loadPlyModels : AbstractMesh[] = []; 
var plyModelNumber = 0;
export async function LoadPlyModel( url : string, name : string, scene : Scene, text : string, addMeshWord : Boolean = true ) : Promise<AbstractMesh | null>
{
  await SceneLoader.ImportMeshAsync( null, "", url, scene )
  .then((result) => 
  {
      var mesh = result.meshes[0];
      mesh.position.y = 1;
      mesh.name = ( addMeshWord == true ) ? name + "_Mesh" : name;
      // mesh.material.pointSize = 1.5;
      // 向きと位置を修正
      // const center = Mesh.Center( result .meshes );
      // mesh.rotateAround(center, new Vector3(1, 0, 0), -Math.PI / 2);
      // mesh.position.subtractInPlace(center);

      var uiPlane = AddUiPlaneForMesh( "uiPlane", 0.5, 0.5, mesh, new Vector3( 0, 0.1, 0 ) );
      AddMeshText( uiPlane, text, "white", 220 );

      plyModelNumber++;
      loadPlyModels.push( mesh );
  });  

  if( loadPlyModels.length <= 0 ) return null;
  else return loadPlyModels[ plyModelNumber - 1 ];
}

export async function LoadSpzModel( url : string, name : string, scene : Scene, text : string, addMeshWord : Boolean = true ) : Promise<AbstractMesh | null>
{  
  var meshes = await loadAssetContainerAsync( url, scene );
    // var pod = await loadAssetContainerAsync( "https://vxv.co.jp/bizb/wp-content/uploads/temporary/pod.spz" ,scene );
    // var pod = await loadAssetContainerAsync( "https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/light.spz" ,scene);
  var mesh = meshes.meshes[0];
  mesh.name = ( addMeshWord == true ) ? name + "_Mesh" : name;
  // podM.position.x = 0;
  // podM.position.y = 1.5; 
  var uiPlane = AddUiPlaneForMesh( "uiPlane", 0.5, 0.5, mesh, new Vector3( 0, 0.1, 0 ) );
  AddMeshText( uiPlane, text, "white", 220 );

  return mesh;  
}

export function AddUiPlaneForMesh( name : string, width : number, height : number, parent : AbstractMesh, position : Vector3 ) : Mesh
{
  var uiPlane =  MeshBuilder.CreatePlane( name, { width: width, height: height });
  uiPlane.parent = parent;
  uiPlane.position = position;
  // uiPlane.position.y = 0.1;
  uiPlane.billboardMode = Mesh.BILLBOARDMODE_ALL;

  return uiPlane;
}

export function AddMeshText( uiPlane : Mesh, text : string, color : string, fontSize : number )
{
  var advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh( uiPlane );
  var txt = new GUI.TextBlock();
  txt.text = text;
  txt.color = color;
  txt.fontSize = fontSize;
  advancedTexture.addControl( txt );
}





  