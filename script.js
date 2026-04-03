function cadastrar(event) {//Função executada durante a submissão do form
    event.preventDefault(); //previne o carregamento padrão
 
    //VALIDAÇÃO DO NOME
    let nome = document.getElementById("nome").value;
    if (nome.trim().length < 4) {
        alert("Nome completo deve ter pelo menos 4 caracteres");
        return;
    }
 
    //VALIDAÇÃO DO EMAIL
    let email = document.getElementById("email").value;
    email = email.trim();
 
    if (email.length === 0) {
        return false;
    }
 
    let posArroba = -1;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            if (posArroba === -1) {
                posArroba = i;
            } else {
                return false;
            }
        }
    }
    if (posArroba === -1) {
        return false;
    }
    if (posArroba === 0) {
        return false;
    }
 
    if (posArroba === email.length - 1) {
        return false;
    }
 
    let posPonto = -1;
    for (let i = posArroba + 1; i < email.length; i++) {
        if (email[i] === '.') {
            posPonto = i;
            break;
        }
    }
 
    if (posPonto === -1) {
        return false;
    }
 
    if (posPonto === posArroba + 1) {
        return false;
    }
 
    if (posPonto === email.length - 1) {
        return false;
    }
 
    //VALIDAÇÃO DO CPF
    let cpf = document.getElementById("cpf").value;
    cpf = cpf.trim();
 
    if (!isNaN(cpf)) {
    } else {
        alert("Digite apenas os números do seu cpf");
        return false;
    }
 
    if(cpf.length >= 11){
     
    }else{
        alert("Digite os 11 digitos do seu cpf sem ponto e traço")
        return false;
    }
       
 
    //VALIDAÇÃO DO CURSO
    let curso = document.getElementById("curso").value;
    let isNumber = !isNaN(curso);
 
    if (isNumber == false) {
    } else {
        alert("Digite apenas o nome do seu curso Ex: Técnico em Informática");
        return false;
    }
     if(curso.length < 3){
 
    }else{
        alert("Limite de caracteres atingido ")
        return false;
    }
   
 
    //VALIDAÇÃO DA DATA DE NASCIMENTO
    let dtNascimento = document.getElementById("dtNascimento").value;
 
    if (dtNascimento.length < 10) {
        return false;
    }
 
    let posBarra = -1;
    for (let i = 0; i < dtNascimento.length; i++) {
        if (dtNascimento[i] === '/') {
            if (posBarra === -1) {
                posBarra = i;
                alert("passou")
            }
        }
    }

    // COMPLEMENTO AQUI 
    if (posBarra === -1 || posBarra === 0 || posBarra === dtNascimento.length - 1) {
        alert("Data inválida");
        return false;
    }

    let posBarraDois= -1;
    for (let i = posBarra + 1; i < dtNascimento.length; i++) {
        if (dtNascimento[i] === '/') {
            posBarraDois = i;
            break;
        }
    }
 
    if (posBarraDois === -1) {
        alert("Data inválida");
        return false;
    }
 
    if (posBarraDois === posBarra + 1) {
        alert("Data inválida");
        return false;
    }
 
    if (posBarraDois === dtNascimento.length - 1) {
        alert("Data inválida");
        return false;
    }
 
    //VALIDAÇÃO DO GÊNERO
    let genero = document.querySelector('input[name="genero"]:checked');

    if (genero == null) {
        alert("Selecione um gênero");
        return false;
    }
 
    //Caso obtenha sucesso, exibe uma mensagem de sucesso e sai do método
    alert("Cadastrado com sucesso!");
}