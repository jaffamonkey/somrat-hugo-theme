function randomImage() {
  var pics = ["http://fakeimg.pl/250x100/0f0000/"
  ];

  var img = '';
  var showHide = Math.random() * 2;

  if (showHide = 1) {
    for (ii = 0; ii < pics.length; ii++) {
      positiontop = Math.random() * 500;
      positionright = Math.random() * 800;
      zindex = ii;

      img += '<img src="' + pics[ii] + '" style="top: ' + positiontop + 'px;' + 'right: ' + positionright + 'px;' + 'z-index: ' + zindex + ';">';
    }

    document.getElementById('area').innerHTML = img;
  }
}