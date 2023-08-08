import "./style.css"
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import Logo from "../../../imagens/receitas-da-angela-header.png"


const receitas = {
    7: {
      link: "",
      titulo: "RecSalg 1",
      ingre: "ingredientes",
      modo: "modo de preparo",
    },
    8: {
      link: "",
      titulo: "RecSalg 2",
      ingre: "ingredientes",
      modo: "modo de preparo",
    },
    9: {
        link: "",
        titulo: "RecSalg 3",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    10: {
        link: "",
        titulo: "RecSalg 4",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    11: {
        link: "",
        titulo: "RecSalg 5",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
    12: {
        link: "",
        titulo: "RecSalg 6",
        ingre: "ingredientes",
        modo: "modo de preparo",
    },
  };

export function RecSalg(props) {

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
            <p>{receita.ingre}</p>
            <h2>Modo de Preparo</h2>
            <p>{receita.modo}</p>
            </div>
        </>
    );
}