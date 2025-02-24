function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
function randomImage() {
    var fileNames = [
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/scaryface.png",
        "https://terrormar.club/images/blank.png",
    ];
    var randomIndex = Math.floor(Math.random() * fileNames.length);
    var randomLeftPosition = Math.floor(Math.random() * 300) + 50;
    var randomTopPosition = Math.floor(Math.random() * 380) + 100;
    var elem = document.getElementById("imagearea");
    // document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
    // document.getElementById("background").src='' + fileNames[randomIndex] + '';
    setAttributes(elem, { "background-image": ("url(\'" + fileNames[randomIndex] + "\')"), "left": "" + randomLeftPosition + "", "top": "" + randomTopPosition + "" });
    // setAttributes(elem, { "src": "" + fileNames[randomIndex] + "" });
}

function getRandomTime() {
    return Math.floor(Math.random() * 3000) + 1000
}

(function loop() {
    setTimeout(function () {
        randomImage();
        loop();
    }, getRandomTime())
})();