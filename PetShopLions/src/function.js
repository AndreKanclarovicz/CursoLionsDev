function servicoValor(servico, especie) {
    switch (especie) {
        case "cão":
            if (servico === "banho") {
                return 50;
            } else if (servico === "tosa") {
                return 60;
            } else if (servico === "banho e tosa") {
                return 100;
            }
            break;
        case "gato":
            if (servico === "banho") {
                return 60;
            } else if (servico === "tosa") {
                return 70;
            } else if (servico === "banho e tosa") {
                return 110;
            }
            break;
        case "outro":
            if (servico === "banho") {
                return 40;
            } else if (servico === "tosa") {
                return 50;
            } else if (servico === "banho e tosa") {
                return 80;
            }
            break;
        default:
            return 0;
    }
}

export {servicoValor};