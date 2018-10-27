const library = require("./src/generateDiamond.js")
const {generateLine,generateMiddleLine ,createFilledUpperPart,createFilledLowerPart,createEmptyUpperPart,
  createEmptyLowerPart, createAngledUpperPart,createAngledLowerPart,createDiamond } = library;
const main=function(type){
  let typeOfDiamond=process.argv[2];
  let width=+process.argv[3];
  if (width%2==0){
    width=width+1;
  }
  if (typeOfDiamond=="angled"){
    console.log(createDiamond("angled",width));
  }
  if (typeOfDiamond=="empty"){
    console.log(createDiamond("empty",width));
  }
  if (typeOfDiamond=="filled"){
    console.log(createDiamond("filled",width));
  }
}
main();

