const labels=document.querySelector('.form-control label');
labels.forEach(r => {
    r.innerHTML=r.innerText.
    split('').
    map((l,idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`).
    join('');
});