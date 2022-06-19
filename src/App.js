import './custom.scss';
import {DisplayGPUs} from './GPU.jsx';
import {TopMenu} from './TopMenu.jsx';
import {useState, useEffect} from 'react';
import './App.css';
import './GPU.css';




function App() {
  const [GPUList, setGPUList] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  /*Update resolution every time radio button is changed,
  including changing displayed framerates*/
  const [resolution, setResolution] = useState("1080p_medium")
  const [resolutionText, setResolutionText] = useState("1080p Medium")
  
  /*Display all GPUs in React app
  Top 10 first, then the rest*/
  useEffect(() => {
    async function retrieveGPUs(endpoint) {
      const response = await fetch('https://artofpctest.com/' + endpoint);
      const data = await response.json();
      setGPUList(data.gpu_list.sort((a, b) => b.fps_1080p_medium - a.fps_1080p_medium || a.price - b.price));
    }
    retrieveGPUs('gaming-gpus');
  }, []);

  /*Re-render every time maxPrice filter is updated*/
  useEffect(() => {
  }, [maxPrice, searchTerm, resolution, GPUList]);

  /*handleChange is called onChange for maxPrice filter*/
  const handleChange = (event) => {
    setMaxPrice(event.target.value);
  }
  /*handleSearchChange is called every time search input is changed */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  /*handleResolutionChange is called every time resolution input is changed */
  const handleResolutionChange = (event) => {
    setResolution(event.target.id);
    if (event.target.id === "1080p_medium"){
      setResolutionText("1080p Medium");
    }
    else if (event.target.id === "1080p_ultra"){
      setResolutionText("1080p Ultra");
    }
    else if (event.target.id === "1440p"){
      setResolutionText("1440p Ultra");
    }
    else{
      setResolutionText("4K Ultra");
    }
    /*Sort GPUList based on new specified Resolution, order same models by price ascending*/
    setGPUList(GPUList.sort((a, b) => b[`fps_${event.target.id}`] - (a[`fps_${event.target.id}`]) || (a.price - b.price)))
  }
  
  return (
  <div className="App">
    <div className="sidebar">
    </div>
    <div className="MiddleBar">
      <TopMenu></TopMenu>
    

      <div className="title">
        <h1 >Best Gaming Graphics Card Calculator</h1>
        <p className="subtitle">Find the Most Powerful Gaming GPU Within Your Budget</p>
      </div>
      <div className="paragraphDiv">
        <p><em>ArtofPC may receive compensation for purchases made at participating retailers linked on this site. This compensation does not affect what products or prices are displayed, or the order of prices listed. Thanks for your support!</em></p>
        <hr></hr>
        <p>This tool constantly parses through Amazon's graphics card listings to find the best deals on gaming GPUs. It then sorts them by gaming performance based on <a href="https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html">Tom's Hardware's GPU Hierarchy</a>.</p>
        <p>Enter the maximum price you're willing to pay to see the best graphics cards you can afford, along with a performance grade (as a percent) which indicates their performance relative to the best possible gaming GPU. For instance, a card with a grade of 75% can be expected to push approximately 3/4 the framerate of the best graphics card (currently the <a href="https://www.amazon.com/PowerColor-Devil-Radeon-Graphics-Memory/dp/B09VYDTVGY?crid=2RPB8MGQ24H5T&keywords=6950+xt&qid=1654110858&sprefix=6950+x%2Caps%2C90&sr=8-1&linkCode=ll1&tag=artofpc0d-20&linkId=00c00cfd0503e5578086203587d9b537&language=en_US&ref_=as_li_ss_tl">Radeon RX 6950 XT</a>)</p>
        <p>Finally, this calculator provides benchmarks from the aforementioned GPU hierarchy that can serve as in-game FPS estimates at four different thresholds: 1080p Medium, 1080p Ultra, 1440p Ultra, and 4K Ultra. Note that FPS can vary widely between games. You can expect higher framerates than those displayed when using the lowest graphical settings, lower resolutions (e.g. 720p), or in performance mode (in games that support this feature). </p>
        <p>Keep in mind that the "Average FPS" benchmarks provided were recorded in graphically demanding titles including Borderlands 3, Flight Simulator, RDR2, and Watch Dogs Legion. Thus, in less-demanding titles such as VALORANT, CS:GO, Fortnite, Minecraft, etc. you can expect significantly better performance.</p>
        <p>This calculator doesn't account for CPU bottlenecks, but this shouldn't be an issue since the GPU is typically the system bottleneck unless you're using low graphical settings or have an extremely outdated processor. In almost all instances a modern i5 or Ryzen 5 processor is plenty to achieve 144FPS, and you can hit the 240FPS mark in many games with these CPUs. Even i3/Ryzen 3s from the past few generations are often sufficient for 144FPS.</p>
        <h2>How to Use This Tool to Find the Best Gaming Graphics Card for Your PC</h2>
        <p>Select your desired resolution/settings from the options provided (1080p Medium/Ultra, 1440p Ultra, and 4K Ultra) and enter the maximum amount you're willing to pay for your graphics card. A filtered list of the best gaming graphics cards for your specific needs will be shown, alongside the latest prices and an expected average FPS at the specified settings.</p>
      </div>
      <div className="radioFlexDiv">
        <input type="radio" className="btn-check radioButton" name="options" id="1080p_medium" autoComplete="off" onClick={handleResolutionChange} defaultChecked></input>
        <label className="btn btn-secondary radioButton" htmlFor="1080p_medium">1080p Medium</label>

        <input type="radio" className="btn-check radioButton" name="options" id="1080p_ultra" autoComplete="off" onClick={handleResolutionChange}></input>
        <label className="btn btn-secondary radioButton" htmlFor="1080p_ultra">1080p Ultra</label>

        <input type="radio" className="btn-check radioButton" name="options" id="1440p" autoComplete="off" onClick={handleResolutionChange}></input>
        <label className="btn btn-secondary radioButton" htmlFor="1440p">1440p Ultra</label>

        <input type="radio" className="btn-check radioButton" name="options" id="4k" autoComplete="off" onClick={handleResolutionChange}></input>
        <label className="btn btn-secondary radioButton" htmlFor="4k">4K Ultra</label>
      </div>
      <div className="flexDiv">
        <label>Max Price($): <input type="text" onChange={handleChange} className="priceLimitInput"></input></label>
        <label>Search: <input type="text" onChange={handleSearchChange} className="searchInput"></input></label>
      </div>
      <DisplayGPUs resolutionText = {resolutionText} GPUList={GPUList} maxPrice={maxPrice} searchTerm={searchTerm} resolution={resolution}/>
      <div className="fillerDiv"></div>
    </div>
    <div className="sidebar"></div>
  </div>
  );
}

export default App;

