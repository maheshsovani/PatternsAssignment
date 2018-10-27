const generateTriangle = require("./src/patternLib.js").generateTriangle;
const main = function(){
  let typeOfTriangle = process.argv[2];
  let height = +process.argv[3];
  console.log(generateTriangle(typeOfTriangle,height));
}
main();
