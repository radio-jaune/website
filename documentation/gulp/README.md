# All I learnbed about gulp

* There are 2 main ways to use gulp : either with, or without babel. I used babel, so config file is `gulpfile.babel.js`

## Multiple `gulp.src`

When in one Gulp task, i need to work with multiple file sets `gulp.src`, I use `gulp-merge` to merge multiple streams :

  * https://github.com/gulpjs/gulp/blob/master/docs/recipes/using-multiple-sources-in-one-task.md
  * and what is important here, is that the two merged pipelines execute in parallel (not sequencially)



## Patterns to organize for Multiple environments

* https://www.freshconsulting.com/insights/blog/how-to-organize-your-gulp-js-development-builds-for-multiple-environments/
