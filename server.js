const { Prisma } = require('@prisma/client');
const express = require('express');
const app = express();
const PORT = 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json());

//@products
app.get('/product', (req, res) => {
    res.send('...');
});

//@allproducts
app.get('/products',  (req, res) => {
    res.send('...');
});

app.post('/product',async (req, res) => {
    const {nome, quantidade, preco, marca} = req.body;

    console.log('Dados recebidos: ' + req.body)

    try {
        // Criação do produto no banco de dados
        const produto = await prisma.produto.create({
          data: {
            nome,
            quantidade: parseInt(quantidade, 10),
            preco,
            marca,
          },
        });
    
        console.log('Produto criado:', produto);
    
        // Retorne o produto criado
        return res.status(201).json(produto);

      } catch (error) {

        console.error('Erro ao criar produto:', error);
        return res.status(500).json({ error: 'Erro ao criar produto' });
        
      }
    });

//@ Criação da Rota put
app.get('/products', (req, res) => {
    res.send('...Todos os Produtos');
});

//@ Criação da Rota delete
app.get('/products', (req, res) => {
    res.send('...Todos os Produtos');
});







// Inicia o servidor
 app.listen(PORT, (erro) => {
    
        if (erro) {
            console.log('Erro ao Iniciar...')
        }else{
            console.log('Servidor Rodando na Porta: ' + PORT);
        }
  });