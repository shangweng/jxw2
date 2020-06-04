<?php

include "conn.php";

if (isset($_GET['goods_id'])) {
    $sid = $_GET['goods_id']; //接收首页传入的sid
    $result = $conn->query("select * from goods where goods_id=$sid");
    echo json_encode($result->fetch_assoc());
}
