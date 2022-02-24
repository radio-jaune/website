/**********************************************************************************
 **********************************************************************************
 *   Design.
 *
 * Process list :
 * - gulp prod : builds for production : the source code is minified, obfuscated, optimized and not human readable (not fit for debug) (purge, minifications etc..)
 * - gulp dev : builds for dev : the result of the build in the public folder is beautified , so that it is perfect for debug purpose, very human readable
 * - gulp serve : serving the static website
 **********************************************************************************
 **********************************************************************************
 */

 /***************************************************************
  ***************************************************************
  *  ==>>>   | beautify the HTML/JS/CSS produced by hugo in public/ folder
  ***************************************************************
  ***************************************************************
  **/
import dotenvModule from 'dotenv';
const dotenv = dotenvModule.config();


import gulp from 'gulp';

import browserSyncModule from 'browser-sync';
const browserSync = browserSyncModule.create();

import nodeSassModule from 'node-sass';
import sassModule from 'gulp-sass';
const sassCompiler = sassModule(nodeSassModule);

import pug from 'gulp-pug';

import purgecss from 'gulp-purgecss';

import gutil from 'gulp-util';

import del from 'del';
import fs from 'fs';

import shell from 'shelljs';
// const fs   = require('fs');

const hugoBaseURL = `${process.env.HUGO_BASE_URL}`;
/// export PATH=$PATH:/usr/local/go/bin
/// export HUGO_HOST=127.0.0.1
const hugoHost = `${process.env.HUGO_HOST}`;
/// export HUGO_PORT=4545
const hugoPort = `${process.env.HUGO_PORT}`
/// export HUGO_BASE_URL=http://127.0.0.1:4545
/// export HUGO_BASE_URL=http://${HUGO_HOST}:4${HUGO_HOST}
/// export HUGO_BLABLA="i'm the best at Gulp, man, iam a devops"


// Run Hugo to copy finished files over to public folder
gulp.task('testEnvDisplay', () => {
  gutil.log(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
  gutil.log(` >>>>>>>>>>>> testEnvDisplay() >> {hugoBaseURL|HUGO_BASE_URL}=[${hugoBaseURL}]`)
  gutil.log(` >>>>>>>>>>>> testEnvDisplay() >> {hugoHost|HUGO_HOST}=[${hugoBaseURL}]`)
  gutil.log(` >>>>>>>>>>>> testEnvDisplay() >> {hugoPort|HUGO_PORT}=[${hugoBaseURL}]`)
  gutil.log(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
  gutil.log(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
  return gulp.pipe(browserSync.stream());
})


/***************************************************************
 *  ==>>>   | Clean (public folder)
 **/


import clean from 'gulp-dest-clean';
import newer from 'gulp-newer';





//import { imagemin } from 'gulp-imagemin';
// import imagemin from 'gulp-imagemin';

// import pngquant from 'imagemin-pngquant';

/// export default () => (
/// 	gulp.src('src/images/*')
/// 		.pipe(imagemin())
/// 		.pipe(gulp.dest('dist/images'))
/// );

/// gulp.task('default', () => {
/// 	return gulp.src('src/images/*')
/// 		.pipe(imagemin({
/// 			progressive: true,
/// 			svgoPlugins: [{removeViewBox: false}],
/// 			use: [pngquant()]
/// 		}))
/// 		.pipe(gulp.dest('dist/images'));
/// });

var hugoPrjFolder = './';
var hugoPublicFolder = 'public';

gulp.task('hugoClean', function () {
  return gulp.src(hugoPublicFolder)
    .pipe(clean(hugoPublicFolder, 'public/**'))
    .pipe(newer(hugoPublicFolder))
    // .pipe(imagemin()) // i have az classic issue with imagemoin solve that later
    .pipe(gulp.dest(hugoPublicFolder))
    .pipe(browserSync.stream());
});
/***************************************************************
 *  ==>>>   | Excute SEO tasks (in the website in public)
 **/

import gulpSeo from 'gulp-seo';

gulp.task('seo', function() {
  const radioJauneConfiguration = {
        list: ['og', 'se', 'schema', 'twitter', 'facebook'],
        meta: {
            title: 'RADIOJAUNE.COM',
            description: 'La radio libre 100%Jaune, Libre antenne tous les Dimanches 21h',
            author: 'RADIOJAUNE.COM',
            keywords: ['radio', 'libre', 'libre antenne', 'live', 'gilets jaunes', 'convoi des libertés', 'freedom convoy', 'free speech', 'liberté d\'expression', 'émission', 'censure', 'censure facebook', 'citoyen', 'débats', 'scandale', 'polémiques', 'covid', 'vaccin', 'pass sanitaire', 'pass vaccinal', 'green pass', 'vaccin', 'démocratie', 'convergence'],
            robots: {
                index: true, // true
                follow: true // true
            },
            revisitAfter: '5 month', // 3 month
            image: 'https://radiojaune.com/images/radiojaune/favicon.next/favicon.48x48.ico',
            site_name: 'RADIOJAUNE.COM',
            type: 'website'

        }
    }

    return gulp.src('public/**/*.html')
              .pipe(gulpSeo(radioJauneConfiguration))
              .pipe(gulp.dest('./public'))
              .pipe(browserSync.stream());
});
/***************************************************************
 *  ==>>>   | Excute hugo build (will egenrae the website in public)
 **/

import child_process from 'child_process';
// Run Hugo to copy finished files over to public folder


gulp.task("hugoProd", (done) => {
 let hugo = child_process.spawn(`hugo`, [`-b`, `${hugoBaseURL}`])
             .on("close", () => {
                 done(); // let gulp know the task has completed
             });
 let hugoLogger = function (buffer) {
     buffer.toString()
     .split(/\n/)
     .forEach(function (message) {
         if (message) {


             gutil.log("GoHugo.io: " + ` >>>>>>>>>>>> testEnvDisplay() >> {hugoBaseURL|HUGO_BASE_URL}=[${hugoBaseURL}]`);
             gutil.log("GoHugo.io: " + message);
             gutil.log("GoHugo.io: " + message);
         }
     });
 };

 hugo.stdout.on("data", hugoLogger);
 hugo.stderr.on("data", hugoLogger)
});


gulp.task("hugoDev", (done) => {

  // Run hugo cli synchronously
  /*
  shell.echo(`===========================================================`)
  shell.echo(`Wil execute hugo build command : [hugo -b ${hugoBaseURL}]`)
  let hugoBuildCmd = shell.exec(`hugo -b ${hugoBaseURL}`);
  shell.echo (hugoBuildCmd.stdout)
  if (hugoBuildCmd.code !== 0) {
    shell.echo (hugoBuildCmd.stderr)
    shell.echo('Error: hugo Build failed');
    shell.exit(1);
  } else {
    done()
  }
  */
 let hugoProcess = child_process.spawn(`hugo`, [`-b`, `${hugoBaseURL}`])
             .on("close", () => {
                 done(); // let gulp know the task has completed
             });
 let hugoLogger = function (buffer) {
     buffer.toString()
     .split(/\n/)
     .forEach(function (message) {
         if (message) {


             gutil.log("GoHugo.io: " + ` >>>>>>>>>>>> testEnvDisplay() >> {hugoBaseURL|HUGO_BASE_URL}=[${hugoBaseURL}]`);
             gutil.log("GoHugo.io: " + message);
             gutil.log("GoHugo.io: " + message);
         }
     });
 };

 hugoProcess.stdout.on("data", hugoLogger);
 hugoProcess.stderr.on("data", hugoLogger)


});



/***************************************************************
 ***************************************************************
 *  ==>>>   | Compile Sass / SCSS
 ***************************************************************
 ***************************************************************
 **/

import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
// Compile sassCompiler into CSS : to be used BEFORE hugo build
gulp.task('gulpSass', function () {
  /// return gulp.src('static/sass/**/*.s?ss')
  ///    return gulp.src([
  ///      'sass/*.s?ss',
  ///      'sass/**/*.s?ss',
  ///      'sass/**/**/*.s?ss',
  ///      'sass/**/**/**/*.s?ss'
  ///    ],{
  ///    "base" : "./static"
  ///    })
  /// --
  return gulp.src('public/sass/**/*.s?ss')
      .pipe(sourcemaps.init())
      .pipe(sassCompiler().on('error', sassCompiler.logError))
      .pipe(rename({ suffix: '.min.pokus' }))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream());
});

///
/// [16:46:27] Requiring external module @babel/register
/// [16:46:37] Using gulpfile ~/radio_jaune_generation4/gulpfile.babel.js
/// [16:46:37] Starting 'gulpSass'...
///
///   Replace Autoprefixer browsers option to Browserslist config.
///   Use browserslist key in package.json or .browserslistrc file.
///
///   Using browsers option can cause errors. Browserslist config can
///   be used for Babel, Autoprefixer, postcss-normalize and other tools.
///
///   If you really need to use option, rename it to overrideBrowserslist.
///
///   Learn more at:
///   https://github.com/browserslist/browserslist#readme
///   https://twitter.com/browserslist
///
///
/// [16:46:37] Finished 'gulpSass' after 200 ms
///


/// <!-- build:<name> -->
/// Everything here will be replaced
/// <!-- endbuild -->
/// <!-- build:radiojaune_compiled_sass -->
/// Everything here will be replaced
/// <!-- endbuild -->
import htmlreplace from 'gulp-html-replace';
// Compile sassCompiler into CSS : to be used BEFORE hugo build
gulp.task('inject:html:prod', function (done) {
/// //  htmlreplace({
/// //    radiojaune_compiled_sass3: {// Multiple tag replacement one for each sass scss compiled source file
/// //      // src: [['data-main.js', 'require-src.js']],
/// //      // src: ['static/sass/**/*.s?ss', ['data-main.js', 'require-src.js']],
/// //      // src: ['public/sass/**/*.s?ss', ['data-main.js', 'require-src.js']],
/// //      src: [['data-main.js', 'require-src.js']],
/// //      tpl: '<link href="%s" rel="stylesheet">'
/// //    }
/// //  })

  let htmlTemplateToInject = ''
  htmlTemplateToInject += '<link href="%s" rel="stylesheet">\r\n'
  htmlTemplateToInject += '<link href="%s" rel="stylesheet">\r\n'
  htmlTemplateToInject += '<link href="%s" rel="stylesheet">\r\n'
  // done()
  return gulp.src('public/**/*.html')
        .pipe(htmlreplace({
          radiojaune_compiled_sass: {// Multiple tag replacement one for each sass scss compiled source file
            // src: [['data-main.js', 'require-src.js']],
            // src: ['static/sass/**/*.s?ss', ['data-main.js', 'require-src.js']],
            // src: ['public/sass/**/*.s?ss', ['data-main.js', 'require-src.js']],
            src: [ ['dist/css/a.min.pokus', 'b.min.pokus.js', 'c.min.pokus.js'], ['dist/css/pour.tests.gulp/encore.autre.pour.test.min.pokus.css', 'data-main.js', 'require-src.js']],
            tpl: htmlTemplateToInject
          }
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

import find from 'gulp-find';
import replace from 'gulp-replace';
import path from 'path';

// injects css link tags into html files : uinforunaltely, that method is not efficient to interpolate complex templates
gulp.task('inject:html:prod2', function (done) {
  return  gulp.src(path.join('./public/', 'index.html'))
              // .pipe(replace(/app\/style\/themes\/([^"]*)/g, function(cssPath) {
              .pipe(replace(/gulp_base_css_dir/g, function(cssPath) {
                return "my-new-pokus-path/" + cssPath;
              }))
              .pipe(gulp.dest('public'))
              .pipe(browserSync.stream());
});



///  // - // useref = require('gulp-useref'),
///  // - // gulpif = require('gulp-if'),
///  // - // // uglify = require('gulp-uglify'),
///  // - // minifyCss = require('gulp-clean-css');
import useref from 'gulp-useref';
import gulpif from 'gulp-if';
import minifyCss from 'gulp-clean-css';
// injects css link tags into html files :
gulp.task('inject:html:prod3', function () {
  // return  gulp.src(path.join('./public/', 'index.html'))
  /*
  return gulp.src('public/*.html')
      .pipe(useref())
      .pipe(gulpif('public/js/*.js', uglify()))
      .pipe(gulpif('public/css/*.css', minifyCss()))
      .pipe(gulp.dest('dist'));
  */
  // return gulp.src('public/*.html')
  // return gulp.src(path.join('./public/', 'index.html'), {allowEmpty: true})
  // return gulp.src('public/index.html', {allowEmpty: true})
  // return gulp.src('.\/public\/*.html', {allowEmpty: true})
  // return gulp.src('./public\/*.html', {allowEmpty: true})
  // return gulp.src('./public/*.html', {allowEmpty: true})
  // return gulp.src('./*.html', {allowEmpty: true}) // => the only one which i managed to execute without errors
  // return gulp.src('public/**/*.html', {allowEmpty: true})
  ///    return gulp.src([
  ///      'sass/*.s?ss',
  ///      'sass/**/*.s?ss',
  ///      'sass/**/**/*.s?ss',
  ///      'sass/**/**/**/*.s?ss'
  ///    ],{
  ///    "base" : "./static"
  ///    })
  /// return gulp.src(['public/index.html'], {allowEmpty: true})
  return gulp.src([
                '*.html',
                '**/*.html',
                '**/**/*.html',
                '**/**/**/*.html'
              ],{
              "base" : "./public/"
              })
            .pipe(useref())
            .pipe(gulp.dest('dist'))
            .pipe(browserSync.stream());
});


/***************************************************************
 ***************************************************************
 *  ==>>>   | beautify the HTML/JS/CSS produced by hugo in public/ folder
 ***************************************************************
 ***************************************************************
 **/
import gulpBeautify from 'gulp-beautify';
gulp.task('beautifyHugoPublicHtml', function() {
  return gulp
    .src('./public/**/*.html')
    .pipe(gulpBeautify.html({ indent_size: 2 }))
    .pipe(gulp.dest('./public/'));
});
gulp.task('beautifyHugoPublicCss', function() {
  return gulp
    .src('./public/**/*.css')
    .pipe(gulpBeautify.css({ indent_size: 2 }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('beautifyHugoPublicJs', function() {
  // gulp-beautify exports are identical to js-beautify programmatic access
  // so beautify() is the old pattern for beautify.js()
  return gulp
    .src('./public/**/*.js')
    .pipe(gulpBeautify({ indent_size: 2 }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('beautifyHugoPublic', gulp.series('beautifyHugoPublicHtml', 'beautifyHugoPublicCss', 'beautifyHugoPublicJs'));

/***************************************************************
 ***************************************************************
 *  ==>>>   | minify the HTML/JS/CSS produced by gulp in dist/ folder
 ***************************************************************
 ***************************************************************
 **/
import minify from 'gulp-minify';
gulp.task('minifyJSHugo', () => {
    return   gulp.src(['dist/**/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
})


import cleanCSS from 'gulp-clean-css';

gulp.task('minifyCSSHugo',() => {
  return gulp.src('./dist/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('minifyHugoDist', gulp.series('minifyJSHugo', 'minifyCSSHugo'));


/***************************************************************
 ***************************************************************
 *  ==>>>   | uglify the HTML/JS/CSS produced by gulp in dist/ folder
 ***************************************************************
 ***************************************************************
 **/
import uglify from 'gulp-uglify';
import pipelineModule from 'readable-stream';
const pipeline = pipelineModule.pipeline;

gulp.task('uglifyJSHugo', function () {
  return pipeline(
        gulp.src([
          'dist/*.js',
          'dist/**/*.js',
          'dist/**/**/*.js',
          'dist/**/**/**/*.js'
        ]),
        uglify(),
        gulp.dest('dist')
  );
});

gulp.task('uglifyHugoDist', gulp.series('minifyJSHugo'));




/***************************************************************
 ***************************************************************
 *  ==>>>   | purge CSS produced by gulp in dist/ folder
 ***************************************************************
 ***************************************************************
 **/
gulp.task('purgecss', () => {
    return gulp.src('src/**/*.css')
        .pipe(purgecss({
            content: [
              'src/*.html',
              'src/**/*.html'
            ]
        }))
        .pipe(gulp.dest('build/css'))
})

/***************************************************************
 ***************************************************************
 *  ==>>>   | PUBLIC TO DIST : all copy taaks from public to dist folder
 ***************************************************************
 ***************************************************************
 **/
 gulp.task('cleanDist', function() {

    let to_return = del(['dist'])
    const folders = [
        'dist',
        'dist/js',
        'dist/css'
    ];
///    const folders = [
///        'css',
///        'img',
///        'img/content',
///        'img/icons',
///        'fonts',
///        'js'
///    ];

    folders.forEach(dir => {
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log('📁  folder created:', dir);
        }
    });
   return to_return;
 });

// Move the javascript files from ./public into our ./dist folder
function jsDist(){
    return gulp
        .src([
          'js/*.js',
          'js/**/*.js',
          'js/**/**/*.js',
          'js/**/**/**/*.js'
        ],{
        "base" : "./public"
        })
        .pipe(gulp.dest("dist/js")).pipe(browserSync.stream());
}


// Move the CSS files from ./public into our ./dist folder
function cssDist(){
///    return gulp
///        .pipe(clean('dist/css', '/**'))
///        .pipe(newer('dist/css'))
///        .src([
///          'css/*.css',
///          'css/**/*.css',
///          'css/**/**/*.css',
///          'css/**/**/**/*.css'
///        ],{
///        "base" : "./public"
///        })
///        .pipe(gulp.dest("dist/css")).pipe(browserSync.stream());


    return gulp
        .src([
          'css/*.css',
          'css/**/*.css',
          'css/**/**/*.css',
          'css/**/**/**/*.css'
        ],{
        "base" : "./public"
        })
///        .pipe(gulp.dest("dist/css")).pipe(browserSync.stream());
}
// Move the HTML files from ./public into our ./dist folder
function htmlDist(){
    return gulp
        .src([
          '*.html',
          '**/*.html',
          '**/**/*.html',
          '**/**/**/*.html'
        ],{
        "base" : "./public"
        })
        .pipe(gulp.dest("dist/")).pipe(browserSync.stream());
}
// Moves all the vendor files from ./public into our ./dist folder
function vendorDist(){
    return gulp
        .src(['public/vendor/*'])
        .pipe(gulp.dest("dist/vendor")).pipe(browserSync.stream());
}

gulp.task(jsDist);
gulp.task(cssDist);
gulp.task(htmlDist);
gulp.task(vendorDist);

// ---------------
// all prod env related tasks are done in the dist folder itself
// all dev env rerleated ops are done inside the public folder
// the docs/ folder is only used by github pages deployment
//
// gulp.task('build:debug', gulp.series('hugoDev', 'inject:html:prod'));
// gulp.task('build:debug', gulp.series('hugoDev', 'gulpSass', 'inject:html:prod'));
//gulp.task('build:debug', gulp.series('hugoDev', 'gulpSass', 'inject:html:prod2'));
// gulp.task('build:debug', gulp.series('hugoDev', 'gulpSass', 'inject:html:prod3'));
gulp.task('build:debug', gulp.series('hugoDev', 'gulpSass', 'inject:html:prod'));


gulp.task('build:dev', gulp.series('gulpSass', 'hugoDev', 'seo', 'beautifyHugoPublic', 'cleanDist', 'jsDist', 'cssDist', 'htmlDist', 'vendorDist', 'purgecss', 'minifyJSHugo', 'uglifyJSHugo',));
gulp.task('build:prod', gulp.series('gulpSass', 'hugoProd', 'seo', 'minifyJSHugo', 'uglifyJSHugo'));


gulp.task('watch:prod', gulp.series('build:prod', function() {
    browserSync.init({
        server: "./dist",
        host: `${hugoHost}`,
        port: `${hugoPort}`
    });

    // watch all hugo project files for change, rebuild all if changes
    gulp.watch('./config.toml', gulp.series('hugoDev', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./config.yaml', gulp.series('hugoDev', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./config.json', gulp.series('hugoDev', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./static/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./assets/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./themes/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./archetypes/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./content/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./data/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./layouts/**/*.*', gulp.series('hugoDev', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));




gulp.task('watch:dev', function() {
    gutil.log(`POKUS : hugoHost=[${hugoHost}]`)
    gutil.log(`POKUS : hugoPort=[${hugoPort}]`)

    browserSync.init({ // https://browsersync.io/docs/api
        server: "./public",
        host: `${hugoHost}`,
        port: `${hugoPort}`
    });

    // watch all hugo project files for change, rebuild all if changes
    gulp.watch('./config.toml', gulp.series('dev'));
    gulp.watch('./config.yaml', gulp.series('dev'));
    gulp.watch('./config.json', gulp.series('dev'));
    gulp.watch('./static/**/*.*', gulp.series('gulpSass'));
    gulp.watch('./assets/**/*.*', gulp.series('gulpSass'));
    gulp.watch('./themes/**/*.*', gulp.series('dev'));
    gulp.watch('./archetypes/**/*.*', gulp.series('dev'));
    gulp.watch('./content/**/*.*', gulp.series('dev'));
    gulp.watch('./data/**/*.*', gulp.series('dev'));
    gulp.watch('./layouts/**/*.*', gulp.series('dev'));
    gulp.watch("layouts/**/*.html", gulp.series('dev')).on('change', browserSync.reload);
});
gulp.task('watchProd', function() {
    gutil.log(`POKUS : hugoHost=[${hugoHost}]`)
    gutil.log(`POKUS : hugoPort=[${hugoPort}]`)

    browserSync.init({ // https://browsersync.io/docs/api
        server: "./public",
        host: `${hugoHost}`,
        port: `${hugoPort}`
    });

    // watch all hugo project files for change, rebuild all if changes
    gulp.watch('./config.toml', gulp.series('prod'));
    gulp.watch('./config.yaml', gulp.series('prod'));
    gulp.watch('./config.json', gulp.series('prod'));
    gulp.watch('./static/**/*.*', gulp.series('gulpSass'));
    gulp.watch('./assets/**/*.*', gulp.series('gulpSass'));
    gulp.watch('./themes/**/*.*', gulp.series('prod'));
    gulp.watch('./archetypes/**/*.*', gulp.series('prod'));
    gulp.watch('./content/**/*.*', gulp.series('prod'));
    gulp.watch('./data/**/*.*', gulp.series('prod'));
    gulp.watch('./layouts/**/*.*', gulp.series('prod'));
    gulp.watch("layouts/**/*.html", gulp.series('prod')).on('change', browserSync.reload);
});
// --------------- older...
// gulp.task('serve', gulp.series('gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist', 'server'));
// allDist after gulpPug: any html fiole in the src folder, overrides the rendered pug template in dist
// gulp.task('dev', gulp.series('gulpSass', 'jsDist', 'cssDist', 'htmlDist'));
