import "./style.css";

export function Banner(props) {
    return (
  
      <div className="div-banner">
      <a href={props.nome} target="_blank" rel="noopener noreferrer">
        <img className="banner" alt="banner-site" src={props.image}></img>
      </a>
     </div>   
    );
  }