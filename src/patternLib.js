const generateLine=function(character,length){
  let generatedLine="";
  for (characterNo=0;characterNo<length;characterNo++){
    generatedLine +=character;
  }
  return generatedLine;
}

const generateMiddleLine=function(width,startChar,middleChar,endChar){
  let middleLine="";
  middleLine+=startChar+generateLine(middleChar,(width-2))+endChar;
  return middleLine;
}

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
    upperPart+=delimeter+ generateLine(" ",((lineNo-1)/2))+generateMiddleLine(lineWidth,"*"," ","*");
    delimeter="\n";
  }
  return upperPart;
}

const createEmptyLowerPart=function(width){
  let lowerPart="";
  let lineWidth=width-2;
  let leftSpaces=1;
  for(let lineNo=width-2;lineNo>1;lineNo-=2,lineWidth-=2){
    lowerPart+=generateLine(" ",leftSpaces)+generateMiddleLine(lineWidth,"*"," ","*")+"\n";
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
    upperPart+=delimeter+ generateLine(" ",((lineNo-1)/2))+generateMiddleLine(lineWidth,"/"," ","\\");
    delimeter="\n";
    lineWidth+=2;
  }
  upperPart+=delimeter+generateMiddleLine(lineWidth,"*"," ","*");
  return upperPart;
}

const createAngledLowerPart=function(width){
  let lowerPart="";
  let lineWidth=width-2;
  let leftSpaces=1;
  for(let lineNo=width-2;lineNo>1;lineNo-=2,lineWidth-=2){
    lowerPart+=generateLine(" ",leftSpaces)+generateMiddleLine(lineWidth,"\\"," ","/")+"\n";
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

const filledRectangle=function(breadth,altitude){
  let finalOutput="";
  let output="";
  let delimeter="";
  output+=generateLine("*",breadth);
  for (let lineNo=0;lineNo<altitude;lineNo++){
    finalOutput+=delimeter+output;
    delimeter="\n";
  }
  return finalOutput;
}

const alternateRectangle=function(breadth,altitude){
  let output="";
  for (let lineNo=0;lineNo<altitude;lineNo++){
    if (lineNo %2 ==0){
      output+=generateLine("-",breadth);
    } else {
      output+=generateLine("*",breadth)
    }
    output=output+"\n";
  }
  return output;
}

const emptyRectangle=function(breadth,altitude){
  let spaceAdder=0;
  let spaces="";
  let output="";
  let finalOutput="";
  spaces=generateLine(" ",(breadth-2))
  output=generateLine("*",breadth);
  for (let lineNo=1;lineNo<=altitude;lineNo++){
    if (lineNo==1 || lineNo==altitude){
      finalOutput+=output+"\n";
    } else {
      finalOutput+="*"+spaces+"*"+"\n";
    }
  }
  return finalOutput;
}

const leftTriangle=function(altitude){
  let line="";
  let output="";
  let delimeter="";
  for (let lineNo=1;lineNo<=altitude;lineNo++){
    line+=generateLine("*",lineNo);
    output+=delimeter+line;
    line="";
    delimeter="\n";
  }
  return output;
}

const rightTriangle=function(altitude){
  let line="";
  let noOfSymbols=0;
  let output="";
  let delimeter="";
  for (let lineNo=altitude;lineNo>0;lineNo--){
    line+=generateLine(" ",(lineNo-1));
    noOfSymbols=(altitude-(lineNo-1));
    line+=generateLine("*",noOfSymbols)
    output+=delimeter+line;
    line="";
    delimeter="\n";
  }
  return output;
}

const generateRectangle = function (typeOfRectangle,width,height){
  if(typeOfRectangle == "empty"){
    return (emptyRectangle(width,height));
  }

  if (typeOfRectangle == "filled"){
    return (filledRectangle(width,height));
  }

  if(typeOfRectangle == "alternate"){
    return (alternateRectangle(width,height));
  }
}

const generateTriangle = function (typeOfTriangle,height){
  if(typeOfTriangle == "left"){
    return (leftTriangle(height));
  }
  if(typeOfTriangle == "right"){
    return (rightTriangle(height));
  }
}

const generateDiamond = function (typeOfDiamond , width){
  if (width%2==0){
    width=width+1;
  }
  if (typeOfDiamond=="angled"){
    return (createDiamond("angled",width));
  }
  if (typeOfDiamond=="empty"){
    return (createDiamond("empty",width));
  }
  if (typeOfDiamond=="filled"){
    return (createDiamond("filled",width));
  }
}
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
