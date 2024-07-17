import Carousel from "./Carousel"
import botData from "../lib/data/bot-data"
import { useSectionInView } from "../lib/hooks/useSectionInView"

const Models = () => {
    const { ref } = useSectionInView("Models");
    return (
        <div ref={ref}>
            <h1 id="models" className="flex justify-center text-5xl dark:text-white">Models</h1>
            <Carousel data={botData} /> 
        </div>
    )
}

export default Models