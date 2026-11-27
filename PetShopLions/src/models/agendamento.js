import mongoose from "mongoose";

const agendamentoSchema = new mongoose.Schema(
    {
        nomePet: {
            type: String,
            required: [true, "O nome do pet é obrigatório."],
            trim: true,
        },
        especie: {
            type: String,
            required: [true, "A espécie do pet é obrigatória."],
            trim: true,
            enum: ["cão", "gato", "outro"],
        },
        nomeDono: {
            type: String,
            required: [true, "O nome do dono é obrigatório."],
            trim: true,
        },
        telefoneDono: {
            type: String,
            required: [true, "O telefone do dono é obrigatório."],
            trim: true,
        },
        servico: {
            type: String,
            required: [true, "O serviço é obrigatório."],
            trim: true,
            enum: ["banho", "tosa", "banho e tosa"],
        },
        dataAgendamento: {
            type: String,
            required: [true, "A data do agendamento é obrigatória."],
            trim: true,
        },
        valor: {
            type: Number,
        },
        status: {
            type: String,
            enum: ["Pendente", "Concluído", "Cancelado", "Agendado"],
            default: "Agendado",
        },
    },
    { timestamps: true}
);

export default mongoose.model("Agendamento", agendamentoSchema);