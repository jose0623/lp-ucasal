# lp-ucasal

<div class="markdown__markdown___3yof6 pr4-ns pl0-ns ph1-m pr3-m pr2  markdown" id="readme"><h1><a id="user-content-web-app-generator" class="deep-link" href="#web-app-generator" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Web app generator <a href="http://travis-ci.org/yeoman/generator-webapp" rel="nofollow"><img src="https://secure.travis-ci.org/yeoman/generator-webapp.svg?branch=master" alt="Build Status"></a> <a href="https://gitter.im/yeoman/yeoman" rel="nofollow"><img src="https://img.shields.io/badge/Gitter-Join_the_Yeoman_chat_%E2%86%92-00d06f.svg" alt="Gitter"></a></h1>
<blockquote>
<p><a href="http://yeoman.io" rel="nofollow">Yeoman</a> generator that scaffolds out a front-end web app using <a href="http://gulpjs.com/" rel="nofollow">gulp</a> for the build process</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/yeoman/generator-webapp/HEAD/screenshot.png" alt=""></p>
<h2><a id="user-content-features" class="deep-link" href="#features" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>
<p>Please see our <a href="https://github.com/yeoman/generator-webapp/blob/HEAD/app/templates/gulpfile.js" rel="nofollow">gulpfile</a> for up to date information on what we support.</p>
<ul>
<li>enable <a href="https://babeljs.io/docs/learn-es2015/" rel="nofollow">ES2015 features</a> using <a href="https://babeljs.io" rel="nofollow">Babel</a></li>
<li>CSS Autoprefixing</li>
<li>Built-in preview server with BrowserSync</li>
<li>Automagically compile Sass with <a href="http://libsass.org" rel="nofollow">libsass</a></li>
<li>Automagically lint your scripts</li>
<li>Map compiled CSS to source stylesheets with source maps</li>
<li>Awesome image optimization</li>
<li>Automagically wire-up dependencies installed with <a href="http://bower.io" rel="nofollow">Bower</a></li>
</ul>
<p><em>For more information on what this generator can do for you, take a look at the <a href="https://github.com/yeoman/generator-webapp/blob/HEAD/app/templates/_package.json" rel="nofollow">gulp plugins</a> used in our <code>package.json</code>.</em></p>
<h2><a id="user-content-libsass" class="deep-link" href="#libsass" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>libsass</h2>
<p>Keep in mind that libsass is feature-wise not fully compatible with Ruby Sass. Check out <a href="http://sass-compatibility.github.io" rel="nofollow">this</a> curated list of incompatibilities to find out which features are missing.</p>
<p>If your favorite feature is missing and you really need Ruby Sass, you can always switch to <a href="https://github.com/sindresorhus/gulp-ruby-sass" rel="nofollow">gulp-ruby-sass</a> and update the <code>styles</code> task in gulpfile accordingly.</p>
<h2><a id="user-content-getting-started" class="deep-link" href="#getting-started" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>
<ul>
<li>Install: <code>npm install --global yo gulp-cli bower generator-webapp</code></li>
<li>Run <code>yo webapp</code> to scaffold your webapp</li>
<li>Run <code>gulp serve</code> to preview and watch for changes</li>
<li>Run <code>bower install --save &lt;package&gt;</code> to install frontend dependencies</li>
<li>Run <code>gulp serve:test</code> to run the tests in the browser</li>
<li>Run <code>gulp</code> to build your webapp for production</li>
<li>Run <code>gulp serve:dist</code> to preview the production build</li>
</ul>
<h2><a id="user-content-docs" class="deep-link" href="#docs" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Docs</h2>
<ul>
<li><a href="https://github.com/yeoman/generator-webapp/blob/HEAD/docs/README.md" rel="nofollow">getting started</a> with this generator</li>
<li><a href="https://github.com/yeoman/generator-webapp/blob/HEAD/docs/recipes/README.md" rel="nofollow">recipes</a> for integrating other popular technologies like CoffeeScript</li>
<li><a href="https://github.com/yeoman/generator-webapp/blob/HEAD/docs/bower.md" rel="nofollow">details</a> about our Bower setup</li>
<li><a href="https://github.com/yeoman/generator-webapp/blob/HEAD/contributing.md" rel="nofollow">contribution</a> docs and <a href="https://github.com/yeoman/generator-webapp/blob/HEAD/docs/faq.md" rel="nofollow">FAQ</a>, good to check before posting an issue</li>
</ul>
<h2><a id="user-content-options" class="deep-link" href="#options" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options</h2>
<ul>
<li><code>--skip-welcome-message</code>
Skips Yeoman's greeting before displaying options.</li>
<li><code>--skip-install-message</code>
Skips the the message displayed after scaffolding has finished and before the dependencies are being installed.</li>
<li><code>--skip-install</code>
Skips the automatic execution of <code>bower</code> and <code>npm</code> after scaffolding has finished.</li>
<li><code>--test-framework=&lt;framework&gt;</code>
Either <code>mocha</code> or <code>jasmine</code>. Defaults to <code>mocha</code>.</li>
<li><code>--no-babel</code>
Scaffolds without <a href="http://babeljs.io" rel="nofollow">Babel</a> support. This only applies to <code>app/scripts</code>, you can still write ES2015 in the gulpfile, depending on what your version of Node <a href="https://kangax.github.io/compat-table/es6/" rel="nofollow">supports</a>.</li>
</ul>
<h2><a id="user-content-license" class="deep-link" href="#license" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>
<p><a href="http://opensource.org/licenses/bsd-license.php" rel="nofollow">BSD license</a></p>
</div>
