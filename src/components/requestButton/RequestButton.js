import React, {useState} from "react";
import Arrow from "./Arrow";
import './RequestButton.css';
export default function RequestButton({ disabled }) {
    const defaultColor = "#8c8c8c";
    const activeColor = "#d966ff";

    const [colorArrow, setColorArrow] = useState(defaultColor);
    function toggle(color) { 
        setColorArrow(color)
    };
    return (
        <button
            onMouseEnter={ () => toggle(activeColor)}
            onMouseLeave={() => toggle(defaultColor)}
            disabled={ disabled }
            className='form-requset__button'>
            <Arrow colorArrow={colorArrow}/>
        </button>
    )
}