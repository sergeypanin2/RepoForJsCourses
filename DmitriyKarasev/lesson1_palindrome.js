//requires node.js, i.e. presumes file execution running "node lesson1_palindrome.js"

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  let input_string;
  readline.question('Enter the string (whitespace is counted as a separate character): ',  (input_string) => {
    if (input_string.length > 0 ){
        if (palindrome(input_string)) {console.log(`You have typed \"${input_string}\" ` + 'and it is a palindrome')}
        else {console.log(`You have typed \"${input_string}\" ` + 'and it is NOT a palindrome')}
    }
    else {console.log('You did not enter any symbols, exiting...')}
    readline.close();
  }
 
);
 
function palindrome (input_string) {
    //split the input string into an array
    let split_input_string_to_array = input_string.split("");
    //reverse an array
    let reversed_array = split_input_string_to_array.reverse();
    //combine an array into a string
    reversed_input_string = reversed_array.join("");
    if (input_string === reversed_input_string) {return true}
    else {return false}
}