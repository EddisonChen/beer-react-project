import "./ExploreBeers.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import AllBeers from "../AllBeers/AllBeers";
import {useState} from 'react';
import HighAcidity from "../HighAcidity/HighAcidity";
import HighAlcohol from "../HighAlcohol/HighAlcohol";
import ClassicRange from "../ClassicRange/ClassicRange";
import {Link} from "react-router-dom";

const ExploreBeers = (props) => {

    const {beers} = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    };

    const filteredBeers = beers.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase()

        return beerNameLower.includes(searchTerm) && beer.image_url
    })

    return (
        <>
            <SearchBar 
            label={"beers"} 
            searchTerm={searchTerm} 
            handleInput={handleInput}/>
            <AllBeers beers={filteredBeers}/>
            <ClassicRange beers={filteredBeers}/>
            <HighAcidity beers={filteredBeers}/>
            <HighAlcohol beers={filteredBeers}/>
        </>
    )
}

export default ExploreBeers;