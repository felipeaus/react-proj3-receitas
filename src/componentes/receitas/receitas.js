import { Banner } from "../banner/banner";
import Logo from "./receitas-da-angela-header.png";
import "./style.css";

export function Receitas (props) {
    return (
  
      <div>
        <Banner nome="../app.js" image={Logo}/>
        <div>
            <div className="lista-rec">
                <a href={props.link1} target="_blank" rel="noopener noreferrer">Receita 1</a>
                <a href={props.link2} target="_blank" rel="noopener noreferrer">Receita 2</a>
                <a href={props.link3} target="_blank" rel="noopener noreferrer">Receita 3</a>
            </div>
            <div className="lista-rec">
                <a href={props.link4} target="_blank" rel="noopener noreferrer">Receita 4</a>
                <a href={props.link5} target="_blank" rel="noopener noreferrer">Receita 5</a>
                <a href={props.link6} target="_blank" rel="noopener noreferrer">Receita 6</a>
            </div>

        </div>
      
      </div> 
    );
  }