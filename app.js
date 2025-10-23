let itm=document.querySelectorAll('.items');
let info=document.querySelector('.info');
let infoinside=document.querySelector('.infoinside');
let bill=document.querySelector('.bill');
info.style.display='none';

// let samosa={
//     name:'Samosa',
//     price:20,
//     calories:100
// }

// for(let i=0;i<itm.length;i++){
//     itm[i].addEventListener('click',function(){
//         info.style.display='block';
        
//     })
// }

let samosa={
    name:'Samosa',
    price:20,
    calories:100,
    ratings: 4.5

}

let idli={
    name:'Idli',
    price:30,
    calories:200,
    ratings: 4.3
}

let pulav={
    name:'Pulav',
    price:40,
    calories:300,
    ratings: 4
}

let burger={
    name:'Burger',
    price:50,
    calories:400,
    ratings: 4
}
// map DOM ids to objects
const menu = {
    samosa: samosa,
    idli: idli,
    pulav: pulav,
    burger:burger
};

for(let i=0;i<itm.length;i++){
    itm[i].addEventListener('click', function(){
        info.style.display='block';
        const key = this.id ;
        infoinside.innerText = `  ${menu[key].name}\n\nPrice ₹${menu[key].price} \n\nCalories ${menu[key].calories} cal \n\nRatings ${menu[key].ratings}/5`;
        
    });
}

let ul=document.querySelector('ul');



for(let i=0;i<itm.length;i++){
    itm[i].addEventListener('click',function(){
        let li=document.createElement('li');
        let delbtn=document.createElement('button');
        delbtn.style.backgroundColor='red';
        delbtn.style.color='white';
        delbtn.style.border='none';
        delbtn.style.borderRadius='5px';
        delbtn.style.padding='5px';
        const key = this.id ;
        delbtn.innerText='Remove';
        delbtn.addEventListener('click',function(){
            li.remove();
        })

        const nameSpan = document.createElement('span');
        nameSpan.textContent = menu[key].name;

        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        delbtn.style.marginRight = '8px';

       
        li.style.marginBottom = '10px'; 

        li.appendChild(nameSpan);
        li.appendChild(delbtn);

        ul.appendChild(li);

    })
}