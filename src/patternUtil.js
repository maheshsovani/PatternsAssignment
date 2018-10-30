const generateLine=function(character,width){
  return new Array(width).fill(character).join("");
}

const spaceLineGenerator = function(width){
  return generateLine(" ",width);
}

const starLineGenerator = function(width){
  return generateLine("*",width);
}

const generateHollowLine=function(width,startChar,middleChar,endChar){
  if(width < 2 ){width = 2}
  let hollowLine = startChar + spaceLineGenerator(width-2)+ endChar;
  return hollowLine;
}

const readUserInput = function (args){
  let typeOfPattern = args[2];
  let width = +args[3];
  let height = +args[4];
  if(isNaN(height)){
    height = width;
  }
  return {type : typeOfPattern , width:width , height:height };
}

exports.generateHollowLine = generateHollowLine;
exports.readUserInput = readUserInput;
exports.spaceLineGenerator= spaceLineGenerator;
exports.starLineGenerator= starLineGenerator ;
exports.generateLine = generateLine;

