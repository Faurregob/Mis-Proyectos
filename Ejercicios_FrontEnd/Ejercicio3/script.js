document.addEventListener("DOMContentLoaded", function() {
    const changeBtn = document.getElementById("changeBtn");
    const displayImage = document.getElementById("displayImage");

    const images = [
        'img1.jpg',
        'img2.jpg',
    ];

    let currentImageIndex = 0;

    changeBtn.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        displayImage.src = images[currentImageIndex];

        if (currentImageIndex === images.length - 1) {
            changeBtn.textContent = "Volver al Inicio";
        }else{
            changeBtn.textContent = "Cambiar Imagen";

        }
    });

});
