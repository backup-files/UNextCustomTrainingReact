import { useState, useEffect } from "react";

export default function TableCreator(props) {
    const headers = props.headers;
    return (
        <table id='table' border='+'>
        <thead>
        <tr>
        {headers.map((header) => 
            <td>{header}</td>
        )}
        </tr>
        </thead>
        {props.data.map((datapoint, index) => {
            return (
                <tr key={index}>
                    {headers.map((header) => {
                        return <td>{datapoint[header]}</td>
                    })}
                </tr>
            )
        })}
        </table>
    );
}