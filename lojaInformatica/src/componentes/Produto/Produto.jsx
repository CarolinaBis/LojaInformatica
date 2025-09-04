import React from "react";
import "./Produto.css";

const Produto = ({ nome, preco, marca, estado }) => {

  const marcasImagens = {
    Dell: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png",
    HP: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
    Asus: "https://static.cdnlogo.com/logos/a/92/asus.png",
    Positivo: "https://imagensempng.com.br/wp-content/uploads/2023/04/Logo-Positivo-Png-1024x1024.png",
    Xiaomi: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg",
    Samsung: "https://cdn.freebiesupply.com/logos/large/2x/samsung-1-logo-png-transparent.png",
    Microsoft: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    Apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    
  };

  const imagemMarca = marcasImagens[marca] || "/imagens/marcas/generic.png";

  return (
    <div className="produto">
      <div className="cabecalho">
        <span className={`status ${estado === "USADO" ? "usado" : ""}`}>
          {estado}
        </span>
        <img src={imagemMarca} alt={`Logo ${marca}`} className="logo-marca" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <div className="preco">R$ {preco}</div>
        <span className="marca">{marca}</span>
      </div>
    </div>
  );
};

export default Produto;
