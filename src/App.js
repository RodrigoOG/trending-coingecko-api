import { useState, useEffetc } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [coins, SetCoins] = useState([]);

  useEffetc(() => {
    axios
      .get("")
      .then((response) => {
        SetCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
  <div className="App">
    <h1>Trending Coins!</h1>
    {(coins !== []) && coins.map((coin)=><h1>{coin.name}</h1>)}
  </div>
  )
  
}

export default App;
