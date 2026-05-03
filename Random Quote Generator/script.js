const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Do what you can, with what you have.", author: "Theodore Roosevelt" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
];

function getQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    
    document.getElementById("quote").innerText = quotes[random].text;
    document.getElementById("author").innerText = "- " + quotes[random].author;
}
async function getQuote() {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();

    document.getElementById("quote").innerText = data.content;
    document.getElementById("author").innerText = "- " + data.author;
}