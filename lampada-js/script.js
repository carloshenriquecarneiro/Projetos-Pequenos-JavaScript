const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lampada = document.getElementById('lampada')




function acender(){
    lampada.src = './img/lampadaOn.jpg'
}


function desligar() {
    lampada.src = './img/lampadaOff.jpg'
}



turnOn.addEventListener('click', acender)
turnOff.addEventListener('click', desligar)