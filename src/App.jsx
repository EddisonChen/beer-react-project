import './App.scss';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";
import BeerInfo from './components/BeerInfo/BeerInfo';
import SpecialBeers from './components/SpecialBeers/SpecialBeers';

function App() {

  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    .then ((response) => {
      return response.json()
    }) .then((data) => {
          setBeers(data)
    })
  }

  useEffect((getBeers), []);

  const [specialBeers, setSpecialBeers] = useState([]);

  const getCustomBeer = () => {
    fetch("http://192.168.1.51:3015/specialbeers")
    .then((response) => {
      return response.json()
    }) .then((data) => {
          setSpecialBeers(data.specialbeers) 
    }) 
  }

  useEffect((getCustomBeer))

  const renderBeerInfo = beers.map((beer) => {
    return <Route path={`/${beer.id}`} element={beers && <BeerInfo beers={beer}/>}></Route>
  })

  const [isHighAlcohol, setIsHighAlcohol] = useState(false);
  const [isHighAcidity, setIsHighAcidity] = useState(false);
  const [isClassicRange, setIsClassicRange] = useState(false);

  return (
    <Router>
      <Link to="/"><h1 className="heading">Beer Crawler</h1></Link>
      <SpecialBeers specialBeers={specialBeers} getCustomBeer={getCustomBeer}/>
      <Routes>
        <Route path="/" className="beer-list" element={beers && <ExploreBeers 
            beers={beers} 
            setIsHighAlcohol={setIsHighAlcohol} 
            setIsHighAcidity={setIsHighAcidity} 
            setIsClassicRange={setIsClassicRange}
            isHighAlcohol={isHighAlcohol}
            isHighAcidity={isHighAcidity}
            isClassicRange={isClassicRange} 
            />}></Route>       
          {renderBeerInfo}
        </Routes>
    </Router>
  );
}

export default App;
