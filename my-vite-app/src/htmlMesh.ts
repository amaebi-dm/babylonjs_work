
import "./style.css";

import 
{ 
  Scene, 
  Color4, 
} 
from "@babylonjs/core";





// srcの追加.
const url = "https://cdn.jsdelivr.net/npm/babylon-htmlmesh/dist/umd/babylon-htmlmesh.min.js";
const htmlMeshScript = document.createElement("script");
htmlMeshScript.type = "module";
htmlMeshScript.src = url;
document.body.appendChild(htmlMeshScript);


// 一旦べた書きで内容を記載.引数とかは今後考える.
export function CreateHtmlMesh( scene : Scene, innerHTML : string ) : any
{
  var htmlMeshPackage : any;
  for (const [key, value] of Object.entries(window)) 
  {
    if ( key == "babylon-htmlmesh" ) htmlMeshPackage = value;
  }
  // const htmlMeshPackage = window[ "babylon-htmlmesh" ];
  const HtmlMesh = htmlMeshPackage.HtmlMesh;
  const HtmlMeshRenderer = htmlMeshPackage.HtmlMeshRenderer;
  // Create the HtmlMeshRenderer
  new HtmlMeshRenderer( scene,
    {
      // _containerId: 1,
      // defaultAlphaTestRenderOrder: -10,
      // defaultOpaqueRenderOrder: 10,
      // defaultTransparentRenderOrder: -1,
      // enableOverlayRender: true,
      // parentContainerId: "1"
    } );


  // Shows how this can be used to include html content, such
  // as a form, in your scene.  This can be used to create
  // richer UIs than can be created with the standard Babylon
  // UI control, albeit with the restriction that such UIs would
  // not display in native mobile apps or XR applications.
  var htmlMeshDiv = new HtmlMesh( scene, "html-mesh-div", { isCanvasOverlay  : true } );
  htmlMeshDiv.position.x = 0;
  htmlMeshDiv.position.y = 1;
  htmlMeshDiv.position.z = 0;
  htmlMeshDiv.color = new Color4( 1, 1, 1, 1 );
  const div = document.createElement('div');
  div.innerHTML = innerHTML;
  div.id = "view";
  // div.style.backgroundColor = 'blue';
  div.style.backgroundColor = 'rgba(255,255,255,1)';
  div.style.width = '200px';
  div.style.height = '180px';
  // div.style.display = 'flex';
  // div.style.alignItems = 'center';
  // div.style.justifyContent = 'center';
  // div.style.borderRadius = '20px';
  // div.style.fontSize = 'xx-small';
  // div.style.padding = '10px';  
  htmlMeshDiv.setContent(div, 2, 2 );


  return htmlMeshDiv;
}

export function CreateHtmlMeshInWebSite( scene : Scene, url : string ) : any
{
  var htmlMeshPackage : any;
  for (const [key, value] of Object.entries(window)) 
  {
    if ( key == "babylon-htmlmesh" ) htmlMeshPackage = value;
  }
  // const htmlMeshPackage = window[ "babylon-htmlmesh" ];
  const HtmlMesh = htmlMeshPackage.HtmlMesh;
  const HtmlMeshRenderer = htmlMeshPackage.HtmlMeshRenderer;
  // Create the HtmlMeshRenderer
  new HtmlMeshRenderer( scene,
    {
      // _containerId: 1,
      // defaultAlphaTestRenderOrder: -10,
      // defaultOpaqueRenderOrder: 10,
      // defaultTransparentRenderOrder: -1,
      // enableOverlayRender: true,
      // parentContainerId: "1"
    } );

  // Shows how this can be used to include a website in your scene
  // const siteUrl = 'https://asp.jcity.co.jp/FORM/?UserID=demo&formid=135"';
  // const siteUrl = 'https://www.babylonjs.com/';
  const htmlMeshSite = new HtmlMesh(scene, "html-mesh-site", { isCanvasOverlay  : true });
  const iframeSite = document.createElement('iframe');
  htmlMeshSite.position.x = 0;
  htmlMeshSite.position.y = 1;
  htmlMeshSite.position.z = 3;
  iframeSite.src = url;
  iframeSite.width = '300px';
  iframeSite.height = '250px';
  
  htmlMeshSite.setContent(iframeSite, 4, 3);
  htmlMeshSite.position.x = 0;
  htmlMeshSite.position.y = 1;
  // htmlMeshSite.rotation.y = Math.PI / 4;

  return htmlMeshSite;

}

// urlの指定方法はまだ調査中.
export function CreateHtmlMeshInVideo( scene : Scene ) : any
{
  var htmlMeshPackage : any;
  for (const [key, value] of Object.entries(window)) 
  {
    if ( key == "babylon-htmlmesh" ) htmlMeshPackage = value;
  }
  const HtmlMesh = htmlMeshPackage.HtmlMesh;
  const HtmlMeshRenderer = htmlMeshPackage.HtmlMeshRenderer;
  // Create the HtmlMeshRenderer
  new HtmlMeshRenderer( scene,
    {
      // _containerId: 1,
      // defaultAlphaTestRenderOrder: -10,
      // defaultOpaqueRenderOrder: 10,
      // defaultTransparentRenderOrder: -1,
      // enableOverlayRender: true,
      // parentContainerId: "1"
    } );
    
    
  // Shows how this can be used to include a YouTube video in your scene
  const videoId = 'zELYw2qEUjI';
  const videoUrl = [ 'https://www.youtube.com/embed/', videoId, '?rel=0&enablejsapi=1&disablekb=1&controls=0&fs=0&modestbranding=1' ].join( '' );
  const htmlMeshVideo = new HtmlMesh(scene, "html-mesh-video", { isCanvasOverlay  : true });
  const iframeVideo = document.createElement('iframe');
  iframeVideo.src = videoUrl;
  iframeVideo.width = '380px';
  iframeVideo.height = '260px';
  htmlMeshVideo.setContent(iframeVideo, 4, 3);
  htmlMeshVideo.position.x = 0;
  htmlMeshVideo.position.y = 1;
  htmlMeshVideo.position.z = 3;


  return htmlMeshVideo;

  }


// 映らない原因調査中.
export function CreateHtmlMeshInPdf( scene : Scene ) : any
{
  var htmlMeshPackage : any;
  for (const [key, value] of Object.entries(window)) 
  {
    if ( key == "babylon-htmlmesh" ) htmlMeshPackage = value;
  }
  const HtmlMesh = htmlMeshPackage.HtmlMesh;
  const HtmlMeshRenderer = htmlMeshPackage.HtmlMeshRenderer;
  // Create the HtmlMeshRenderer
  new HtmlMeshRenderer( scene,
    {
      // _containerId: 1,
      // defaultAlphaTestRenderOrder: -10,
      // defaultOpaqueRenderOrder: 10,
      // defaultTransparentRenderOrder: -1,
      // enableOverlayRender: true,
      // parentContainerId: "1"
    } );

  // Shows how this can be used to include a PDF in your scene.  Note this is 
  // conceptual only.  Displaying a PDF like this works, but any links in the
  // PDF will navigate the current tab, which is probably not what you want.
  // There are other solutions out there such as PDF.js that may give you more
  // control, but ultimately proper display of PDFs is not within the scope of
  // this project.
  const pdfUrl = 'https://cdn.glitch.com/3da1885b-3463-4252-8ded-723332b5de34%2FNew_Horizons.pdf#zoom=75?v=1599831745689'
  const htmlMeshPdf = new HtmlMesh(scene, "html-mesh-pdf", { isCanvasOverlay  : true });
  const iframePdf = document.createElement('iframe');
  iframePdf.src = pdfUrl;
  iframePdf.width = '480px';
  iframePdf.height = '360px';
  htmlMeshPdf.setContent(iframePdf, 4, 3);
  htmlMeshPdf.position.x = 0;
  htmlMeshPdf.position.y = 1;
  htmlMeshPdf.position.z = 3;

  return htmlMeshPdf;
}




// const createHtmlMeshInstances = ( scene : Scene ) => 
// {
//   // var windowKey : String;
//   // var htmlMeshPackage : Window;
//   var htmlMeshPackage : any;
//   for (const [key, value] of Object.entries(window)) 
//   {
//     if ( key == "babylon-htmlmesh" ) htmlMeshPackage = value;
//     // else console.log( "-----" );
//   }
//   // const htmlMeshPackage = window[ "babylon-htmlmesh" ];
//   const HtmlMesh = htmlMeshPackage.HtmlMesh;
//   const HtmlMeshRenderer = htmlMeshPackage.HtmlMeshRenderer;
//   // Create the HtmlMeshRenderer
//   new HtmlMeshRenderer( scene,
//     {
//       // _containerId: 1,
//       // defaultAlphaTestRenderOrder: -10,
//       // defaultOpaqueRenderOrder: 10,
//       // defaultTransparentRenderOrder: -1,
//       // enableOverlayRender: true,
//       // parentContainerId: "1"
//     } );



//     // var bg = MeshBuilder.CreatePlane("bg", {width: 10, height: 10}, scene);
//     // bg.scaling.x = 5;
//     // bg.scaling.y = 2;
//     // bg.position.z = 0;



//   // Shows how this can be used to include html content, such
//   // as a form, in your scene.  This can be used to create
//   // richer UIs than can be created with the standard Babylon
//   // UI control, albeit with the restriction that such UIs would
//   // not display in native mobile apps or XR applications.
//   var htmlMeshDiv = new HtmlMesh( scene, "html-mesh-div", { isCanvasOverlay  : true } );
//   htmlMeshDiv.position.x = 0;
//   htmlMeshDiv.position.y = 1;
//   htmlMeshDiv.position.z = 0;
//   htmlMeshDiv.color = new Color4( 1, 1, 1, 1 );
//   const div = document.createElement('div');
//   div.innerHTML = `
//       <form style="padding: 10px; transform-origin: 0 0; scale: 4">
//           <label for="name">Name:</label>
//           <input type="text" id="name" name="name" required><br><br>
          
//           <label for="country">Country:</label>
//           <select id="country" name="country">
//               <option value="USA">USA</option>
//               <option value="Canada">Canada</option>
//               <option value="UK">UK</option>
//               <option value="Australia">Australia</option>
//           </select><br><br>
          
//           <label for="hobbies">Hobbies:</label><br>
//           <input type="checkbox" id="hobby1" name="hobbies" value="Reading">
//           <label for="hobby1">Reading</label><br>
//           <input type="checkbox" id="hobby2" name="hobbies" value="Gaming">
//           <label for="hobby2">Gaming</label><br>
//           <input type="checkbox" id="hobby3" name="hobbies" value="Sports">
//           <label for="hobby3">Sports</label><br><br>
//       </form>
//   `;
//   div.id = "view";
//   div.style.backgroundColor = 'blue';
//   div.style.width = '200px';
//   div.style.height = '180px';
//   // div.style.display = 'flex';
//   // div.style.alignItems = 'center';
//   // div.style.justifyContent = 'center';
//   // div.style.borderRadius = '20px';
//   // div.style.fontSize = 'xx-small';
//   // div.style.padding = '10px';  
//   htmlMeshDiv.setContent(div, 2, 2 );



//   // Shows how this can be used to include a PDF in your scene.  Note this is 
//   // conceptual only.  Displaying a PDF like this works, but any links in the
//   // PDF will navigate the current tab, which is probably not what you want.
//   // There are other solutions out there such as PDF.js that may give you more
//   // control, but ultimately proper display of PDFs is not within the scope of
//   // this project.
//   const pdfUrl = 'https://cdn.glitch.com/3da1885b-3463-4252-8ded-723332b5de34%2FNew_Horizons.pdf#zoom=75?v=1599831745689'
//   const htmlMeshPdf = new HtmlMesh(scene, "html-mesh-pdf");
//   const iframePdf = document.createElement('iframe');
//   iframePdf.src = pdfUrl;
//   iframePdf.width = '480px';
//   iframePdf.height = '360px';
//   htmlMeshPdf.setContent(iframePdf, 4, 3);
//   htmlMeshPdf.position.x = 3;
//   htmlMeshPdf.position.y = 2;

//   // Shows how this can be used to include a website in your scene
//   const siteUrl = 'https://asp.jcity.co.jp/FORM/?UserID=demo&formid=135"';//'https://www.babylonjs.com/';
//   const htmlMeshSite = new HtmlMesh(scene, "html-mesh-site", { isCanvasOverlay  : false });
//   const iframeSite = document.createElement('iframe');
//   htmlMeshSite.position.x = 0;
//   htmlMeshSite.position.y = 1;
//   htmlMeshSite.position.z = 5;
//   iframeSite.src = siteUrl;
//   iframeSite.width = '200px';
//   iframeSite.height = '180px';
//   console.log( htmlMeshSite.position + ", " + iframeSite.id );
//   htmlMeshSite.setContent(iframeSite, 4, 3);
//   htmlMeshSite.position.x = -3;
//   htmlMeshSite.position.y = -2;
//   htmlMeshSite.rotation.y = Math.PI / 4;




  
//   // Shows how this can be used to include a YouTube video in your scene
//   const videoId = 'zELYw2qEUjI';
//   const videoUrl = [ 'https://www.youtube.com/embed/', videoId, '?rel=0&enablejsapi=1&disablekb=1&controls=0&fs=0&modestbranding=1' ].join( '' );
//   const htmlMeshVideo = new HtmlMesh(scene, "html-mesh-video");
//   const iframeVideo = document.createElement('iframe');
//   iframeVideo.src = videoUrl;
//   iframeVideo.width = '480px';
//   iframeVideo.height = '360px';
//   htmlMeshVideo.setContent(iframeVideo, 4, 3);
//   htmlMeshVideo.position.x = 3;
//   htmlMeshVideo.position.y = -2;



//   // Shows how to create an HTML Overlay
//   const overlayMesh = new HtmlMesh(scene, "html-overlay-mesh", { isCanvasOverlay: true });
//   const overlayMeshDiv = document.createElement('div');
//   overlayMeshDiv.innerHTML = 
//   `<p style="padding: 60px; font-size: 80px;">
//     This is an overlay. It is positioned in front of the canvas. This allows it to have transparency and to be non-rectangular, 
//     but it will always show over any other content in the scene
//   </p>
//   <img class="img" src="https://vxvcojp.xsrv.jp/sandbox/p/p0168_3dgs/resources/IMG_1289.webp" alt="img" />`;
//   overlayMeshDiv.style.backgroundColor = 'rgba(255,255,255,0.2)';
//   overlayMeshDiv.style.width = '120px';
//   overlayMeshDiv.style.height = '90px';
//   overlayMeshDiv.style.display = 'flex';
//   overlayMeshDiv.style.alignItems = 'center';
//   overlayMeshDiv.style.justifyContent = 'center';
//   overlayMeshDiv.style.borderRadius = '20px';
//   overlayMeshDiv.style.fontSize = 'xx-small';
//   overlayMeshDiv.style.padding = '10px';
//   // Style the form
//   overlayMesh.setContent(overlayMeshDiv, 4, 3);
//   overlayMesh.position.z = 5;
// }









