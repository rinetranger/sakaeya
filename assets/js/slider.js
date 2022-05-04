var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = './assets/img/hero-bg.jpg';
images[1] = './assets/img/hero-bg2.jpg';
images[2] = '/assets/img/hero-bg3.jpg';

function changePicture() {
  var back=document.getElementById("hero");
    back.style.background = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;
