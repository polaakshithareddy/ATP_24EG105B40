/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer :
You are building a bank statement summary. */

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// 1. filter() all credit transactions
const credit=transactions.filter(trans=>trans.type==="credit")
console.log("Credit Transactions:",credit)

// 2. map() to extract only transaction amounts
const amount =transactions.map(trans=>trans.amount)
console.log("Transaction Amount:",amount)

// 3. reduce() to calculate final account balance
const accbalance=transactions.reduce((total,trans)=>{
    if(trans.type==="credit")
      return total+trans.amount
     if(trans.type==="debit")
      return total - trans.amount
},0)
console.log("Total Account Balance:",accbalance)

// 4. find() the first debit transaction
const debit=transactions.find(trans=>trans.type==="debit")
console.log("Debit Transaction:",debit)

// 5. findIndex() of transaction with amount 10000
const index=transactions.findIndex(trans=>trans.amount===10000)
console.log("Index of transaction amount 10000:",index)