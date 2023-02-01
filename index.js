

let cookieCounter = 0;
let cookieText = document.getElementById("cookieText")
let cookieImg = document.getElementById("cookiePic")
// eventlistener with an event & function
cookieImg.addEventListener("click", function(){
    // this is going to add 1 to our cookieCounter = 0 when we click - based on event above
    cookieCounter++
    cookieText.innerHTML = cookieCounter
})
