<?php
    require_once 'admin/db-connect.php';
    mysqli_report(MYSQLI_REPORT_STRICT);
    echo $_POST["content"];

    $conn = new mysqli($db_host , $db_user , $db_pwd , $db_name);

    if($conn->connect_errno!=0) {
        throw new Exception(mysqli_connect_errno());
    } else {
        // here get data from index.html
        
        getData();
    }
    function getData() {
        if(isset($_POST["content"])) {
            $content = $_POST["content"];
            echo $content;
        }
    }
?>