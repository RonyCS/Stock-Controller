import React, { useEffect, useState, useRef } from 'react';
import './style.css'
import api from '../../services/api';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); 

  const inputNome = useRef();
  const inputQuantidade = useRef();
  const inputPreco = useRef();
  const inputMarca = useRef();

 
  async function CreateProducts() {
    if (loading) return; 
    setLoading(true); 

    try {
     
      if (!inputNome.current.value || !inputQuantidade.current.value || !inputPreco.current.value || !inputMarca.current.value) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const response = await api.post('/product', {
        nome: inputNome.current.value,
        quantidade: parseInt(inputQuantidade.current.value),
        preco: parseFloat(inputPreco.current.value),
        marca: inputMarca.current.value,
      });

      
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error('Erro ao criar produto:', error.message);
      alert('Erro ao criar produto. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }


  async function getProducts() {
    setLoading(true); 
    try {
      const response = await api.get('/products');
      setProducts(response.data); 
    } catch (error) {
      console.error('Erro ao buscar produtos:', error.message);
      alert('Erro ao buscar produtos. Tente novamente.');
    } finally {
      setLoading(false); 
    }
  }


  async function deleteProduct(id) {
    const confirmed = window.confirm('Tem certeza que deseja excluir este produto?');
    if (confirmed) {
      try {
        await api.delete(`/products/${id}`); 
        setProducts((prevProducts) => prevProducts.filter(produto => produto.id !== id)); 
      } catch (error) {
        console.error('Erro ao excluir produto:', error.message);
        alert('Erro ao excluir o produto. Tente novamente.');
      }
    } else {
      console.log('Exclusão cancelada');
    }
  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastrar Produto</h1>
          <input placeholder="Nome" name="nome" type="text" ref={inputNome} />
          <input placeholder="Quantidade" name="quantidade" type="number" ref={inputQuantidade} />
          <input placeholder="Preço" name="preco" type="number" ref={inputPreco} />
          <input placeholder="Marca" name="marca" type="text" ref={inputMarca} />
          <button
            type="button"
            onClick={CreateProducts}
            disabled={loading} 
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <div className="cards-container">
          {products.length === 0 ? (
            <p>Nenhum produto cadastrado.</p> 
          ) : (
            products.map(produto => (
              <div key={produto.id} className="card">
                <div>
                  <p>Nome: {produto.nome}</p>
                  <p>Quantidade: {produto.quantidade}</p>
                  <p>Preço: {produto.preco}</p>
                  <p>Marca: {produto.marca}</p>
                </div>
                <button className="round-button" onClick={() => deleteProduct(produto.id)}>
                  Excluir
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

