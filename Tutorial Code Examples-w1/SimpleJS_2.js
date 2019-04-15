function showDetails(e){
    var message = document.getElementById("details");
    var animal = e.target;
    var details = "<h3>" + animal.innerHTML + "</h3>";
    details += "<strong>Named: </strong>" + animal.dataset.name + "<br>";
    details += "<strong>Color: </strong>" + animal.dataset.color + "<br>";
    details += "<strong>Sound: </strong>" + animal.dataset.sound + "<br>";
    message.innerHTML = details;
    message.style.display = "";
}

function hideDetails(){
    document.getElementById("details").style.display = "none";
}

function doWelcome(){
	welcome = document.getElementById("welcome");
	name = document.getElementById("person").value;
	welcome.innerHTML = "Hello " + name + " welcome to this page";	
	info = document.getElementById("getinfo");
	info.style.display = "none";
}

window.onload = function(){
    var lis = document.getElementsByTagName("li");
    for (var i=0;i<lis.length;i++){
        var animal = lis[i];
        animal.onmouseover = showDetails;
        animal.onmouseout = hideDetails;
    }
};
