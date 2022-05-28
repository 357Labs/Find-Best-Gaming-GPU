import {DisplayGPUs} from './GPU.jsx';
import {useState, useEffect} from 'react';
import './App.css';
import './GPU.css';




function App() {
  const [GPUList, setGPUList] = useState([{dollarsPerMH: 1, location: "Amazon", id: 1, price: 1, image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-550-V11.jpg", title: "If you're seeing this something's broken", hashrate: 25000}, {location: "Amazon", id: 2, price: 25, image: "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-550-V11.jpg", title: "We'll try and get it fixed as quickly as possible", hashrate: 25}])
  async function retrieveGPUs() {
    const response = await fetch('https://artofpctest.com/')
    const data = await response.json();
    console.log(data);
    setGPUList(data.gpu_list);
  }
  useEffect(() => {
    retrieveGPUs();
  }, []);
  
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
        <h1 >Best Mining GPU Calculator</h1>
        <p className="subtitle">Find the Most Cost-Efficient GPU based on $/MH/s</p>
      </div>
      <p>This GPU mining calculator constantly parses through Amazon's graphics card listings to find the best deals on GPUs. It then sorts through them to find the most cost-efficient graphics cards for mining based on hashrate, energy-efficiency, and price.</p>
      <p>With NBMiner's latest patch LHR GPUs can now be fully unlocked, so this tool doesn't discriminate between LHR and Non-LHR models.</p>
      <p>This app's mining GPU selection is updated on a 24-hour basis to ensure prices and listings are as up-to-date as possible.</p>
      <DisplayGPUs GPUList={GPUList}/>
    </div>
    <div className="sidebar"></div>
  </div>
  );
}

export default App;
