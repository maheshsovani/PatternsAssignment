const library = require("./src/generateRectangle.js")
const {generateLine ,filledRectangle ,alternateRectangle ,emptyRectangle} = library;
const main = function(){
  let pattern=process.argv[2];
  let width=+process.argv[3];
  let height=+process.argv[4];

  if(pattern==="empty"){
    console.log(emptyRectangle(width,height));
  }

  if (pattern=="filled"){
    console.log(filledRectangle(width,height));
  }

  if(pattern=="alternate"){
    console.log(alternateRectangle(width,height));
  }
}
main();

