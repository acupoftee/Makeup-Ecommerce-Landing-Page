// elements to manipulate
let lipglassPicture = document.getElementsByClassName('product')[0];
let background = document.getElementsByClassName('background')[0];
let titles = document.getElementsByClassName('title')[0];
let miniImages = document.getElementsByClassName('miniImage')

// mini images
let firstImage = document.getElementById('first');
let secondImage = document.getElementById('second');
let thirdImage = document.getElementById('third');
let fourthImage = document.getElementById('fourth');
let fifthImage = document.getElementById('fifth');

// tracks current image
let currentImageIndex = 0;

// product image roots
let magicalImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT1M_640x600_`;
let luxeImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT18_640x600_`;
let oysterImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT07_640x600_`;
let rubyImageRoot = `https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_S3HT32_640x600_`;

function magicalColor() {
    updatePage(magicalImageRoot, "#dc8289");
}

function luxeColor() {
    updatePage(luxeImageRoot, "#fc7675");
}

function oysterColor() {
    updatePage(oysterImageRoot, "#fed4d5");
}

function rubyColor() {
    updatePage(rubyImageRoot, "#96051f");
}


/**
 * Updates the page content on click
 * @param {string} root product image root
 * @param {string} color page colors
 */
function updatePage(root, color) {
    lipglassPicture.src = root + currentImageIndex + '.jpg';
    background.style.backgroundColor = color;
    titles.style.color = color;
    updateMiniImages(root);
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

