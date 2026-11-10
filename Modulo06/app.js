import promptSync from "prompt-sync";
import contato from "./contatos.js";
import atualizar_contato from "./atualizar_contatos.js";
import listar_contatos from "./listar_contatos.js";
import adicionar_contato from "./adicionar_contatos.js";
import excluir_contatos from "./excluir_contatos.js"

const prompt = promptSync();


let opcao = -1;
let num = -1;

do{
console.log("=====MENU=====");
console.log("1 - adicionar contatos");
console.log("2 - atualizar contatos");
console.log("3 - listar contatos");
console.log("4 - remover contatos");
console.log("0 - sair");

opcao = Number(prompt("escolha uma opção:"))
switch(opcao){
    case 1:
            case 1:
            console.log("=== ADICIONAR NOVO CONTATO ===");
            let nome = prompt("Qual seu nome? ");
            let email = prompt("Qual seu email? ");
            let telefone = prompt("Qual seu telefone? ");

            let novocontato = {
                nome: nome,
                email: email,
                telefone: telefone
            };


            adicionar_contato(contato, novocontato);
            break;

        break
    case 2:
        atualizar_Contato();
        break    
    case 3:
        console.table(contato);
        break
    case 4:
        excluir_contatos();
        break    
    case 0:
        console.log("fechando programa...");
        break
    default:
        console.log("opção invalida");
        break;    
}

} while(opcao !== 0)