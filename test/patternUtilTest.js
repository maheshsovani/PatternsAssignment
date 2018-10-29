const assert = require("assert");
const library = require("../src/patternUtil.js");
const {generateLine} = library ;

assert.deepStrictEqual(generateLine("",9),"");
assert.deepStrictEqual(generateLine("*",1),"*");
assert.deepStrictEqual(generateLine(" ",5),"     ");
assert.deepStrictEqual(generateLine("-",3),"---");
assert.deepStrictEqual(generateLine("ii",3),"iiiiii");

