<?php
    include("content.html");
    if (isset($_POST["send"])) {
        $message = $_POST["textcontent"];
        $output = fopen("output.txt", "a");
        $addr = $_SERVER["REMOTE_ADDR"];
        fwrite($output, "$addr:\n$message\n\n");
        fclose($output);
    }
?>





