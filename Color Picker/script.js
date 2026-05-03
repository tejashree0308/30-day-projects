function generateColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    document.getElementById("colorBox").style.background = randomColor;
    document.getElementById("colorCode").innerText = randomColor;
}

function copyColor() {
    let color = document.getElementById("colorCode").innerText;

    navigator.clipboard.writeText(color);
    alert("Copied: " + color);
}