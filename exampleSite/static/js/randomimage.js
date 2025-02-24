function randomImage() {
    var fileNames = [
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/fish.gif",
        "https://terrormar.club/images/blank.png",
    ];
    var randomIndex = Math.floor(Math.random() * fileNames.length);
    var randomLeftPosition = Math.floor(Math.random() * 300) + 100;
    var randomTopPosition = Math.floor(Math.random() * 450) + 100;
    // document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
    // document.getElementById("background").src='' + fileNames[randomIndex] + '';
    document.getElementById("background").src='' + fileNames[randomIndex] + '';getElementById("background").left='' + randomLeftPosition + '';getElementById("background").top='' + randomTopPosition +'';
}

function getRandomTime() {
    return Math.floor(Math.random() * 4000) + 1000
}

(function loop() {
    setTimeout(function () {
        randomImage();
        loop();
    }, getRandomTime())
})();