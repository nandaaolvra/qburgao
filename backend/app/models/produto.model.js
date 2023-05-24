const sql = require("./db.js");
//construtor
const ProdutoModel = function(produto){
    this.name = produto.nome;
    this.valor = produto.valor;
}
//cria novo prodtuo no banco
ProdutoModel.create = (produto, result) => {
};
//seleciona produto por ID
ProdutoModel.findById = (produto, result) => {
};
//seleciona todos os produtos
ProdutoModel.getAll = result => {
    sql.query("SELECT * FROM produtos", (err, res) => {
        if(err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("produto: ", res);
        result(null, res);
    })
};
//atualizar produto por id
ProdutoModel.updateById = (produtoId, produto, result) => {
};
// remover produto por id 
ProdutoModel.remove = (produtoId, result) => {
};
//remover todos os produtos
ProdutoModel.removeAll = (result) => {
};
module.exports = ProdutoModel;