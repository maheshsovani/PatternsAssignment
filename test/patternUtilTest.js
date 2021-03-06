const assert = require("assert");
const library = require("../src/patternUtil.js");
const {angledLineGenerator,readUserInput,createDiamondSeries,centreJustifier, generateLine,starLineGenerator,emptyLineGenerator,generateHollowLine,spaceLineGenerator} = library ;

//----------Tets cases for angled line generator function----------//

assert.deepStrictEqual(angledLineGenerator(0),"/\\");
assert.deepStrictEqual(angledLineGenerator(1),"/\\");
assert.deepStrictEqual(angledLineGenerator(2),"/\\");
assert.deepStrictEqual(angledLineGenerator(3),"/ \\");
assert.deepStrictEqual(angledLineGenerator(5),"/   \\");

//----------Tets cases for generate line function----------//

assert.deepStrictEqual(generateLine("",9),"");
assert.deepStrictEqual(generateLine("*",1),"*");
assert.deepStrictEqual(generateLine(" ",5),"     ");
assert.deepStrictEqual(generateLine("-",3),"---");
assert.deepStrictEqual(generateLine("ii",3),"iiiiii");

//----------Tets cases for star line generator function----------//

assert.deepStrictEqual(starLineGenerator(0),"");
assert.deepStrictEqual(starLineGenerator(1),"*");
assert.deepStrictEqual(starLineGenerator(2),"**");
assert.deepStrictEqual(starLineGenerator(5),"*****");

//----------Tets cases for generate line function----------//

assert.deepStrictEqual(spaceLineGenerator(0),"");
assert.deepStrictEqual(spaceLineGenerator(1)," ");
assert.deepStrictEqual(spaceLineGenerator(3),"   ");
assert.deepStrictEqual(spaceLineGenerator(5),"     ");

//----------Tets cases for generate hollow line function----------//

assert.deepStrictEqual(generateHollowLine(0,"*","*"),"**");
assert.deepStrictEqual(generateHollowLine(1,"*","*"),"**");
assert.deepStrictEqual(generateHollowLine(2,"*","*"),"**");
assert.deepStrictEqual(generateHollowLine(3,"*","*"),"* *");
assert.deepStrictEqual(generateHollowLine(5,"*","*"),"*   *");

//----------Tets cases for empty line generator function----------//

assert.deepStrictEqual(emptyLineGenerator(0),"**");
assert.deepStrictEqual(emptyLineGenerator(1),"**");
assert.deepStrictEqual(emptyLineGenerator(2),"**");
assert.deepStrictEqual(emptyLineGenerator(3),"* *");
assert.deepStrictEqual(emptyLineGenerator(5),"*   *");

//----------Tets cases for centre justifier function----------//

let justify = centreJustifier(1);
let actualOutput = justify("*");
assert.deepStrictEqual(actualOutput,"*");

justify = centreJustifier(2);
actualOutput = justify("*");
assert.deepStrictEqual(actualOutput,"*");

justify = centreJustifier(3);
actualOutput = justify("*");
assert.deepStrictEqual(actualOutput," *");

justify = centreJustifier(5);
actualOutput = justify("*");
assert.deepStrictEqual(actualOutput,"  *");

//----------Tets cases for create Diamond series function----------//

assert.deepStrictEqual(createDiamondSeries(0),[]);
assert.deepStrictEqual(createDiamondSeries(1),[]);
assert.deepStrictEqual(createDiamondSeries(2),[]);
assert.deepStrictEqual(createDiamondSeries(3),[3]);
assert.deepStrictEqual(createDiamondSeries(5),[3,5,3]);


//----------Tets cases for generate read user input function----------//

let inputArgs = [ "node","createRect.js", "filled", "10", "10"];
let expectedOutput = {type : "filled", width : 10, height : 10}
assert.deepStrictEqual(readUserInput(inputArgs), expectedOutput);

inputArgs = [ "node","createRect.js", "alternate", "5", "5"];
expectedOutput = {type : "alternate", width : 5, height : 5}
assert.deepStrictEqual(readUserInput(inputArgs), expectedOutput);

inputArgs = ["node", "createDiamond.js", "angled", "9", "7"];
expectedOutput = {type : "angled", width : 9, height : 7}
assert.deepStrictEqual(readUserInput(inputArgs), expectedOutput);

inputArgs = ["node","createDIamond.js", "empty", "9"];
expectedOutput = {type : "empty", width : 9, height : 9}
assert.deepStrictEqual(readUserInput(inputArgs), expectedOutput);

inputArgs = [ "node","createTriangle.js", "right", "9"];
expectedOutput = {type : "right", width : 9, height : 9}
assert.deepStrictEqual(readUserInput(inputArgs), expectedOutput);

inputArgs = [ "node","createTriangle.js", "left", "9"];
expectedOutput = {type : "left", width : 9, height : 9}
assert.deepStrictEqual(readUserInput(inputArgs), expectedOutput);

