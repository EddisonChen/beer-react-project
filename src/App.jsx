import './App.scss';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllBeers from "./containers/AllBeers/AllBeers";
import NavBar from "./components/NavBar/NavBar";
import HighAlcohol from './containers/AllBeers/HighAlcohol/HighAlcohol';
import ClassicRange from './containers/ClassicRange/ClassicRange';
import HighAcidity from "./containers/HighAcidity/HighAcidity";
import SearchBar from "./components/SearchBar/SearchBar";

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
    <Router>
    <>
      <h1>Beer Crawler</h1>
      <NavBar/>
      {/* <SearchBar beers={beers}/> */}
      <div className="beer-list">
        <Routes>
          <Route path="/AllBeers" element={beers && <AllBeers beers={beers}/>}></Route>
          <Route path="/HighAlcoholBeers" element={beers && <HighAlcohol beers={beers}/>}></Route>
          <Route path="/ClassicRange" element={beers && <ClassicRange beers={beers}/>}></Route>
          <Route path="/HighAcidity" element={beers && <HighAcidity beers={beers}/>}></Route>
        </Routes>
      </div>
    </>
    </Router>
  );
}

export default App;
