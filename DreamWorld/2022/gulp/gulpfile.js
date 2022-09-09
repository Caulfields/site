const { src, dest, parallel, series, watch } = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')

function styles() {
  return src('./src/styles/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./public/styles/style.css'))
  .pipe(browserSync.stream())
}

exports.styles = styles

