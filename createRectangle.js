const generateRectangle = require("./src/patternLib.js").generateRectangle;
const main = function(){
  let typeOfRectangle = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  console.log(generateRectangle(typeOfRectangle,width,height));
}
main();

