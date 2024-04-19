#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    name: "FirstNumber",
    type: "number",
  },
  {
    message: "Enter second number",
    name: "SecondNumber",
    type: "number",
  },
  {
    message: "Select one of ther operator to perform action. ",
    name: "Operator",
    type: "list",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);

if (answer.Operator === "Add") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.Operator === "Subtract") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operator === "Multiply") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operator === "Divide") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else {
  console.log("Please select valid operator");
}
