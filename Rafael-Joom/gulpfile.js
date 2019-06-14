let gulp = require('gulp');
let less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');


let autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4','opera>=5', 'safari>=5', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
gulp.task('less', function () {
    return gulp.src('styles/main.less')

    .pipe(less())
        .pipe(autoprefixer({
            browsers: autoprefixBrowsers,
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
});


// gulp.task('default', ['less']);





