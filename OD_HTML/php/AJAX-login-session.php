<?php
     
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = array("status" => "fail", "msg" => "$methodType");

    if ($methodType === 'POST') {
        
        
        if(isset($_SERVER['HTTP_X_REQUESTED_WITH'])
            && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
            // yes, is AJAX call
            // answer POST call and get the data that was sent
            if(isset($_POST["login"]) && !empty($_POST["login"])
                && isset($_POST["password"]) && !empty($_POST["password"])){


                // get the data from the post and store in variables
                $login = $_POST["login"];
                $tpassword = $_POST["password"];

                $servername = "localhost";
                $dblogin = "root";
                $password = "root";
                $dbname = "scheduleapp";

               
                try {
                    
                    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dblogin, $password);

                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    $sql = "SELECT * FROM user WHERE email = :login AND password = :password";

                    $statement = $conn->prepare($sql);
                    
                    $statement->execute(array(":login" => $login, ":password" => $tpassword));
                   // $statement->execute([array(":login => $login, :password => $tpassword")]);

                    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
                    
                   // echo($login);
                   // echo($password);
            
                    if(count($rows) > 0) {

                       // $user = $rows[0];

                        $_SESSION['login'] = $login;
                        $_SESSION['password'] = $tpassword;
                        $_SESSION['loggedin'] = true;
                        
                        $sid = session_id();

                        $data = array("status" => "success", "sid" => $sid);
                     //   return json_encode($data, JSON_FORCE_OBJECT);


                } else {
                    $data = array("status" => "fail", "msg" => "Email/password not correct.");
                }
 /////
/////

            } catch(PDOException $e) {
            //$data = array("error", $e->getMessage());
            $data = array("status" => "failure", "error" => $e->getMessage());
        } }else {
                $data = array("status" => "fail", "msg" => "Please enter your email/password.");
            }

////these below appear on .php

        } else {
            // not AJAX
            $data = array("status" => "fail", "msg" => "Has to be an AJAX call.");
        }


    } else {
        // simple error message, only taking POST requests
        $data = array("status" => "fail", "msg" => "Error: only POST allowed.");
    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>

