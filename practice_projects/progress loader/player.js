const pro=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');
let curractive=1;
next.addEventListener('click',()=>{
    curractive++;
    if(curractive>circles.length){
        curractive==circles.length;
    }
    update();
});
prev.addEventListener('click',()=>{
    curractive--;
    if(curractive<1){
        curractive=1;
    }
    update();
});
function update(){
    circles.forEach((circles,idx)=>{
        if(idx<curractive){
            circles.classList.add('active');
        }
        else{
            circles.classList.remove('active');
        }
    })
    const actives=document.querySelectorAll('.active');
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(curractive === 1) {
        prev.disabled = true
    } else if(curractive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}