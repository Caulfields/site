const { src, dest, series, parallel, watch } = require("gulp"); 
const sass = require("gulp-sass");

function sass() {
	return src("app/sass/**/*.scss") // берём все SASS-файлы 
			.pipe(sass()) // компилируем SASS в CSS 
			.pipe(dest("dist/aseets/css/")); // выгружаем результат 
}

exports.sass = sass;