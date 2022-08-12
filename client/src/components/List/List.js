import { React } from "react";
import { useState, useEffect } from 'react';
import { Spinner } from "../Spinner/Spinner";
import { ErrorMessage } from "../Error/ErrorMessage";
import "./List.css";

export const List = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
    	fetch("http://localhost:3000/list")
        	.then( response => response.json())
			.then((result) => {
                setIsLoaded(true);
                setItems(result.items)
			},  (error) => {
                setIsLoaded(true);
                setError(error);
			});
    }, []);

    if (error) {
        return <ErrorMessage error={error.message}/>;
    } else if (!isLoaded) {
        return <Spinner/>;
    } else {
        return (
            <div className="wrapper">
                {items.map((item) => (
                    <div key={item.id} className="list__item">
                        <a href={`/list/get/${item.id}`}>{item.name}</a>
                    </div>
                ))}
            </div>
        );
    }
}
