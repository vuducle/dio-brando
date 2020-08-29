import React, { useState } from 'react';
import '../style/cal.css';

function Calculator() {
    const [data, setData] = useState("");
    const calculatorBtns = [];
    [9,8,7,6,5,4,3,2,1,'.','%'].forEach(item => {
        calculatorBtns.push(
            <button onClick={event =>{
                setData(data + event.target.value)
            }}
            value={item}
            key={item}>
               {item} 
            </button>
        )
    })
    return (
        <div>
            
        </div>
    )
}

export default Calculator
