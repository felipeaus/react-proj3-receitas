import "./style.css"
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import Logo from "../../../imagens/receitas-da-angela-header.png"


const receitas = {
    1: {
      link: "",
      titulo: "Bolo Formigueiro",
      ingre: "- 2 copos de farinha de trigo.\r\n- 2 copos de açucar.\r\n- 1 copo de leite.\r\n- 4 ovos.\r\n- 1 colher de pó royal.\r\n- 2 colheres de margarina.\r\n- 100gr de coco ralado.\r\n- 100gr de granulado de chocolate.",
      modo: "Em um recipiente misture bem todos os ingrediente, exceto o coco e o granulado.\r\nApós isso, adicionar o coco e o granulado e misturar o sulficiente para que fiquem espalhados na massa.\r\nDespeje a massa numa forma untada, e pré-aqueça o forno a 180°.\r\nLevar ao forno por 40 minutos até abrir a porta,\r\nespete um garfo na massa e veja se ainda 0e0stá crua.\r\nRepita esse processo até o bolo estar pronto",
    },
    2: {
      link: "",
      titulo: "Bolinho de Chuva",
      ingre: "- 2 ovos.\r\n- 1 xicara de açucar.\r\n- 1 xicara de leite.\r\n- 2 xicaras e meia de farinha de trigo.\r\n- 1 colher de fermento.",
      modo: "Misture todos os ingrediente.\r\nCom a ajuda de uma colher, pegue uma quantidade média,\r\ne despeje em óleo em ponto de fritura, deixe até dourar.\r\nDepois role os bolinhos em açucar.",
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