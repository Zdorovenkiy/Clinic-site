<?php

$dbc = mysqli_connect('localhost', 'root', '', 'Healthsite');
$data = json_decode(file_get_contents('php://input'), true);
$surname = $data['surname'];
$name = $data['name'];
$secondName = $data['secondName'];
$date = $data['date'];
$type = $data['type'];

$query = "INSERT INTO services (Surname, Name, Second_name, Date, Type)
          VALUES ('$surname', '$name', '$secondName', '$date', '$type')";


$result = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Запись отправлена'));


mysqli_close($dbc);

