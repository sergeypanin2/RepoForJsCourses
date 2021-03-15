//requires node.js, i.e. presumes file execution running "node lesson2_race.js"

let i = 1;
let winningArray;
 
function randomGenerate() {
  return (randomNumber = Math.floor(Math.random() * (1 - 2 + 10)) + 2);
}
 
function populateArrays() {
  return new Promise(function (resolve, reject) {
    let array1 = {
      elements: [],
      sum: 0,
      number: "first",
    };
    let array2 = { ...array1, number: "second" };
    console.log("---------------------------------------");
    console.log("Starting another round. The race is on!");
    console.log("---------------------------------------");
    while (array1.sum < 100 && array2.sum < 100) {
      console.log("Iteration " + i);
      const generated1 = randomGenerate();
      array1.elements.push(generated1);
      array1.sum = array1.sum + generated1;
      console.log(
        "For array 1 added " + generated1 + " and the sum is " + array1.sum
      );
      const generated2 = randomGenerate();
      array2.elements.push(generated2);
      array2.sum = array2.sum + generated2;
      console.log(
        "For array 2 added " + generated2 + " and the sum is " + array2.sum
      );
    }
    if (array1.sum >= array2.sum && array1.sum < 105) {
      winningArray = { ...array1 };
      resolve("Success, the winner is found!");
    } else if (array2.sum > array1.sum && array2.sum < 105) {
      winningArray = { ...array2 };
      resolve("Success, the winner is found!");
    } else {
      i++;
      console.log('\n'+'Rematch is requested' + '\n');
      populateArrays().then(resolve);
    }
  });
}
 
populateArrays()
.then(result => {
 console.log("--------Declaring results!--------");  
  console.log(result);
  console.log(
    "And the winner is " +
      winningArray.number +
      " array at " +
      i +
      " iteration(s) with sum = " +
      winningArray.sum
  );
})
.catch(error => {
  console.log(error);
});