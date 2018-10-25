const generateLine=function(character,length){
  let generatedLine="";
  for (let index=1;index<=length;index++){
    generatedLine+=character;
  }
  return generatedLine;
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
const main = function(){
  let position=process.argv[2];
  let height=process.argv[3];
  if(position=="left"){
    console.log(leftTriangle(height));
  }
  if(position=="right"){
    console.log(rightTriangle(height));
  }
}
main();
