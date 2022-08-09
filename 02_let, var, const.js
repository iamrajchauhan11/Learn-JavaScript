// VAR
// The var statment decalres a function-scoped or globally-scoped variable, optionally initializing it to a value.

//Example:
var x = 1;

if (x===1){
  var x = 2;

  console.log(x);
}
console.log(x);


// LET
// The let declaration decalres a block-scoped local variable, optionally initializing it to a value.

//Exampple:
let y = 1;

if (y === 1){
  let y = 2;
  console.log(y);
}
console.log(y);


//CONST
// Constants are block-scoped, much like variables decalred using the let keyword. The value of constant can't be change through reassignment and it can't be redeclared.

//Exmaple
const number = 42;

try{
  number = 99;
} catch (err) {
  console.log(err);
}
console.log(number);


const author = 'Suraj Chauhan';
console.log(author);