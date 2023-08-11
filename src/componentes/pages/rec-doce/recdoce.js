import "./style.css"
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import Logo from "../../../imagens/receitas-da-angela-header.png"


const receitas = {
    1: {
      link: "",
      titulo: "RecDoce 1",
      ingre: "ingredientes",
      modo: "modo de preparo",
    },
    2: {
      link: "",
      titulo: "RecDoce 2",
      ingre: "ingredientes",
      modo: "modo de preparo",
    },
    3: {
        link: "",
        titulo: "RecDoce 3",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    4: {
        link: "",
        titulo: "RecDoce 4",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    5: {
        link: "",
        titulo: "RecDoce 5",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    6: {
        link: "",
        titulo: "RecDoce 6",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
  };

export function RecDoce(props) {

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
            
        <div className="rec-div">
            <h1 className="txt-titulo">{receita.titulo}</h1>
            <p className="txt-ingre" style={{ whiteSpace: "pre-wrap" }}>{receita.ingre}</p>
            <h2 className="txt-titmodo">Modo de Preparo</h2>
            <p className="txt-modo" style={{ whiteSpace: "pre-wrap" }}>{receita.modo}</p>
        </div>
        </>
    );
}