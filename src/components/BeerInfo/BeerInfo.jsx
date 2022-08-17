import "./BeerInfo.scss";

const BeerInfo = (props) => {

    const {beers} = props

    return (
        <div>
            <h1>{beers.name}</h1>
            <h2>{beers.tagline}</h2>
            <img src={beers.image_url}></img>
            <p>ABV: {beers.abv}</p>
            <p>pH: {beers.pH}</p>
            <p>First Brewed: {beers.first_brewed}</p>
            <p>{beers.description}</p>
        </div>
    )
}

export default BeerInfo;