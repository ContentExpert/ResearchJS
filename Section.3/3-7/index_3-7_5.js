let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

let applicationRefused = ! eligibleForLoan;

console.log(eligibleForLoan); // true
