<?php
include "conn.php";

//limit
//limit接收一个或者两个数字参数(整数)
//参1：数据开始位置的索引(从0开始)，偏移量
//参2：返回的记录集数目。s
//limit 0,10  从偏移量0开始 取10条
//limit 10,10  从偏移量5开始 取10条
//limit 20,10 从偏移量14开始 取10条

$sql1 = "select * from goods limit 50,6";
$res = $conn->query($sql1);
//通过二维数组输出
// $result->num_rows; //记录集的条数
// $result->fetch_assoc(); //逐条获取记录集的值，结果是数组。
$arr = array();
for ($i = 0; $i < $res->num_rows; $i++) {
    $arr[$i] = $res->fetch_assoc();
}
echo json_encode($arr);//输出接口
