<?php

$conn = mysqli_connect('localhost', 'sheriff', 'Adetunji12');
$db = mysqli_select_db($conn, "appmartevent");

//Format the data for react-native to understant
$EncodeData = file_get_contents('php://input');
//Passing the data to json format
$DecodeData = json_decode($EncodeData, true);