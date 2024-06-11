const images = [
    'https://bizweb.dktcdn.net/100/448/472/products/star-sukajan-06-1701262546696.jpg?v=1701262552143',
    'https://bizweb.dktcdn.net/100/448/472/products/b48c3e59fd2b4c1a996b7d628d9b38ba-tplv-o3syd03w52-origin-jpeg-jpeg.jpg?v=1703669157683',
    'https://bizweb.dktcdn.net/100/448/472/products/a9083642be5c4d09ab049df659e86585-tplv-o3syd03w52-origin-jpeg-jpeg.jpg?v=1703669166590',
    'https://bizweb.dktcdn.net/100/448/472/products/409778642-1032469581340343-7528886564115362935-n-1.jpg?v=1703669474333',
    'https://bizweb.dktcdn.net/100/448/472/products/snapinsta-app-412326820-18328794925103656-4274232147292774453-n-1080.jpg?v=1703669559030'
];

function loadGallery() {
    const mainImage = document.getElementById('main-image');
    const thumbnailsContainer = document.getElementById('thumbnails');
    
    // Set the first image as the main image
    mainImage.src = images[0];

    // Create thumbnail images
    images.forEach((src, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = src;
        thumbnail.className = 'thumbnail';
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.onclick = () => changeImage(src);
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function changeImage(src) {
    document.getElementById('main-image').src = src;
}

window.onload = loadGallery;




// Function to decrement quantity
function decrementQuantity() {
var quantityInput = document.getElementById('qty');
var quantity = parseInt(quantityInput.value);
if (!isNaN(quantity) && quantity > 1) {
quantityInput.value = quantity - 1;
}
}

// Function to increment quantity
function incrementQuantity() {
var quantityInput = document.getElementById('qty');
var quantity = parseInt(quantityInput.value);
if (!isNaN(quantity)) {
quantityInput.value = quantity + 1;
}
}

// Function to ensure quantity is a positive integer
function validateQuantity() {
var quantityInput = document.getElementById('qty');
var quantity = parseInt(quantityInput.value);
if (isNaN(quantity) || quantity < 1) {
quantityInput.value = 1;
}
}




function showContent(id) {
    // Hide all content sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    var selectedSection = document.getElementById(id);
    selectedSection.style.display = 'block';
}

// Initially show the first content section
document.addEventListener('DOMContentLoaded', function() {
    showContent('product-info');
});