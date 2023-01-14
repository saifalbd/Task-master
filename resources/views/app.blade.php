<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}" />
	<title>task managment</title>
	@routes
	@vite('resources/css/app.scss')
</head>

<body>
	<div id="app"></div>

	@vite('resources/js/app.js')
</body>

</html>