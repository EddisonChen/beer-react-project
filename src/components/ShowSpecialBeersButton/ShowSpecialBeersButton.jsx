import "./ShowSpecialBeersButton.scss"

const ShowSpecialBeersButton = (props) => {

    const {flipSpecialBeers} = props;

    return(
        <button onClick={flipSpecialBeers}>Unleash the Beer!</button>
    )
}

export default ShowSpecialBeersButton;