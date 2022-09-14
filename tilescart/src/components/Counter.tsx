import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState((new Date()).toLocaleTimeString());
    useEffect(function() {
        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        setInterval(() => {
            setTime((new Date()).toLocaleTimeString());
        });
    }, []);
    return (
        <>
            <div>Counter: {count}</div>
            <div>Time: {time}</div>
        </>
    )
}
