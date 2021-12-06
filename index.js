import myCollection from "./collection.js";
import chalk from "chalk";

// Try and `console.log` the variable, and then run the file by bringing up the terminal 
// (navigating to the files directory if you need to)
//  and entering `node index.js`. You should see the array of object as output in your console.

// console.log(myCollection)

// 2c. Create a function called `describeItem`, which should take in an item as a parameter
//  (the argument handed to this function would be an item from our collection).
//  The function should `console.log` a message according to how many of the item you have.

function describeItem(item) {

  for (let i = 0; i < myCollection.length; i++) {
    if (myCollection[i].name == item) {

      // If there's only one of the item in your collection,
      //  it should log "I have a `name`. Here's what I like about it: `whatILike`".

      if (myCollection[i].count == 1) {
        console.log(`I have a ${chalk.cyan(item)}. Here's what I like about it: ${chalk.green(myCollection[i].whatILike)}.`);
      } else {

        // If you have more than one of it, the message should log 
        // "I have `count` `name`s. Here's what I like about them: `whatILike`".

        console.log(`I have ${chalk.yellow(myCollection[i].count)} ${chalk.cyan(item)}'s. Here's what I like about them: ${chalk.green(myCollection[i].whatILike)}.`);
      }
    }
  }
}


// 2d. Now make a function called `describeCollection` that takes in an array as a parameter. The function should loop through the array, 
// and for each item, it should call the `describeItem` function so it displays a message according to how many you have in your 
// collection.

function describeCollection(array) {
  for (let i = 0; i < array.length; i++) {
    describeItem(array[i].name)
  }
}

describeCollection(myCollection)
