function randomImage() {
  var fileNames = [
    "https://terrormar.club/images/knife.png",
    "https://terrormar.club/images/knife.png",
    "https://terrormar.club/images/knife.png",
    "https://terrormar.club/images/knife.png",
    "https://terrormar.club/images/knife.png",
    // "https://terrormar.club/images/blank.png",
    // "https://terrormar.club/images/blank.png",
    // "https://terrormar.club/images/blank.png",
    // "https://terrormar.club/images/blank.png",
    // "https://terrormar.club/images/blank.png",
    "https://terrormar.club/images/blank.png"];
  var randomIndex = Math.floor(Math.random() * fileNames.length);
  document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
}

function doSomething() { }
(function loop() {
  var rand = Math.round(Math.random() * 9999999999);
  setTimeout(function () {
    doSomething();
    loop();
  }, rand);
}());

randomImage();
setInterval(randomImage, doSomething());