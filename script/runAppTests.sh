#! /bin/zsh
set -xe

./script/run_test.sh ./createDiamond.js ./appTestData/input/diamondInput ./appTestData/output/diamondOutput ;
./script/run_test.sh ./createTriangle.js ./appTestData/input/triangleInput ./appTestData/output/triangleOutput ;
./script/run_test.sh ./createRectangle.js ./appTestData/input/rectangleInput ./appTestData/output/rectangleOutput; 
