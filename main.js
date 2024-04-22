#! /usr/bin/env node
import inquirer from "inquirer";
console.log("WELCOME TO YOUR PERSONAL ATM");
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient amount");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is: $" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your current balance is: $" + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "choose your amount",
                type: "list",
                choices: [1000, 3000, 5000, 10000]
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("fast cash!! your remaining balance is: $" + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
