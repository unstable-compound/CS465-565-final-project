<?php
$act = $_POST['activity'];
$age = $_POST['age'];
$loc = $_POST['location'];
$email = $_POST['email'];
$comm = $_POST['comment'];
$con = new mysqli('localhost','root','','CS565');
if($con->connect_error){
    echo 'database connection error';
}
$stmt = $con->prepare("INSERT INTO `Activitydata` (`activity`, `age`,`location`,`email`,`comment`) VALUES (?, ?, ?, ?, ? )");
$stmt->bind_param("sisss", $act, $age, $loc, $email, $com);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}
?>