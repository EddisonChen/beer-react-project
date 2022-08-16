import './App.scss';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllBeers from "./containers/AllBeers/AllBeers";

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
      {beers && <AllBeers beers={beers}/>}
    </>
  );
}

export default App;
