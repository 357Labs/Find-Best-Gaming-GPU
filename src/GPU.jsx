import "./GPU.css"
import AmazonImage from '../src/buyOnAmazon.png'

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
        <GPU key={gpu.asin} data={gpu}></GPU>
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