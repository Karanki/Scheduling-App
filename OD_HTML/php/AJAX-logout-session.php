<?php

    // get the session
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
            if(isset($_POST["logout"]) && !empty($_POST["logout"]) ){


                // get the data from the post and store in variables
                $logout = $_POST["logout"];


                // HERE'S WHERE YOU'D PERFORM WHATEVER CLEANUP IN THE DB THAT YOU NEEDED (E.G., UPDATE USER'S LAST LOGIN)

                // also perhaps would be a wise idea to check if the user's session had expired!!!

                session_unset();
                session_destroy();

                $data = array("status" => "success", "msg" => "You were successfully logged out.");

            } else {
                $data = array("status" => "fail", "msg" => "No logout request made");
            }



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

