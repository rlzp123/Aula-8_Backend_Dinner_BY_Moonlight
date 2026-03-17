// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: 'Salgados' },
    { id: 2, nome: 'Bebidas' },
    { id: 3, nome: 'Doces' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    // ===== SALGADOS =====
    {
        id: 1,
        categoriaId: 1,
        nome: 'DINNER BURGUER',
        descricao: 'burguer, queijo, bacon crocante, molho do Zé, crispy onion, barbecue, alface à julienne e tomate.',
        preco: 46.90,
        imagem: './img/dinner.png'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'JAMES DEAN BACON',
        descricao: 'burger, queijo, farofa de bacon, creme de cebola do Zé e maionese artesanal',
        preco: 44.90,
        imagem: './img/james.png'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'LUA BURGUER',
        descricao: 'burger, 2 queijos (prato e cheddar), picles, bacon crocante e cebola roxa',
        preco: 29.90,
        imagem: './img/Lua.png'
    },

    // ===== BEBIDAS =====
    {
        id: 2,
        categoriaId: 2,
        nome: 'LUA JUICE',
        descricao: 'Suco de laranja com morango',
        preco: 19.90,
        imagem: './img/Laranja.png'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'ITUBAÍNA RETRÔ',
        descricao: 'Refrigerante clássico retrô',
        preco: 12.90, 
        imagem: './img/ITU.png'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'ÁGUA',
        descricao: 'Com ou sem gás',
        preco: 8.90,
        imagem: './img/agua.png'
    },

    // ===== DOCES =====
    {
        id: 3,
        categoriaId: 3,
        nome: 'PETIT GATEAU',
        descricao: 'O único que tem o prato banhado com a mesma calda dentro do bolinho',
        preco: 36.90,
        imagem: './img/petit.png'
    },
    {
        id: 3,
        categoriaId: 3,
        nome: 'WAFFLE NUTELLA',
        descricao: 'Waffle com sorvete de creme, ovomaltine e nutella',
        preco: 35.90,
        imagem: './img/waffle.png'
    },
    {
        id: 3,
        categoriaId: 3,
        nome: 'BANANA SPLIT',
        descricao: '3 bolas de sorvete, coberturas, chantilly, banana, tubetes, farofa mix de castanha de caju e amendoim e cereja',
        preco: 55.90,
        imagem: './img/banana.png'
    }

];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };