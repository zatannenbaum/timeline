#!/bin/bash

cp ./frontend/dist/inline.bundle.js ./timelineapp/static/inline.bundle.js
cp ./frontend/dist/inline.bundle.js.map ./timelineapp/static/inline.bundle.js.map

cp ./frontend/dist/main.bundle.js ./timelineapp/static/main.bundle.js
cp ./frontend/dist/main.bundle.js.map ./timelineapp/static/main.bundle.js.map

cp ./frontend/dist/polyfills.bundle.js ./timelineapp/static/polyfills.bundle.js
cp ./frontend/dist/polyfills.bundle.js.map ./timelineapp/static/polyfills.bundle.js.map

cp ./frontend/dist/styles.bundle.js ./timelineapp/static/styles.bundle.js
cp ./frontend/dist/styles.bundle.js.map ./timelineapp/static/styles.bundle.js.map

cp ./frontend/dist/vendor.bundle.js ./timelineapp/static/vendor.bundle.js
cp ./frontend/dist/vendor.bundle.js.map ./timelineapp/static/vendor.bundle.js.map

echo "done copying"
