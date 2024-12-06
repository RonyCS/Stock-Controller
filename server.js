const express = require('express');
const app = express();
const PORT = 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

app.use(express.json());
app.use(cors());



app.get('/products', async  (req, res) => {

  try {

    const produtos = await prisma.produto.findMany();
       return res.status(200).json(produtos)

  } catch (error) {

      console.log('Erro ao retornar estoque ' + error);
         res.status(404).json({ error: 'Erro ao retornar estoque' });
  }
});


app.get('/products/:id',async (req, res) => {
  const {id} = req.params;

  try {
  
    const Listarproduto = await prisma.produto.findUnique({
      where:{
        id:Number(id)
      }
    });

    console.log('Produto exibido:', Listarproduto);

    return res.status(200).json(Listarproduto);

  } catch (error) {

    console.error('Erro ao exibir produto:', error);
    return res.status(404).json({ error: 'Erro ao exibir produto' });
    
  }
});



app.post('/product',async (req, res) => {
     
  const {nome, quantidade, preco, marca} = req.body; 

    console.log('Dados recebidos: ' + req.body)

    try {
       
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




app.put('/products/:id', async (req, res) => {
  const {id} = req.params;
  const {nome, quantidade, preco, marca} = req.body; 

  try {
    
    const produtoAtualizado = await prisma.produto.update({
      where: {
        id : Number(id)
      },
      data: {
        nome,
        quantidade: parseInt(quantidade, 10),
        preco,
        marca,
      }
    });

    res.status(200).json(produtoAtualizado)
  } catch (error) {
    
      console.log(error)
      res.status(400).json({error: 'Produto não existente'});
  }


});


app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {

    const produtoDeletado = await prisma.produto.delete({
      where: {
        id: Number(id)
      }
    });


    res.status(200).json(produtoDeletado);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Produto não existente' });
  }
});







 app.listen(PORT, (erro) => {
    
        if (erro) {
            console.log('Erro ao Iniciar...')
        }else{
            console.log('Servidor Rodando na Porta: ' + PORT);
        }
  });