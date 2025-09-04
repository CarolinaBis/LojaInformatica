import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Categoria from "./componentes/Categoria/Categoria";

function App() {
  const categorias = [
    {
      nome: "Computadores",
      corPrimaria: "#3498db",
      corSecundaria: "#cbe5f6",
    },
    {
      nome: "Acessórios",
      corPrimaria: "#3498db",
      corSecundaria: "#eef6fc",
    },
    {
      nome: "Impressoras",
      corPrimaria: "#3498db",
      corSecundaria: "#cbe5f6",
    },
    {
      nome: "Games",
      corPrimaria: "#3498db",
      corSecundaria: "#eef6fc",
    },
    {
      nome: "Gadgets",
      corPrimaria: "#3498db",
      corSecundaria: "#cbe5f6",
    },
  ];

  const listaCategorias = categorias.map((categoria) => categoria.nome);

  const [produtos, setProdutos] = useState([
    {
      nome: "Notebook Gamer",
      preco: "3.499,90",
      marca: "Asus",
      categoria: "Computadores",
      estado: "NOVO",
    },
    {
      nome: "Mouse Sem Fio",
      preco: "89,90",
      marca: "Dell",
      categoria: "Acessórios",
      estado: "NOVO",
    },
    {
      nome: "Impressora",
      preco: "599,00",
      marca: "HP",
      categoria: "Impressoras",
      estado: "NOVO",
    },
    {
      nome: "Console Xbox Series S",
      preco: "2.199,00",
      marca: "Microsoft",
      categoria: "Games",
      estado: "NOVO",
    },
    {
      nome: "Smartwatch",
      preco: "329,90",
      marca: "Xiaomi",
      categoria: "Gadgets",
      estado: "USADO",
    },
  ]);

  const adicionaProduto = (prod) => {
    setProdutos([...produtos, prod]);
  };

  return (
    <div>
      <Banner />
      <Formulario
        categorias={listaCategorias}
        aoProdutoCadastrado={(prod) => adicionaProduto(prod)}
      />

      {categorias.map((categoria) => (
        <Categoria
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          produtos={produtos.filter(
            (prod) => prod.categoria === categoria.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
