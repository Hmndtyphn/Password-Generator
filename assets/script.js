
// Assignment code here--------------------------


//DOM elements
const resultEL = document.getElementById('result')
const lengthEL = document.getElementById('length')
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
});

generate.addEventListener('click', () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;

  resultEL.innerText = generatePassword(
    hasLower,
     hasUpper,
      hasNumber,
       hasSymbol,
        length);
});

// Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
 
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item =>
Object.values(item)[0]);


//NO selected type or value
  if(typesCount === 0) {
    return '';
} 
  	// create a loop for the array to write, then generate PW
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;

}



//Generator Functions----This is what generates the random various characters

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!@#$%^&*()<>/[]{}~+='
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());






