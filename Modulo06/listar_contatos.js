function listarcontatos(contatos) {
    if (contatos.length === 0) {
        console.log("Nenhum contato cadastrado.");
        return;
    }

    contatos.forEach((contato) => {
        console.log(`\nID: ${contato.id}`);
        console.log(`Nome: ${contato.nome}`);
        console.log(`Email: ${contato.email}`);
        console.log(`Telefone: ${contato.telefone.join(' | ')}`);
    });

}

export default listarcontatos;