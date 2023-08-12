import "./style.css"
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import  Logo  from "../../../imagens/receitas-da-angela-header.png";


              
        export function Sobre (props) {
        return (

        <>
        <div>
        <Banner to="/" image={Logo}/>
        </div>
        <div className='menu'>
          <Menu link="/receitas-doces" titulo="Receitas Doces"/>
          <Menu link="/receitas-salgada" titulo="Receitas Salgadas"/>
          <Menu link="/receitas-bebida" titulo="Receitas Bebidas"/>
          <Menu link="/sobre" titulo="Sobre"/>
      </div>

      <div className="sobre">
        <h1>Receitas da Angela</h1>
        <p>
            A idéia por trás do site é compartilhar receitas fáceis,
            que demandam de poucos ingredientes, e modo de preparo simplificado.
        </p>
        <p>
        Todas as receitas foram selecionadas a dedo, todas muito bem testadas.
        </p>
        
      </div>


      
    
    </>

    );
}