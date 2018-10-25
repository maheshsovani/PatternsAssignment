const generateLine=function(character,length){
  let generatedLine="";
  for(let number=1;number<=length;number++){
    generatedLine+=character;
  }
  return generatedLine;
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

const main = function(){
  let pattern=process.argv[2];
  let width=+process.argv[3];
  let height=+process.argv[4];

  if(pattern==="empty"){
    console.log(emptyRectangle(width,height));
  }

  if (pattern=="filled"){
    console.log(filledRectangle(width,height));
  }

  if(pattern=="alternate"){
    console.log(alternateRectangle(width,height));
  }
}
main();
