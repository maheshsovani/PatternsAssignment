const generateLine=function(character,length){
  let generatedLine="";
  for (characterNo=0;characterNo<length;characterNo++){
    generatedLine+= character;
  }
  return generatedLine;
}

exports.generateLine = generateLine;

