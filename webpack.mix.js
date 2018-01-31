let mix = require('laravel-mix');

mix.react('resources/assets/js/index.js', 'public/js')
   .sass('resources/assets/sass/index.scss', 'public/css');
