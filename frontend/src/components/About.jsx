import { useSectionInView } from "../lib/hooks/useSectionInView";

const About = () => {
    const { ref } = useSectionInView("About");
    return (
        <>
            <h1 ref={ref} id="about" className="w-full dark:text-white text-5xl flex justify-center">About Us</h1>
            <p className="px-20 dark:text-white text-xl flex justify-center mt-5 mb-20">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem, ex rem eius provident dolore ipsam voluptate ut natus praesentium corrupti sequi quaerat repudiandae sed! Velit reprehenderit quidem deserunt excepturi.
            </p>
        </>
    )
}

export default About