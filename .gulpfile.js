const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('node-sass'));
const pug = require('gulp-pug');
const purgecss = require('gulp-purgecss');

var gutil = require('gulp-util'); // to access environment variables
const mkdirp = require('mkdirp');
const del = require('del');

const hugoBaseURL = (gutil.env.HUGO_BASE_URL === 'prod' ? 'si oui' : 'si non');
const ptiTestEnv = (gutil.env.HUGO_BLABLA === 'prod' ? 'si oui' : 'si non');

// Run Hugo to copy finished files over to public folder
gulp.task('testEnvDisplay', () => {
  console.warn(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
  console.warn(` >>>>>>>>>>>> testEnvDisplay() >> {ptiTestEnv|HUGO_BLABLA}=[${ptiTestEnv}]`)
  console.warn(` >>>>>>>>>>>> testEnvDisplay() >> {hugoBaseURL|HUGO_BASE_URL}=[${hugoBaseURL}]`)
  console.warn(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
  console.warn(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
  return gulp.pipe(browserSync.stream());
})

/***************************************************************
 *  ==>>>   | Clean (public folder)
 **/
var clean = require('gulp-dest-clean');

var hugoPrjFolder = './';
var hugoPublicFolder = 'public';

gulp.task('hugoPublicFolder', function () {
return gulp.src(hugoPublicFolder)
.pipe(clean(hugoPublicFolder, '/**'))
.pipe(newer(hugoPublicFolder))
.pipe(imagemin())
.pipe(gulp.dest(hugoPublicFolder));
});
/***************************************************************
 *  ==>>>   | Excute SEO tasks (in the website in public)
 **/
var gulpSeo = require('gulp-seo');

gulp.task('seo', function() {
let radioJauneConfiguration = {
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
 /// return gulp.src('public/index.html')
 return gulp.src('public/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'))
            .src('public/**/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'))
            .src('public/**/**/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'))
            .src('public/**/**/**/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'))
            .src('public/**/**/**/**/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'))
            .src('public/**/**/**/**/**/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'))
            .src('public/**/**/**/**/**/**/*.html')
            .pipe(gulpSeo(radioJauneConfiguration))
            .pipe(gulp.dest('./public'));
});
/***************************************************************
 *  ==>>>   | Excute hugo build (will egenrae the website in public)
 **/
var exec = require('child_process').exec;

// Run Hugo to copy finished files over to public folder
gulp.task('hugo', ['css', 'js'], function (fetch) {
    console.warn(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
    console.warn(` >>>>>>>>>>>> gulp.task('hugo') >> {ptiTestEnv|HUGO_BLABLA}=[${ptiTestEnv}]`)
    console.warn(` >>>>>>>>>>>> gulp.task('hugo') >> {hugoBaseURL|HUGO_BASE_URL}=[${hugoBaseURL}]`)
    console.warn(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
    console.warn(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`)
    return exec(`hugo -b ${hugoBaseURL}`, function (err, stdout, stderr) {
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

// Compile sass into CSS : to be used BEFORE hugo build
function gulpSass(){
    return gulp
        .src(['static/sass/*.s?ss'])
        .pipe(sass())
        .pipe(gulp.dest("static/css"))
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
 * PUBLIC TO DIST
 */

// Move the javascript files from ./public into our ./dist folder
function jsDist(){
    return gulp
        .pipe(clean('dist/js', '/**'))
        .pipe(newer('dist/js'))
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
    return gulp
        .pipe(clean('dist/css', '/**'))
        .pipe(newer('dist/css'))
        .src([
          'css/*.css',
          'css/**/*.css',
          'css/**/**/*.css',
          'css/**/**/**/*.css'
        ],{
        "base" : "./public"
        })
        .pipe(gulp.dest("dist/css")).pipe(browserSync.stream());
}
// Move the HTML files from ./public into our ./dist folder
function htmlDist(){
    return gulp
        .pipe(clean('dist/', '*.html'))
        .pipe(clean('dist/', '**/*.html'))
        .pipe(clean('dist/', '**/**/*.html'))
        .pipe(clean('dist/', '**/**/**/*.html'))
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


gulp.task('watch', gulp.series('gulpWatchBuild', function() {
    browserSync.init({
        server: "./dist"
    });

    // watch all hugo project files for change, rebuild all if changes
    gulp.watch('./config.toml', gulp.series('hugo', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./config.yaml', gulp.series('hugo', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./config.json', gulp.series('hugo', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./static/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./assets/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./themes/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./archetypes/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./content/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./data/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch('./layouts/**/*.*', gulp.series('hugo', 'gulpSass', 'purgecss', 'jsDist', 'cssDist', 'htmlDist'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

// - 'gulpSass' : compiles the sass from static/sass/ to static/css
// - 'hugo' : builds the hugo website to the public folder, catching all the sass-compiled static/css/ css files
// - 'hugo' : builds the hugo website to the public folder, catching all the sass-compiled static/css/ css files
// - 'jsDist' : copy all 'js' files from public/ to dist/
// - 'cssDist' : copy all 'css' files from public/ to dist/
// - 'htmlDist' : copy all 'html' files from public/ to dist/

// Copy recursive folder and all files from ./src to ./build DIR
// if you have copy all subcategories - use /



//
//          the sass from static/sass/
// ++

gulp.task('buildDev', gulp.series('gulpSass', 'hugo', 'jsDist', 'cssDist', 'htmlDist'));
gulp.task('dev', gulp.series('gulpSass', 'purgecss', 'hugo', 'jsDist', 'cssDist', 'htmlDist', 'server', 'hugo'));
gulp.task('serve', gulp.series('gulpSass', 'purgecss', 'hugo', 'jsDist', 'cssDist', 'htmlDist', 'server', 'hugo', 'watch'));
// allDist after hugo: any html fiole in the src folder, overrides the rendered pug template in dist
