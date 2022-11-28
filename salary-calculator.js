const net = require("prompt-sync");
const prompt = net();
let salary = prompt("write your income");
function taxRate(){
    if(salary <= 24000){
        return(salary/100)*10;
    }
    else if(salary > 24000 && salary <= 32333){
        return(salary/100)*25;
    }
    else{
        return(salary/100)*30;
    }
}
let tax = taxRate();
function medicalCover(){
    if (salary < 100000){
        return salary*(1.6/100);
    }
    else{
        return 1700
    }
}
let NHIF = medicalCover();
function nationalSecurity(){
    if(salary <= 100000){
        return salary*(6/100);
    }
    else{
        return 6000;
    }
}
let NSSF = nationalSecurity();
console.log(`Gross Salary: Ksh.${salary}`);
console.log(`Tax:Ksh.${tax}`);
console.log(`NHIF Deductions: Ksh.${NHIF}`);
console.log(`NSSF Deductions: Ksh.${NSSF}`);
let netSalary = salary-(tax + NSSF + NHIF);
console.log(`Net Salary: Ksh.${netSalary}`);










