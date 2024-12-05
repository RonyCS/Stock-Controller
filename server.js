const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//@products
app.get('/product', (req, res) => {
    res.send('...');
});

//@allproducts
app.get('/products', (req, res) => {
    res.send('...Todos os Produtos');
});

app.post('/product', (req, res) => {
    const { id, nome, Quantidade, preco, marca, } = req.body;

    //tratamento de exceção para o campo de nome
 /*  
        if (!nome != toString) {
        return res.status(400).json({ mensagem: 'No campo Nome só é permido String ' });
         }

 */

    // Exemplo de resposta
    res.json({
        mensagem: 'Dados recebidos com sucesso!',
        dados: {
            id: id,
            nome:nome,
            Quantidade: Quantidade,
            preco:preco,
            marca:marca,
        }
    });
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