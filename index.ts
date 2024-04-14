#! /usr/bin/env node

import inquirer from "inquirer";

let currency = {
  PKR: {
    USD: 0.0036,
    GBP: 0.0028,
    PKR: 1,
  },

  GBP: {
    USD: 1.26,
    GBP: 1,
    PKR: 350.76,
  },

  USD: {
    USD: 1,
    GBP: 0.79,
    PKR: 277.54,
  },
};

const ans: {
  from: "PKR" | "GBP" | "USD";
  to: "PKR" | "GBP" | "USD";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "Select your currency",
    choices: ["PKR", "GBP", "USD"],
  },

  {
    type: "list",
    name: "to",
    message: "To which currency",
    choices: ["PKR", "GBP", "USD"],
  },
  {
    type: "number",
    name: "amount",
    message: "Enter the amount you want to convert?",
  },
]);

const { from, to, amount } = ans;

if (from && to && amount) {
  let result = currency[from][to] * amount;

  console.log(`Your Amount is ${result} from ${from} to ${to}`);
} else {
  console.log("Invalid Input");
}
