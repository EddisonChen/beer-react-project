import "./AllBeers.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";

const AllBeers = (props) => {

    const {beers} = props;

    const showBeers = beers.map((beer) => {
        return <SingleBeer key={beer.id} name={beer.name} tagline={beer.tagline} abv={beer.abv} ph={beer.ph} description={beer.description} image={beer.image_url}/>
    })

    return (
        <>
            {showBeers}
        </>

    )
}

export default AllBeers;