const backButtonChat = document.querySelector('#backButtonChat');
const myUl = document.querySelector('#ul-chat');
let inputText = document.querySelector('#text-input');
const sendButton = document.querySelector('#send-button');

backButtonChat.addEventListener('click', ()=>{
    window.location.href = "page2.html";
});

sendButton.addEventListener('click', ()=>{
    if(inputText.value != ''){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = inputText.value;
        myUl.appendChild(nuevoElemento);
        inputText.value='';
    };
});

inputText.addEventListener("keydown", function(e) {
    if(e.key === 'Enter' && inputText.value != ''){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = inputText.value;
        myUl.appendChild(nuevoElemento);
        inputText.value='';
    };
});
