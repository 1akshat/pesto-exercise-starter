const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
	return bankBalances.filter(bankBalance => bankBalance.amount>100000) 
}

function datasetWithRoundedDollar() {
	
}

function sumOfBankBalances() {
	return bankBalances.reduce((a,b) => (a.amount + b.amount))
}

function sumOfInterests() {}

function higherStateSums() {}

// export {
//   hundredThousandairs,
//   datasetWithRoundedDollar,
//   sumOfBankBalances,
//   sumOfInterests,
//   higherStateSums
// };

console.log(hundredThousandairs());