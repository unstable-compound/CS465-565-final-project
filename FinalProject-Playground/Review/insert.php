<?php
$review = $_POST['review'];
$con = new mysqli('localhost','root','','CS565');
if($con->connect_error){
    echo 'database connection error';
}
$stmt = $con->prepare("INSERT INTO `Review` (`review1`) VALUES (?)");
$stmt->bind_param("s",$review);
if($stmt->execute()){
    echo 'success';
}else{
    echo 'failure';
}
?>