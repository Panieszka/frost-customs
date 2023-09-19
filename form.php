<?php
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $car = $_POST["car"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "example@email.com"; //adres mailowy na który chcesz wysłać formularz
    $headers = "From: " . $email . "\r\n";

    mail($to, $subject, $message, $headers);

    if(mail){
        echo "Email został wysłany";
    } else {
        echo "Wystąpił błąd podczas wysyłania emaila";
    }
