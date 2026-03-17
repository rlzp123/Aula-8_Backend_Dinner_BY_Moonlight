
const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
// Salgados
{ id: 1, nome: "DINNER BURGUER", preco: 46.90, categoria: "Salgados" },
{ id: 2, nome: "JAMES DEAN BACON", preco: 44.90, categoria: "Salgados" },
{ id: 3, nome: "LUA BURGUER", preco: 29.90, categoria: "Salgados" },

// Bebidas
{ id: 4, nome: "LUA JUICE", preco: 19.90, categoria: "Bebidas" },
{ id: 5, nome: "ITUBAÍNA RETRÔ", preco: 12.90, categoria: "Bebidas" },
{ id: 6, nome: "ÁGUA", preco: 8.90, categoria: "Bebidas" },

// Doces
{ id: 7, nome: "PETIT GATEAU", preco: 36.90, categoria: "Doces" },
{ id: 8, nome: "WAFFLE NUTELLA", preco: 35.90, categoria: "Doces" },
{ id: 9, nome: "BANANA SPLIT", preco: 55.90, categoria: "Doces" }
];


// Lista os Produtos - GET
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/categoria/:nomeCategoria', (req, res) => {
    const { nomeCategoria } = req.params;
    const produtosFiltrados = produtos.filter(
        p => p.categoria.toLowerCase() === nomeCategoria.toLowerCase()
    );
    res.json(produtosFiltrados);
});


// Adiciona um Novo Produto - POST
app.post('/produtos', (req, res) => {

    const { nome, preco, categoria } = req.body;
    
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ message: "Nome, preço e categoria são obrigatórios." });
    }

    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1, 
        nome,
        preco,
        categoria
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});


// Atualiza um Produto Existente - PUT
app.put("/produtos/:id", (req, res) => {
    const { id } = req.params;

    const { nome, preco, categoria } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
    
    if (produtoIndex !== -1) {
        produtos[produtoIndex] = { id: parseInt(id), nome, preco, categoria };
        res.json(produtos[produtoIndex]);
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});


// Deleta um Produto - DELETE
app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
    
    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Produto não encontrado" });
    }
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});