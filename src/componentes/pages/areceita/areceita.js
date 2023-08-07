import "./style.css"
import { Banner } from "../../banner/banner"
import { Menu } from "../../menu/menu"
import { Link } from "react-router-dom";

export function Areceita(props) {
    return (
        <>
        <div>
            <Banner/>
        </div>
            <Menu/>
        <div>
            <Link to={props.link}>
            <h1>{props.titulo}</h1>
            <p>{props.ingre}</p>
            <h2>Modo de Preparo</h2>
            <p>{props.modo}</p>
            </Link>
        </div>
        </>



    );
}