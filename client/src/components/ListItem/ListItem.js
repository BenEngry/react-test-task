import React from "react";
import { useState } from "react";

export const ListItem = (props) => {

    const { age, country, gender, id, firstName, lastName } = props.data;

    const [isDetailed, setIsDetailed] = useState(false);

    if (isDetailed) {
        return (
            <div className="list__item" id={id} onClick={ ()=>setIsDetailed(!isDetailed) }>
                <p className="list__string">FirstName: {firstName}</p>
                <p className="list__string">LastName: {lastName}</p>
                <p className="list__string">Age: {age}</p>
                <p className="list__string">Gender: {gender}</p>
                <p className="list__string">Country: {country}</p>
            </div>
        )
    }
    
    return (
        <div className="list__item" id={id} onClick={ ()=>setIsDetailed(!isDetailed) }>
            <p className="list__string">FirstName: {firstName}</p>
        </div>
    )
}