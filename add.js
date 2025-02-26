document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById('Amount').value;
    const convatAmount = parseFloat(amount);
    const pin = document.getElementById("pin-number").value;
    const convatPin = parseInt(pin);

    const mainBalance = document.getElementById("money").innerText;
    const convadMainBalance = parseFloat(mainBalance);

    if (convatPin === 1234) {
        const sum = convadMainBalance + convatAmount;
        document.getElementById("money").innerText = sum;
    }
    else {
        console.log('vul')
    }
})
