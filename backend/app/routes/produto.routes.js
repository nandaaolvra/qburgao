module.exports = app => {
    const produtoController = require("../controllers/produto.controller");

    //rota para criar um novo registro Produto
    app.post("/produtos", produtoController.create);

    //buscar tdos os registros de Produto
    app.get("/produtos", produtoController.findAll);

    //buscar apenas um registro Produto
    app.get("/produtos/:produtoId", produtoController.findById);

    //Alterar um registro do produto
    app.put("/produtos/:produtoId", produtoController.update);

    //excluir um registro de produto
    app.delete("/produtos/:produtoId", produtoController.delete);

    //excluir todos os registros de Produto
    app.delete("/produtos", produtoController.deleteAll);
}

