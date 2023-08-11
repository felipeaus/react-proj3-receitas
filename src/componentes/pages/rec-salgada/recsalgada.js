import "./style.css"
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import Logo from "../../../imagens/receitas-da-angela-header.png"


const receitas = {
    7: {
      link: "",
      titulo: "Nhoque de Forno",
      ingre: "- 1kg de batata cozida e amassada.\r\n- 2 colheres de sopa de maizana.\r\n- 2 colheres de sopa de margarina.\r\n- 2 ovos.\r\n- Sal a gosto.\r\n- 1 xicara de leite fervendo.\r\n- 1 colher de pó Royal.\r\n- 4 colheres de sopa de farinha de trigo.",
      modo: "Misture todos ingredientes até ficar uma massa. Divida-a em 2 partes.\r\nNuma forma untada espalhe uma parte da massa.\r\nColoque o recheio de preferência, use a imaginação.\r\nAgora cubra com a outra metada da massa. No topo coloque molho de carne moida\r\nLeve ao forno por 30 minutos na temperatura maxima.",
    },
    8: {
      link: "",
      titulo: "Maionese (sem óleo)",
      ingre: "- 1 caixa de creme de leite.\r\n- 4 ovos cozidos.\r\n- 3 dentes de alho.\r\n- Cheiro Verde a gosto.",
      modo: "Bata todos os ingredientes no liquidificador até ficar bem misturado.\r\nColoque em um recipiente e leve a geladeira.",
    },
    9: {
        link: "",
        titulo: "Massa de Pizza",
        ingre: "- 3 xicaras de farinha de trigo.\r\n- 1 colher de fermento em pó.\r\n- 1 xicara de chá de água.\r\n- Sal a gosto.",
        modo: "Em um recipiente coloque os ingrediente e misture-os até que a massa fique homogênea.\r\nDeixe a massa descansando enquanto prepara o recheio de preferência.\r\nEspalhe a massa em uma forma untada, coloque o recheio e leve ao forno com fogo alto por 30 minutos.",
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
            
        <div className="rec-div">
            <h1 className="txt-titulo">{receita.titulo}</h1>
            <p className="txt-ingre" style={{ whiteSpace: "pre-wrap" }}>{receita.ingre}</p>
            <h2 className="txt-titmodo">Modo de Preparo</h2>
            <p className="txt-modo" style={{ whiteSpace: "pre-wrap" }}>{receita.modo}</p>
        </div>
        </>
    );
}