// step1 : added add handler
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2
    const depositField = document.getElementById('deposit-input')
    const depositAmount = depositField.value;

    // step-3 : get current deposit-total
    const depositTotalAmount = document.getElementById('deposit-total')
    const depositTotal = depositTotalAmount.innerText;
    const currentDepositAmount = parseInt(depositTotal) + parseInt(depositAmount);
    depositTotalAmount.innerText = currentDepositAmount;

    // step-4 : get the total balance 
    const balanceTotalAmount = document.getElementById('balance-total')
    const balanceTotal = balanceTotalAmount.innerText;
    const currentBalanceAmount = parseInt(balanceTotal) + parseInt(depositAmount);
    balanceTotalAmount.innerText = currentBalanceAmount;

    // step-7 
    depositField.value = '';

})