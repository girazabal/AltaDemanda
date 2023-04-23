import { Link } from "react-router-dom";
const Categories =()=>{
    return(
        <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Link to="/" className="nav-link active" >Home
            <span className="visually-hidden">(current)</span>
        </Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
        <div className="dropdown-menu">
            <Link to="/Categories/Remeras" className="dropdown-item">Remeras</Link>
            <Link to="/Categories/Pantalones" className="dropdown-item">Pantalones</Link>
            <Link to="/Categories/Accesorios" className="dropdown-item">Accesorios</Link>
        </div>
        </li>
        <li className="nav-item">
        <Link to="/Categories/AboutUs" className="nav-link">Sobre nosotros</Link>
        </li>
        <li className="nav-item">
        <Link to="/Categories/Contact" className="nav-link">Contacto</Link>
        </li>
    </ul>
    </div>
    )
}

export default Categories;