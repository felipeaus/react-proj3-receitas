import "./style.css";
import { Link } from "react-router-dom";

export function Menu(props) {
    return (
      <>
      <div className="div-menu">
      <Link to={props.link}>{props.titulo}</Link>
      </div> 
      </>
    );
  }