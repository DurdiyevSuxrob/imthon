const signClose = document.getElementById('sign-close')
const modal = document.getElementById('modal')


btn1.addEventListener("click", () => {
    modal.classList.add("active")
})
signClose.addEventListener("click", () => {
    modal.classList.remove("active")
})
// ===========================
const main12Box = document.querySelector(".main12-box")
const leftBtn = document.querySelector(".btn-left")
const rightBtn = document.querySelector(".btn-right")
const box3 = document.querySelectorAll(".box3")

const main12Boxlength = box3.length //* SHU JOYIDA XATO TUZATILDI

let hisoblagich1 = 0;

const box3Width = 169;

leftBtn.addEventListener("click", () => {
    if(hisoblagich1 > 0) {
        hisoblagich1--;
        updateCarousel1();
    }
})
rightBtn.addEventListener("click", () => {
    if(hisoblagich1 < main12Boxlength) {
        hisoblagich1++;
        updateCarousel1();
    }
})

function updateCarousel1() {
    const moveAmount1 = -hisoblagich1 * box3Width
    main12Box.style.transform = `translateX(${moveAmount1}px)`
}
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
    if (document.body.classList.contains("darkmode")) {
        btn2.textContent = "🌑"
    } else {
        btn2.textContent = "☀️"
    }
})
const main2Box = document.querySelector(".car-list1")
const left = document.querySelector(".btn-left1")
const right = document.querySelector(".btn-right1")
const main2Box1 = document.querySelectorAll(".car-card1")


const main2Box1length = main2Box1.length // kartalar uzunligi


let hisoblagich = 0;

const cardWidth = 169;

left.addEventListener("click", () => {
    if(hisoblagich > 0) {
        hisoblagich--;
        updateCarousel();
    }
})
right.addEventListener("click", () => {
    if(hisoblagich < main2Box1length) {
        hisoblagich++;
        updateCarousel();
    }       
})

function updateCarousel() {
    
    const moveAmount = -hisoblagich * cardWidth

    main2Box.style.transform = `translateX(${moveAmount}px)`
}
