import './App.css';
import { Banner } from "./componentes/banner/banner";
import { Menu } from "./componentes/menu/menu";
import LogoBanner from "./imagens/receitas-da-angela-header.png"
import FotoHome from "./imagens/img1.jpg"

function App() {
  return (
    <>
    <div className='all-content'>
      <Banner image={LogoBanner}/>      
    </div>

    <div className='all-content'>
      <div className='menu'>
      <Menu nome="#" titulo="Receitas Doces"/>
      <Menu nome="#" titulo="Receitas Salgadas"/>
      <Menu nome="#" titulo="Receitas de Bebidas"/>
      <Menu nome="#" titulo="Sobre"/>
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
                Vá até o <a href="#">SOBRE</a> e descubra a origem das receitas,
                a idéia por trás do site e curiosidades.
            </p>
            <img src={FotoHome}/>
      </div>
      </div>

    </div>
    </>
  );
}

export default App;
