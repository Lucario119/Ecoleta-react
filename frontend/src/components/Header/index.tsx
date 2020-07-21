import React from "react";
import {Link} from "react-router-dom";
import { Headers } from "./styles";

const Header: React.FC = () => {
  return (
    <Headers>
      <img src="../../assets/logo.svg" alt="Logomarca"></img>
      <Link to="/">
        <span></span>
        Voltar para home
      </Link>
    </Headers>
  );
};

export default Header;
