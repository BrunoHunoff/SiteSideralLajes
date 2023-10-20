const item = document.querySelectorAll(".item-ld");
const itens = item.length;
let atual = 0;
const width = document.getElementById("item-ld").clientWidth;
const img = document.querySelector('.container');

console.log("Width: ", width);

function carrossel(){
    atual++;

    if(atual > itens - 1){
        atual = 0;
    }

    img.style.transform = `translateX(${-atual * width}px)`;

}

setInterval(carrossel, 4000);