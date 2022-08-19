import "./BeerInfo.scss";

const BeerInfo = (props) => {

    const {beers} = props

    return (
        <div>
            <h1 className="beer-name">{beers.name}</h1>
            <h2 className="beer-tagline">{beers.tagline}</h2>
            <div className="beer-content">
                <img src={beers.image_url}></img>

                <div className="beer-description">
                    <p>ABV: {beers.abv}</p>
                    <p>pH: {beers.ph}</p>
                    <p>First Brewed: {beers.first_brewed}</p>
                    <p>{beers.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerInfo;