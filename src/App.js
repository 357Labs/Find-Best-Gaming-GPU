import {DisplayGPUs} from './GPU.jsx';
import {useState, useEffect} from 'react';
import './App.css';
import './GPU.css';




function App() {
  const [GPUList, setGPUList] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  async function retrieveGPUs(endpoint) {
    const response = await fetch('https://artofpctest.com/' + endpoint);
    const data = await response.json();
    setGPUList(data.gpu_list);
  }
  /*Display all GPUs in React app
  Top 10 first, then the rest*/
  useEffect(() => {
    retrieveGPUs('first10');
    retrieveGPUs('');
  }, []);

  /*Re-render every time maxPrice filter is updated*/
  useEffect(() => {
  }, [maxPrice, searchTerm]);

  /*handleChange is called onChange for maxPrice filter*/
  const handleChange = (event) => {
    setMaxPrice(event.target.value);
  }
  /*handleSearchChange is called every time search input is changed */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return (
  <div className="App">
    <div className="sidebar">
    </div>
    <div className="MiddleBar">
      <div className="nav">
        <a href="https://artofpc.com/"><button className="homeButton">Home</button></a>
        <a href="https://artofpc.com/search-posts/"><button className="homeButton">Articles</button></a>
        <a href="https://artofpc.com/category/crypto/"><button className="homeButton">Crypto</button></a>
        <a href="https://artofpc.com/how-to-build-a-pc-step-by-step/"><button className="homeButton">Build a PC</button></a>
      </div>

      <div className="title">
        <h1 >ETH Mining GPU Efficiency Calculator</h1>
        <p className="subtitle">Find the Most Cost-Efficient GPU based on $/MH/s</p>
      </div>
      <div className="paragraphDiv">
        <p>This tool constantly parses through Amazon's graphics card listings to find the best deals on Ethereum mining GPUs. It then sorts through them to find the most cost-efficient graphics cards for mining based on Ethash hashrate and price.</p>
        <p>With NBMiner's latest patch LHR GPUs can now be fully unlocked, so this tool doesn't discriminate between LHR and Non-LHR models.</p>
        <p>This app's mining GPU selection is updated four times daily to ensure prices and listings are as up-to-date as possible. Filter by price or model to provide even more relevance for your specific use case.</p>
      </div>
      <div className="flexDiv">
        <label>Max Price($): <input type="text" onChange={handleChange} className="priceLimitInput"></input></label>
        <label>Search: <input type="text" onChange={handleSearchChange} className="searchInput"></input></label>
      </div>
      <DisplayGPUs GPUList={GPUList} maxPrice={maxPrice} searchTerm={searchTerm}/>
    </div>
    <div className="sidebar"></div>
  </div>
  );
}

export default App;

