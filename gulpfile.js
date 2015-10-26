// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
//var jshint = require('gulp-jshint');

//var sass = require('gulp-sass');

var gutil = require('gulp-util');

//for js
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var filesize = require('gulp-filesize');

//for css
var cssConcat = require('gulp-concat-css');
var cssMinify = require('gulp-minify-css');

// Lint Task
/* 
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}); 
*/

// Compile Our Sass
/*
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});
*/

gulp.task('scripts', function() {  
  return gulp.src(
		[
			'Scripts/jquery-1.10.2.js',
			'Scripts/knockout-2.2.0.js',
			'Scripts/jquery-ui-1.10.4.custom.js',
			'Scripts/jquery.formatter.js',
			'Scripts/bootstrap/bootstrap.js',
			'Scripts/DataTables-1.9.4/media/js/jquery.dataTables.js',
			'Scripts/jquery.formatter.js',
			'Scripts/bootstrap/html5shiv.js',
			'Scripts/bootstrap/respond.js',
			'Scripts/jquery.pnotify.js',
			'Scripts/kittolib.js',
			'Scripts/mymain.js'
		]
	)
    .pipe(concat('concatscript.js'))
    .pipe(gulp.dest('Scripts'))
    .pipe(filesize())
    .pipe(uglify())
    .pipe(rename('all.js'))
    .pipe(gulp.dest('Scripts'))
    .pipe(filesize())
    .on('error', gutil.log)
});

gulp.task('Styles', function() {
    return gulp.src(
			[
				'Content/bootstrap/css/bootstrap.css',
				'Content/bootstrap/css/bootstrap-theme.css',
				'Content/bootstrap/css/non-responsive.css',
				'Content/bootstrap/css/bootstrap-ie8buttonfix.css',
				'Content/jquery.jqui/jquery-ui-1.10.3.custom.css',
				'Content/site.css',
				'Content/DataTables-1.9.4/media/css/jquery.dataTables.css',
				'Content/pnotify/jquery.pnotify.default.css',
				'Content/pnotify/jquery.pnotify.default.icons.css'
			]
		)
		.pipe(cssConcat('concatstyle.css'))
		.pipe(gulp.dest('Content'))
		.pipe(filesize())
        .pipe(cssMinify())
		.pipe(rename('all.css'))
        .pipe(gulp.dest('Content'))
		.pipe(filesize())
		.on('error', gutil.log)
});

// Concatenate & Minify JS
/*
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
*/

// Watch Files For Changes
/*
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});
*/

// Default Task
gulp.task('default', ['scripts','Styles']);