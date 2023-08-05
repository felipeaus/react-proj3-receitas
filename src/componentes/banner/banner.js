import "./style.css";
import { Link } from "react-router-dom";

export function Banner(props) {
    return (
  
      <div className="div-banner">
      <Link to="/">
        <img className="banner" alt="banner-site" src={props.image}></img>
      </Link>
     </div>   
    );
  }