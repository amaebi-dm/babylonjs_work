

export var testSt : string = "test export -----";
export function Test()
{
    console.log( "export......" );
}

//

// function CreateMovingButtons()
// {
//   var buttonTOP = GUI.Button.CreateSimpleButton("btnT", "↑");
//   buttonTOP.top = "-150px";
//   buttonTOP.left = "100px";
//   buttonTOP.width = "45px";
//   buttonTOP.height = "45px";
//   buttonTOP.color = "white";
//   buttonTOP.background = "green";
//   buttonTOP.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonTOP.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonTOP.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "TOP" );
//   });
//   buttonTOP.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "TOP" );
//   });
//   var buttonBOTTOM = GUI.Button.CreateSimpleButton("btnD", "↓");
//   buttonBOTTOM.top = "-50px";
//   buttonBOTTOM.left = "100px";
//   buttonBOTTOM.width = "45px";
//   buttonBOTTOM.height = "45px";
//   buttonBOTTOM.color = "white";
//   buttonBOTTOM.background = "green";
//   buttonBOTTOM.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonBOTTOM.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonBOTTOM.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "BOTTOM" );
//   });
//   buttonBOTTOM.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "BOTTOM" );
//   });
//   var buttonLEFT = GUI.Button.CreateSimpleButton("btnL", "←");
//   buttonLEFT.top = "-100px";
//   buttonLEFT.left = "50px";
//   buttonLEFT.width = "45px";
//   buttonLEFT.height = "45px";
//   buttonLEFT.color = "white";
//   buttonLEFT.background = "green";
//   buttonLEFT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonLEFT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonLEFT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "LEFT" );   
//   });
//   buttonLEFT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "LEFT" );
//   });
//   var buttonRIGHT = GUI.Button.CreateSimpleButton("btnR", "→");
//   buttonRIGHT.top = "-100px";
//   buttonRIGHT.left = "150px";
//   buttonRIGHT.width = "45px";
//   buttonRIGHT.height = "45px";
//   buttonRIGHT.color = "white";
//   buttonRIGHT.background = "green";
//   buttonRIGHT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonRIGHT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonRIGHT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "RIGHT" ); 
//   });
//   buttonRIGHT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "RIGHT" );
//   });


//   var buttonFRONT = GUI.Button.CreateSimpleButton("btnF", "△");
//   buttonFRONT.top = "-265px";
//   buttonFRONT.left = "100px";
//   buttonFRONT.width = "45px";
//   buttonFRONT.height = "45px";
//   buttonFRONT.color = "white";
//   buttonFRONT.background = "red";
//   buttonFRONT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonFRONT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonFRONT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "FRONT" ); 
//   });
//   buttonFRONT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "FRONT" );
//   });
//   var buttonBACK = GUI.Button.CreateSimpleButton("btnB", "▽");
//   buttonBACK.top = "-215px";
//   buttonBACK.left = "100px";
//   buttonBACK.width = "45px";
//   buttonBACK.height = "45px";
//   buttonBACK.color = "white";
//   buttonBACK.background = "red";
//   buttonBACK.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonBACK.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonBACK.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "BACK" ); 
//   });
//   buttonBACK.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "BACK" );
//   });




//   var buttonTOPROT = GUI.Button.CreateSimpleButton("btnTR", "△");
//   buttonTOPROT.top = "-150px";
//   buttonTOPROT.left = "250px";
//   buttonTOPROT.width = "45px";
//   buttonTOPROT.height = "45px";
//   buttonTOPROT.color = "white";
//   buttonTOPROT.background = "blue";
//   buttonTOPROT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonTOPROT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonTOPROT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "TOPROT" );
//   });
//   buttonTOPROT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "TOPROT" );
//   });
//   var buttonBOTTOMROT = GUI.Button.CreateSimpleButton("btnDR", "▽");
//   buttonBOTTOMROT.top = "-50px";
//   buttonBOTTOMROT.left = "250px";
//   buttonBOTTOMROT.width = "45px";
//   buttonBOTTOMROT.height = "45px";
//   buttonBOTTOMROT.color = "white";
//   buttonBOTTOMROT.background = "blue";
//   buttonBOTTOMROT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonBOTTOMROT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonBOTTOMROT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "BOTTOMROT" );
//   });
//   buttonBOTTOMROT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "BOTTOMROT" );
//   });
//   var buttonLEFTROT = GUI.Button.CreateSimpleButton("btnLR", "<");
//   buttonLEFTROT.top = "-100px";
//   buttonLEFTROT.left = "200px";
//   buttonLEFTROT.width = "45px";
//   buttonLEFTROT.height = "45px";
//   buttonLEFTROT.color = "white";
//   buttonLEFTROT.background = "blue";
//   buttonLEFTROT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonLEFTROT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonLEFTROT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "LEFTROT" );   
//   });
//   buttonLEFTROT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "LEFTROT" );
//   });
//   var buttonRIGHTROT = GUI.Button.CreateSimpleButton("btnRR", ">");
//   buttonRIGHTROT.top = "-100px";
//   buttonRIGHTROT.left = "300px";
//   buttonRIGHTROT.width = "45px";
//   buttonRIGHTROT.height = "45px";
//   buttonRIGHTROT.color = "white";
//   buttonRIGHTROT.background = "blue";
//   buttonRIGHTROT.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonRIGHTROT.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonRIGHTROT.onPointerDownObservable.add( () => 
//   {
//     OnDirectionButtonPointerDown( "RIGHTROT" ); 
//   });
//   buttonRIGHTROT.onPointerUpObservable.add( () => 
//   {
//     OnDirectionButtonPointerUp( "RIGHTROT" );
//   });




//   var buttonCENTER = GUI.Button.CreateSimpleButton("btnC", "〇");
//   buttonCENTER.top = "-100px";
//   buttonCENTER.left = "100px";
//   buttonCENTER.width = "45px";
//   buttonCENTER.height = "45px";
//   buttonCENTER.color = "white";
//   buttonCENTER.background = "green";
//   buttonCENTER.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//   buttonCENTER.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//   buttonCENTER.onPointerDownObservable.add( () => 
//   {
//     console.log( "center click" ); 
//     camera.position = new Vector3( 0, 1, -3 );
//     camera.rotation = new Vector3( 0, 0, 0 );
//     // console.log( camera.position );
//   });

//   advancedTextureButton.addControl( buttonTOP );
//   advancedTextureButton.addControl( buttonBOTTOM );
//   advancedTextureButton.addControl( buttonLEFT );
//   advancedTextureButton.addControl( buttonRIGHT );
//   advancedTextureButton.addControl( buttonFRONT );
//   advancedTextureButton.addControl( buttonBACK );
//   advancedTextureButton.addControl( buttonCENTER );

//   advancedTextureButton.addControl( buttonTOPROT );
//   advancedTextureButton.addControl( buttonBOTTOMROT );
//   advancedTextureButton.addControl( buttonLEFTROT );
//   advancedTextureButton.addControl( buttonRIGHTROT );
// }

  

// var isMoving : Boolean = false;
// var currentSelectedButton : string = "NONE";
// function AddPosition( key : String, camera : UniversalCamera )
// {
//   var x = 0;
//   var y = 0;
//   var z = 0;
//   var xRot = 0;
//   var yRot = 0;
//   var zRot = 0;
//   switch( key )
//   {
//     case "TOP": { x = 0; y = 0.01; break; } 
//     case "BOTTOM": { x = 0; y = -0.01; break; } 
//     case "LEFT": { x = -0.01; y = 0; break; } 
//     case "RIGHT": { x = 0.01; y = 0; break; } 
//     case "FRONT": { z = 0.01; break; } 
//     case "BACK": { z = -0.01; break; } 

//     case "TOPROT": { xRot = -0.01; break; } 
//     case "BOTTOMROT": { xRot = 0.01; break; } 
//     case "LEFTROT": { yRot = -0.01; break; } 
//     case "RIGHTROT": { yRot = 0.01; break; } 
//   }

//   var current = camera.position;
//   current.x += x;
//   current.y += y;
//   current.z += z;
//   camera.position = current;

  

//   var currentRot = camera.rotation;
//   currentRot.x += xRot;
//   currentRot.y += yRot;
//   currentRot.z += zRot;
//   camera.rotation = currentRot;
// } 

// function OnCameraUpdate( camera : UniversalCamera )
// {
//   if( isMoving == true && currentSelectedButton != "NONE" )
//   {
//     AddPosition( currentSelectedButton, camera );
//   }
// }

// function OnDirectionButtonPointerDown( key : string )
// {
//   isMoving = true;
//   currentSelectedButton = key;

//   console.log( key + "のボタンクリック開始." );
// }
// function OnDirectionButtonPointerUp( key : string )
// {
//   isMoving = false;
//   currentSelectedButton = "NONE";

//   console.log( key + "のボタンクリック終了." );
// }