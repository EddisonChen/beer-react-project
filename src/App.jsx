import './App.scss';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllBeers from "./containers/AllBeers/AllBeers";
import NavBar from "./components/NavBar/NavBar";
import HighAlcohol from './containers/HighAlcohol/HighAlcohol';
import ClassicRange from './containers/ClassicRange/ClassicRange';
import HighAcidity from "./containers/HighAcidity/HighAcidity";
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";
import BeerInfo from './components/BeerInfo/BeerInfo';

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

  const renderBeerInfo = beers.map((beer) => {
    return <Route path={`/${beer.id}`} element={beers && <BeerInfo beers={beer}/>}></Route>
  })

  const [isHighAlcohol, setIsHighAlcohol] = useState(false);
  const [isHighAcidity, setIsHighAcidity] = useState(false);
  const [isClassicRange, setIsClassicRange] = useState(false);

  return (
    // <Router>
    <>
      <h1 className="heading">Beer Crawler</h1>

      <body>
        {/* <NavBar/> */}
        <div className="beer-list">
          {/* <Routes> */}
            {beers && <ExploreBeers 
            beers={beers} 
            setIsHighAlcohol={setIsHighAlcohol} 
            setIsHighAcidity={setIsHighAcidity} 
            setIsClassicRange={setIsClassicRange}
            isHighAlcohol={isHighAlcohol}
            isHighAcidity={isHighAcidity}
            isClassicRange={isClassicRange} 
            />}
            {/* <Route className="beer-display" path="/HighAlcoholBeers" element={beers && <HighAlcohol beers={beers}/>}></Route>
            <Route className="beer-display" path="/ClassicRange" element={beers && <ClassicRange beers={beers}/>}></Route>
            <Route className="beer-display" path="/HighAcidity" element={beers && <HighAcidity beers={beers}/>}></Route> */}
            {/* {beers && renderBeerInfo} */}
          {/* </Routes> */}
        </div>
      </body>
    </>
    // </Router>
  );
}

export default App;
