//deposit part start....
document.getElementById('btn-deposit').addEventListener('click',function(){
    //Get deposit amount from user...
    const depositField = document.getElementById('deposit-field');
    const depositFieldAmountString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldAmountString);
    //Add deposit amount to total deposit field..
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountString = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    //Calculate total deposit amount ...
    const currentTotalDepositAmount = previousDepositAmount + depositFieldAmount;
    totalDeposit.innerText = currentTotalDepositAmount;
    //Calculate total balance amount...
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalBalance + depositFieldAmount;
    totalBalance.innerText = currentTotalBalance;

    //Clear deposit field value..
    depositField.value = '';

     
})