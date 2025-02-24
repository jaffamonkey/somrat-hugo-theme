function randomImage() {
    var fileNames = [
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/fish.gif",
        "https://terrormar.club/images/blank.png",
    ];
    var randomIndex = Math.floor(Math.random() * fileNames.length);
    var randomLeftPosition = Math.floor(Math.random() * 400) + 100;
    var randomTopPosition = Math.floor(Math.random() * 600) + 100;
    // document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
    // document.getElementById("background").src='' + fileNames[randomIndex] + '';
    document.getElementById("background").setAttribute('src=', fileNames[randomIndex]).setAttribute('left', randomLeftPosition).setAttribute('top', randomTopPosition);
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