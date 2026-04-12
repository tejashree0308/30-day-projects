async function shortenURL() {
    let longUrl = document.getElementById("longUrl").value;

    if (longUrl === "") {
        alert("Enter a URL");
        return;
    }

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    let data = await response.json();

    if (data.ok) {
        document.getElementById("result").innerHTML =
            `<a href="${data.result.full_short_link}" target="_blank">
                ${data.result.full_short_link}
             </a>`;
    } else {
        alert("Invalid URL");
    }
}