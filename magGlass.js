// creating a function that enlarges texts
let larger = document.getElementById("big")
let smaller = document.getElementById("small")
let para = document.getElementById("mag")
let number = 20
// para.style.fontSize = `${number}`


larger.addEventListener("click", function(){
    if (number >= 100){
    para.style.fontSize = "100px"    
    } else {
        number ++
        para.style.fontSize = `${number}px`    
    }
})

smaller.addEventListener("click", function(){
    if (number <= 1){
        para.style.fontSize = "1px"    
    } else {
        number --;
        para.style.fontSize = `${number}px`
    }
})

