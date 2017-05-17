var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function(){
     gulp.src('src/SCSS/*.scss')
     .pipe(sass({
        style: 'compressed'
    }
    ))
   .pipe(gulp.dest('src/CSS'))

});