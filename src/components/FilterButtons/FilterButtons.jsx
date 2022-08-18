import "./FilterButtons.scss"

const FilterButtons = (props) => {

        const {handleIsClassicRange, handleIsHighAlcohol, handleIsHighAcidity} = props

    return(
        <>
            <button onClick={handleIsHighAlcohol}>High ABV</button>
            <button type="checkbox" onClick={handleIsHighAcidity}>High Acidity</button>
            <button type="checkbox" onClick={handleIsClassicRange}>Classic Range</button>
        </>
    )
}

export default FilterButtons;