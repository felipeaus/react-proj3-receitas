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
      modo: "Misture todos ingredientes até ficar uma massa homogênea. Divida-a em 2 partes.\r\nNuma forma untada espalhe uma parte da massa.\r\nColoque o recheio de preferência, use a imaginação.\r\nAgora cubra com a outra metada da massa. No topo coloque molho de carne moida\r\nLeve ao forno por 30 minutos na temperatura maxima.",
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
        titulo: "Torta Simples",
        ingre: "- 4 Ovos.\r\n- 2 xicaras de leite.\r\n- 3 xicaras de farinha de trigo.\r\n- 1 xicara de óleo.\r\n- 1 colher de fermento.\r\n- Sal a gosto.",
        modo: "Misture todos ingredientes até ficar uma massa homogênea. Divida-a em 2 partes.\r\nNuma forma untada espalhe uma parte da massa.\r\nColoque o recheio de preferência, use a imaginação.\r\nAgora cubra com a outra metada da massa.\r\nLeve ao forno por 30 minutos na temperatura maxima.",
    },
    11: {
        link: "",
        titulo: "Pão de Batata",
        ingre: "- 2 colheres de sopa de açucar.\r\n- 1 coher de sopa de sal.\r\n- 3 ovo.\r\n- 1 copo de leite.\r\n- 1 copo de óleo.\r\n- 4 batatas cozidas.\r\n- 45 gramas de fermento biológico.\r\n- 1kg de farinha de trigo.",
        modo: "Bater no liquidificador o óleo, açucar, leite, ovos, sal, as batatas e o fermento.\r\nNum recipiente despeje a mistura e acrescente a farinha aos poucos, enquanto mexe com uma colher.\r\nA partir do momento que a não puder mexer com a colher, começe a sovar com as mãos\r\ne continue acrescentando a farinha, até que a massa não grude e fique homogênea.\r\nFaça uma bola com a massa, e cubra-a com um pano e deixa dencansando até que dobre de volume.\r\nFeito isso, corte a massa no formato e tamanho desejado,\r\ne mais uma vez deixe os pães descansando na assadeira\r\naté que ao pressionar, ela permaneça afundada.\r\nAssar com o forno em temperatura baixa, quando os pães estiveram começando a dourar,\r\ndeixar mais 10 minutos em fogo médio.",
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