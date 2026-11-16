#!/bin/sh
# Regenera assets/portal.js y assets/portal.css a partir de src/. Requiere: npm i -g terser clean-css-cli
# Tras compilar, sube el número de versión (?v=) en portal360.html.
cd "$(dirname "$0")/.." || exit 1
terser src/portal.js --compress --mangle -o assets/portal.js && cleancss -O1 -o assets/portal.css src/portal.css && echo "listo"
