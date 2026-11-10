function removeContato(contatos, id) {

    if (indice === -1) {
        console.log("Contato não encontrado.");
        return false;
    }

    contatos.splice(indice, 1);
    console.log("Contato removido com sucesso.");
    return true;
}

export default removeContato;