const user1Account = {
name : "Michael",
totalAmount : 5000,
deductAmount : function(amount){
  this.totalAmount-=amount;
  return this.totalAmount + ' is the current balance';
}

}


const user2Account = {
name : "John",
totalAmount : 8000
}

function WithDrawMoney(amount){
  return user1Account.deductAmount.bind(user2Account,amount);
}

console.log("Withdrawal#1 " , WithDrawMoney(500)());
console.log("Withdrawal#2 " , WithDrawMoney(200)());

/*
Output:
Withdrawal#1  7500 is the current balance
Withdrawal#2  7300 is the current balance
*/