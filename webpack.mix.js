const mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/assets/js');

mix.postCss('resources/assets/css/app.css', 'public/assets/css', [
    require('tailwindcss'),
]);

mix.copy('resources/assets/images', 'public/assets/images');
