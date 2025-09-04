import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import RadioEstado from "../RadioEstado/RadioEstado";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("NOVO");

  const listaMarcas = [
    "Dell",
    "HP",
    "Asus",
    "Positivo",
    "Xiaomi",
    "Samsung",
    "Lenovo",
    "Acer",
    "Microsoft",
    "Apple",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (!marca || marca === "Selecione uma marca") {
      alert("Por favor, selecione uma marca válida");
      return;
    }

    props.aoProdutoCadastrado({
      nome,
      preco,
      marca,
      categoria,
      estado,
    });

    setNome("");
    setPreco("");
    setMarca("");
    setCategoria("");
    setEstado("NOVO");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Cadastre um novo produto</h2>

        <CampoTexto
          label="Nome do produto"
          placeholder="Digite o nome do produto"
          valor={nome}
          aoAlterado={setNome}
          required
        />

        <CampoTexto
          label="Preço"
          placeholder="Digite o preço (ex: 999.90)"
          valor={preco}
          aoAlterado={setPreco}
          required
        />

        <ListaSuspensa
          label="Marca"
          itens={["Selecione uma marca", ...listaMarcas]}
          valor={marca}
          aoAlterado={setMarca}
          required
        />

        <ListaSuspensa
          label="Categoria"
          itens={["Selecione uma categoria", ...props.categorias]}
          valor={categoria}
          aoAlterado={setCategoria}
          required
        />

        <RadioEstado
          label="Estado do produto"
          valor={estado}
          aoAlterado={setEstado}
        />

        <Botao>Adicionar Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;
