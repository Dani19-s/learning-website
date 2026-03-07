const header = document.querySelector('header');


window.addEventListener('scroll', async () => {
    
 
    if (window.scrollY >= 5) {
        header.classList.add('smaller');
    } else {
        header.classList.remove('smaller');
    }
});
