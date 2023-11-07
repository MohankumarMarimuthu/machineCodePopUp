const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overLay = document.getElementById("over-lay")

console.log("open" , openModalButton)

openModalButton.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

closeModalButton.forEach(button => {
    button.addEventListener("click" , () => {
        const modal = button.closest(".modal")
        closeModal(modal);
    })
})

overLay.addEventListener("click" , () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})


function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active')
    overLay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove("active")
    overLay.classList.remove("active")
}

