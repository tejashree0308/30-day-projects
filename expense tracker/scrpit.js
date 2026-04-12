let balance = 0;
let income = 0;
let expense = 0;

function addTransaction() {
    let text = document.getElementById("text").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (text === "" || isNaN(amount)) {
        alert("Please enter valid data");
        return;
    }

    let list = document.getElementById("list");
    let li = document.createElement("li");

    li.innerText = text + " : ₹" + amount;
    list.appendChild(li);

    balance += amount;

    if (amount > 0) {
        income += amount;
    } else {
        expense += amount;
    }

    document.getElementById("balance").innerText = balance;
    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = Math.abs(expense);

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}