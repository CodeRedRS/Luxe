<?php
// check if fields passed are empty
if (empty($_POST['Name']) ||
    empty($_POST['PhoneNumber']) ||
    empty($_POST['Email']) ||
    empty($_POST['Message']) ||
    !filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)
) {
    echo "No arguments Provided!";
    return false;
}
//$to = "Terry@poshpatio.ca"; // required
$to = "zeketiki@gmail.com"; // required
$from = "From: Contact@LuxeCurbing.com";
$Name = $_POST['Name']; // required
$subject = "Message from: " . $Name; // required
$Email = $_POST['Email']; // required
$Phone = $_POST['PhoneNumber']; // not required
$email_message = $_POST['Message']; // required

$Subject_message = "Form details below.\n\n";
$Subject_message .= "Name: " . $Name . "\n";
$Subject_message .= "Email: " . $Email . "\n";
$Subject_message .= "Subject: " . $subject . "\n";
$Subject_message .= "Phone Number: " . $Phone . "\n";
$Subject_message .= "Message: \n" . $email_message . "\n";

mail($to, $subject, $Subject_message, $from);
mail($Email, 'Thank you for contacting us!', "We've successfully received your message. \n We'll do our best to answer your question to the best of our ability. \n Thank you for contacting us!", $from);

return true;
