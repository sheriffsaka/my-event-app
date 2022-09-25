<?php
$conn = mysqli_connect("localhost", "sheriff", "Adetunji12");
$db = mysqli_select_db($conn, "appmartevent");

//Format the data for react-native to understant
$EncodeData = file_get_contents('php://input');
//Passing the data to json format
$DecodeData = json_decode($EncodeData, true);

//Testing connection to the database
$email = $DecodeData['email'];
$password = $DecodeData['password'];
$telephone = $DecodeData['telephone'];
$eventtype = $DecodeData['eventype'];


// Testing connection to the database
// $email = $_POST['email'];
// $password = $_POST['password'];
// $telephone = $_POST['telephone'];
// $eventtype = $_POST['eventtype'];

$Addrec = "INSERT INTO eventreg(email, password, telephone, eventtype) VALUES('$email','$password','$telephone','$eventtype')";
$result = mysqli_query($conn, $Addrec);

if($result){
    $message = "Event has been registered successfully";
}else{
    $message = "Server Error. Please try again later";
}
$Response[]=array("Message => $message");
echo json_encode($Response);

?>