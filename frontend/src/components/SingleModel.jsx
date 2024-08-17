import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SingleModel = () => {
    const { type } = useParams();
    const location = useLocation();
    const { slide } = location.state;
    console.log(location.state)
    return (
        <div className="mt-[100px] flex flex-col mx-[50px] items-center justify-center">
        <div className="text-3xl">Model Type: {type}</div>
        <div className="flex gap-[20px] items-center">
            <img
                src={slide.image}
                alt={slide.title}
                className="w-[200px] h-[200px] rounded-[10px]"
            />
            <p>{slide.description}</p>
        </div>
        <p>Placeholder for model visualization and other cool stuff</p>
        <img
                src={slide.image}
                alt={slide.title}
                className="w-[800px] h-[800px] rounded-[10px]"
            />
        </div>
        
    )
}

export default SingleModel;