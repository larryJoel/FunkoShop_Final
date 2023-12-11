const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const quantity = document.getElementById('quantity')

add.addEventListener('click', ()=>quantity.value = Number(quantity.value)+1);
subtract.addEventListener('click', ()=>{
    if(quantity.value > 0){
        quantity.value = Number(quantity.value)-1
    }else{
        quantity.value = 0;
    }

});
