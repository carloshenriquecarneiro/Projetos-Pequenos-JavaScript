const lampaOn = document.getElementById('lampaOn');
const lampaOff = document.getElementById('lampaOff');
const lamp = document.getElementById('lamp');


function ligarLamp(){
    lamp.src = './imgLamp/lampaOn.png'
}


function desligarLamp (){
    lamp.src = './imgLamp/lampaOff.png'
}


function quebrarLampada () {
    lamp.src = './imgLamp/lampQuebrada.jpg'
}



lampaOn.addEventListener('click', ligarLamp);

lampaOff.addEventListener('click', desligarLamp);


