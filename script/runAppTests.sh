#! /bin/zsh
set -xe

./script/run_test.sh ./createDiamond.js ./appTestData/input/diamond ./appTestData/output/diamond;
./script/run_test.sh ./createTriangle.js ./appTestData/input/triangle ./appTestData/output/triangle;
./script/run_test.sh ./createRectangle.js ./appTestData/input/rectangle ./appTestData/output/rectangle; 
