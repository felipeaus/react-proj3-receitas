import './style.css';
import { Banner } from "../../banner/banner";
import { Menu } from "../../menu/menu";
import LogoBanner from "./receitas-da-angela-header.png"
import FotoHome from "./img1.jpg"


export function Home() {
  return (
    <>
    <div className='all-content'>
      <Banner image={LogoBanner}/>      
    </div>

    <div className='all-content'>

      <div className='menu'>
      <Menu link="/receitas-doces" titulo="Receitas Doces"/>
      <Menu link="/receitas-salgada" titulo="Receitas Salgadas"/>
      <Menu link="/receitas-bebida" titulo="Receitas Bebidas"/>
      <Menu link="/sobre" titulo="Sobre"/>
      </div>

      <div className='all-content'>
      <div class="txt-home">
            <h1> As Melhores Receitas para seu dia!!</h1>
            <p>
                Escolha a categoria de receita que deseja
                sendo doce, salgado ou bebida, com certeza
                terá uma para você.
            </p>
            <p>
                Vá até o <b>SOBRE</b> e descubra a origem das receitas,
                a idéia por trás do site e curiosidades.
            </p>
            <img className="img-home" alt="fotohome" src={FotoHome}/>
      </div>
      </div>
    

    </div>
    </>
  );
}
