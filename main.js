
function calculateTip() {
    var amount = document.getElementById("amount").value;
    var feed = document.getElementById("cars").value;
    var people = document.getElementById("people").value;

    if (feed === "" || amount === "") {
        alert("Enter a valid amount");
    }
    if (people === "" || people <= 1) {
        people = 1;
    }
    var total = (amount * feed) / people;
    document.getElementById("total-here").innerHTML=total;
    console.log(amount);
}




document.getElementById("calcu-btn").onclick = function () {
    calculateTip();
};