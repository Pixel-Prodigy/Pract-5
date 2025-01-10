const button = document.querySelector(".first_button")
const newBox = document.querySelector('.container')
const main = document.querySelector("main")
button.addEventListener("click", function() {
    main.classList.add("hide")
    newBox.classList.add('show')
})
const toggle = document.querySelector(".toggle")
toggle.addEventListener("click", function () {
    main.classList.remove("hide")
    newBox.classList.remove("show")
})

const checkBox = document.querySelector("#fastDelivery")
checkBox.addEventListener("change", function () {
    const parent = document.querySelector(".checkbox")
    const newText = document.querySelector('.new_text_hide')
    if (this.checked) {
        newText.classList.add("new_text")
    }
    else {
      newText.classList.remove("new_text")  
}

})
const days = document.querySelector(".days")
days.addEventListener("input", function () {
    const finalPrice = document.querySelector('.final_price')
    finalPrice.innerText = 49;
    if (this.value < 10) {
        
        const a = (10 - this.value) * 10; 
        const b = 49 + a;
        finalPrice.innerText = b;
    } 
   

})