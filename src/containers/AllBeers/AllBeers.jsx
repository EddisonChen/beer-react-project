import "./AllBeers.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";
import {Link} from "react-router-dom";

const AllBeers = (props) => {

    const {filteredBeers} = props;

    const showBeers = filteredBeers.map((beer) => {
        return <Link to={`/${beer.id}`} ><SingleBeer 
                className="single-beer" 
                key={beer.id} 
                name={beer.name} 
                tagline={beer.tagline} 
                abv={beer.abv} 
                ph={beer.ph} 
                description={beer.description} 
                image={beer.image_url} 
                date={beer.first_brewed}/>
                </Link>
    })

    return (
        <>
            {showBeers}
        </>

    )
}

export default AllBeers;