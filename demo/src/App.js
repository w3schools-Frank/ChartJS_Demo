import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Graph from './components/Graph';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api.weather.gov/gridpoints/TOP/32,81/forecast")
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      { data && <Graph data={data} /> }
    </div>
  );
}

export default App;
