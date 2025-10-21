let samosa=document.querySelectorAll(".items");

for(let i=0;i<samosa.length;i++){
    samosa[i].addEventListener("click",function(){
        console.log("clicked")
    })
}