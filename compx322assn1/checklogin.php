<?php

    require_once('connection.php');

    $user = $_GET['user'];
    $pass = $_GET['pass'];

    $query = "select * fromm user where username = '$user' and password = '$pass'";

    $result = $con->query($query);

    while($row = $result->fetch()){
        echo($row['id'].','.$row['username']);
    }