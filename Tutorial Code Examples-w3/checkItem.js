//js for checkitem

function ajaxRequest(url, method, data, callback){

	let request = new XMLHttpRequest();
	
	request.open(method, url, true);
	
	if(method == "POST"){
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	
	request.onreadystatechange = function(){
		if(request.readyState == 4){
			if(request.status == 200){
				response = request.responseText;
				callback(response);
			}
			else{
				handleError(request.statusText);
			}
		}
	};
		
	request.send(data);	
}


function checkStock(){
	let stockId = document.getElementById("code").value;
	let status = document.getElementById("in_stock").value;
	url = "checkStock.php?id=" + stockId + "&status=" + status;
	ajaxRequest(url,"GET", "", listStock);

}

function listStock(response){

	if(response === "-99"){
		alert("Item not in stock");
	}
	else{
		let url = "listStock.php?id=" + response;
		ajaxRequest(url, "GET","", displayStock);
		}
}

function handleError(errorText){
	alert("An error occurred " + errorText);
}

function displayStock(response){
	let input = document.getElementById("product_form");
	let display = document.getElementById("stock_list");
	
	input.style.display = "none";
	display.innerHTML = response;
}