import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        name: 'num1',
        type: 'number',
        message: 'Insert the 1st number here :',
    },
    {
        name: 'num2',
        type: 'number',
        message: 'Insert the 2st number here :',
    },
    {
        name: 'Operator',
        type: 'list',
        message: 'Choose an operation to perform :',
        choices: ['sum', 'sub', 'pro', 'div'],
    }
]);
let result;
switch (ans.Operator) {
    case 'sum':
        result = ans.num1 + ans.num2;
        console.log('The result of Addition is :' + result);
        break;
    case 'sub':
        result = ans.num1 - ans.num2;
        console.log('The result of Subtraction is :' + result);
        break;
    case 'pro':
        result = ans.num1 * ans.num2;
        console.log('The result of Multiplication is :' + result);
        break;
    case 'div':
        result = ans.num1 / ans.num2;
        console.log('The result of Division is : ' + result);
        break;
    default:
        console.log('You are stupid, go solve it yourself');
}
