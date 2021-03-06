const library = require("./patternUtil.js");
const {angledLineGenerator,createDiamondSeries } = library ;
const {centreJustifier,emptyLineGenerator, generateLine } = library ; 
const {generateHollowLine, starLineGenerator ,spaceLineGenerator} = library;

const createFilledDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let tip = "*";
  let justify = centreJustifier(width);
  let diamond = seriesOfLines.map(starLineGenerator);
  diamond.push(tip)
  diamond.unshift(tip);
  return diamond.map(justify);
}

const createEmptyDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let justify = centreJustifier(width);
  let tip = "*";
  let diamond =seriesOfLines.map(emptyLineGenerator);
  diamond.push(tip);
  diamond.unshift(tip);
  return diamond.map(justify);
}

const createAngledDiamond = function(width){
  let seriesOfLines = createDiamondSeries(width);
  let tip = "*";
  let justify = centreJustifier(width);
  let halfWidth = (seriesOfLines.length/2);
  let upperHalf = seriesOfLines.slice(0,halfWidth);
  let upperPart = upperHalf.map(angledLineGenerator);
  let lower = upperPart.slice();
  let lowerHalf = lower.reverse();
  let lowerPart = lowerHalf.map(reverseElement);
  upperPart.push(emptyLineGenerator(width));
  let diamond = upperPart.concat(lowerPart);
  diamond.push(tip);
  diamond.unshift(tip);
  return diamond.map(justify);
}

const filledRectangle = function(width,height){
  let line = starLineGenerator(width);
  return Array(height).fill(line);
}

const alternateRectangle=function(width,height){
  let rectangle = [] ;
  for (let lineNo=0;lineNo<height;lineNo++){
    let line = starLineGenerator(width);
    if (lineNo %2 == 0){
      line = generateLine("-",width);
    }
    rectangle.push(line);
  }
  return rectangle;
}

const emptyRectangle=function(width,height){
  let rectangle  = [];
  let hollowLine = generateHollowLine(width,"*","*");
  let starLine = starLineGenerator(width);
  rectangle.push(starLine);
  for (let lineNo=1;lineNo<height-1;lineNo++){
    rectangle.push(hollowLine);
  }
  rectangle.push(starLine);
  return rectangle;
}

const createLeftTriangle=function(height){
  return createRightTriangle(height).map(reverseElement);
}

const reverseElement = function(element){
  return element.split("").reverse().join("")
}

const justifyRight = function(width,symbols){
  let spacesToAdd = width - symbols.length;
  return spaceLineGenerator(spacesToAdd) + symbols;
}

const createRightTriangle=function(height){
  let triangle = [];
  for (let lineNo = 1;lineNo <= height;lineNo++){
    let symbols = starLineGenerator(lineNo);
    let line = justifyRight(height,symbols);
    triangle.push(line);
  }
  return triangle;
}

const generateRectangle = function (patternSpecification){
  let pattern = {};
  let typeOfRectangle = patternSpecification.type;
  let width = patternSpecification.width;
  let height = patternSpecification.height;
  pattern["empty"] = emptyRectangle(width,height).join("\n");
  pattern["filled"] = filledRectangle(width,height).join("\n");
  pattern["alternate"] = alternateRectangle(width,height).join("\n");
  return pattern[typeOfRectangle];
}

const generateTriangle = function (patternSpecification){
  let pattern = {};
  let type = patternSpecification.type;
  let width = patternSpecification.height;
  pattern["left"] = createLeftTriangle(width).join("\n")
  pattern["right"] = createRightTriangle(width).join("\n")
  return pattern[type];
}

const generateDiamond = function (patternSpecification){
  let pattern = {};
  let typeOfDiamond = patternSpecification.type;
  let givenHeight = patternSpecification.height ;
  let checkHeight = [givenHeight-1,givenHeight]
  let height = checkHeight[givenHeight%2];
  pattern["angled"] = createAngledDiamond(height).join("\n"); 
  pattern["empty"] = createEmptyDiamond(height).join("\n"); 
  pattern["filled"] = createFilledDiamond(height).join("\n"); 
  return pattern[typeOfDiamond];
}

exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
