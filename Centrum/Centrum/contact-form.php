 <?php 
if (!empty($_POST)) {
	if( isset($_POST['cName']) 
			&& isset($_POST['cEmail']) 
			&& isset($_POST['cSubject']) 
			&& isset($_POST['cMessage']) 
			&& isset($_REQUEST['g-recaptcha-response'])
			&& !empty($_POST['cEmail'])
			) 
	{
		
		$name = $_POST['cName'];
		$email = $_POST['cEmail'];
		$subject = $_POST['cSubject'];
		$message = $_POST['cMessage'];
		$reCAPTCHA = $_REQUEST['g-recaptcha-response'];
		
		
		//Sprawdzenie reCAPTCHA
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$myvars = 'secret=6LfHigcUAAAAADIP7wUxynAesVu_I_L_aMJ1e9LP&response=' . $reCAPTCHA;
		
		$ch = curl_init( $url );
		curl_setopt( $ch, CURLOPT_POST, 1);
		curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
		curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt( $ch, CURLOPT_HEADER, 0);
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
		
		$response = curl_exec( $ch );
		$json = json_decode($response, true);
		
		if("true" == $json['success']) {
			
			//add_filter ( 'wp_mail_content_type', create_function ( '', 'return "text/html"; ' ) );
			$email = wp_mail('monika.nawrocka@centrumstatystyczne.pl', $subject, $message, array('From: '.$name.' <'.$email.'>') );
			//remove_filter ( 'wp_mail_content_type', 'set_html_content_type' );
			
			//$debug = $subject . ', ' . $message . ', ' . $name . ', ' . $email . ' x ';
			
			if($email) {
				echo '<div class="alert alert-success alert_anim">
							<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
							Wiadomość została poprawnie wysłana.
					  </div>';
			} else {
				echo '<div class="alert alert-danger alert_anim">
							<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
							<strong>Błąd!</strong> Nie udało się wysłać wiadomości. 
					  </div>';
			}
		} else {
			/*error-codes:
				missing-input-secret	The secret parameter is missing.
				invalid-input-secret	The secret parameter is invalid or malformed.
				missing-input-response	The response parameter is missing.
				invalid-input-response	The response parameter is invalid or malformed
			 */
			
			echo '<div class="alert alert-danger alert_anim">
						<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						<strong>Błąd!</strong> Walidacji reCaptcha. ' . $json['error-codes'] . '
				</div>';
		}
	} 
	else {
		print_r($_POST);
		echo 'blad';
	}

}

?>

<script src='https://www.google.com/recaptcha/api.js'></script>
<form class="form-horizontal" id="fContact"   method="POST">
	<div class="form-group">
		<label class="control-label col-sm-3" for="cName">Imię:</label>
		<div class="col-sm-7 col-md-5">
			<input type="text" class="form-control" id="cName" name="cName"
				placeholder="Wprowadź imię ..." required="true">
		</div>
	</div>

	<div class="form-group">
		<label class="control-label col-sm-3" for="cEmail">Email:</label>
		<div class="col-sm-7 col-md-5">
			<input type="email" class="form-control" id="cEmail" name="cEmail"
				placeholder="Wprowadź adres email ..." required="true">
		</div>
	</div>
	
	<div class="form-group">
		<label class="control-label col-sm-3" for="cSubject">Temat:</label>
		<div class="col-sm-7 col-md-5">
			<input type="text" class="form-control" id="cSubject" name="cSubject"
				placeholder="Wprowadź temat ..." required="true">
		</div>
	</div>
	
	<div class="form-group">
		<label class="control-label col-sm-3" for="cMessage">Treść wiadomości:</label>
		<div class="col-sm-7 col-md-5">
			<textarea class="form-control" id="cMessage"  name="cMessage" rows="6" required="true"
				style="width: 100%" placeholder="Napisz wiadomość ..."></textarea>
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-offset-3 col-sm-7">
			<div class="g-recaptcha"
				data-sitekey="6LfHigcUAAAAANaqvn15BdXgAGjqMVCQnEFVphhu"></div>
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-offset-3 col-sm-7">
			<button type="submit" class="btn btn-success">
				<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
				Wyślij
			</button>
		</div>
	</div>

</form>

