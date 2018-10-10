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

const main=function(type){
  let typeOfDiamond=process.argv[2];
  let width=+process.argv[3];
  if (width%2==0){
    width=width+1;
  }
  if (typeOfDiamond=="angled"){
    console.log(createDiamond("angled",width));
  }
  if (typeOfDiamond=="empty"){
    console.log(createDiamond("empty",width));
  }
  if (typeOfDiamond=="filled"){
    console.log(createDiamond("filled",width));
  }
}
main();
