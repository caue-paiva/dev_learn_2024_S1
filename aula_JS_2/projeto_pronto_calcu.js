function calcula(){
    let valor1 = parseFloat(document.getElementById("val1").value); //.value é usado para acessar valores de inputs
    let valor2 = parseFloat(document.getElementById("val2").value);
    
    let operando = document.getElementById("operador").value;//pega o operador da conta
    let resultado = realiza_operacao(valor1,valor2,operando);
    
    let resultado_tag = document.getElementById("resultado"); //pega a tag do resultado
    resultado_tag.innerText = "Resultado:  " + (resultado.toString()); //muda o inner text dessa tag 
    
}

function realiza_operacao(valor1,valor2,operando){
      switch  (operando){  //switch na operação
        case  "+":
            resultado = valor1 + valor2;
        break;
            
        case "-":
            resultado = valor1 - valor2;
        break;
            
        
        case "*":
            resultado = valor1 * valor2;         
        break;
        
        case "/":
            resultado = valor1 / valor2; 
        break;    
        
        default: //operador inválido
            resultado = "operador invalido";  
        break;
    }
    return resultado; 
}