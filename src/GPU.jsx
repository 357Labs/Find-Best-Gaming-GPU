import "./GPU.css"


export function GPU(props) {
    
    return(
        <div className="GPU">
            <img alt={props.data.name} className="gpuImage" src={props.data.image}/>

            <div className="metadata">
                <div className="gpuNameDiv">
                    <p className="gpuName">{props.data.title}</p>
                </div>
                <div className="priceAndEfficiency">
                    <p className="gpuPrice">${props.data.price} | {props.data.hashrate} MH/s</p>
                    <p className="efficiency">Efficiency: ${props.data.dollar_per_mh}/MH/s</p>
                </div>
                <button className="gpuButton"><a href={props.data.url}>Buy on {props.data.location}</a></button>
            </div>
        </div>
        
    )
}

export function DisplayGPUs(props) {
    const listElements = props.GPUList.map((gpu) =>
        {
        /*If maxPrice and searchTerm are both empty return all GPUS*/
        if (props.maxPrice === "" && props.searchTerm === ""){
            return <GPU key={gpu.asin} data={gpu}></GPU>
        }
        /*If maxPrice is empty but searchTerm isn't*/
        else if (props.maxPrice === "" && props.searchTerm !== ""){
            if (gpu.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >=0){
                return <GPU key={gpu.asin} data={gpu}></GPU>
            }
            else{
                return null;
            }
        }
        /*If maxPrice is filled but searchTerm isn't*/
        else if (props.maxPrice !== "" && props.searchTerm === ""){
            if (gpu.price < props.maxPrice){
                return <GPU key={gpu.asin} data={gpu}></GPU>
            }
            else{
                return null;
            }
        }
        /*If maxPrice and searchTerm are both filled*/
        else if (props.maxPrice !== "" && props.searchTerm !== ""){
            if (gpu.price < props.maxPrice && gpu.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >=0){
                return <GPU key={gpu.asin} data={gpu}></GPU>
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
        }
    )
    return(
        <div className="displayGPUs">
            {listElements}
        </div>
    )
}


/*<img className="gpuImage" src={props.graphicsCard.gpuImage}></img>
            <p className="gpuName">{props.graphicsCard.gpuName}</p>
            <p className="hashrate">ETH Hashrate: {props.graphicsCard.hashrate}</p>
            <p className="dollarsPerMH">$/MH/s: {props.graphicsCard.dollarsPerMH}</p>
            <p className="gpuPrice">{props.graphicsCard.price}</p> */