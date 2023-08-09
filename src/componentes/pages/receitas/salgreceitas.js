import { Banner } from "../../banner/banner";
import Logo from "./receitas-da-angela-header.png";
import "./style copy.css";
import { Link } from "react-router-dom";
import {Menu} from "../../menu/menu";


export function SalgReceitas (props) {
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
                <Link to="/receitas-salgadas/7">Receita 1</Link>
                <Link to="/receitas-salgadas/8">Receita 2</Link>
                <Link to="/receitas-salgadas/9">Receita 3</Link>
            </div>
            <div className="lista-rec">
                <Link to="/receitas-salgadas/10">Receita 4</Link>
                <Link to="/receitas-salgadas/11">Receita 5</Link>
                <Link to="/receitas-salgadas/12">Receita 6</Link>
            </div>

        </div>
      
      </div> 
    );
  }