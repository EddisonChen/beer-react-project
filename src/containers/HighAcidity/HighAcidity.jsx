import "./HighAcidity.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";
import {Link} from "react-router-dom";

const HighAcidity = (props) => {

    const {beers} = props;

    const highAcidityBeers = beers.filter((beer)=> {
        return (
            beer.ph < 4
        )
    })

    const sortedBeers = highAcidityBeers.sort((a,b) => {
        return b.abv - a.abv
    })

    const showHighAcidityBeers = sortedBeers.map((beer)=> {
        return (
            <Link to={`/${beer.id}`}><SingleBeer
            date={beer.first_brewed} 
            key={beer.id} name={beer.name} 
            tagline={beer.tagline} 
            abv={beer.abv} 
            ph={beer.ph} 
            description={beer.description} 
            image={beer.image_url}/>   
            </Link>
        )
    })

    return (
        <>
            <h1>High Acidity Beers</h1>
            {showHighAcidityBeers}
        </>
    )
}

export default HighAcidity;