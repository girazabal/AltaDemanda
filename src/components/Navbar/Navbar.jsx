import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import Categories from "../Categories/Categories"
const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link to="/" className="navbar-brand" href="#"><img src="favicon.ico" alt="img" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Categories/>
    <CartWidget/>
  </div>
</nav>
    )
}

export default Navbar
