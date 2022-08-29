"use strict";

// all const
const inputField = document.getElementById("inputField");
const option = document.getElementById("option");
const outputField = document.getElementById("outputField");
const submitBtn = document.getElementById("submitBtn");

// all variables
let chosenOption = option.value;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log(`start`);
  outputField.value = inputField.value;

  submitBtn.addEventListener("click", showOutput);
}

function showOutput() {
  console.log(`showOutput`);
  console.log(option.value);

  chosenOption = option.value;

  if (chosenOption === "firstLetterUppercase") {
    // **DONE
    console.log(`chosenOption is ${chosenOption}`);
    outputField.value = inputField.value[0].toUpperCase() + inputField.value.substring(1);
  } else if (chosenOption === "findFirstName") {
    //** DONE
    outputField.value = inputField.value.split(` `)[0];
  } else if (chosenOption === "findLengthFirstName") {
    // **DONE
    console.log(`chosenOption is ${chosenOption}`);
    outputField.value = inputField.value.split(` `)[0] + " is " + inputField.value.split(` `)[0].length + " characters long";
  } else if (chosenOption === "findMiddleName") {
    //**DONE
    let indexOfFirst = inputField.value.indexOf(` `);
    let indexOfLast = inputField.value.lastIndexOf(` `);
    outputField.value = `starts at ${indexOfFirst} and ends at ${indexOfLast} and is : ${inputField.value.substring(indexOfFirst, indexOfLast)}`;
  } else if (chosenOption === "checkFileName") {
    //**DONE
    if (inputField.value.endsWith(`.png`)) {
      outputField.value = `Is a png file`;
    } else if (inputField.value.endsWith(`.jpg`)) {
      outputField.value = `Is a jpg file`;
    } else {
      outputField.value = `Is none of these two file types`;
    }
  } else if (chosenOption === "password") {
    // **DONE
    outputField.value = `*`.repeat(inputField.value.length);
  } else if (chosenOption === "thirdCharaUppercase") {
    // **DONE
    let lowerCaseInput;
    lowerCaseInput = inputField.value.toLowerCase();

    let thirdLetterCapital;
    thirdLetterCapital = lowerCaseInput.substring(0, 2) + lowerCaseInput[2].toUpperCase() + lowerCaseInput.substring(3);

    outputField.value = thirdLetterCapital;
  } else if (chosenOption === "capitalize") {
    //**DONE
    outputField.value = "";

    let newArray;
    newArray = inputField.value.split(` `);

    newArray.forEach((word) => {
      let capWord;
      capWord = word[0].toUpperCase() + word.substring(1);
    //   console.log(`word[0].toUpperCase() + word.substring(1) is ${word[0].toUpperCase() + word.substring(1)}`);
      outputField.value += `${capWord} `;
    //   console.log(capWord);
    });
  } else {
    // if youre really good (or bad) and break the game
    outputField.value = "error, chose an option";
  }
}
