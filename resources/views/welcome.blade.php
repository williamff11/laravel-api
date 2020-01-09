<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body>
    <div id="app">
        <vue-snotify></vue-snotify>
        <preloader-component></preloader-component>
        <router-view></router-view>
    </div>

    <script src="{{ url('/js/app.js') }}" defer></script>
</body>

</html>