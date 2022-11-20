var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./timeTrack/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./timeTrack'));
});
