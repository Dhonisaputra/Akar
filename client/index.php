<!DOCTYPE html>
<html >
<head>
	<title>Index</title>
	<link rel="stylesheet" type="text/css" href="assets/css/main-css-generator.css">
	<link rel="stylesheet" type="text/css" href="assets/css/modules.css">
	<link rel="stylesheet" type="text/css" href="assets/plugins/bootstrap/dist/css/bootstrap.min.css">

	<script src="assets/plugins/socketio/socket.js"></script>
	
	<script src="assets/plugins/angular/angular.min.js"></script>
	<script src="assets/plugins/angular/angular-route.js"></script>

	<script type="text/javascript" src="assets/js/helper-io.js"></script>
	<script type="text/javascript" src="assets/js/routes.js"></script>
	<script type="text/javascript" src="assets/js/controllers.js"></script>

	

	<script type="text/javascript" src="assets/plugins/gmdl/material.min.js"></script>
	<link rel="stylesheet" type="text/css" href="assets/plugins/gmdl/material.indigo-pink.min.css">
	<link rel="stylesheet" type="text/css" href="assets/plugins/gmdl/icon.css">

</head>

<body ng-app="generator">
	<div ng-view class="container-fluid"></div>

	<div id="snackbarTemp" class="mdl-snackbar mdl-js-snackbar" style=""> 
		<div class="mdl-spinner mdl-js-spinner is-active sr-only" style="margin-top: 9px;margin-left: 7px;"></div>
		<div class="mdl-snackbar__text"></div> 
		<button type="button" class="mdl-snackbar__action"></button> 
	</div>
</body>
	<script type="text/javascript" src="assets/plugins/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="assets/jscomponents/snackbar.helper.js"></script>


</html>