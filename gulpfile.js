/**
 * Created by stevenbraham on 04-03-17.
 */
var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');
require('laravel-elixir-vueify');
require('vue-resource');
elixir.config.assetsPath = 'web/source';
elixir.config.publicPath = 'web/build';
elixir.config.viewPath = './';

elixir((mix) => {
    mix.webpack('app.js');
    mix.copy('web/source/index.html', 'web/build/index.html');
    mix.sass('style.scss');
});