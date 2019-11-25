<?php
$name = $_POST['name'];
$contact = $_POST['contact'];
$course = $_POST['course'];
$cname = $_POST['cname'];
$id = $_POST['max(id)'];
$con = new mysqli('localhost','root','','CS565');
if($con->connect_error){
    echo 'database connection error';
}
$stmt = $con->prepare("INSERT INTO `Partner` (`Name`, `Contact`) VALUES (?, ?)");
$stmt->bind_param("si",$name,$contact);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}
?>