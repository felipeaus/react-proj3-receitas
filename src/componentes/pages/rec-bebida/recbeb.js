import "./style.css"
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import Logo from "../../../imagens/receitas-da-angela-header.png"


const receitas = {
    13: {
      link: "",
      titulo: "Chá Mate com Limão",
      ingre: "- 3 colheres de Chá Mate \r\n - 1 Limão \r\n  -1 lt de Água",            
      modo: "modo de preparo",
    },
    14: {
      link: "",
      titulo: "RecBeb 2",
      ingre: "ingredientes",
      modo: "modo de preparo",
    },
    15: {
        link: "",
        titulo: "RecBeb 3",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    16: {
        link: "",
        titulo: "RecBeb 4",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    17: {
        link: "",
        titulo: "RecBeb 5",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    18: {
        link: "",
        titulo: "RecBeb 6",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
  };

  

export function RecBeb(props) {

    const params = useParams();

    const id = params.id;

    const receita = receitas[id];

    

    return (
        <>
        <div>
            <Banner image={Logo}/>
        </div>
        <div className='menu'>
          <Menu link="/receitas-doces" titulo="Receitas Doces"/>
          <Menu link="/receitas-salgada" titulo="Receitas Salgadas"/>
          <Menu link="/receitas-bebida" titulo="Receitas Bebidas"/>
          <Menu link="/sobre" titulo="Sobre"/>
        </div>
            
        <div>
            <h1>{receita.titulo}</h1>
            <p style={{ whiteSpace: "pre-line" }}>{receita.ingre}</p>
            <h2>Modo de Preparo</h2>
            <p>{receita.modo}</p>
        </div>
        </>
    );
}