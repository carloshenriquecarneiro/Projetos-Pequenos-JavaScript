const resultado = document.getElementById('resultado');



function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

    if( nome !== '' && peso !== '' && altura !== '' ){
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = `Olá ${nome}, seu IMC é: ${valorIMC}.`

    }else {
        resultado.textContent = 'preencha todos os campos'
    }
}

calcular.addEventListner('click', imc)












