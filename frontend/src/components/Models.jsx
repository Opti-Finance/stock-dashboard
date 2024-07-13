import Carousel from "./Carousel"
import botData from "../lib/bot-data"

const Models = () => {
    return (
        <div id="models" className="flex-grow">
            <h1 className="flex justify-center text-5xl">Models</h1>
            <Carousel data={botData} /> 
        </div>
    )
}

export default Models