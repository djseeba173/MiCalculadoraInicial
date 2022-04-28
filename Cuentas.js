function Suma() {
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);

    var resultado = num1 + num2;

    var mostrar = document.getElementById('mostrar');

    mostrar.value = 'El resultado es: ' + resultado;

}

function Resta() {
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);

    var resultado = num1 - num2;

    var mostrar = document.getElementById('mostrar');

    mostrar.value = 'El resultado es: ' + resultado;

}

function Division() {
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    var mostrar = document.getElementById('mostrar');

    if (num2 > 0) {
        var resultado = num1 / num2;
        mostrar.value = 'El resultado es: ' + resultado;
    } else {
        mostrar.value = 'No se puede dividir por 0';
    }
    
    

}

function Multiplicacion() {
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);

    var resultado = num1 * num2;

    var mostrar = document.getElementById('mostrar');

    mostrar.value = 'El resultado es: ' + resultado;

}

function Raiz(){
    var num1 = parseInt(document.getElementById('numero1').value); 
    var mostrar = document.getElementById('mostrar');

    if(num1 > 0){
        var resultado = Math.sqrt(num1);
        mostrar.value = 'El resultado es: ' + resultado;
    }else{
        mostrar.value = 'No existe raíz cuadrada de numeros negativo'
    }

    

}