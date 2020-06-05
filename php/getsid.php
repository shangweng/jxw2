<?php


require "conn.php";

if (isset($_GET['goods_id'])) {
    $goods_id = $_GET['goods_id']; //接收首页传入的sid
    $result = $conn->query("select * from goods where goods_id=$goods_id");
    echo json_encode($result->fetch_assoc());
}

