<?php
include "conn.php";
//设置跨域的header
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
if (isset($_POST['user']) && isset($_POST['pass'])) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $result = $conn->query("select * from registry1903 where username='$user' and password='$pass'");
    if ($result->fetch_assoc()) { //匹配成功
        echo true;
    } else { //匹配不成功
        echo false;
    }
}
