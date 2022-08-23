import { useEffect, useState } from "react";
import "./SpecialBeers.scss";
import ShowSpecialBeersButton from "../ShowSpecialBeersButton/ShowSpecialBeersButton";

const SpecialBeers = (props) => {

    const {specialBeers} = props;

    const mappedSpecialBeers = specialBeers.map((specialBeer) => {
        return (
            <>
                <h1>{specialBeer.name}</h1>
                <h1>{specialBeer.tagline}</h1>
                {/* <img src={specialBeer.image_url}></img> */}
                <h1>{specialBeer.first_brewed}</h1>
                <p>{specialBeer.abv}</p>
            </>
        )
    })

    const [isSpecialBeers, setIsSpecialBeers] = useState(false)

    const flipSpecialBeers = () => {
        setIsSpecialBeers(!isSpecialBeers)
        if (isSpecialBeers == true) {
        } else if (isSpecialBeers == false) {
        }
    }

    const [showSpecialBeers, setShowSpecialBeers] = useState()

    const displaySpecialBeers = () => {
        if (isSpecialBeers == true) {
            setShowSpecialBeers(mappedSpecialBeers)
        } else if (isSpecialBeers == false) {
            setShowSpecialBeers()
        }
    }

    useEffect((displaySpecialBeers), [isSpecialBeers])

    return (
        <>
            <ShowSpecialBeersButton flipSpecialBeers={flipSpecialBeers} />
            {showSpecialBeers}
        </>
    )
}

export default SpecialBeers;