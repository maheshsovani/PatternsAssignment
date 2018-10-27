const generateDiamond = require("./src/patternLib.js").generateDiamond;
const main = function (){
  let typeOfDiamond = process.argv[2];
  let width = +process.argv[3];
  console.log(generateDiamond(typeOfDiamond,width));
}
main();

