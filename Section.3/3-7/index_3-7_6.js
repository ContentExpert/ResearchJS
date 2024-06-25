let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); // Eligible false

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused); // Application Refused true
