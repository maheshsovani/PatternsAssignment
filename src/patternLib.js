const library = require("./patternUtil.js");
const {createDiamondSeries ,centreJustifier,emptyLineGenerator , generateLine,generateHollowLine , starLineGenerator ,spaceLineGenerator} = library;

const createFilledDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let diamond = [];
  let series = seriesOfLines.map(starLineGenerator);
  for (let index=0;index<width;index++){
    diamond.push(centreJustifier(width,series[index]));
  }
  return diamond;
}

const createEmptyUpperPart=function(width){
  let emptyUpperPart= [];
  let lineWidth=3;
  let upperLine = spaceLineGenerator((width-1)/2) +  "*";
  emptyUpperPart.push(upperLine);

  for ( lineNo = width-2 ; lineNo>0 ; lineNo-=2 ,lineWidth+=2 ){
    let line = spaceLineGenerator((lineNo-1)/2); 
    line += generateHollowLine(lineWidth,"*"," ","*");
    emptyUpperPart.push(line);
    line = "";
  }
  return emptyUpperPart;
}

const createEmptyLowerPart=function(width){
  let emptyLowerPart = [];
  let leftSpaces=1;
  let lastLine = spaceLineGenerator((width-1)/2)+"*";
  for(let lineNo = width-2;lineNo>1;lineNo-=2){
    let line = spaceLineGenerator(leftSpaces);
    line+= generateHollowLine(lineNo,"*"," ","*");
    emptyLowerPart.push(line);
    line ="";
    leftSpaces+=1;
  }
  emptyLowerPart.push( lastLine);
  return emptyLowerPart;
}

const createAngledUpperPart=function(width){
  let angledUpperPart = [] ;
  let lineWidth=3;
  let firstLine = spaceLineGenerator((width-1)/2)+"*";
  angledUpperPart.push( firstLine);

  for (lineNo = width-2 ;lineNo >= 3 ;lineNo-= 2){
    let line = spaceLineGenerator((lineNo-1)/2);
    line += generateHollowLine(lineWidth,"/"," ","\\");
    angledUpperPart.push(line);
    line = "";
    lineWidth+=2;
  }
  angledUpperPart.push(generateHollowLine(lineWidth,"*"," ","*"));
  return angledUpperPart;
}

const createAngledLowerPart=function(width){
  let angledLowerPart = [];
  let lineWidth=width-2;
  let leftSpaces=1;

  for(let lineNo = width-2;lineNo > 1;lineNo-= 2,lineWidth-= 2){
    let line = spaceLineGenerator(leftSpaces)
    line += generateHollowLine(lineWidth,"\\"," ","/");
    angledLowerPart.push(line);
    line = "";
    leftSpaces+=1;
  }
  angledLowerPart.push(spaceLineGenerator((width-1)/2)+"*");
  return angledLowerPart;
}

const createDiamond=function(type,width){
  let angledDiamond = createAngledUpperPart(width).concat(createAngledLowerPart(width));
  let emptyDiamond = createEmptyUpperPart(width).concat(createEmptyLowerPart(width));
  let filledDiamond = createFilledDiamond(width);
  if (type=="angled"){
    return angledDiamond;
  }
  if (type=="empty"){
    return emptyDiamond;
  }
  if(type=="filled"){
    return filledDiamond;
  }
}

const filledRectangle = function(breadth,altitude){
  let line = starLineGenerator(breadth);
  return Array(altitude).fill(line);
}

const alternateRectangle=function(breadth,altitude){
  let rectangle = [] ;
  for (let lineNo=0;lineNo<altitude;lineNo++){
    let line = starLineGenerator(breadth);
    if (lineNo %2 == 0){
      line = generateLine("-",breadth);
    }
    rectangle.push(line);
  }
  return rectangle;
}

const emptyRectangle=function(breadth,altitude){
  let rectangle  = [];
  let hollowLine = generateHollowLine(breadth,"*"," ","*");
  for (let lineNo=1;lineNo<=altitude;lineNo++){
    line = hollowLine;
    if (lineNo==1 || lineNo==altitude){
      line = starLineGenerator(breadth);
    }
    rectangle.push(line);
  }
  return rectangle;
}

const createLeftTriangle=function(altitude){
  return createRightTriangle(altitude).map(reverseElement);
}

const reverseElement = function(element){
  return element.split("").reverse().join("")
}

const justifyRight = function(width,symbols){
  let spacesToAdd = width - symbols.length;
  return spaceLineGenerator(spacesToAdd) + symbols;
}

const createRightTriangle=function(altitude){
  let triangle = [];
  for (let lineNo = 1;lineNo <= altitude;lineNo++){
    let symbols = starLineGenerator(lineNo);
    let line = justifyRight(altitude,symbols);
    triangle.push(line);
  }
  return triangle;
}

const generateRectangle = function (patternSpecification){
  let typeOfRectangle = patternSpecification.type;
  let width = patternSpecification.width;
  let height = patternSpecification.height;
  let pattern = {};

  pattern["empty"] = emptyRectangle(width,height).join("\n");
  pattern["filled"] = filledRectangle(width,height).join("\n");
  pattern["alternate"] = alternateRectangle(width,height).join("\n");
  return pattern[typeOfRectangle];

}

const generateTriangle = function (patternSpecification){
  let type = patternSpecification.type;
  let width = patternSpecification.height;
  let pattern = {};
  pattern["left"] = createLeftTriangle(width).join("\n")
  pattern["right"] = createRightTriangle(width).join("\n")
  return pattern[type];
}

const generateDiamond = function (patternSpecification){
  let  typeOfDiamond = patternSpecification.type;
  let  height = patternSpecification.height;
  let pattern = {};
  if (height %2 == 0){
    height = height+1;
  }
  pattern["angled"] = createDiamond("angled",height).join("\n"); 
  pattern["empty"] = createDiamond("empty",height).join("\n"); 
  pattern["filled"] = createDiamond("filled",height).join("\n"); 
  return pattern[typeOfDiamond];
}

exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
