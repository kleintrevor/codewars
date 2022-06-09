/*
This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

***** BUG *****
var a == "code";
var b == "wa.rs";
var name == a + b;

*/

const a = "code";
const b = "wa.rs";
let name = `${a}${b}`;