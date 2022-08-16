import './App.scss';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllBeers from "./containers/AllBeers/AllBeers";
import NavBar from "./components/NavBar/NavBar";
import HighAlcohol from './containers/AllBeers/HighAlcohol/HighAlcohol';
import ClassicRange from './containers/ClassicRange/ClassicRange';
import HighAcidity from "./containers/HighAcidity/HighAcidity";

function App() {

  const [beers, setBeers] = useState();

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    .then ((response) => {
      return response.json()
    }) .then((data) => {
          setBeers(data)
    })
  }

  useEffect((getBeers), []);

  return (
    <>
      <h1>Beer Crawler</h1>
      <NavBar/>
      <div className="beer-list">
        {beers && <AllBeers beers={beers}/>}
        {beers && <HighAlcohol beers={beers}/>}
        {beers && <ClassicRange beers={beers}/>}
        {beers && <HighAcidity beers={beers}/>}
      </div>
      
    </>
  );
}

export default App;
