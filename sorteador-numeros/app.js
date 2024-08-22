function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let numeroInicio = parseInt(document.getElementById('de').value); 
    let numeroFim = parseInt(document.getElementById('ate').value); 
    // alert(`Quantidade de números: ${quantidade}`); 
    // alert(`Do número: ${de}`); alert(`Até: ${ate}`); 
    // alert(`Do número: ${de}`); alert(`Até: ${ate}`); 

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(numeroInicio, numeroFim);
        if (sorteados.includes(numero)) {
console.log("numero ja sorteado - "+numero);
i--;
        } else {
            sorteados.push(numero);
        }
    }
    
    alert(sorteados);
}



function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
