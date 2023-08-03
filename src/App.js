import './App.css';
import { Banner } from "./componentes/banner/banner";
import { Menu } from "./componentes/menu/menu";
import LogoBanner from "./imagens/receitas-da-angela-header.png"

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
    </div>
    </>
  );
}

export default App;
