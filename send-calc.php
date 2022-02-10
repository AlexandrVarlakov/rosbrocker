<?php
    
	$uName = $_POST['uName'];
    $uPhone = $_POST['uPhone'];
    $uMail = $_POST['uMail'];
    $tGuarantee = $_POST['tGuarantee'];
    $tContract = $_POST['tContract'];
    $gDate = $_POST['gDate'];
    $vSumm = $_POST['vSumm'];
	
	$to = 'info@rosbrocker.ru';
    
    $subject = 'Заявка на расчет гарантии с сайта: rosbroker';
    $message = 'Имя: ' . $uName . ";"."\r\n".
               'Телефон: ' . $uPhone . ";"."\r\n".
               'e-mail: ' . $uMail . ";"."\r\n".
               'Тип гарантии: ' . $tGuarantee . ";"."\r\n".
               'Тип контаркта: ' . $tContract . ";"."\r\n".
               'Дата: ' . $gDate . ";"."\r\n".
               'Сумма: ' . $vSumm . ";";

    
    $headers = 'From: rosbroker' . "\r\n" .
    'Reply-To: rosbroker' . "\r\n" .
    'X-Mailer: PHP/';

	mail($to, $subject, $message, $headers);
    