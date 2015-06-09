var gulp = require('gulp');

var typescript = require('gulp-tsc');

gulp.task('compile', function(){
    gulp.src(['app/**/*.ts'])
        .pipe(typescript({out: 'app.js', sourceMap: true}))
        .pipe(gulp.dest('dest/'))
});

gulp.task('default', ['compile'], function() {
    // place code for your default task here
});