import adicionarContato from "./adicionar_contatos.js";
import promptSync from "prompt-sync";


const prompt = promptSync();


let contatos = [
    {
        id: 1,
        nome: "cleiton rasta",
        email: "cleitinhothebest@outlook.com",
        telefone: "41 99851-1325",
    },
    {
         id: 2,
        nome: "Silvio Santos",
        email: "possoperguntare@uol.com",
        telefone: "47 99913 4975",
    }
]


export default contatos;