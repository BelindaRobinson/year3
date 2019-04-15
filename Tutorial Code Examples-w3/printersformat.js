function ajaxRequest(method, url, async, data, callback){

	var request = new XMLHttpRequest();
	request.open(method,url,async);
	
	if(method == "POST"){
		request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}
	
	request.onreadystatechange = function(){
		if (request.readyState == 4) {
			if (request.status == 200) {
				var response = request.responseText;
				callback(response);
			} else {
				//do nothing - need to add error handling
			}
		}
	}
	
	request.send(data);
}

function suggestQueues(event) {
	var radios = document.getElementsByName("matchgroup");
	var i;
	for (i = 0; i < radios.length; i++) {
		if (radios[i].checked) break;
	}
	var match = radios[i].value;
	
	var usertext = document.getElementById("usertext").value;
	if (usertext != "") {
		var url = "printersformat.php";
		var data = "text="+usertext+"&match="+match;
		ajaxRequest("POST", url, true, data, processResult);
	} 
}

function processResult(response) {

	var suggestions = document.getElementById("suggestions");
	suggestions.innerHTML = response;
	
}

function popup(txt) {	
	
	alert("This printer is a: " + txt);
	}