const signClose = document.getElementById('sign-close')
const modal = document.getElementById('modal')


btn1.addEventListener("click", () => {
    modal.classList.add("active")
})
signClose.addEventListener("click", () => {
    modal.classList.remove("active")
})