let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    if (totalBill < 0) {
        alert('Please enter a positive value');
        return;
    }
    if (totalBill === '') {
        alert('Please enter Total Bill');
        return;
    }
    if (tipPercent == 0) {
        alert('Please enter Tip Percent');
        return;
    }
    if (split == 0) {
        alert('Please enter Spilt value');
        return;
    }
    if (split < 0) {
        alert('Please enter a positive value');
        return;
    }

    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;



})