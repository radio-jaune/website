const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('node-sass'));
const pug = require('gulp-pug');
const purgecss = require('gulp-purgecss');


/***************************************************************
 *  ==>>>   | Excute SEO tasks (in the website in public)
 **/
var gulpSeo = require('gulp-seo');

gulp.task('seo', function() {
 return gulp.src('public/index.html')
 .pipe(gulpSeo({
       list: ['og', 'se', 'schema', 'twitter', 'facebook'],
       meta: {
           title: 'RADIOJAUNE.COM',
           description: 'La radio libre 100%Jaune, Libre antenne tous les Dimanches 21h',
           author: 'RADIOJAUNE.COM',
           keywords: ['radio', 'libre', 'libre antenne', 'live', 'gilets jaunes', 'convoi des libertés', 'freedom convoy', 'free speech', 'liberté d\'expression', 'émission', 'censure', 'censure facebook', 'citoyen', 'débats', 'scandale', 'polémiques', 'covid', 'vaccin', 'pass sanitaire', 'pass vaccinal', 'green pass', 'vaccin', 'démocratie', 'convergence'],
           robots: {
               index: ttrue, // true
               follow: true // true
           },
           revisitAfter: '5 month', // 3 month
           image: 'https://radiojaune.com/images/radiojaune/favicon.next/favicon.48x48.ico',
           site_name: 'RADIOJAUNE.COM',
           type: 'website'

       }
   }))
   .pipe(gulp.dest('./views'));
});
/***************************************************************
 *  ==>>>   | Excute hugo build (will egenrae the website in public)
 **/
var exec = require('child_process').exec;

// Run Hugo to copy finished files over to public folder
gulp.task('hugo', ['css', 'js'], function (fetch) {
    return exec('hugo -s ../../', function (err, stdout, stderr) {
        // console.log(stdout); // See Hugo output
        // console.log(stderr); // Debugging feedback
        fetch(err);
    });
})


/***************************************************************
 *  ==>>>   | beautify the HTML/JS/CSS produced by hugo in public
 **/
gulp.task('beautifyHugoPublic', () => {
///   var options = {
///     {indentSize: 2}
///   };
  var options = {
    indentSize: 2,
    useConfig: true // .jsbeautifyrc
  };
  gulp.src('./public/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
  gulp.src('./public/**/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
  gulp.src('./public/**/**/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
  gulp.src('./public/**/**/**/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
  gulp.src('./public/**/**/**/**/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
  gulp.src('./public/**/**/**/**/**/*.html') // go down up toi 5 levels of folders to tunj the deep copy
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))

});

// Compile sass into CSS & auto-inject into browsers
function gulpSass(){
    return gulp
        .src(['src/sass/*.s?ss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
}

// awesome feature to add : gulp-hugo


gulp.task(gulpSass);


gulp.task('purgecss', () => {
    return gulp.src('src/**/*.css')
        .pipe(purgecss({
            content: ['src/**/*.html']
        }))
        .pipe(gulp.dest('dist/css'))
})



/*
exports.views = () => {
  return src('./src/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./dist'));
};
*/

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

// Move the javascript files into our /dist/js folder
function jsDist(){
    return gulp
        .src(['src/js/*.js'])
        .pipe(gulp.dest("dist/js")).pipe(browserSync.stream());
}
// Move the CSS files into our /dist/css folder
function cssDist(){
    return gulp
        .src(['src/css/*.css'])
        .pipe(gulp.dest("dist/css")).pipe(browserSync.stream());
}
// Move the HTML files into our /dist/ folder
function htmlDist(){
    return gulp
        .src(['src/*.html'])
        .pipe(gulp.dest("dist/")).pipe(browserSync.stream());
}

gulp.task(jsDist);
gulp.task(cssDist);
gulp.task(htmlDist);



// https://browsersync.io/docs/gulp
// Static Server + watching scss/html files
gulp.task('server', gulp.series('gulpSass', function() {
    browserSync.init({
        server: "./dist"
    });

    // gulp.watch('src/js/*.js', gulp.series('jsDev'));
    gulp.watch('src/js/*.js', gulp.series('gulpPug'));
    gulp.watch('src/sass/*.s?ss', gulp.series('gulpSass'));
    gulp.watch('src/js/*.js', gulp.series('purgecss'));
    gulp.watch('src/js/*.js', gulp.series('jsDist'));
    gulp.watch('src/js/*.js', gulp.series('cssDist'));
    gulp.watch('src/js/*.js', gulp.series('htmlDist'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));


gulp.task('serve', gulp.series('gulpPug', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist', 'server'));
// allDist after gulpPug: any html fiole in the src folder, overrides the rendered pug template in dist
gulp.task('dev', gulp.series('gulpSass', 'gulpPug', 'jsDist', 'cssDist', 'htmlDist', 'server'));
gulp.task('build', gulp.series('gulpPug', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
