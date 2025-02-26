document.getElementById('first-btn').addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("acount-number").value;
    const idPin = document.getElementById('pin-number').value;
    const convatPin = parseInt(idPin)
    if (accountNumber.length === 11) {
        if(convatPin===1234){
            window.location.href = "./main.html"
        }
        else{
            console.log('pin Is Worng')
        }

    } 
    else {
        console.log('Need Valid Accound Number')
    }
})