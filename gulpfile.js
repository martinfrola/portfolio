const { src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const webp = require('gulp-webp');



const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('./build/css') );
}
function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ sufix: 'min.'}))
        .pipe(dest('./build/js'))
}

function imaganes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({optimizationLevel: 3})))
        .pipe(dest('build/img'))
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('build/img'))
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript)
    watch(paths.imagenes, imaganes)
    watch(paths.imagenes, versionWebp);
}


exports.default = parallel(css, javascript, imaganes, versionWebp, watchArchivos);

