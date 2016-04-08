
<?php

if (isset($_POST['submitButton']))
{
$username = $_POST['name'];
$password = $_POST['pasw'];

 if ($username == "" || $password == ""){

	 echo "Rejected!";
	 $isItThere = false;

 	}
	
	else {
	//Het gene hieronder haalt de inlog gegevens op.

$userData = file_get_contents('accounts.txt');


	//stel de data uit de submit samen

$inputUser = $username . "||" . $password;

	//zoek naar een match

$isItThere = strpos($userData, $inputUser);
		 

	}

if ($isItThere === false) {


echo "$username staat niet in de lijst.<br>";
session_start();

$_SESSION['user'] = "";

//remove all session variables
session_unset();

//destroy the session
session_destroy();
}


else {

echo "U bent ingelogd als $inputUser en uw account komt voor op positie $isItThere in de database <br> <br> <br>" . "u bent ingelogd!";
session_start();
$_SESSION['user'] = $username;

	
	}





}





?>



<!DOCTYPE html>
<html>

<head>
	<title>Toeterscooters</title>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<link rel="stylesheet" type="text/css" href="css/createAccount.css">
	<link href="css/960.css" rel="stylesheet" type="text/css">
	<script src="js/slideShow.js"></script>

</head>

<body>

	<div id="container" class="container_12">
		<div id="header">
			<div class="grid_2">
				<img src="img/header.png" alt="header" >

			</div>

		</div>



		<div class="clear"></div>
		<div id="navigation">
			<ul>
				<li><a href="index.html">home</a></li>
				<li><a href="producten.html">producten</a></li>
				<li><a href="contact.html">contact</a></li>
				<li><a href="overons.html">over ons</a></li>
				<li><a href="faq.html">FAQ</a></li>
			</ul>
		</div>
		<div class="clear"></div>
		<div id="content" class="grid_12">
			<div id="blue"  >

<div id="createAccount">
<form action="" method="POST">
			<h1>Please enter your information to login.</h1>
			<p>
				<label>Username:</label>
				<input type="text" name="name" />
<br>
				<label>Password:</label>
				<input type="text" name="pasw" />
				<br/>
				<br/>
			</p>

			<input type="submit" name="submitButton" id="submit" value="submit" />
			
			<input type="reset" id="reset" value="reset" />




		</form>
</div>

				</div>



			</div>

		

		<div class="clear"></div>

	</div>
	<footer>

		<p>Toeterscooter 2016 || website designed by Tommy en Julian || toeterscooters.nl || acme copyright</p>
		
			<a href="http://validator.w3.org/check?uri=referer" target="_blank">
				<img src="http://blog.boyet.com/blog/files/media/image/valid-html5-blue.png" alt="Valide HTML5"></a>
			<a href="http://jigsaw.w3.org/css-validator/check/referer" target="_blank">
				<img src="http://jigsaw.w3.org/css-validator/images/vcss-blue.gif" alt="Valide CSS">
			</a>
			<div id="leverings">
	
			</div>
	</footer>
</body>

</html>