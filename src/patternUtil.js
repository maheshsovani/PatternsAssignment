const generateLine=function(character,width){
  return new Array(width).fill(character).join("");
}

const spaceLineGenerator = function(width){
  return generateLine(" ",width);
}

const starLineGenerator = function(width){
  return generateLine("*",width);
}

const generateHollowLine=function(width,startChar,endChar){
  if(width < 2 ){width = 2}
  let hollowLine = startChar + spaceLineGenerator(width-2)+ endChar;
  return hollowLine;
}

const tipGenerator = function(width){
  let spacesToAdd = Math.floor((width-1)/2);
  return spaceLineGenerator(spacesToAdd)+"*";
}

const emptyLineGenerator = function(width){
  return generateHollowLine(width,"*","*");
}

const angledLineGenerator = function(width){
 return generateHollowLine(width,"/","\\");
}

const centreJustifier = function(width,message){
  let spacesToAdd = width-message.length;
  return spaceLineGenerator(Math.floor(spacesToAdd/2))+message;
}


const createDiamondSeries = function(height){
  let series = [];
  for (let count = 3 ; count <= height ; count+= 2){
    series.push(count);
  }
  let duplicateSeries = series.slice(0);
  duplicateSeries.pop();
  let reversed = duplicateSeries.reverse();
  return series.concat(reversed);
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

exports.createDiamondSeries = createDiamondSeries;
exports.centreJustifier = centreJustifier;
exports.emptyLineGenerator = emptyLineGenerator;
exports.generateHollowLine = generateHollowLine;
exports.readUserInput = readUserInput;
exports.spaceLineGenerator= spaceLineGenerator;
exports.starLineGenerator= starLineGenerator ;
exports.generateLine = generateLine;
exports.tipGenerator = tipGenerator;
exports.angledLineGenerator = angledLineGenerator; 
