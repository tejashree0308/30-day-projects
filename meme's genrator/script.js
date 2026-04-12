function generateMeme() {
    const file = document.getElementById("imageInput").files[0];
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    if (!file) {
        alert("Please upload an image");
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {
        const img = new Image();

        img.onload = function () {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.font = "40px Impact";
            ctx.textAlign = "center";

            // Top text
            ctx.fillText(topText.toUpperCase(), canvas.width / 2, 50);
            ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 50);

            // Bottom text
            ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 20);
            ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 20);
        };

        img.src = reader.result;
    };

    reader.readAsDataURL(file);
}