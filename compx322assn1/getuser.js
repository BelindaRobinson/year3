var userRequest = new XMLHttpRequest();
var userid;

function checklogin(){
    let username = document.getElementById('inputuser').value;
    let password = document.getElementById('inputpass').value;

    let url = "checklogin.php?user="+username+"&pass="+password;

    userRequest.onreadystatechange = newinfo;
    userRequest.open("POST", url, true);
    userRequest.send("");
}

function newinfo(){
    if(userRequest.readyState == 4){
        if(userRequest.status == 200){
            let response = userRequest.responseText;
            info(response);
        }
        else{
            alert("No new info", userRequest.statusText);
        }
    }
}

function info(response){
    userid = response.split(',')[0];
    let username = response.split(',')[1];

    if(userid !=0){
        var hello = document.getElementById("login");
        htmlstring = "<h3> Hello " +username+"</h3>";
        hello.innerHTML = htmlstring;
    }
    else{
        alert("oops! incorrect login");
    }
}