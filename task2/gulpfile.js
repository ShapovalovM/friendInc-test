var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    autoprefix  = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

gulp.task('build', ['css', 'js']);

gulp.task('css', function(){
    gulp.src('src/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(autoprefix ('last 2 version', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
    gulp.src('src/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
});
