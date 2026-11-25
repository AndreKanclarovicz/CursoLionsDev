function valorUnitario(item) {
    switch (item) {
        case "Salgado":
            return 8.0;
        case "Suco":
            return 6.0;
        case "Combo":
            return 12.0;
        case "bolo":
            return 5.0;
        default:
            return 0.0;
    }
}

function calcularValorTotal(item, quantidade) {
    const unitario = valorUnitario(item);
    return unitario * quantidade;
}

function desconto(quantidade, item) {
    const total = calcularValorTotal(item, quantidade);
    if (quantidade >= 5) {
        return total * 0.1;
    }
    return 0;
}

export { valorUnitario, calcularValorTotal, desconto };
