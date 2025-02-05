

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


export var ResizeImages : [ image : GUI.Image, defaultWidthInPixel : string, defaultHeightInPixel : string ][] = [];



export function GuiUtilResize( window : Window )
{
  // console.log(  "img resize start."  );
  Resize( window );
}



//

export function AddImage( url : string, size : Vector2, advTex : GUI.AdvancedDynamicTexture, horizontalAlignment : number | null = null, verticalAlignment : number | null = null, window : Window | null = null, resazable : Boolean = true )
{
  // https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/resources/IMG_1289.webp

  var img = new GUI.Image( "logo", url );
  
  var w = size.x.toString() + "px";
  var h = size.y.toString() + "px";
  img.width = w;
  img.height = h;

  if( resazable == true ) ResizeImages.push( [ img, w, h ] );
  
  if( horizontalAlignment != null ) img.horizontalAlignment = horizontalAlignment;  //GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  if( verticalAlignment != null ) img.verticalAlignment = verticalAlignment; //GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

  advTex.addControl( img );
  if( window != null ) Resize( window );
}


function Resize( window : Window )
{
  if( ResizeImages.length == 0 ) return;

  for( const tpl of ResizeImages )
  {
    var img = tpl[ 0 ];
    var defW = tpl[ 1 ];
    var defH = tpl[ 2 ];
    if( img.widthInPixels == 0 || img.heightInPixels == 0 )
    {
      console.log( "画像をピクセル数のサイズを設定してください." );
      continue;
    }

    var imgRatio = img.widthInPixels / img.heightInPixels;
    var resizeWidth = img.widthInPixels;
    var resizeHeight = img.heightInPixels;
    var resizeRatioWidth = 1;
    var resizeRatioHeight = 1;
    var overWidth = ( window.innerWidth / 10 < img.widthInPixels );
    var overHeight = ( window.innerHeight / 10 < img.heightInPixels );

    if( overWidth == true || overHeight == true )
    {
      resizeWidth = window.innerWidth / 10;
      resizeHeight = window.innerHeight / 10;

      resizeRatioWidth = resizeWidth / img.widthInPixels;
      resizeRatioHeight = resizeHeight / img.heightInPixels;

      if( resizeRatioWidth >= resizeRatioHeight )
      {
        var imgRatio = img.widthInPixels / img.heightInPixels;
        resizeWidth = resizeHeight * imgRatio;
      }
      else
      {
        var imgRatio = img.heightInPixels / img.widthInPixels;
        resizeHeight = resizeWidth * imgRatio;
      }

      img.width = resizeWidth.toString() + "px";
      img.height = resizeHeight.toString() + "px";
    }
    else
    {
      // console.log( "resize なし" );
      img.width = defW;
      img.height = defH;
    }
  }
}






