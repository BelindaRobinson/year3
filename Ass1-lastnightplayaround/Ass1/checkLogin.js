function ajaxRequest(url, method, data, callback){

    let request = new XMLHttpRequest();

    request.open(method, url, true);

    if(method == "GET"){
        request.setRequestHeader('Content-Type','application/x-www-urlencoded');
    }

    request.onreadystatechange = function(){
        if (request.readyState == 4) {
            if (request.status == 200) {
                var response = request.responseXML; //CHANGED FROM WEEK1 changed this from responseText to responseXML
                callback(response);
            } else 
            {
                handleError(request.statusText);
            }
        }
    }

    request.send(data);

}
    function checklogin() {

        let User = doucment.getElementById("UserName").value; //CHANGED FROM QUESTIONS 
        let Pass = doucment.getElementById("Password").value;
        url = "checkLogin.php?UserName=user&Password=pass" + "UserName=" + UserName + "&Password=" + Password;
        ajaxRequest(url, "GET", "", getStock)

        //let UserId = document.getElementById("Username").value;
        //let status = document.getElementById("Password").value;
        //url = "checkLogin.php?id" + UserId + "&status=" + status;
        //ajaxRequest(url, "GET", "", getStock)
    }

    function handleError(errorText) {
        alert("Something went wrong" + errorText);
    }
    
    function getStock(){ //calling the getstock.php page which will have all the stock for that user in
        let stockId = documnet.getElementById("stock").value; //make sure db naming is correct
        let userId = document.getElementById("user").value; //make sure db naming is correct
        url = "getStock.php?id=" + stockId + "&status=" + userId;
        ajaxRequest(url, "GET", "", getallinfo); // need to make a getallinfo.php page
    }
    
    function getAllInfo() {
    
    }
    
    function removeStock() {
    
    }
    
    function addStock() {
    
    }

