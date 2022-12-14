import "./ExploreBeers.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import AllBeers from "../AllBeers/AllBeers";
import {useEffect, useState} from 'react';
import FilterButtons from "../../components/FilterButtons/FilterButtons";

const ExploreBeers = (props) => {

    const {beers,
            setIsHighAlcohol, 
            setIsHighAcidity, 
            setIsClassicRange,
            isHighAcidity, 
            isClassicRange, 
            isHighAlcohol
            } = props;

    const classicRangeBeers = beers.filter((beer) => { // filters beers before 2010
        let beerYear = beer.first_brewed.slice(3)
        return (
            Number(beerYear) < 2010
        )
    })
    const highAlcoholBeers = beers.filter((beer) => {
        return (
            beer.abv > 6
        )
    })
    const sortedHighAlcoholBeers = highAlcoholBeers.sort((a,b) => {
        return b.abv - a.abv;
    })
    const highAcidityBeers = beers.filter((beer)=> {
        return (
            beer.ph < 4
        )
    })
    const sortedHighAcidityBeers = highAcidityBeers.sort((a,b) => {
        return b.abv - a.abv
    })
    const classicRangeHighAlcoholBeers = classicRangeBeers.filter((classicRangeBeer) => {
        return classicRangeBeer.abv > 6
    })
    const classicRangeHighAlcoholHighAcidityBeers = classicRangeHighAlcoholBeers.filter((classicRangeHighAlcoholBeer) => {
        return classicRangeHighAlcoholBeer.ph < 4
    })
    const highAcidityHighAlcoholBeers = highAcidityBeers.filter((highAcidityBeer) => {
        return highAcidityBeer.abv > 6
    })
    const highAcidityClassicRangeBeers = classicRangeBeers.filter((classicRangeBeer) => {
        return classicRangeBeer.ph < 4
    })

    const [showBeer, setShowBeer] = useState([])

    const displayedBeers = () => {
        if (isHighAcidity == false && isHighAlcohol == false && isClassicRange ==false) {
            setShowBeer(beers)
        } else if (isHighAcidity == true && isHighAlcohol == false && isClassicRange ==false) {
            setShowBeer(sortedHighAcidityBeers);
        } else if (isHighAcidity == true && isHighAlcohol == true && isClassicRange == false) {
            setShowBeer(highAcidityHighAlcoholBeers)
        } else if (isHighAcidity == true && isHighAlcohol == false && isClassicRange == true) {
            setShowBeer(highAcidityClassicRangeBeers)
        } else if (isHighAcidity == true && isHighAlcohol == true && isClassicRange == true) {
            setShowBeer(classicRangeHighAlcoholHighAcidityBeers)
        } else if (isHighAlcohol == true && isHighAcidity == false && isClassicRange ==false) {
            setShowBeer(sortedHighAlcoholBeers);
        } else if (isHighAlcohol == true && isHighAcidity == false && isClassicRange ==true) {
            setShowBeer(classicRangeHighAlcoholBeers)
        } else if (isClassicRange == true && isHighAlcohol == false && isHighAcidity == false) {
            setShowBeer(classicRangeBeers);
        } else {setShowBeer(beers)}
    }
    useEffect((displayedBeers))

    const handleIsHighAlcohol = () => {
        setIsHighAlcohol(!isHighAlcohol)
        displayedBeers()
    }
    const handleIsHighAcidity = () => {
        setIsHighAcidity(!isHighAcidity)
        displayedBeers()
    }
    const handleIsClassicRange = () => {
        setIsClassicRange(!isClassicRange)
        displayedBeers()
    }

    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    };

    const filteredBeers = showBeer.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase()

        return beerNameLower.includes(searchTerm) && beer.image_url
    })

    return (
        <div className="body">
            <div className="sidebar">
                <SearchBar 
                label={"beers"} 
                searchTerm={searchTerm} 
                handleInput={handleInput}/>
                <FilterButtons 
                handleIsClassicRange={handleIsClassicRange}
                handleIsHighAcidity={handleIsHighAcidity}
                handleIsHighAlcohol={handleIsHighAlcohol}
                />
            </div>
            <div className="beer-list">
                <AllBeers 
                filteredBeers={filteredBeers}
                />
            </div> 
        </div>
    )
}

export default ExploreBeers;