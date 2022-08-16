import "./ClassicRange.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";

const ClassicRange = (props) => {

    const {beers} = props;

    const classicRangeBeers = beers.filter((beer) => {
        return (
            Number(beer.first_brewed) > .00498
        )
    })

    const showClassicRangeBeers = classicRangeBeers.map((beer) => {
        return (
            <SingleBeer key={beer.id} name={beer.name} tagline={beer.tagline} abv={beer.abv} ph={beer.ph} description={beer.description} image={beer.image_url}/>   
        )
    })

    return (
        <>
            <h1>Classic Range Beers</h1>
            {showClassicRangeBeers}
        </>
    )
}

export default ClassicRange;