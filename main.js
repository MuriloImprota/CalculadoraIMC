
import {Modal} from "./modal.js"
import {AlertError} from "./alert-error.js"
import {calculoIMC, notNumber} from "./util.js"

//variaveis
const form = document.querySelector("form")
const inputweight = document.querySelector("#weight")
const inputheight = document.querySelector("#height")

inputweight.oninput = () => AlertError.close()
inputheight.oninput = () => AlertError.close()


form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputweight.value
    const height = inputheight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculoIMC(weight, height)
    
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    Modal.Message.innerText = message
    Modal.open()
}

