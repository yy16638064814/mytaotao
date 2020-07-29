<?php


$userName = $_POST['username'];
$userPwd = $_POST['userpwd'];


$host = '127.0.0.1';
$user = 'root';
$pwd = 'root';
$dbname = '2002a';
$port = 3306;

$link = mysqli_connect($host, $user, $pwd, $dbname, $port);

// 增
$sql = "INSERT INTO `user`(`name` , `pwd`) VALUES('{$userName}' , '{$userPwd}')";

// 返回结果集
$result = mysqli_query($link, $sql);

// // 写入成功,执行结果是true,写入失败是false
if($result == true){
    echo json_encode('1');
}else{
    echo json_encode('0');
}
?>