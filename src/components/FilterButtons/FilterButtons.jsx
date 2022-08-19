import "./FilterButtons.scss"

const FilterButtons = (props) => {

        const {handleIsClassicRange, handleIsHighAlcohol, handleIsHighAcidity} = props

    return(
        <>
            <input type="checkbox"onClick={handleIsHighAlcohol}/>High ABV
            <input type="checkbox" onClick={handleIsHighAcidity}/>High Acidity
            <input type="checkbox" onClick={handleIsClassicRange}/>Classic Range
        </>
    )
}

export default FilterButtons;