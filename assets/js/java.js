const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
    if (document.body.classList.contains("darkmode")) {
        btn2.textContent = "🌑"
    } else {
        btn2.textContent = "☀️"
    }
})







const signClose = document.getElementById('sign-close')
const modal = document.getElementById('modal')


btn1.addEventListener("click", () => {
    modal.classList.add("active")
})
signClose.addEventListener("click", () => {
    modal.classList.remove("active")
})
// =====================

const ret2 = document.querySelector(".ret2");
const k1 = document.getElementById("k1");
const k2 = document.getElementById("k2");
const ret3 = document.querySelectorAll(".ret3");

const ret3Length = ret3.length;
let hisoblagich = 0;

const ret3width = 675;

k2.addEventListener("click", () => {
  if (hisoblagich < ret3Length) {
    hisoblagich++;
    updateCarousel();
  }
});

k1.addEventListener("click", () => {
  if (hisoblagich > 0) {
    hisoblagich--;
    updateCarousel();
  }
});

function updateCarousel() {
  const moveAmount = -hisoblagich * ret3width;
  ret2.style.transform = `translateX(${moveAmount}px)`;
}
// ========================
const main12Box = document.querySelector(".main12-box")
const leftBtn = document.querySelector(".btn-left")
const rightBtn = document.querySelector(".btn-right")
const box3 = document.querySelectorAll(".box3")

const main12Boxlength = box3.length //* SHU JOYIDA XATO TUZATILDI

let hisoblagich1 = 0;

const box3Width = 300;

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














// ====================
