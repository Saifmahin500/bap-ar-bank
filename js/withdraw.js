// step1 : added add handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-input')
    const withdrawAmount = withdrawField.value;
    

    // step-3 : get current deposit-total
    const withdrawTotalAmount = document.getElementById('Withdraw-total')
    const withdrawTotal = withdrawTotalAmount.innerText;
    const currentWithdrawAmount = parseInt(withdrawTotal) + parseInt(withdrawAmount);
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    // step-4 : get the total balance 
    const balanceTotalAmount = document.getElementById('balance-total')
    const balanceTotal = balanceTotalAmount.innerText;
    const currentBalanceAmount = parseInt(balanceTotal) + parseInt(withdrawAmount);
    balanceTotalAmount.innerText = currentBalanceAmount;


    withdrawField.value = '';

})