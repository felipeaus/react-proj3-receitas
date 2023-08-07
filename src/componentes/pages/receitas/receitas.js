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
                <Link link="/receita-1">Receita 1</Link>
                <Link to={props.link2}>Receita 2</Link>
                <Link to={props.link3}>Receita 3</Link>
            </div>
            <div className="lista-rec">
                <Link to={props.link4}>Receita 4</Link>
                <Link to={props.link5}>Receita 5</Link>
                <Link to={props.link6}>Receita 6</Link>
            </div>

        </div>
      
      </div> 
    );
  }