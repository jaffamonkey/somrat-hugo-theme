function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
function randomImage() {
    var fileNames = [
        "https://terrormar.club/images/horrorface2.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/scaryface.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/blank.png",
        "https://terrormar.club/images/horrorface.png"
    ];
    var randomIndex = Math.floor(Math.random() * fileNames.length);
    var randomLeftPosition = Math.floor(Math.random() * 300) + 50;
    var randomTopPosition = Math.floor(Math.random() * 400) + 100;
    var elem = document.getElementById("background");
    // document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
    // document.getElementById("background").src='' + fileNames[randomIndex] + '';
    setAttributes(elem, { "src": "" + fileNames[randomIndex] + "", "style": "top:" + randomTopPosition + "px; left:" + randomLeftPosition + "px" });
    // setAttributes(elem, { "src": "" + fileNames[randomIndex] + "", "object-position:": "top " + randomTopPosition + " left " + randomLeftPosition + "" });
    // setAttributes(elem, { "src": "" + fileNames[randomIndex] + "" });
}

function getRandomTime() {
    return Math.floor(Math.random() * 4000) + 3000
}

(function loop() {
    setTimeout(function () {
        randomImage();
        loop();
        }, getRandomTime())
})();