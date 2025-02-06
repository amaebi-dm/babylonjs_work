

import 
{ 
  // Engine, 
  // Mesh, 
  // loadAssetContainerAsync, 
  // Scene,
  Vector2, 
  // Color3, 
  // Color4, 
  // Vector3, 
  // Layer,
  // FlyCamera, 
  // ArcRotateCamera,
  // HemisphericLight,
  // UniversalCamera,
  // Color3,
  // Vector2, 
  // MeshBuilder, 
  // StandardMaterial, 
  // Animation, 
  // SceneLoader, 
  // UtilityLayerRenderer,
  // PositionGizmo,
  // SineEase
} 
from "@babylonjs/core";
import '@babylonjs/loaders/glTF';
import * as GUI from "@babylonjs/gui";
import "@babylonjs/loaders/SPLAT";


export var ResizeImages : [ image : GUI.Image, defaulSize : Vector2 ][] = [];



export function GuiUtilResize( window : Window )
{
  // console.log(  "img resize start."  );
  Resize( window );
}



//

export function AddImage( url : string, size : Vector2, advTex : GUI.AdvancedDynamicTexture, horizontalAlignment : number | null = null, verticalAlignment : number | null = null, window : Window | null = null, resazable : Boolean = true ) : [ image : GUI.Image, size : Vector2 ]
{
  // https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/resources/IMG_1289.webp

  var img = new GUI.Image( "logo", url );
  
  img.widthInPixels = size.x;
  img.heightInPixels = size.y;

  if( resazable == true ) ResizeImages.push( [ img, size ] );
  
  if( horizontalAlignment != null ) img.horizontalAlignment = horizontalAlignment;  //GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  if( verticalAlignment != null ) img.verticalAlignment = verticalAlignment; //GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

  advTex.addControl( img );
  if( window != null ) Resize( window );

  return [ img, size ];
}


function Resize( window : Window )
{
  if( ResizeImages.length == 0 ) return;

  for( const tpl of ResizeImages )
  {
    var img = tpl[ 0 ];
    var defX = tpl[ 1 ].x;
    var defY = tpl[ 1 ].y;
    var width = window.innerWidth;//window.screen.width;
    var height = window.innerHeight;//window.screen.height;
    var ratioW = defX / window.innerWidth;
    var ratioH = defY / window.innerHeight;
    // var side = "";
    var setWidth = 0;
    var setHeight = 0;
    if( ratioW < ratioH )
    {
      setHeight = ( height / 5 );
      img.heightInPixels = setHeight;
      setWidth = setHeight * ( defX / defY );
      img.widthInPixels = setWidth;
      // side = "縦にあわせる";
    }
    else
    {
      setWidth = ( width / 5 );
      img.widthInPixels = setWidth;
      setHeight = setWidth * ( defY / defX );
      img.heightInPixels = setHeight;
      // side = "横にあわせる";
    }
    img.left = ( width / 2 ) - ( img.widthInPixels / 2 );
    img.top = ( height / 2 ) - ( img.heightInPixels / 2 );

    // console.log( side + " // " + img.widthInPixels + ", " + img.heightInPixels + " :: " + setWidth + ", " + setHeight );
  }
}






