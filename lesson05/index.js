let balance = 0;
let repeat = true;
while (repeat) {
  bankApplication();
}

function bankApplication() {
  let action = prompt("Which action would you like to perform: Q, W, D or B?");
  switch (action) {
    case 'Q':
      repeat = false;
      break;
    case 'W': {
      if (balance == 0) {
        alert("Can't withdraw, balance is 0");
      } else {
        let withdraw = prompt("Enter an amount to withdraw");
        withdraw = parseInt(withdraw);
        if (balance - withdraw < 0) {
          alert("Can't withdraw, not enough money in account");
        } else {
          balance -= withdraw;
        }
      }
      break;
    }
    case 'D': {
      let deposit = prompt("Enter an amount to deposit");
      deposit = parseInt(deposit);
      balance += deposit;
      break;
    }
    case 'B': {
      alert('$' + balance);
      break;
    }
    default:
      break;
  }
}

