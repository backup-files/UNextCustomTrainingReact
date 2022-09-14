import React, { useEffect, useRef, useState } from 'react'

export default function NameCounter() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = `you clicked ${count} times`;
    }, [count]);
    useEffect(()=>{
        document.title = `you are ${name}`
    }, [name])
    return (
        <div style={{fontSize: '30px'}}>
            <div>NameCounter</div>
            <div id='name'>Name: {name}</div>
            <div>Count: {count}</div> 
            <button onClick={() => setCount((prev) => prev+1)}>Increment</button>
            <div>Enter name: <input onChange={(e) => setName(e.target.value)}/></div>
        </div>
    )
}
