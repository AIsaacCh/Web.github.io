function calcular(operacion){
let num1=parseFloat(document.getElementById('num1').value);
let num2=parseFloat(document.getElementById('num2').value);
let resultado = document.getElementById('resultado');
let res;

if(isNaN(num1)|| isNaN(num2)){
    resultado.innerHTML="Por favor ingresa numeros validos";
    return;
}
if(operacion=='suma'){
    res=num1+num2;
}
if(operacion=='resta'){
    res=num1-num2;
}
if(operacion=='multi'){
    res=num1*num2;
}
if(operacion=='dividir'){
    res=num1/num2;
}

if(operacion!='suma' && operacion!='resta'&& operacion!='multi'&operacion!='dividir'){
    resultado.innerHTML='Operacion no valida.';
    return;

}

resultado.innerHTML = `Resultado: ${res}`;
}