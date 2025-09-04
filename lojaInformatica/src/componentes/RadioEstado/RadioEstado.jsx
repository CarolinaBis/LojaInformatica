import React from "react";
import "./RadioEstado.css";

const RadioEstado = (props) => {
  const handleChange = (novoEstado) => {
    props.aoAlterado(novoEstado);
  };

  return (
    <div className="radio-estado">
      <label className="radio-label">{props.label}</label>
      <div className="radio-options">
        <label className="radio-option">
          <input
            type="radio"
            name="estado"
            value="NOVO"
            checked={props.valor === "NOVO"}
            onChange={() => handleChange("NOVO")}
            className="radio-input"
          />
          <span className="radio-custom"></span>
          <span className="radio-text">Novo</span>
        </label>

        <label className="radio-option">
          <input
            type="radio"
            name="estado"
            value="USADO"
            checked={props.valor === "USADO"}
            onChange={() => handleChange("USADO")}
            className="radio-input"
          />
          <span className="radio-custom"></span>
          <span className="radio-text">Usado</span>
        </label>
      </div>
    </div>
  );
};

export default RadioEstado;
