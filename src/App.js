import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./componentes/pages/home/home";
import { Receitas } from "./componentes/pages/receitas/receitas";
import { Areceita } from "./componentes/pages/areceita/areceita"


function App() {
  return (
    <div className="all-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas-doces" element={<Receitas />} />
          <Route path="/receitas-salgada" element={<Receitas />} />
          <Route path="/receitas-bebida" element={<Receitas />} />
          <Route path="/sobre" element={<Receitas />} />
          <Route path="/receita-1" elemento={<Areceita titulo="teste" ingre="teste2" modo="teste3"/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;