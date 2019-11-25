<?php
$id = $_POST['id'];
$course = $_POST['course'];
$cname = $_POST['cname'];

$con = new mysqli('localhost','root','','CS565');
if($con->connect_error){
    echo 'database connection error';
}
$stmt = $con->prepare("INSERT INTO `Partner_rel` (`id`, `C_id`) VALUES (?, ?)");
$stmt->bind_param("ii",$id,$course);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}

$stmt = $con->prepare("INSERT INTO `Course` (`C_id`, `C_name`) VALUES (?, ?)");
$stmt->bind_param("is",$course,$cname);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}
?>