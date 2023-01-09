import { useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/Cards";
import Filter from "./components/filters/Filter";


function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App"> <h1 className ="text-center my-3"> Rick and Morty <span className="text-primary">Wiki</span></h1>
    
    <div className="container">
      <div className="row">
        <div className="col-3"><Filter/></div>
        <div className="col-8">
          <div className="row">
            <div><Cards results= {results}/></div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default App;
