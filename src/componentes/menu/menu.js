import "./style.css"

export function Menu(props) {
    return (
  
      <div className="div-menu">
      <a href={props.link} target="_blank" 
         rel="noopener noreferrer">{props.titulo}</a>
      </div> 
    );
  }