<?php
    
	$uName = $_POST['uName'];
    $uPhone = $_POST['uPhone'];
    	
	$to = 'info@rosbrocker.ru';
    
    $subject = 'Заявка с просьбой перезвонить сайта: rosbroker';
    $message = 'Имя: ' . $uName . ";"."\r\n".
               'Телефон: ' . $uPhone . ";";
               

    
    $headers = 'From: rosbroker' . "\r\n" .
    'Reply-To: rosbroker' . "\r\n" .
    'X-Mailer: PHP/';

	mail($to, $subject, $message, $headers);
    