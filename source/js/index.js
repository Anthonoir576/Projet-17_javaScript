const imgWork = document.getElementById('img-improvise');
const popUp = document.getElementById('pop-up');
let playOnlyOne = true;

// offsetHeight = la hauteur de la page complete et depend de la taille de la fenetre
// innerHeight = a la taille du VH si tu ouvres la console et la met en bas de la fenetre cette valeur serra plus petite
// scrolly comme toujours et la valeur du scroll a un endroit de la page

window.addEventListener('scroll', () => {

    let scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    if (scrollValue > 0.45) {

        imgWork.style.opacity = '1';
        imgWork.style.transform = 'none';

    };


    // NEWLETTER
    let  playOne = () => {

        if (scrollValue > 0.85 && playOnlyOne) {

            this.setTimeout(() => {
    
                popUp.style.opacity = "1";
                popUp.style.transform = "none";
                
            }, 1500);
    
            playOnlyOne = false;
    
        };

    };

    playOne();

});



document.getElementById('close').addEventListener('click', () => {

    popUp.style.opacity = '0';
    popUp.style.transform = 'translateX(500px)';

});