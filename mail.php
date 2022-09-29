<?php

    $email = $_POST['email']; 
    $name = $_POST['name']; 
    $whom = $_POST['whom']; 
    $subject = "Email from Contact form";

    $comment = $name . " " . $email . " wrote the following:" . "\n\n" . $_POST['comment'];

    mail($whom,$subject,$comment); 

    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";

?>