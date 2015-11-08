<?php

if(isset($_REQUEST))
{
$con = mysqli_connect("localhost", "root", "root", "scheduleapp");
//mysql_connect("localhost","root","root");
//mysql_select_db("scheduleapp");
error_reporting(E_ALL && ~E_NOTICE);

$email=$_POST['email'];
$password=$_POST['supassword'];
    
$sql="INSERT INTO user(email, password) VALUES ('$email', '$password')";
$result=mysqli_query($con, $sql);
if($result){
echo "You have been signed up!";
}
}

/*
    $servername = "localhost";
    $dblogin = "root";
    $password = "root";
    $dbname = "scheduleapp";

        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dblogin, $password);

        $email = (isset($_POST['email']) ? $_POST['email'] : null);
        $password = (isset($_POST['password']) ? $_POST['password'] : null);
        //$email = $_POST['email'];
      //  $password = $_POST['password'];


        if($conn->prepare("INSERT INTO user (email, password) VALUES ('$email', '$password')"))
        echo "Successfully Inserted";
        else
        echo "Insertion Failed";
        */



?>







    
        