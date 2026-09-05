//variaveis
let numero1, numero2, resultado1;
//entrada
//Processamento
function somar(){
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    resultado1 = numero1 + numero2;
    //saida
    document.getElementById("resultado1").innerHTML = "Resultado:" + resultado1;
}

//OUTRO EXERCICIO
let celsius, F;
function converter(){
    //entrada
    celsius = parseFloat(document.getElementById("celsius").value);
    //processamento
    F = (celsius * 9 / 5 ) + 32;
    //saida
    document.getElementById("resultado2").innerHTML = "F = " + F;
}
//OUTRO EXERCICIO
    let raio, altura, volume;
    function calculovolume(){
        raio = parseFloat(document.getElementById("raio").value);
        altura = parseFloat(document.getElementById("altura").value);
        //processamento
        volume = 3.14159 * (raio*raio) * altura;
        //saida
        document.getElementById("resultado3").innerHTML = "Resultado = " + volume;
    }
    
//OUTRO EXERCICIO
    let altura2, comprimento, largura, volume2;
    function Xcomprimento(){
        altura2 = parseFloat(document.getElementById("alturax").value);
        comprimento = parseFloat(document.getElementById("comprimento").value);
        largura = parseFloat(document.getElementById("largura").value);
        //processamento
        volume2 = comprimento * largura* altura2;
        //saida
        document.getElementById("resultado4").innerHTML = "resultado: =" + volume2;

    }