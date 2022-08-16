import "./SingleBeer.scss"

const SingleBeer = ({key, name, tagline, abv, ph, description, image}) => {

    return (
        <div>
            <h1>{name}</h1>
            <h2>{tagline}</h2>
            <img src={image}/>
            <p>{abv}</p>
            <p>{ph}</p>
            <p>{description}</p>
        </div>
    )
}

export default SingleBeer;