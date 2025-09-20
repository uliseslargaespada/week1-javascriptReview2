
// Create a function called fortuneTeller
function fortuneTeller(name, age) {
  let nameWithAge = '';

  if(name.length < 7) {
    nameWithAge = `${name} will marry late in life.`;
  }

  return nameWithAge;
}

let userName = prompt("Insert your name");
let userAge = prompt("Insert your age");

console.log(fortuneTeller(userName, userAge));
