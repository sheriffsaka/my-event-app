<?php
$conn = mysqli_connect("localhost", "sheriff", "Adetunji12");
$db = mysqli_select_db($conn, "appmartevent");

//Format the data for react-native to understant
$EncodeData = file_get_contents('php://input');
//Passing the data to json format
$DecodeData = json_decode($EncodeData, true);

//Testing connection to the database
$email = $DecodeData['email'];
$upassword = $DecodeData['upassword'];
$telephone = $DecodeData['telephone'];
$eventtype = $DecodeData['eventtype'];


$Addrec = "INSERT INTO eventreg(email, upassword, telephone, eventtype) VALUES('$email','$upassword','$telephone','$eventtype')";
$result = mysqli_query($conn, $Addrec);

if($result){
    $message = "Event has been registered successfully";
}else{
    $message = "Server Error. Please try again later";
}
$Response[]=array("Message" => $message);
echo json_encode($Response);

?>
