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


exports.generateHollowLine = generateHollowLine;
exports.generateLine = generateLine;

