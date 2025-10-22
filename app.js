let itm=document.querySelectorAll('.items');
let info=document.querySelector('.info');
for(let i=0;i<itm.length;i++){
    itm[i].addEventListener('click',function(){
        info.innerText=itm[i].id;
    })
}