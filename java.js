function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


// Lista de URLs de las imágenes
var imageList = [
    "imagenes/imagenes cambian/imagen_1.jpg",
    "imagenes/imagenes cambian/imagen_2.jpg",
    "imagenes/imagenes cambian/imagen_3.jpg"
];

var currentImageIndex = 0;
var imageElement = document.getElementById('image');

// Función para cambiar la imagen
function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= imageList.length) {
        currentImageIndex = 0;
    }
    imageElement.src = imageList[currentImageIndex];
}

// Cambiar la imagen cada 3 segundos
setInterval(changeImage, 3000);
