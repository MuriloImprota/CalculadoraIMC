export const Modal = {

    Wrapper: document.querySelector(".modal-wrapper"),
    Message: document.querySelector(".modal .title span"),
    Buttonclose: document.querySelector(".modal button.close"),

    open: function(){
    Modal.Wrapper.classList.add("open")
    },
    close: function(){
    Modal.Wrapper.classList.remove("open")
    }
}

Modal.Buttonclose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    if (event.key === "Escape") {
        Modal.close()
    }

}
