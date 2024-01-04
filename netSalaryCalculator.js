//create function to calculate net salary
function calculateNetSalary(){
    const userBasicSalary = prompt('Enter basic salary.');
    const userBenefits = prompt('Enter the benefits.');

    //convert input to numbers

    const basicSalary = parseFloat(userBasicSalary);
    const benefits = parseFloat(userBenefits);
    //***************** */
    if (isNaN(basicSalary) || isNaN(benefits)){
        console.log('Invalid input. Please input valid values for basic salary and benefits.')
    }

    const kraTax = calculateKraTax(basicSalary);
    const nhifDeductions = calculateNhifDeductions(basicSalary);
    const nssfDeductions = calculateNssfDeductions(basicSalary);

    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (kraTax + nhifDeductions + nssfDeductions);

    //output the results

    console.log(`Gross Salary : ${grossSalary.toFixed(2)}`);
    console.log(`KRA Tax: ${kraTax.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

//create function to calculate kra tax
function calculateKraTax(annualTaxablePay) {
    if (annualTaxablePay <= 288000) {
        return annualTaxablePay * 0.1 / 12;
    } else if (annualTaxablePay <= 388000) {
        return (annualTaxablePay - 288000) * 0.25 / 12 + 24000 * 0.1 / 12;
    } else if (annualTaxablePay <= 6000000) {
        return (annualTaxablePay - 388000) * 0.3 / 12 + 24333 * 0.25 / 12 + 24000 * 0.1 / 12;
    } else if (annualTaxablePay <= 9600000) {
        return (annualTaxablePay - 6000000) * 0.325 / 12 + 500000 * 0.3 / 12 + 24334 * 0.25 / 12 + 24000 * 0.1 / 12;
    } else {
        return (annualTaxablePay - 9600000) * 0.35 / 12 + 2400000 * 0.325 / 12 + 500000 * 0.3 / 12 + 24334 * 0.25 / 12 + 24000 * 0.1 / 12;
    }
}

//create function to calculate nhif deductions
function calculateNhifDeductions(grossPay) {

    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 400;
    } else if (grossPay <= 14999) {
        return 500;
    } else if (grossPay <= 19999) {
        return 600;
    } else if (grossPay <= 24999) {
        return 750;
    } else if (grossPay <= 29999) {
        return 850;
    } else if (grossPay <= 34999) {
        return 900;
    } else if (grossPay <= 39999) {
        return 950;
    } else {
        return 1700;
    }
}

//create function to calculate nssf deductions
function calculateNssfDeductions(pensionablePay) {
    if (pensionablePay <= 6000) {
        return pensionablePay * 0.06;
    } else if (pensionablePay <= 18000) {
        return 6000 * 0.06 + (pensionablePay - 6000) * 0.06;
    } else {
        return 6000 * 0.06 + 12000 * 0.06; 
    }
}
