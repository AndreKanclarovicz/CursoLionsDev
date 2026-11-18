import mongoose from "mongoose";

async function conectarBanco() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB!");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB: " + error.message);
        process.exit(1);
    }
}

export default conectarBanco;