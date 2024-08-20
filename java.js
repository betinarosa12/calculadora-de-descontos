function calcularDesconto() {
    let valor = document.getElementById('valor').value 
   
    if(valor > 100) {
        alert('Seu desconto é de R$' + (valor * 0.1).toFixed(2))
    } else {
        alert('Seu desconto é de R$' + (valor * 0.05).toFixed(2))
    }

    document.getElementById('valor').value = ''
}
