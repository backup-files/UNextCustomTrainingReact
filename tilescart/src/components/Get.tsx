import React, { useEffect, useState } from 'react'
import TableCreator from '../tablec/tablec';
import NavBar from './NavBar';

export default function Get() {
    const [responseJson, setResponseJson] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setResponseJson(json));
    }, [])
  return (
    <>
        <NavBar activate='get'/>
        <button onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {  
                method: 'POST',  
                body: JSON.stringify({  
                    title: 'foo',  
                    body: 'bar',  
                    userId: 1,  
                }),  
                headers: {  
                    'Content-type': 'application/json; charset=UTF-8',  
                },  
            })  
            .then((response) => response.json())  
            .then((json) => alert('{id = ' + json['id']+'}'));  
        }}>Add Post</button>
        <TableCreator headers={["userId", "id", "title", "body"]} data={responseJson} />
    </>
  )
}
