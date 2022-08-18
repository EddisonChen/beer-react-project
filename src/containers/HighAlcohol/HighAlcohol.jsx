import "./HighAlcohol.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";
import {Link} from "react-router-dom";

const HighAlcohol = (props) => {

    const {beers} = props;

    const highAlcoholBeers = beers.filter((beer) => {
        return (
            beer.abv > 6
        )
    })

    const sortedBeers = highAlcoholBeers.sort((a,b) => {
        return b.abv - a.abv;
    })

    const showHighAlcoholBeers = sortedBeers.map((beer) => {
        return (
            <Link to={`/${beer.id}`}><SingleBeer 
                date={beer.first_brewed}
                key={beer.id} 
                name={beer.name} 
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
            <h1>High Alcohol Beers</h1>
            {showHighAlcoholBeers}
        </>
    )
}

export default HighAlcohol