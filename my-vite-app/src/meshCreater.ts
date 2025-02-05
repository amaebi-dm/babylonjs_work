
import 
{ 
  // Engine, 
  // Mesh, 
  // loadAssetContainerAsync, 
  Scene, 
  Color3, 
  // Color4, 
  // Layer,
  // FlyCamera, 
  // ArcRotateCamera,
  // HemisphericLight,
  // UniversalCamera, 
  MeshBuilder, 
  Mesh,
  StandardMaterial, 
  // Animation, 
  // SceneLoader,
  // AbstractMesh, 
  UtilityLayerRenderer,
  PositionGizmo,
  Vector2,
  Vector3,
  // SineEase,
  // ISceneLoaderAsyncResult
} 
from "@babylonjs/core";
import '@babylonjs/loaders/glTF';
import * as GUI from "@babylonjs/gui";
import "@babylonjs/loaders/SPLAT";


  



export function AddGizmo( scene : Scene ) 
{
  // Gizomo.
  var center = MeshBuilder.CreateBox( "center", { width: 0.05, height: 0.05, depth: 0.05 }, scene);
  var centerMat = new StandardMaterial( "centermat", scene );
  centerMat.diffuseColor = new Color3( 1, 1, 0 );
  center.material = centerMat;
  const utilLayer = new UtilityLayerRenderer(scene);
  const gizmo = new PositionGizmo(utilLayer);
  gizmo.attachedMesh = center;
}


export function AddGround( width : number, height : number )
{
  MeshBuilder.CreateGround( "ground", { width: width, height: height } );
}

// テキストやボタンは一旦適当に.
export function AddBox( name : string, size : Vector3, position : Vector3, color : Color3, scene : Scene, addMeshWord : Boolean = true ) : Mesh
{
  var meshName = ( addMeshWord == true ) ? name + "_MESH" : name;
  var box = MeshBuilder.CreateBox( meshName, { width: size.x, height: size.y, depth: size.z }, scene );
  box.position = position;
  var boxmat = new StandardMaterial( "boxmat", scene );
  boxmat.diffuseColor = color;
  box.material = boxmat;

  var boxUiPlane =  MeshBuilder.CreatePlane( "boxUiPlane", { width: 0.5, height: 0.5 });
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
      // if ( isOpen == 0 ) oepnScreenWindow();
      // else closeScreenWindow();
  });

  advancedTextureBox.addControl( boxButton );
  advancedTextureBox.addControl( boxTxt );

  return box;
}

export function AddSphere( name : string, size : Vector2, position : Vector3, color : Color3, scene : Scene, pointerDownCall : ( () => void ) | null = null, addMeshWord : Boolean = true ) : Mesh
{
  var meshName = ( addMeshWord == true ) ? name + "_MESH" : name;
  var sphere = MeshBuilder.CreateSphere( meshName, { segments: size.x, diameter: size.y }, scene );
  sphere.position = position;
  var spheremat = new StandardMaterial( "spheremat", scene );
  spheremat.diffuseColor = color;
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
      // if ( isOpen == 0 ) oepnScreenWindow();
      // else closeScreenWindow();
  });
  advancedTextureSphere.addControl( spButton );
  advancedTextureSphere.addControl( spTxt );

  if( pointerDownCall != null )
  {
    scene.onPointerDown = function( evt, pickInfo )
    {
      let pickedMesh : string | undefined = "";
      if( pickInfo.hit )
      {
        pickedMesh = pickInfo.pickedMesh?.name;
      }

      if( pickedMesh != null ) 
      {      
        // console.log( "sphere hit" );
        // とりあえずヒットしたオブジェクトの名前で必要なモノを判断.
        // if( pickedMesh.includes( "_MESH" ) )
        // {
          console.log( "mesh にヒット ( " + pickedMesh + " )" + evt );
          pointerDownCall();
        //   // onMeshHit( pickedMesh, camera, scene );
        // }
      }
    }
  }

  return sphere;
}



// export function AddMeshHit( callback : ( st : string ) => void )
// {
//   callback( "sss" );

//   // メッシュヒット.
//   scene.onPointerDown = function( evt, pickInfo )
//   {
//     let pickedMesh : string | undefined = "";
//     if( pickInfo.hit )
//     {
//       pickedMesh = pickInfo.pickedMesh?.name;
//     }

//     if( pickedMesh != null ) 
//     {      
//       // とりあえずヒットしたオブジェクトの名前で必要なモノを判断.
//       if( pickedMesh.includes( "_MESH" ) )
//       {
//         console.log( "mesh にヒット ( " + pickedMesh + " )" + evt );
//         // onMeshHit( pickedMesh, camera, scene );
//       }
//     }
//   }
// }