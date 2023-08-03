import './App.css';
import { Banner } from "./componentes/banner/banner";
import LogoBanner from "./imagens/receitas-da-angela-header.png"

function App() {
  return (
    <div className='all-content'>
      <Banner image={LogoBanner}/>      
    </div>
  );
}

export default App;
