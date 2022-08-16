//Withdraw part start....
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //Get withdraw amount from user...
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    //add withdraw amount to the withdraw field...
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawlAmountString = totalWithdraw.innerText;
    const previousWithdrawlAmount = parseFloat(previousWithdrawlAmountString);
    
    //Calculate total balance amount...
    const totalBalance = document.getElementById('total-balance');
    const previousTotalAmountBalanceString = totalBalance.innerText;
    const previousTotalAmountBalance = parseFloat(previousTotalAmountBalanceString);
    //Clear value from withdraw field..
    withdrawField.value = '';
    // Error Handling part...
    if(withdrawAmount > previousTotalAmountBalance){
        alert('Your withdraw amount is not available now');
        return;
    }
    // to solve the error so that this code put below
    //Calculate total withdraw amount ...
    const currentWithdrawlAmount = previousWithdrawlAmount + withdrawAmount; 
    totalWithdraw.innerText = currentWithdrawlAmount;
    ///////////////////////////////////////////////////
    const currentTotalAllBalance = previousTotalAmountBalance - withdrawAmount;
    totalBalance.innerText = currentTotalAllBalance;
})