import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
    {
        nomeCliente: {
            type: String,
            required: [true, "O nome do pedido é obrigatório."],
            trim: true,
        },
        item: {
            type: String,
            enum: ["Salgado", "Suco", "Combo", "bolo"],
            required: [true, "O item do pedido é obrigatório."],
            trim: true,
        },
        quantidade: {
            type: Number,
            required: [true, "A quantidade do pedido é obrigatória."],
            min: [1, "A quantidade do pedido deve ser no mínimo 1."],
        },
        formaPagamento: {
            type: String,
            enum: ["Dinheiro", "Cartão", "Pix"],
            required: [true, "A forma de pagamento é obrigatória."],
        },
        observacoes: {
            type: String,
            trim: true,
        },
        valorUnitario: {
            type: Number,
        },
        valorTotal: {
            type: Number,
        },
        status: {
            type: String,
            enum: ["Pendente", "Pago", "Entregue"],
            default: "Pendente",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Pedido", pedidoSchema);