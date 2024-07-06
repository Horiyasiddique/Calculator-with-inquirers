import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { name: "firstNumber",
        message: "Enter your First Number",
        type: "number",
    },
    { message: "Enter your Second Number",
        type: "number",
        name: "SecondNumber" },
    {
        message: "Select an operator to perform a funtion",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"]
    },
]);
if (answer.operator == "addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator == "substraction") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
if (answer.operator == "multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator == "division") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
