function removeContato(contatos, id) {
    const indice = contatos.findIndex((contato) => contato.id === id);

    if (indice === -1) {
        return false;
    }

    contatos.splice(indice, 1);
    return true;
}

export default removeContato;