/*
function preloading (imageArray) {
    let n = imageArray.length;
    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    }
}

preloading([
    'images/img_01.jpg',
    'images/img_02.jpg',
    'images/img_03.jpg',
    'images/img_04.jpg',
    'images/img_05.jpg',
    'images/img_06.jpg',
    'images/img_07.jpg',
    'images/img_08.jpg',
    'images/img_09.jpg',
    'images/img_010.jpg',
    'images/img_011.jpg',
    'images/img_012.jpg',
    'images/img_013.jpg',
    'images/img_014.jpg',
    'images/img_015.jpg',
    'images/img_016.jpg',
    'images/img_017.jpg',
    'images/img_018.jpg',
    'images/img_019.jpg',
    'images/img_020.jpg',
    'images/img_021.jpg',
    'images/img_022.jpg',
    'images/img_023.jpg',
    'images/img_024.jpg',
    'images/img_025.jpg',
    'images/img_026.jpg',
    'images/img_027.jpg',
    'images/img_028.jpg',
    'images/img_029.jpg',
    'images/img_030.jpg',
    'images/img_031.jpg',
    'images/img_032.jpg',
    'images/img_033.jpg',
    'images/img_034.jpg',
    'images/img_035.jpg',
    'images/img_036.jpg',
    'images/img_037.jpg',
    'images/img_038.jpg',
    'images/img_039.jpg',
    'images/img_040.jpg',
    'images/img_041.jpg',
    'images/img_042.jpg',
    'images/img_043.jpg',
    'images/img_044.jpg',
    'images/img_045.jpg',
    'images/img_046.jpg',
    'images/img_047.jpg',
    'images/img_048.jpg',
    'images/img_049.jpg',
    'images/img_050.jpg',
    'images/img_051.jpg',
    'images/img_052.jpg',
    'images/img_053.jpg',
    'images/img_054.jpg',
    'images/img_055.jpg',
    'images/img_056.jpg',
    'images/img_057.jpg',
    'images/img_058.jpg',
    'images/img_059.jpg',
    'images/img_060.jpg',
    'images/img_061.jpg',
    'images/img_062.jpg',
    'images/img_063.jpg',
    'images/img_064.jpg'
])
*/

/*
function setBackground(images) {
    setInterval(function() {
        var index = Math.floor(Math.random() * (urls.length));
        var target = document.getElementsByTagName("body")[0];
        target.style.backgroundImage = "url(" + urls[index] + ")";
    }, 1500);
}
*/

function setBackgroundMobile(images) {
    setInterval(function() {
        var index = Math.floor(Math.random() * (urls.length));
        var target = document.getElementsByClassName("bg")[0];
        target.style.backgroundImage = "url(" + urls[index] + ")";
    }, 1500);
}

var urls = [ 'images/img_01.jpg',
    'images/img_02.jpg',
    'images/img_03.jpg',
    'images/img_04.jpg',
    'images/img_05.jpg',
    'images/img_06.jpg',
    'images/img_07.jpg',
    'images/img_08.jpg',
    'images/img_09.jpg',
    'images/img_010.jpg',
    'images/img_011.jpg',
    'images/img_012.jpg',
    'images/img_013.jpg',
    'images/img_014.jpg',
    'images/img_015.jpg',
    'images/img_016.jpg',
    'images/img_017.jpg',
    'images/img_018.jpg',
    'images/img_019.jpg',
    'images/img_020.jpg',
    'images/img_021.jpg',
    'images/img_022.jpg',
    'images/img_023.jpg',
    'images/img_024.jpg',
    'images/img_025.jpg',
    'images/img_026.jpg',
    'images/img_027.jpg',
    'images/img_028.jpg',
    'images/img_029.jpg',
    'images/img_030.jpg',
    'images/img_031.jpg',
    'images/img_032.jpg',
    'images/img_033.jpg',
    'images/img_034.jpg',
    'images/img_035.jpg',
    'images/img_036.jpg',
    'images/img_037.jpg',
    'images/img_038.jpg',
    'images/img_039.jpg',
    'images/img_040.jpg',
    'images/img_041.jpg',
    'images/img_042.jpg',
    'images/img_043.jpg',
    'images/img_044.jpg',
    'images/img_045.jpg',
    'images/img_046.jpg',
    'images/img_047.jpg',
    'images/img_048.jpg',
    'images/img_049.jpg',
    'images/img_050.jpg',
    'images/img_051.jpg',
    'images/img_052.jpg',
    'images/img_053.jpg',
    'images/img_054.jpg',
    'images/img_055.jpg',
    'images/img_056.jpg',
    'images/img_057.jpg',
    'images/img_058.jpg',
    'images/img_059.jpg',
    'images/img_060.jpg',
    'images/img_061.jpg',
    'images/img_062.jpg',
    'images/img_063.jpg',
    'images/img_064.jpg'
    ];


/setBackground();/
setBackgroundMobile();
