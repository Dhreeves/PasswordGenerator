// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}
var characterLength = document.getElementById
    ("characterLength");

var lowerCase = document.getElementById
    ("lowerCase");

var upperCase = document.getElementById
    ("upperCase");

var number = document.getElementById
    ("number");

var symbols = document.getElementById
    ("symbols");
passwordDisplay.innerText = password

var form = document.getElementById("passwordGeneratorSpace");
characterLength.addEventListener("input");
var passwordDisplay = document.getElementById("passwordDisplay")

var upperCase_Char_Codes = arrayLowtoHigh(65, 90);
var lowerCase_Char_Codes = arrayLowtoHigh(97, 122);
var number_Char_Codes = arrayLowtoHigh(48, 57);
var symbols_Char_Codes = arrayLowtoHigh(33, 47);

form.addEventListener("submit", e => {
    e.preventDefault();
    var characterAmount = characterLength.value;
    var password = generatePassword(characterLength, upperCase, lowerCase, symbols, numbers);
    passwordDisplay.innerText = password;
})

function generatePassword(characterLength, upperCase, lowerCase, symbols, numbers) {
    String.fromCharCode(65);
    var charCodes = lowerCase_Char_Codes;
    if (upperCase) charCodes = charCodes.concat(upperCase_Char_Codes);
    if (symbols) charCodes = charCodes.concat(symbols_Char_Codes);
    if (number) charCodes = charCodes.concat(number_Char_Codes);
}

var passwordCharacters = []
for (var i = 0; i, characterLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharcodes(characterCodes);
}
return passwordCharacters.join("");

function arrayLowtoHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}