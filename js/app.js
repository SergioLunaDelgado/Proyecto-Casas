const fotos = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {
    let scroll = this.scrollY / -15;
    fotos.forEach(foto => {
        if(scroll < -150) {
            scroll += 150; 
        }
        foto.style.backgroundPositionY = `${scroll}px`;
    });
});