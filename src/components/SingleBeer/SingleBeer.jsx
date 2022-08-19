import "./SingleBeer.scss";

const SingleBeer = ({key, date, name, tagline, abv, ph, description, image}) => {

    return (
        <div className="single-beer">
            <h1 className="beer-Name">{name}</h1>
            {/* <h2>{tagline}</h2> */}
            <img src={image}/>
            <p> ABV: {abv}</p>
            <p> pH: {ph}</p>
            <p>First Brewed: {date}</p>
            {/* <p>{description}</p> */}
        </div>
    )
}

export default SingleBeer;