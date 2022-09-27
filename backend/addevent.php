<?php
include('connectdb.php');
//Testing connection to the database
$email = $DecodeData['email'];
$upassword = $DecodeData['upassword'];
$telephone = $DecodeData['telephone'];
$eventtype = $DecodeData['eventtype'];

$sql = "SELECT * FROM eventreg WHERE email = '$email'";
$runsql = mysqli_query($conn, $sql);
$checkEmail = mysqli_num_rows($runsql);

if($checkEmail != 0){
    $message = "Already Registered";
}else{
    $Addrec = "INSERT INTO eventreg(email, upassword, telephone, eventtype) VALUES('$email','$upassword','$telephone','$eventtype')";
    $result = mysqli_query($conn, $Addrec);

    if($result){
        $message = "Event has been registered successfully";
    }else{
        $message = "Server Error. Please try again later";
    }
}

$response[] = array("Message" => $message);
echo json_encode($response);

?>
