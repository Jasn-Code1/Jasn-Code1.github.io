<?php
    $conn = mysqli_connect(
        "sql12.freesqldatabase.com",
        "sql12758207",
        "HkQSah6hhj",
        "sql12758207"
    );
    if (isset($_GET["send"])) {
        $message = $_GET["textcontent"];
        if (strlen($message) > 0){
            $addr = $_SERVER["REMOTE_ADDR"];
            /* $output = fopen("output.txt", "a");
            fwrite($output, "$addr:\n$message\n\n");
            fclose($output); */
            $sql = "INSERT INTO information (ip, message)
                    VALUE ('$addr', '$message')";
            mysqli_query($conn, $sql);
            mysqli_close($conn);
        }
    }
?>





