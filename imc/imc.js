const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorImc = (peso / (altura*altura)).toFixed(2);

        let classificacao = '';

        if (valorImc < 18.5){
            classificacao = 'abaixo do peso.';
        } else if (valorImc < 25){
            classificacao = 'com peso Ideal. Parabéns!.';
        } else if (valorImc < 30){
            classificacao = 'levemente acima do peso.';
        } else if (valorImc < 35){
            classificacao = 'com obesidade grau I.';
        } else if (valorImc < 40){
            classificacao = 'com obsidade grau II.'
        } else {
            classificacao = 'com obesidade morbida grau III. Cuidado!!!'
        }

        resultado.textContent = `
            ${nome} seu imc é 
            ${valorImc} e voce está 
            ${classificacao}
        `;

    } else {
        resultado.textContent = 'Preecha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc);