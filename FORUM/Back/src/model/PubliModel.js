const toCreatePubli = (model) => {
    return `insert into publicacao VALUES(default, ${model.id_usuario}, "${model.data}", "${model.conteudo}", ${model.id_categoria}, ${model.id_subc}, ${model.curtida})`;
}

const toReadAll = () => {
    return `SELECT * FROM publicacao`;
}

const del = (id) => {
    return `DELETE FROM publicacao WHERE id_pub = ${id}`;
}

const update = (model, id) => {
    return `UPDATE publicacao SET data = '${model.data}', conteudo = '${model.conteudo}' WHERE id_pub = ${model.id_pub} and id_usuario = ${id}`;
}

const toReadVw = () => {
    return ` select * from vw_publicacao order by id_pub desc;`
}

module.exports = {
    toCreatePubli,
    toReadAll,
    del,
    update,
    toReadVw
}