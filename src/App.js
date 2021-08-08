import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [coins, SetCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        SetCoins(response.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(coins);
  return (
  <div className="App">
    <h1>Trending Coins!</h1>
    { (coins !== []) && coins.map((coin,index)=><h1 key={index}>{coin.item.name}</h1>)}
  </div>
  )
  
}

export default App;
