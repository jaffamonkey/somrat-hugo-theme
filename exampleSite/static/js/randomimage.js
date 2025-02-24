function randomImage() {
    var fileNames = [
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/fish.gif",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png"
    ];
    var randomIndex = Math.floor(Math.random() * fileNames.length);
    // document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
    document.getElementById("background").src = '' + fileNames[randomIndex] + '';
}

function getRandomTime() {
    return Math.floor(Math.random() * 3000) + 1000
}

function showHide() {
    return Math.floor(Math.random() * 4) + 1
}

if (function loop() {
    setTimeout(function () {
        randomImage();
        loop();
    }, getRandomTime())
});