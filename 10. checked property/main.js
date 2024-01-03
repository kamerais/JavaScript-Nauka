// .checked = własność, która określa jaki jest stan elementu HTML przycisku checkbox lub radio.
//                                 (zaznaczony czy niezaznaczony)


const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa";
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = "You are paying with Paypal";
    }
    else{
        paymentResult.textContent = "You must select a payment type";
    }
}