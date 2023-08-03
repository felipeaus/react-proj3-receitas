import "./style.css"

export function Menu(props) {
    return (
  
      <div className="div-menu">
      <a href={props.nome} target="_blank" 
         rel="noopener noreferrer">{props.titulo}</a>
      </div> 
    );
  }