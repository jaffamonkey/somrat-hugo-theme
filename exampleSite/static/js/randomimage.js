function randomImage() {
    var fileNames = [
      "https://terrormar.club/images/fish.png",
      "https://terrormar.club/images/blank.png",
      "https://terrormar.club/images/blank.png"
    ];
    var randomIndex = Math.floor(Math.random() * fileNames.length);
    // document.getElementById("background").style.background = 'url(' + fileNames[randomIndex] + ')';
    document.getElementById("background").src='' + fileNames[randomIndex] + '';
  }
  
  function getRandomTime() {
      return Math.round(Math.random() * 5000);
  }
  
  (function loop() {
      setTimeout(function() {
        randomImage();
      loop();
    }, getRandomTime())
  })();