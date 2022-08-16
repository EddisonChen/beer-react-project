import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <h1>Filters</h1>

            <div className="nav-bar-options">
                <button>High Alcohol</button>
                <button>Classic Range (First brewed before 2010)</button>
                <button>High Acidity</button>
            </div>
        </div>

    )
}

export default NavBar;