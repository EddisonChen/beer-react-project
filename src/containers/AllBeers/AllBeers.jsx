import "./AllBeers.scss";
import SingleBeer from "../../components/SingleBeer/SingleBeer";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const AllBeers = (props) => {

    const {beers,
         isHighAcidity, isHighAlcohol, isClassicRange, showBeer
        } = props;

    // const classicRangeBeers = beers.filter((beer) => {
    //     let beerYear = beer.first_brewed.slice(3)
    //     return (
    //         Number(beerYear) < 2010
    //     )
    // })

    // const highAlcoholBeers = beers.filter((beer) => {
    //     return (
    //         beer.abv > 6
    //     )
    // })

    // const sortedHighAlcoholBeers = highAlcoholBeers.sort((a,b) => {
    //     return b.abv - a.abv;
    // })

    // const highAcidityBeers = beers.filter((beer)=> {
    //     return (
    //         beer.ph < 4
    //     )
    // })

    // const sortedHighAcidityBeers = highAcidityBeers.sort((a,b) => {
    //     return b.abv - a.abv
    // })

    // const [showBeer, setShowBeer] = useState(beers)

    // const displayedBeers = () => {
    //     if (isHighAcidity = true) {
    //         setShowBeer(sortedHighAcidityBeers);
    //     } else if (isHighAlcohol = true) {
    //         setShowBeer(sortedHighAlcoholBeers);
    //     } else if (isClassicRange = true) {
    //         setShowBeer(classicRangeBeers);
    //     } else {
    //         setShowBeer(beers);
    //     }
    // }

    // let showBeer = beers;

    // const displayedBeers = (showBeer) => {
    //     if (isHighAcidity == true) {
    //         showBeer==sortedHighAcidityBeers;
    //     } else if (isHighAlcohol == true) {
    //         showBeer==sortedHighAlcoholBeers;
    //     } else if (isClassicRange == true) {
    //         showBeer==classicRangeBeers;
    //     } else {
    //         showBeer==beers;
    //     }
    // } 

    // displayedBeers();

    const showBeers = showBeer.map((beer) => {
        return <Link to={`/${beer.id}`}><SingleBeer 
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