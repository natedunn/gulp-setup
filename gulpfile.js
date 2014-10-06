// Dependencies 
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    takana = require('takana'),
    browserSync = require('browser-sync');

// Styles
gulp.task('styles', function() {
  return gulp.src('src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'nested' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('src/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'STYLES task complete' }))
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['src/js/vendor/*.js','src/js/plugins.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))    
    .pipe(gulp.dest('src/js/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist/js/'))
    .pipe(notify({ message: 'SCRIPTS task complete' }));
});

// Images 
gulp.task('images', function () {
    return gulp.src('src/images/*')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'IMAGES task complete' }));
});

// Browser-sync
gulp.task('sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Takana
gulp.task('takana', function() {
  takana.run({
    path: __dirname
  });
});

// Watch 
gulp.task('watch', function (){
    gulp.watch('src/sass/**/*.scss', ['styles', 'bs-reload'])
    gulp.watch('src/js/**/*.js', ['scripts', 'bs-reload'])
    gulp.watch('index.html', ['bs-reload']);
});

// Watcher (include Browser-Sync, Takana, and Watch)
gulp.task('watcher', ['watch', 'sync', 'takana']);


// Default
gulp.task('default', ['js', 'styles', 'images']);
