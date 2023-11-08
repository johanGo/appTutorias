// alert('usted esta es la seccion de tutorias');
const imgSchedule = document.querySelector('#schedule');
const imgChat = document.querySelector('#chatButton');
const imgEye = document.querySelector('#eyeButton');
const backButton = document.querySelector('#backButton');
imgSchedule.addEventListener('click',()=>{
    window.location.href = "schedule.html";
});

imgChat.addEventListener('click',()=>{
    window.location.href = "chat.html";
});

imgEye.addEventListener('click', ()=>{
    window.location.href = "vertuto.html";
})

backButton.addEventListener('click', ()=>{
    window.location.href = "index.html";
});