const library = require("../src/patternLib.js");
const library2 = require("../src/patternUtil.js");
const assert = require("assert");
const generateTriangle = library.generateTriangle;
const generateRectangle = library.generateRectangle;
const generateDiamond = library.generateDiamond;
const readUserInput = library2.readUserInput;

// Tests for left traingle with height 3 //
let actualOutput_left_3 = generateTriangle({type : "left" , height : 3});
let expectedOutput_left_3 = "";
expectedOutput_left_3 += "*  \n"; 
expectedOutput_left_3 += "** \n";
expectedOutput_left_3 += "***";
assert.deepStrictEqual(actualOutput_left_3,expectedOutput_left_3);

//Tests for left triangle with height 5 //
let actualOutput_left_5 = generateTriangle({type : "left" , height : 5});
let expectedOutput_left_5 = "";
expectedOutput_left_5 += "*    \n"; 
expectedOutput_left_5 += "**   \n";
expectedOutput_left_5 += "***  \n";
expectedOutput_left_5 += "**** \n";
expectedOutput_left_5 += "*****";
assert.deepStrictEqual(actualOutput_left_5,expectedOutput_left_5)

//Tests for left triangle with height 7 //
let actualOutput_left_7 = generateTriangle({type : "left" , height : 7});
let expectedOutput_left_7 = "";
expectedOutput_left_7 += "*      \n"; 
expectedOutput_left_7 += "**     \n";
expectedOutput_left_7 += "***    \n";
expectedOutput_left_7 += "****   \n";
expectedOutput_left_7 += "*****  \n";
expectedOutput_left_7 += "****** \n";
expectedOutput_left_7 += "*******";
assert.deepStrictEqual(actualOutput_left_7,expectedOutput_left_7);

//Tests for right traingle with height 3 //
let actualOutput_right_3 = generateTriangle({type : "right" , height:3});
let expectedOutput_right_3 = "";
expectedOutput_right_3 += "  *\n"; 
expectedOutput_right_3 += " **\n";
expectedOutput_right_3 += "***";
assert.deepStrictEqual(actualOutput_right_3,expectedOutput_right_3);

//Tests for right triangle with height 5 //
let actualOutput_right_5 = generateTriangle({type : "right" , height:5});
let expectedOutput_right_5 = "";
expectedOutput_right_5 += "    *\n"; 
expectedOutput_right_5 += "   **\n";
expectedOutput_right_5 += "  ***\n";
expectedOutput_right_5 += " ****\n";
expectedOutput_right_5 += "*****";
assert.deepStrictEqual(actualOutput_right_5,expectedOutput_right_5);

//Tests for right triangle with height 7 //
let actualOutput_right_7 = generateTriangle({type : "right" , height: 7});
let expectedOutput_right_7 = "";
expectedOutput_right_7 += "      *\n"; 
expectedOutput_right_7 += "     **\n";
expectedOutput_right_7 += "    ***\n";
expectedOutput_right_7 += "   ****\n";
expectedOutput_right_7 += "  *****\n";
expectedOutput_right_7 += " ******\n";
expectedOutput_right_7 += "*******";
assert.deepStrictEqual(actualOutput_right_7,expectedOutput_right_7)

//Tests for filled Rectangle with inputs 20 5 //
let actualOutput_filled_20_5 = generateRectangle({type : "filled", width:20 , height:5});
let expectedOutput_filled_20_5 = "";
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************"; 
assert.deepStrictEqual(actualOutput_filled_20_5,expectedOutput_filled_20_5);

//Tests for filled Rectangle with inputs 5 5 //
let actualOutput_filled_5_5 = generateRectangle({type : "filled" , width : 5 , height : 5});
let expectedOutput_filled_5_5 = "";
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****"; 
assert.deepStrictEqual(actualOutput_filled_5_5,expectedOutput_filled_5_5);

//Tests for filled Recatangle  with inputs 2 2 //
let actualOutput_filled_2_2 = generateRectangle({type : "filled", width : 2, height : 2});
let expectedOutput_filled_2_2 = "";
expectedOutput_filled_2_2 += "**\n"
expectedOutput_filled_2_2 += "**";
assert.deepStrictEqual(actualOutput_filled_2_2,expectedOutput_filled_2_2);

//Tests for filled Rectangle  with inputs 2 3 //
let actualOutput_filled_2_3 = generateRectangle({type : "filled" , width : 2, height : 3});
let expectedOutput_filled_2_3 = "";
expectedOutput_filled_2_3 += "**\n"
expectedOutput_filled_2_3 += "**\n";
expectedOutput_filled_2_3 += "**";
assert.deepStrictEqual(actualOutput_filled_2_3,expectedOutput_filled_2_3);

//Tests for empty Rectangle with inputs 5 5 //
let actualOutput_empty_5_5 =  generateRectangle({type : "empty", width : 5, height : 5});
let expectedOutput_empty_5_5 = "";
expectedOutput_empty_5_5 += "*****\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*****"; 
assert.deepStrictEqual(actualOutput_empty_5_5,expectedOutput_empty_5_5);

//Tests for empty Rectangle with inputs 20 5 //
let actualOutput_empty_20_5 = generateRectangle({type : "empty", width : 20, height : 5});
let expectedOutput_empty_20_5 = "";
expectedOutput_empty_20_5 += "********************\n"; 
expectedOutput_empty_20_5 += "*                  *\n"; 
expectedOutput_empty_20_5 += "*                  *\n"; 
expectedOutput_empty_20_5 += "*                  *\n"; 
expectedOutput_empty_20_5 += "********************"; 
assert.deepStrictEqual(actualOutput_empty_20_5,expectedOutput_empty_20_5);

//Tests for empty Rectangle  with inputs 2 2 //
let actualOutput_empty_2_2 = generateRectangle({type : "empty" ,width : 2, height : 2});
let expectedOutput_empty_2_2 = "";
expectedOutput_empty_2_2 += "**\n"
expectedOutput_empty_2_2 += "**";
assert.deepStrictEqual(actualOutput_empty_2_2,expectedOutput_empty_2_2);

//Tests for alternate Rectangle  with inputs 2 2 //
let actualOutput_alternate_2_2 = generateRectangle({type : "alternate" ,width : 2, height : 2});
let expectedOutput_alternate_2_2 = "";
expectedOutput_alternate_2_2 += "--\n"
expectedOutput_alternate_2_2 += "**";
assert.deepStrictEqual(actualOutput_alternate_2_2,expectedOutput_alternate_2_2);

//Tests for alternate Rectangle with inputs 5 5 //
let actualOutput_alternate_5_5 = generateRectangle({type : "alternate" , width : 5, height : 5});
let expectedOutput_alternate_5_5 = "";
expectedOutput_alternate_5_5 += "-----\n"; 
expectedOutput_alternate_5_5 += "*****\n"; 
expectedOutput_alternate_5_5 += "-----\n"; 
expectedOutput_alternate_5_5 += "*****\n"; 
expectedOutput_alternate_5_5 += "-----"; 
assert.deepStrictEqual(actualOutput_alternate_5_5,expectedOutput_alternate_5_5);

//Tests for alternate Rectangle with  inputs 3 3 //
let actualOutput_alternate_3_3 = generateRectangle({type : "alternate" , width : 3 , height : 3});
let expectedOutput_alternate_3_3 = "";
expectedOutput_alternate_3_3 += "---\n"; 
expectedOutput_alternate_3_3 += "***\n"; 
expectedOutput_alternate_3_3 += "---"; 
assert.deepStrictEqual(actualOutput_alternate_3_3,expectedOutput_alternate_3_3)

//Tests for alternate Rectangle with inputs  20 5 //
let actualOutput_alternate_20_5 = generateRectangle({type : "alternate" ,width : 20 ,height : 5});
let expectedOutput_alternate_20_5 = "";
expectedOutput_alternate_20_5 += "--------------------\n"; 
expectedOutput_alternate_20_5 += "********************\n"; 
expectedOutput_alternate_20_5 += "--------------------\n"; 
expectedOutput_alternate_20_5 += "********************\n"; 
expectedOutput_alternate_20_5 += "--------------------"; 
assert.deepStrictEqual(actualOutput_alternate_20_5,expectedOutput_alternate_20_5);

//Tests for filled Diamond with height 5 //
let actualOutput_filled_5 = generateDiamond({type : "filled" , height : 5});
let expectedOutput_filled_5 = "";
expectedOutput_filled_5 += "  *\n"; 
expectedOutput_filled_5 += " ***\n"; 
expectedOutput_filled_5 += "*****\n"; 
expectedOutput_filled_5 += " ***\n"; 
expectedOutput_filled_5 += "  *"; 
assert.deepStrictEqual(actualOutput_filled_5,expectedOutput_filled_5);

//Tests for filled Diamond with height 7 //
let actualOutput_filled_7 = generateDiamond({type : "filled" , height : 7});
let expectedOutput_filled_7 = "";
expectedOutput_filled_7 += "   *\n"; 
expectedOutput_filled_7 += "  ***\n"; 
expectedOutput_filled_7 += " *****\n"; 
expectedOutput_filled_7 += "*******\n"; 
expectedOutput_filled_7 += " *****\n"; 
expectedOutput_filled_7 += "  ***\n"; 
expectedOutput_filled_7 += "   *"; 
assert.deepStrictEqual(actualOutput_filled_7,expectedOutput_filled_7);

//Tests for empty Diamond with height 5 //
let actualOutput_empty_5 = generateDiamond({type : "empty" , height : 5});
let expectedOutput_empty_5 = "";
expectedOutput_empty_5 += "  *\n"; 
expectedOutput_empty_5 += " * *\n"; 
expectedOutput_empty_5 += "*   *\n"; 
expectedOutput_empty_5 += " * *\n"; 
expectedOutput_empty_5 += "  *"; 
assert.deepStrictEqual(actualOutput_empty_5,expectedOutput_empty_5);

//Tests for empty Diamond with height 7 //
let actualOutput_empty_7 = generateDiamond({type : "empty" , height : 7});
let expectedOutput_empty_7 = "";
expectedOutput_empty_7 += "   *\n"; 
expectedOutput_empty_7 += "  * *\n"; 
expectedOutput_empty_7 += " *   *\n"; 
expectedOutput_empty_7 += "*     *\n"; 
expectedOutput_empty_7 += " *   *\n"; 
expectedOutput_empty_7 += "  * *\n"; 
expectedOutput_empty_7 += "   *"; 
assert.deepStrictEqual(actualOutput_empty_7,expectedOutput_empty_7);

//Tests for angled Diamond with height 5 //
let actualOutput_angled_5 = generateDiamond({type : "angled", height : 5});
let expectedOutput_angled_5 = "";
expectedOutput_angled_5 += "  *\n"; 
expectedOutput_angled_5 += " / \\\n"; 
expectedOutput_angled_5 += "*   *\n"; 
expectedOutput_angled_5 += " \\ /\n"; 
expectedOutput_angled_5 += "  *"; 
assert.deepStrictEqual(actualOutput_angled_5,expectedOutput_angled_5)

//Tests for angled Diamond with height 7 //
let actualOutput_angled_7 = generateDiamond({type : "angled" ,height : 7});
let expectedOutput_angled_7 ="";
expectedOutput_angled_7 += "   *\n"
expectedOutput_angled_7 += "  / \\\n"
expectedOutput_angled_7 += " /   \\\n"
expectedOutput_angled_7 += "*     *\n"
expectedOutput_angled_7 += " \\   /\n"
expectedOutput_angled_7 += "  \\ /\n"
expectedOutput_angled_7 += "   *"
assert.deepStrictEqual(actualOutput_angled_7,expectedOutput_angled_7);
