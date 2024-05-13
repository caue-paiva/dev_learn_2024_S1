function multiplica2(){
    let valor = parseFloat(document.getElementById("valor").value);
    valor *= 2;  //multiplica por 2 o valor
    
    
    let elemento_resultado = document.getElementById("resultado");
    
    let texto_final = valor.toString();
    
    if (isNaN(valor)){
        texto_final = "falha na operação";
    }
    elemento_resultado.innerText = "Resultado:  " + texto_final;
}