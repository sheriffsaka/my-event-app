<?php
include('connectdb.php');
//Testing connection to the database
$email = $DecodeData['email'];
$upassword = $DecodeData['upassword'];


$sql = "SELECT * FROM eventreg WHERE email = '$email'";
$runsql = mysqli_query($conn, $sql);
$checkEmail = mysqli_num_rows($runsql);

if($checkEmail != 0){
    $UserExist = mysqli_fetch_array($runsql);
    if($UserExist['upassword'] != $upassword){
        $message = "Invalid Password";
    }else{
        $message = "Welcome to Appmart Events...";
    }
    $message = "Already Registered";
}else{
    
        $message = "No account created for this user yet.";
}

$response[] = array("Message" => $message);
echo json_encode($response);

?>
