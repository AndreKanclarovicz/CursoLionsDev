function atualizarContato(contatos, id, novosDados) {

    const indice = contatos.findIndex(contato => contato.id === id);

    if (indice === -1) {
        console.log("Contato não encontrado.");
        return false;
    }

    if(novosDados.email) {
        for (let i = 0; i < contatos.length; i++) {
            let atual = contatos[i];
            if (atual.email === novosDados.email && atual.id !== id) {
                console.log("Email já cadastrado!");
                return false;
            }
        }
    }

    contatos[indice].nome = novosDados.nome || contatos[indice].nome;
    contatos[indice].email = novosDados.email || contatos[indice].email;
    
    if (novosDados.telefone && novosDados.telefone.length > 0) {
        contatos[indice].telefone = novosDados.telefone;
    }

    return true;



}



export default atualizarContato;