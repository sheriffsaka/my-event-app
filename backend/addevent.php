<?php
$conn = mysqli_connect("localhost", "sheriff", "Adetunji12");
$db = mysqli_select_db($conn, "appmartevent");

$email = $_POST['email'];
$esession = $_POST['esession'];
$datereg = $_POST['datereg'];

$Addrec = "INSERT INTO eventreg(email, esession, datereg) VALUES('$email','$esession','$datereg')";
//$addrec = "insert into eventreg(email, esession, datereg) values($email, $esession, $datereg)";
$result = mysqli_query($conn, $Addrec);

if($result){
    $message = "Event has been registered successfully";
}else{
    $message = "Server Error. Please try again later";
}
$Response[]=array("Message => $message");
echo json_encode($Response);

?>