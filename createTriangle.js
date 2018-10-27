const library = require("./src/generateTriangles.js");
const {generateLine ,leftTriangle ,rightTriangle} = library;
const main = function(){
  let position=process.argv[2];
  let height=process.argv[3];
  if(position=="left"){
    console.log(leftTriangle(height));
  }
  if(position=="right"){
    console.log(rightTriangle(height));
  }
}
main();
