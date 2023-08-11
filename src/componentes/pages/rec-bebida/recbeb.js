import "./style.css"
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import Logo from "../../../imagens/receitas-da-angela-header.png"


const receitas = {
    13: {
      link: "",
      titulo: "Chá Mate com Limão",
      ingre: "- 3 colheres de Chá Mate \r\n- 1 limão \r\n- 1 litro de Água",            
      modo: "Coloque a água no recipiente que vai ao fogo, ligue em fogo alto.\r\nAo começar a ferver coloque o chá e rale a casca do limão, e uma rodela junto a mistura.\r\nAo começar a borbulhar desligue o fogo e deixa descansando por 5 minutos.\r\nEsprema o limão depois coe e coloque no recipiente final e agora só gelar. Sirva com bastante gelo.",
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
            
        <div className="rec-div">
            <h1 className="txt-titulo">{receita.titulo}</h1>
            <p className="txt-ingre" style={{ whiteSpace: "pre-wrap" }}>{receita.ingre}</p>
            <h2 className="txt-titmodo">Modo de Preparo</h2>
            <p className="txt-modo" style={{ whiteSpace: "pre-wrap" }}>{receita.modo}</p>
        </div>
        </>
    );
}