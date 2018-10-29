const library = require("./patternUtil.js");
const generateLine = library.generateLine;
const generateHollowLine = library.generateHollowLine;


const createFilledUpperPart=function(width){
  let upperPart ="";
  let symbol="*";
  let delimeter="";

  for(let lineNo=width;lineNo>=0;lineNo-=2){
    let spacesOnLeft="";
    spacesOnLeft+=generateLine(" ",((lineNo-1)/2));
    upperPart+= delimeter + spacesOnLeft + symbol;
    delimeter="\n";
    symbol+="**";
  }
  return upperPart;
}

const createFilledLowerPart=function(width){
  let spacesOnLeft=" ";
  let delimeter="";
  let lowerPart="";
  for(let lineNo=width-2;lineNo>=0;lineNo-=2,spacesOnLeft+=" "){
    let symbol="*";
    symbol+=generateLine("*",(lineNo-1));
    lowerPart+=delimeter+spacesOnLeft+symbol;
    delimeter="\n";
  }
  return lowerPart;
}

const createEmptyUpperPart=function(width){
  let delimeter="";
  let upperPart="";
  let lineWidth=3;
  upperPart+= generateLine(" ",((width-1)/2))+"*"+"\n";
  for (lineNo=width-2;lineNo>0;lineNo-=2,lineWidth+=2){
    upperPart+=delimeter+ generateLine(" ",((lineNo-1)/2));
    upperPart+= generateHollowLine(lineWidth,"*"," ","*");
    delimeter="\n";
  }
  return upperPart;
}

const createEmptyLowerPart=function(width){
  let lowerPart="";
  let lineWidth=width-2;
  let leftSpaces=1;
  for(let lineNo=width-2;lineNo>1;lineNo-=2,lineWidth-=2){
    lowerPart+=generateLine(" ",leftSpaces)
    lowerPart+=generateHollowLine(lineWidth,"*"," ","*")+"\n";
    leftSpaces+=1;
  }
  lowerPart+=generateLine(" ",((width-1)/2))+"*";
  return lowerPart;
}

const createAngledUpperPart=function(width){
  let delimeter="";
  let upperPart="";
  let lineWidth=3;
  upperPart+= generateLine(" ",((width-1)/2))+"*"+"\n";
  for (lineNo=width-2;lineNo>=3;lineNo-=2){
    upperPart+=delimeter+ generateLine(" ",((lineNo-1)/2));
    upperPart+=generateHollowLine(lineWidth,"/"," ","\\");
    delimeter="\n";
    lineWidth+=2;
  }
  upperPart+=delimeter+generateHollowLine(lineWidth,"*"," ","*");
  return upperPart;
}

const createAngledLowerPart=function(width){
  let lowerPart="";
  let lineWidth=width-2;
  let leftSpaces=1;
  for(let lineNo=width-2;lineNo>1;lineNo-=2,lineWidth-=2){
    lowerPart+=generateLine(" ",leftSpaces)
    lowerPart+=generateHollowLine(lineWidth,"\\"," ","/")+"\n";
    leftSpaces+=1;
  }
  lowerPart+=generateLine(" ",((width-1)/2))+"*";
  return lowerPart;
}

const createDiamond=function(type,width){
  let angledDiamond = createAngledUpperPart(width) +"\n"+ createAngledLowerPart(width);
  let emptyDiamond = createEmptyUpperPart(width) + "\n" + createEmptyLowerPart(width);
  let filledDiamond = createFilledUpperPart(width)+"\n"+createFilledLowerPart(width);
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
  let rectangle="";
  let delimeter="";
  let line =generateLine("*",breadth);
  for (let lineNo=0;lineNo<altitude;lineNo++){
    rectangle+= delimeter+line;
    delimeter="\n";
  }
  return rectangle;
}

const alternateRectangle=function(breadth,altitude){
  let rectangle ="";
  for (let lineNo=0;lineNo<altitude;lineNo++){
    if (lineNo %2 == 0){
      rectangle+= generateLine("-",breadth);
    } else {
      rectangle+= generateLine("*",breadth)
    }
   rectangle = rectangle + "\n";
  }
  return rectangle;
}

const emptyRectangle=function(breadth,altitude){
  let rectangle  = "";
  for (let lineNo=1;lineNo<=altitude;lineNo++){
    if (lineNo==1 || lineNo==altitude){
      rectangle+= generateLine("*",breadth) + "\n";
    } else {
      rectangle+= generateHollowLine (breadth,"*"," ","*")+ "\n";
    }
  }
  return rectangle;
}

const createLeftTriangle=function(altitude){
  let line = "";
  let triangle = "";
  let delimeter = "";
  for (let lineNo=1;lineNo<=altitude;lineNo++){
    line+=generateLine("*",lineNo);
    triangle+= delimeter+line;
    line="";
    delimeter="\n";
  }
  return triangle;
}

const createRightTriangle=function(altitude){
  let line="";
  let noOfSymbols=0;
  let triangle = "";
  let delimeter = "";
  for (let lineNo=altitude;lineNo>0;lineNo--){
    line+= generateLine(" ",(lineNo-1));
    noOfSymbols = altitude-(lineNo-1);
    line+=generateLine("*",noOfSymbols)
    triangle+= delimeter+line;
    line="";
    delimeter="\n";
  }
  return triangle;
}

const generateRectangle = function (patternSpecification){
  let typeOfRectangle = patternSpecification.type;
  let width = patternSpecification.width;
  let height = patternSpecification.height;
  if(typeOfRectangle == "empty"){
    return (emptyRectangle(width,height));
  }

  if (typeOfRectangle == "filled"){
    return (createFilledRect(width,height));
  }

  if(typeOfRectangle == "alternate"){
    return (alternateRectangle(width,height));
  }
}

const generateTriangle = function (patternSpecification){
  let typeOfTriangle = patternSpecification.type;
  let height = patternSpecification.height;
  if(typeOfTriangle == "left"){
    return (createLeftTriangle(height));
  }
  if(typeOfTriangle == "right"){
    return (createRightTriangle(height));
  }
}

const generateDiamond = function (patternSpecification){
  let  typeOfDiamond = patternSpecification.type;
  let  height = patternSpecification.height;
  if (height%2==0){
    height = height+1;
  }
  if (typeOfDiamond=="angled"){
    return (createDiamond("angled",height));
  }
  if (typeOfDiamond=="empty"){
    return (createDiamond("empty",height));
  }
  if (typeOfDiamond=="filled"){
    return (createDiamond("filled",height));
  }
}
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
