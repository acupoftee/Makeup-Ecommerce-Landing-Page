let lipglassPicture = document.getElementsByClassName('product')[0];
let background = document.getElementsByClassName('background')[0];
let titles = document.getElementsByClassName('title')[0];
//let gif = document.getElementsByClassName('product-gif')[0];
let miniImages = document.getElementsByClassName('miniImage')

// mini images
let firstImage = document.getElementById('first');
let secondImage = document.getElementById('second');
let thirdImage = document.getElementById('third');
let fourthImage = document.getElementById('fourth');
let fifthImage = document.getElementById('fifth');

let currentImageIndex = 0;

let magicalImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT1M_640x600_`;
let luxeImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT18_640x600_`;
let oysterImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT07_640x600_`;
let rubyImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT32_640x600_`;

function magicalColor() {
    //lipglassPicture.src = "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT1M_640x600_0.jpg";
    lipglassPicture.src = magicalImageRoot + currentImageIndex + '.jpg';
    background.style.backgroundColor = "#dc8289";
    titles.style.color = "#dc8289";
    updateMiniImages(magicalImageRoot);
}

function luxeColor() {
    //lipglassPicture.src = "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT18_640x600_0.jpg";
    lipglassPicture.src = luxeImageRoot + currentImageIndex + '.jpg';
    background.style.backgroundColor = "#fc7675";
    titles.style.color = "#fc7675";
    updateMiniImages(luxeImageRoot);
}

function oysterColor() {
    //lipglassPicture.src = "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT07_640x600_0.jpg";
    lipglassPicture.src = oysterImageRoot + currentImageIndex + '.jpg';
    background.style.backgroundColor = "#fed4d5";
    titles.style.color = "#fed4d5";
    updateMiniImages(oysterImageRoot);
}

function rubyColor() {
    //lipglassPicture.src = "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT32_640x600_0.jpg";
    lipglassPicture.src = rubyImageRoot + currentImageIndex + '.jpg';
    background.style.backgroundColor = "#96051f";
    titles.style.color = "#96051f";
    updateMiniImages(rubyImageRoot);
}


/**
 * Loops through all mini image elements and updates them 
 * accordingly
 * @param {string} root root URL for images
 */
function updateMiniImages(root) {
    for (let i = 0; i < miniImages.length; i++) {
         miniImages[i].src = root + i + '.jpg';
    }
}

/**
 * updates the main image with a selected mini image
 * @param {string} id image id
 */
function swapImage(id) {
    switch(id) {
        case "first":
            lipglassPicture.src = firstImage.src;
            currentImageIndex = 0;
            return;
        case "second":
            lipglassPicture.src = secondImage.src;
            currentImageIndex = 1;
            return;
        case "third":
            lipglassPicture.src = thirdImage.src;
            currentImageIndex = 2;
            return;
        case "fourth":
            lipglassPicture.src = fourthImage.src;
            currentImageIndex = 3;
            return;
        case "fifth":
            lipglassPicture.src = fifthImage.src;
            currentImageIndex = 4;
            return;
    }
}

