import { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/Cards";
import Filter from "./components/filters/Filter";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";


function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
      console.log(data);
    })();
  }, [api]);

  return (
    <div className="App"> <h1 className ="text-center my-3"> Rick and Morty <span className="text-primary">Wiki</span></h1>
    
    <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
    <div className="container">
      <div className="row">
        <Filter 
        setStatus={setStatus} 
        setGender={setGender} 
        setPageNumber={setPageNumber}
        setSpecies={setSpecies}/>
        <div className="col-8">
          <div className="row">
            <div><Cards results= {results}/></div>
          </div>
        </div>
      </div>

    </div>
    <Pagination setPageNumber={setPageNumber} info={info} />
    </div>
  );
}

export default App;
