const closing=document.getElementById('close');
const opening=document.getElementById('open');
const container=document.querySelector('.container');
opening.addEventListener('click',()=>
    container.classList.add('show-nav'));
closing.addEventListener('click',()=>
    container.classList.remove('show-nav')
);