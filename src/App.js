import React, { useEffect, useState } from "react";
import Display from "./Display";
import "./index.css";


function App() {
  const [hits, setHits] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const URL = `https://jsonplaceholder.typicode.com/posts/${query}`;
  
  const handleFetch = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((body) => {
        //console.log(body);
        setHits(body);
        
        setisLoaded(true);
      })
      .catch((error) => console.error("Error", error));
  };
  useEffect(() => {
    handleFetch();
    
  }, []);
  
  return (
    <div className="App">
      <h1>Posts API</h1>
      <label>Search By ID</label>
      <input type="text" onChange={(event) => setQuery(event.target.value.trim())} />
      <button onClick={handleFetch} >Get Data</button>
      {isLoaded===true ? (
          <Display data={hits} input={query}/>
        ) : <></>}
      
    </div>
  );
}

export default App;

