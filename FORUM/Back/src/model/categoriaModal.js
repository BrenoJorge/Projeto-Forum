const toReadCategoria = (dados) => {
    return `select * from categoria;`;
}

const toReadSubCategoria = (dados) => {
    return `select * from sub_categoria;`;
}


module.exports = {
    toReadCategoria,
    toReadSubCategoria
}