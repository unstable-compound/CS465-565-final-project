<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "CS565";

    $result_array = array();
    $conn = new mysqli($host, $username, $password, $dbname);
    if($conn->connect_error){
        die("Failed connection" . $conn->connect_error);
    }
    $sql = "SELECT max(id) from Partner";

    $result = $conn->query($sql);
    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            array_push($result_array, $row);
        }
    }

    echo json_encode($result_array);
   
    $conn->close();
?>