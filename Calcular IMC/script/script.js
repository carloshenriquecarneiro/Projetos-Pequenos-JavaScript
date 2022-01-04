const formulario = document.querySelector('.formulario')
    const resultado = document.querySelector('.resultado');

    function receberEvento(evento){
        evento.preventDefault();

        const nome = formulario.querySelector('.nome')
        const peso = formulario.querySelector('.peso').value
        const altura = formulario.querySelector('.altura').value


        let classificacao = ''
        const valorIMC = (peso/(altura*altura)).toFixed(2)

        if(valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal'
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        }else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        }else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        }

        resultado.innerHTML = `<p>Olá, ${nome.value}. Seu imc é: ${valorIMC} e você está ${classificacao}</p>`
    }

    formulario.addEventListener('submit', receberEvento);
