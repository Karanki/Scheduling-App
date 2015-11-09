<?php
$con = mysqli_connect("localhost", "root", "root", "scheduleapp");

error_reporting(E_ALL && ~E_NOTICE);

// If the values are posted, insert them into the database.
if (isset($_POST['email']) && isset($_POST['supassword'])){
    $email = $_POST['email'];
    $password = $_POST['supassword'];
    $cpassword = $_POST['confirmPass'];
    $passShort = 5;
    $slquery = "SELECT * FROM user WHERE email = '$email'";
    $selectresult = mysqli_query($slquery);
    //
    if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "<script type='text/javascript'>alert('Invalid email');</script>";
    } elseif (mysqli_num_rows($selectresult)>0) {
    echo "<script type='text/javascript'>alert('Email already exists');</script>";
    }
    //
    elseif($password != $cpassword){
         echo "<script type='text/javascript'>alert('Password does not match');</script>";
        
    }
        elseif($password < 5){
         echo "<script type='text/javascript'>alert('Password is too short');</script>";
    }
    else{
          $sql = "INSERT INTO `user` (email, password, cpassword) VALUES ('$email', '$password', '$cpassword')";
         $result=mysqli_query($con, $sql);
        if($result){
        echo 'Thanks for signing up! Login below.';
        
            echo '<script type="text/javascript">'
                , 'hideSignup();'
                    , '</script>'
   
    
;
          }
    }
}

/*
    if(mysqli_num_rows($selectresult)>0)
    {
         echo "<script type='text/javascript'>alert('Email already exists');</script>";
    }
*/



/*
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
    echo 'Thanks for signing up! Login below.';
        
    echo '<script type="text/javascript">'
   , 'hideSignup();'
   , '</script>'
   
    
;
}
}
*/
//////////////////////////////////////////////////////////
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






    
        