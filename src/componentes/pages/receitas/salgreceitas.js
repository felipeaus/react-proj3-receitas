import { Banner } from "../../banner/banner";
import Logo from "./receitas-da-angela-header.png";
import "./style.css";
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
                <Link to="/receitas-salgadas/7" className="hover-lista">Nhoque de Forno</Link>
                <Link to="/receitas-salgadas/8" className="hover-lista">Maionese - sem óleo</Link>
                <Link to="/receitas-salgadas/9" className="hover-lista">Massa de Pizza</Link>
            </div>
            <div className="lista-rec">
                <Link to="/receitas-salgadas/10" className="hover-lista">Receita 4</Link>
                <Link to="/receitas-salgadas/11" className="hover-lista">Receita 5</Link>
                <Link to="/receitas-salgadas/12" className="hover-lista">Receita 6</Link>
            </div>

        </div>
      
      </div> 
    );
  }