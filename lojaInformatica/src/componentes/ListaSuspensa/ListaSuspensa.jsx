import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const aoEscolhido = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={aoEscolhido}
        value={props.valor || ""}
        required={props.required}
      >
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
