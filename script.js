function setBackground(images) {
    setInterval(function() {
        var index = Math.floor(Math.random() * (urls.length));
        var target = document.getElementsByTagName("body")[0];
        target.style.backgroundImage = "url(" + urls[index] + ")";
    }, 2000);
}

function setBackgroundMobile(images) {
    setInterval(function() {
        var index = Math.floor(Math.random() * (urls.length));
        var target = document.getElementsByClassName("bg")[0];
        target.style.backgroundImage = "url(" + urls[index] + ")";
    }, 2000);
}

var urls = [ 'images/img_01.jpg',
    'images/img_02.jpg',
    'images/img_03.jpg',
    'images/img_04.jpg'
    ];


setBackground();
setBackgroundMobile();
