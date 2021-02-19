import React, {useState} from 'react';

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
        <div>
            <Button onClick={handelClick}>Add</Button>
            <Button onClick={onclick}>Minus</Button>
            <div>{currentCount}</div>
        </div>
    )
};

export default Button