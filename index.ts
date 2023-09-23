import inquirer, { QuestionCollection } from "inquirer";

// Calculator Program:

let questions:QuestionCollection = [{
    name:['num1'],
    type:'number',
    message:'Enter your 1st number'
},
{
   name:["num2"],
   type:"number",
   message:["Enter your 2nd number:"]
},
{ 
   name:'operation',
   type: 'list',
   choices:["+", "*" , "-" , "/", '**', "%" ]
}];

let Result =  await inquirer.prompt(questions);
try {
    switch (Result.operation) {
        case "+":
            console.log(`${Result.num1}+${Result.num2} == ${Result.num1+Result.num2} `);
            break;
        case "-":
            console.log(`${Result.num1}-${Result.num2} == ${Result.num1-Result.num2} `);

            break;
        case "*":
                console.log(`${Result.num1}*${Result.num2} == ${Result.num1*Result.num2} `);
            break;
        case "/":
            console.log(`${Result.num1}/${Result.num2} == ${Result.num1/Result.num2} `);
            break;
        case "**":
            console.log(`${Result.num1}**${Result.num2}==${Result.num1**Result.num2}`);
            break;
        case "%":
            console.log(`${Result.num1}%${Result.num2}==${Result.num1%Result.num2}`);
            default:
                break;
    }
} 
catch (error) {
console.log("An error occurred:",error);    
};


