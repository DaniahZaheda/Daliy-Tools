var exchangeForm = document.querySelector(".exchangeForm");
var result = document.querySelector(".result");

var exchangeOperations = {};

exchangeForm.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;

    exchangeOperations.amount = elements[0].value;
    exchangeOperations.exchange = elements[1].value;

    convert();
};

function convert() {
    var con = 0;
    if (exchangeOperations.exchange == "dollar") {
        console.log("helllo");
        con = exchangeOperations.amount / 3.5;
        console.log("first", con);
    } else if (exchangeOperations.exchange == "dinar") {
        con = exchangeOperations.amount / 5;
    } else {
        con = exchangeOperations.amount * 1;
    }

    result.textContent = `to ${exchangeOperations.exchange} = ${con}`;
}

 