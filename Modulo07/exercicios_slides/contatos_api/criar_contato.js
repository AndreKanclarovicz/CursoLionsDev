function adicionarContato(contato, novocontato) {  
    let emailExiste = false;

    for(let i = 0; i < contato.length; i++) {
        if(contato[i].email === novocontato.email) {
            emailExiste = true;
            break; 
        }
}
if (emailExiste) {
    console.log("Email já cadastrado!");
    return false;
} else {

    if (contato.length > 0) {
    let ultimoContato = contato[contato.length - 1];
    novocontato = {
        id: ultimoContato.id + 1,
        nome: novocontato.nome,
        email: novocontato.email,
        telefone: novocontato.telefone
    };
} else {
   
    novocontato.id = 1;
}
    
        contato.push(novocontato);
        console.log("contato adicionado com sucesso")
        return true;
    }   
}

export default adicionarContato;