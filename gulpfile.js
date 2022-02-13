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
const dotenv        = require('dotenv').config();
const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('node-sass'));
// require('node-sass')
const pug = require('gulp-pug');
const purgecss = require('gulp-purgecss');

const gutil = require("gulp-util"); // to access environment variables

const del = require('del');
process.env.S3_REGION
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
var clean = require('gulp-dest-clean');
var newer = require('gulp-newer');
//  import imagemin from 'gulp-imagemin';
var imagemin = import("gulp-imagemin");
var hugoPrjFolder = './';
var hugoPublicFolder = 'public';

gulp.task('hugoClean', function () {
  return gulp.src(hugoPublicFolder)
    .pipe(clean(hugoPublicFolder, 'public/**'))
    .pipe(newer(hugoPublicFolder))
    .pipe(imagemin())
    .pipe(gulp.dest(hugoPublicFolder))
    .pipe(browserSync.stream());
});
/***************************************************************
 *  ==>>>   | Excute SEO tasks (in the website in public)
 **/
var gulpSeo = require('gulp-seo');

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
const child_process = require("child_process");
// Run Hugo to copy finished files over to public folder
gulp.task("hugo", (done) => {
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


var gulpBeautify = require('gulp-beautify');
/***************************************************************
 *  ==>>>   | beautify the HTML/JS/CSS produced by hugo in public
 **/

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
 *  ==>>>   | Compile Sass / SCSS
 **/

const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
// Compile sass into CSS : to be used BEFORE hugo build
gulp.task('gulpSass', function () {
  return gulp.src('static/sass/**/*.s?ss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./static/css'))
        .pipe(browserSync.stream());
});

gulp.task('purgecss', () => {
    return gulp.src('static/css/**/*.css')
        .pipe(purgecss({
            content: ['layouts/**/*.html'] // the hugo project folder 'layouts' always contains any html of the project. Content and layout clearly separated
        }))
        .pipe(gulp.dest('static/css'))
        .pipe(browserSync.stream());
})

const minify = require('gulp-minify');
gulp.task('minifyJSHugo', () => {
    return   gulp.src(['public/**/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
})


var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('uglifyJSHugo', function () {
  return pipeline(
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
  );
});




function jsDev(){
    return gulp
        .src(['src/js/*.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
}
gulp.task(jsDev);
/******************************************************
 * SRC TO DIST
 */



gulp.task('dev', gulp.series('gulpSass', 'hugo', 'seo', 'beautifyHugoPublic'));
gulp.task('prod', gulp.series('gulpSass', 'hugo', 'seo', 'purgecss', 'minifyJSHugo', 'uglifyJSHugo'));

gulp.task('serve', function() {
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

// gulp.task('serve', gulp.series('gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist', 'server'));
// allDist after gulpPug: any html fiole in the src folder, overrides the rendered pug template in dist
// gulp.task('dev', gulp.series('gulpSass', 'jsDist', 'cssDist', 'htmlDist'));
