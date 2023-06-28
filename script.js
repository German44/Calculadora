//*agrega valores de los botones

function agregar(valor){
    document.getElementById('display').value += valor
}

function reset(){
    document.getElementById('display').value = ''
}

function calcular(){
    const valorDisplay = document.getElementById('display').value
    const resultado = eval(valorDisplay)
    document.getElementById('display').value = resultado
}