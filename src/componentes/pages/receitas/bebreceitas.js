import { Banner } from "../../banner/banner";
import Logo from "./receitas-da-angela-header.png";
import "./style.css";
import { Link } from "react-router-dom";
import {Menu} from "../../menu/menu";


export function BebReceitas (props) {
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
                <Link to="/receitas-bebida/13" className="hover-lista">Chá Mate com Limão</Link>
                <Link to="/receitas-bebida/14" className="hover-lista">Receita 2</Link>
                <Link to="/receitas-bebida/15" className="hover-lista">Receita 3</Link>
            </div>
            <div className="lista-rec">
                <Link to="/receitas-bebida/16" className="hover-lista">Receita 4</Link>
                <Link to="/receitas-bebida/17" className="hover-lista">Receita 5</Link>
                <Link to="/receitas-bebida/18" className="hover-lista">Receita 6</Link>
            </div>

        </div>
      
      </div> 
    );
  }