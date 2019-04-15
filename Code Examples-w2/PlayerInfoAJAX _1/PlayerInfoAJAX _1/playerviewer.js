//XHR Object variable
var imgrequest = new XMLHttpRequest();

function getInfo(idnum){  //AJAX Function
	
	let url = "getPlayerImage.php" + "?id=" + idnum;
	
    imgrequest.onreadystatechange = updateInfo;
    imgrequest.open("GET", url, true);
	imgrequest.send("");
	
}


//callback function to display returned data
function updateInfo() {
	//var inf = document.getElementById("info");
  	if (imgrequest.readyState == 4) {
    	if (imgrequest.status == 200) {
      		let response = imgrequest.responseText;
      		imgpath=response + ".jpg";
      		display(imgpath);
      
    	} else {
      alert("Error: " + imgrequest.statusText);
    }
  }
}


// inserts the selected image into the main image area 

function display(imgfile)
{

   let bigImage = document.getElementById( "imgCover" );
   bigImage.setAttribute( "src", "fullsize/" + imgfile );
   bigImage.setAttribute( "alt", "Large version of " + "fullsize/" + imgfile );
    
	
   //update text
   let ptxt = document.getElementById("player");
   let newtxt = "undefined";
   
   if(imgfile == "thfc_1.jpg")
   		newtxt = "Dele Alli";
   	else if(imgfile == "thfc_5.jpg")
   		newtxt = "Heung-Min Son";
   	else if(imgfile == "thfc_2.jpg")
   		newtxt = "Danny Rose";
   	else if(imgfile == "thfc_3.jpg")
   		newtxt = "Harry Kane";
   	else if(imgfile == "thfc_6.jpg")
   		newtxt = "Toby Alderweireld";
   	else if(imgfile == "thfc_4.jpg")
   		newtxt = "Hugo Lloris";
   	else
   		newtxt = "Unknown";
   		
   	ptxt.innerHTML = newtxt;
   	document.getElementById("info").innerHTML = "";
   
} // end function display


	
