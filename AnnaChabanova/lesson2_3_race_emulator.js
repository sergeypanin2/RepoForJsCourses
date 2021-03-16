function randomNumberGenerator(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function populateArrays() {
    let i=0;
    let firstArraySum =0;
    let secondArraySum =0;
    let firstArray = new Array;
    let secondArray = new Array;
    while ( firstArraySum <100 && secondArraySum <100 ) {
        firstArray[i] = randomNumberGenerator(2,10);
        firstArraySum = firstArraySum + firstArray[i];
        secondArray[i] = randomNumberGenerator(2,10);
        secondArraySum = secondArraySum + secondArray[i];
         if (secondArraySum>firstArraySum && secondArraySum >=100) {
            console.log(i, "step - Second Array wins with", secondArraySum);
        }
        if (firstArraySum>secondArraySum && firstArraySum >=100) {
            console.log(i, "step - First Array wins with", firstArraySum);
        }
        if (firstArraySum=secondArraySum && firstArraySum >=100) {
            console.log(i, "step - Both Arrays win with", firstArraySum);
        }
        i++;
    }
}

populateArrays()