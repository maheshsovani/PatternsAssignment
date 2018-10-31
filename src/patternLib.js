const library = require("./patternUtil.js");
const {angledLineGenerator,tipGenerator,createDiamondSeries } = library ;
const {centreJustifier,emptyLineGenerator, generateLine } = library ; 
const {generateHollowLine, starLineGenerator ,spaceLineGenerator} = library;

const createFilledDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let diamond =[];
  diamond.push(tipGenerator(width));
  let series = seriesOfLines.map(starLineGenerator);
  for (let index=0 ; index < seriesOfLines.length;index++){
    diamond.push(centreJustifier(width,series[index]));
  }
  diamond.push(tipGenerator(width));
  return diamond;
}

const createEmptyDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let emptyDiamond = [];
  let diamond = [];
  emptyDiamond.push(tipGenerator(width));
  diamond = seriesOfLines.map(emptyLineGenerator);
  for (let index=0;index<diamond.length;index++){
    emptyDiamond.push(centreJustifier(width,diamond[index]));
  }
  emptyDiamond.push(tipGenerator(width));
  return emptyDiamond;
}

const createAngledDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let angledDiamond = [];
  angledDiamond.push(tipGenerator(width));
  let halfWidth = (seriesOfLines.length/2);
  let upperHalf = seriesOfLines.slice(0,halfWidth);
  let upperPart = upperHalf.map(angledLineGenerator);
  let lower = upperPart.slice();
  let lowerHalf = lower.reverse();
  let lowerPart = lowerHalf.map(reverseElement);
  upperPart.push(emptyLineGenerator(width));
  let diamond = upperPart.concat(lowerPart);
  for (let index=0;index<diamond.length;index++){
    angledDiamond.push(centreJustifier(width,diamond[index]));
  }
  angledDiamond.push(tipGenerator(width));
  return angledDiamond;
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
  let  height = patternSpecification.height ;
  let pattern = {};
  if (height %2 == 0){
    height = height+1;
  }
  pattern["angled"] = createAngledDiamond(height).join("\n"); 
  pattern["empty"] = createEmptyDiamond(height).join("\n"); 
  pattern["filled"] = createFilledDiamond(height).join("\n"); 
  return pattern[typeOfDiamond];
}

exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
