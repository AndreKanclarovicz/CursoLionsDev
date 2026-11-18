import mongoose from "mongoose";

const contatoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O nome é obrigatório."],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "O email é obrigatório."],
            trim: true,
            lowercase: true,
            unique: true
        },
        telefone: [{
            type: String,
            trim: true
        }]
    },
    { timestamps: true }
);

const Contato = mongoose.model("Contato", contatoSchema);
export default Contato;