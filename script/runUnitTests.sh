set -e 
echo " testing patternLibraryTest and patternUtilTest"
echo ""
node  ./test/patternLibTest.js
node ./test/patternUtilTest.js
echo " test passed"
