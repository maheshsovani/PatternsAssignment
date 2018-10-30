const library = require("./patternUtil.js");
const generateLine = library.generateLine;
const generateHollowLine = library.generateHollowLine;
const starLineGenerator = library.starLineGenerator;
const spaceLineGenerator = library.spaceLineGenerator;


const createFilledUpperPart=function(width){
  let symbol="*";
  let filledDiamondUpper = [];

  for(let lineNo=width;lineNo>=0;lineNo-=2){
    let spacesOnLeft = spaceLineGenerator((lineNo-1)/2);
    line = spacesOnLeft + symbol;
    filledDiamondUpper.push(line)
    symbol+="**";
  }
  return filledDiamondUpper;
}

const createFilledLowerPart=function(width){
  let spacesOnLeft=" ";
  let filledDiamondLower = [];

  for(let lineNo=width-2;lineNo >= 0;lineNo-=2,spacesOnLeft+=" "){
    let symbols = starLineGenerator(lineNo);
    line = spacesOnLeft+symbols;
    filledDiamondLower.push(line)
  }
  return filledDiamondLower;
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
  let filledDiamond = createFilledUpperPart(width).concat(createFilledLowerPart(width));
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

const createFilledRect=function(breadth,altitude){
  let rectangle = [];
  let line = starLineGenerator(breadth);
  for (let lineNo=0;lineNo<altitude;lineNo++){
    rectangle.push(line);
  }
  return rectangle;
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
  let triangle = [];
  for (let lineNo=1;lineNo<=altitude;lineNo++){
    let line = starLineGenerator(lineNo);
    triangle.push(line);
  }
  return triangle;
}

const justifyRight = function(width,symbols){
  let spacesToAdd = width - symbols.length;
  return spaceLineGenerator(spacesToAdd) + symbols;
}

const createRightTriangle=function(altitude){
  let triangle = [];
  let symbols = "";
  let line = "";
  for (let lineNo = 1;lineNo <= altitude;lineNo++){
     symbols = starLineGenerator(lineNo);
      line = justifyRight(altitude,symbols);
    triangle.push(line);
    symbols = "";
    line = "";
  }
  return triangle;
}

const generateRectangle = function (patternSpecification){
  let typeOfRectangle = patternSpecification.type;
  let width = patternSpecification.width;
  let height = patternSpecification.height;
  if(typeOfRectangle == "empty"){
    return emptyRectangle(width,height).join("\n");
  }

  if (typeOfRectangle == "filled"){
    return createFilledRect(width,height).join("\n");
  }

  if(typeOfRectangle == "alternate"){
    return alternateRectangle(width,height).join("\n");
  }
}

const generateTriangle = function (patternSpecification){
  let typeOfTriangle = patternSpecification.type;
  let width = patternSpecification.height;
  if(typeOfTriangle == "left"){
    return createLeftTriangle(width).join("\n");
  }
  if(typeOfTriangle == "right"){
    return createRightTriangle(width).join("\n");
  }
}

const generateDiamond = function (patternSpecification){
  let  typeOfDiamond = patternSpecification.type;
  let  height = patternSpecification.height;
  if (height %2 == 0){
    height = height+1;
  }
  if (typeOfDiamond=="angled"){
    return createDiamond("angled",height).join("\n");
  }
  if (typeOfDiamond=="empty"){
    return createDiamond("empty",height).join("\n");
  }
  if (typeOfDiamond=="filled"){
    return createDiamond("filled",height).join("\n");
  }
}
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
