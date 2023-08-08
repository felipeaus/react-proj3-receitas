import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./componentes/pages/home/home";
import { Receitas } from "./componentes/pages/receitas/receitas";
import { RecDoce } from "./componentes/pages/rec-doce/recdoce";
import { RecSalg } from "./componentes/pages/rec-salgada/recsalgada"
import { Sobre } from "./componentes/pages/sobre/sobre";



function App() {
  return (
    <div className="all-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas-doces" element={<Receitas />} />
          <Route path="/receitas-salgada" element={<Receitas />} />
          <Route path="/receitas-bebida" element={<Receitas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/receitas-doces/:id" element={<RecDoce />} />
          <Route path="/receitas-salgadas/:id" element={<RecSalg />} />
          <Route path="/receitas-bebida/:id" element={<RecDoce />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;