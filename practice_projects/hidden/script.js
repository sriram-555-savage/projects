let btn=document.querySelector('.btn');
let cont=document.querySelector('.container');
let input=document.querySelector('.input');
btn.addEventListener('click',()=>{
    cont.classList.toggle('active');
    input.focus();
});

