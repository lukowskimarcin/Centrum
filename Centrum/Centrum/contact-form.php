
<div id="messages" style="display: none;">
</div>

<?php
if (isset ( $_SESSION ['sendContactResult'] )) {
	$result = $_SESSION ['sendContactResult'];
	
	if ($result == 1) {
		echo '<div class="alert alert-success alert_anim">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				Wiadomość została poprawnie wysłana.
			  </div>';
	} else if ($result == 0) {
		echo '<div class="alert alert-danger alert_anim">
					<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>Błąd!</strong> Nie udało się wysłać wiadomości - proszę spróbować ponownie.
			  </div>';
	} else if ($result == - 1) {
		echo '<div class="alert alert-danger alert_anim">
					<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>Błąd!</strong> Nieudana walidacja reCAPTHA. 
			</div>';
	}
	unset ( $_SESSION ['sendContactResult'] );
}
?>




<script src='https://www.google.com/recaptcha/api.js'></script>
<form class="form-horizontal" id="fContact"   method="POST" action="<?php echo admin_url('admin-post.php'); ?>">
	<input type="hidden" name="action" value="mail_contact">
  	<input type="hidden" name="origin" value="<?php the_ID(); ?>">

	<div class="form-group">
		<label class="control-label col-sm-3" for="cName">Imię:</label>
		<div class="col-sm-7 col-md-5">
			<input type="text" class="form-control" id="cName" name="cName"
				placeholder="Wprowadź imię ..." required="true" autofocus>
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

<script type="text/javascript">
$(document).ready(function () {
	$("#cName").focus();
})
</script>

</form>

 