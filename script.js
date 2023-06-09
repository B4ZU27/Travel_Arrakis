//seleccionar el elemento
let sliderInner = document.querySelector(".slider--inner");

let images = sliderInner.querySelectorAll("img");
let index = 1;

setInterval(function() {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX("+ percentage +"%)";
    index++;
    if(index == images.length){
        index = 0;
    }
    console.log(images.length)
}, 5000)
