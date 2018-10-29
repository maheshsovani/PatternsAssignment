const generateLine=function(character,length){
  let generatedLine="";
  for (characterNo=0;characterNo<length;characterNo++){
    generatedLine+= character;
  }
  return generatedLine;
}

const generateHollowLine=function(width,startChar,middleChar,endChar){
  let hollowLine="";
  hollowLine+=startChar+generateLine(middleChar,(width-2))+endChar;
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
exports.generateLine = generateLine;

