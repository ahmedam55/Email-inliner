var gulp = require('gulp')
var inlineCss = require('gulp-inline-css');

gulp.task('compile:email', function() {
    return gulp.src('src/**/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch:email',function(){
	return gulp.watch(['src/**/*.html','src/**/*.css'],['compile:email']);
});

gulp.task('default',['compile:email','watch:email']);
