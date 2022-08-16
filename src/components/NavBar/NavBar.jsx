import "./NavBar.scss";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <h1>Filters</h1>

            <div className="nav-bar-options">
                <Link to="/AllBeers">All Beers</Link>
                <Link to="/HighAlcoholBeers">High Alcohol</Link>
                <Link to="/ClassicRange">Classic Range (First brewed before 2010)</Link>
                <Link to="/HighAcidity">High Acidity</Link>
            </div>
        </div>

    )
}

export default NavBar;