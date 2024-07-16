import Carousel from "./Carousel"
import botData from "../lib/bot-data"

const Models = () => {
    return (
        <>
            <h1 id="models" className="flex justify-center text-5xl dark:text-white">Models</h1>
            <Carousel data={botData} /> 
        </>
    )
}

export default Models