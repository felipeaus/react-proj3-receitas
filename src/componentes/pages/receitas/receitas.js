import { Banner } from "../../banner/banner";
import Logo from "./receitas-da-angela-header.png";
import "./style.css";
import { Link } from "react-router-dom";
import {Menu} from "../../menu/menu";


export function Receitas (props) {
    return (
  
        <div>
        <Banner to="/" image={Logo}/>
        <div>
        <div className='menu'>
          <Menu link="/receitas-doces" titulo="Receitas Doces"/>
          <Menu link="/receitas-salgada" titulo="Receitas Salgadas"/>
          <Menu link="/receitas-bebida" titulo="Receitas Bebidas"/>
          <Menu link="/sobre" titulo="Sobre"/>
      </div>
            <div className="lista-rec">
                <Link to="/receitas-doces/1">Receita 1</Link>
                <Link to="/receitas-doces/2">Receita 2</Link>
                <Link to="/receitas-doces/3">Receita 3</Link>
            </div>
            <div className="lista-rec">
                <Link to="/receitas-doces/4">Receita 4</Link>
                <Link to="/receitas-doces/5">Receita 5</Link>
                <Link to="/receitas-doces/6">Receita 6</Link>
            </div>

        </div>
      
      </div> 
    );
  }