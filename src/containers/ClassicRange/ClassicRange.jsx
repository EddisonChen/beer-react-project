import "./ClassicRange.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";

const ClassicRange = (props) => {

    const {beers} = props;

    const classicRangeBeers = beers.filter((beer) => {
        let beerYear = beer.first_brewed.slice(3)
        return (
            Number(beerYear) < 2010
        )
    })

    const showClassicRangeBeers = classicRangeBeers.map((beer) => {
        return (
            <SingleBeer key={beer.id} name={beer.name} tagline={beer.tagline} abv={beer.abv} ph={beer.ph} description={beer.description} image={beer.image_url} date={beer.first_brewed}/>   
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