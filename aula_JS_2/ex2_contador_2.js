
function incrementa(){
    let elemento_num = document.getElementById("numero"); //pega elemento html do numero do contador
    let numero_atual = parseInt(elemento_num.textContent); //transforma a string que veio do elemento html em um int
    
    numero_atual++; //incrementa

    elemento_num.textContent = numero_atual; //atualiza valor do contador no html
}

function decrementa(){
    let elemento_num = document.getElementById("numero"); //pega elemento html do numero do contador
    let numero_atual = parseInt(elemento_num.textContent); //transforma a string que veio do elemento html em um int
    
    numero_atual = numero_atual - 1; //incrementa

    elemento_num.textContent = numero_atual; //atualiza valor do contador no html
    
}
