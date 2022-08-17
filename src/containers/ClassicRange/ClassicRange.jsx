import "./ClassicRange.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";
import {Link} from "react-router-dom";

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
            <Link to={`/${beer.id}`}><SingleBeer
            key={beer.id} 
            name={beer.name} 
            tagline={beer.tagline} 
            abv={beer.abv} 
            ph={beer.ph} 
            description={beer.description} 
            image={beer.image_url} 
            date={beer.first_brewed}/>
            </Link>   
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