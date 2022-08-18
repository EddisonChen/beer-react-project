import "./FilterButtons.scss"

const FilterButtons = (props) => {

        const {handleIsClassicRange, handleIsHighAlcohol, handleIsHighAcidity} = props

    return(
        <>
            <input type="checkbox" onClick={handleIsHighAlcohol}>High ABV</input>
            <input type="checkbox" onClick={handleIsHighAcidity}>High Acidity</input>
            <input type="checkbox" onClick={handleIsClassicRange}>Classic Range</input>
        </>
    )
}

export default FilterButtons;