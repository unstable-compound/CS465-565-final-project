<?php
$id = $_POST['id'];
$aid = $_POST['aid'];
$aname = $_POST['aname'];

$con = new mysqli('localhost','root','','CS565');
if($con->connect_error){
    echo 'database connection error';
}
$stmt = $con->prepare("INSERT INTO `A_Rel` (`id`, `A_id`) VALUES (?, ?)");
$stmt->bind_param("ii",$id,$aid);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}

$stmt = $con->prepare("INSERT INTO `Activity` (`A_id`, `A_Name`) VALUES (?, ?)");
$stmt->bind_param("is",$aid,$aname);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}
?>