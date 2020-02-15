const gulp = require("gulp"),
  sass = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  browserSync = require("browser-sync").create(),
  rename = require("gulp-rename"),
  svgstore = require("gulp-svgstore"),
  cheerio = require('gulp-cheerio'),
  posthtml = require("gulp-posthtml"),
  include = require("posthtml-include"),
  minify = require("gulp-csso"),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  run = require("run-sequence"),
  del = require("del"),
  uglify = require('gulp-uglify'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream');


/////// STYLE ///////
gulp.task('style', function () {
  return gulp.src('source/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({ stream: true }))
});


/////// JS ///////
gulp.task('js', function () {
  return gulp.src('source/js/main.js')
    .pipe(webpackStream({
      mode: 'production',
      output: {
        filename: 'app.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      }
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({ stream: true }))
});


/////// SERVE ///////
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "build/"
    }
  });
});


/////// SPRITE ///////
gulp.task("sprite", function () {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/sprite"))
    .pipe(browserSync.reload({ stream: true }))
});


/////// HTML ///////
gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({ stream: true }))
});


/////// IMAGES ///////
gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('webp', function () {
  return gulp.src('source/img/**/*.{png,jpg')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('build/img'));
});


/////// FONTS ///////
gulp.task('fonts', function () {
  return gulp.src('source/fonts/**/*.{woff,woff2}')
    .pipe(gulp.dest('build/fonts'))
    .pipe(browserSync.reload({ stream: true }))
});


/////// WATCH ///////
gulp.task('watch', function () {
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.parallel('style'));
  gulp.watch("source/js/**/*.js", gulp.parallel('js'));
  gulp.watch("source/*.html", gulp.parallel('html'));
});

/////// CLEAN ///////
gulp.task('clean', function () {
  del.sync('build');
});


gulp.task('build', gulp.series("clean", "fonts", "style", "images", "sprite", "html", "js"))
gulp.task('default', gulp.parallel("clean", "style", "html", "js", "images", "sprite", "fonts", "serve", "watch"));
