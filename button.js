import React, {useState} from 'react';
import "./button.css";

const Button = (props) => {
    console.log(props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

const onclick = () =>{
    setCurrentCount(currentCount-props.incrementBy)
}
const handelClick = () => {
    setCurrentCount(currentCount+props.incrementBy)
}

    return (
        <div className={'btns'}>
            <button className={'first-btn'} onClick={handelClick}>Add</button>
            <button className={'sec-btn'} onClick={onclick}>Minus</button>
            <div className={'count-display'}>{currentCount}</div>
        </div>
    )
};

export default Button
