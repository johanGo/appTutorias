// alert('usted esta en la seccion de login');
const button = document.querySelector('#inputButton');
const messageError = document.querySelector('.message-error');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let userValidacion = 'juanda';
    let passwordValidacion = 'j'
    const inputPassword = document.querySelector('#inputPassword').value;
    const inputUser = document.querySelector('#inputUser').value;

    console.log(inputUser);
    if (inputUser === userValidacion && inputPassword === passwordValidacion) {
        window.location.href = "page2.html"; // Reemplaza esto con la ruta a tu página HTML
    } else {
        messageError.style.display='block'
        setTimeout(() => {
            messageError.style.display='none'
        }, 3000);
    }
})

//GENERAL SECTION


