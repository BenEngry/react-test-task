import { React } from "react";
import { useState, useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import { ErrorMessage } from "../Error/ErrorMessage";
import { DATA_URL } from "../utils/consts";
import "./List.css";

export const List = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(DATA_URL)
            .then((response) => response.json())
            .then(
                (result) => {
                setIsLoaded(true);
                setItems(result.items);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return <ErrorMessage error={error.message} />;
    } else if (!isLoaded) {
        return <Spinner />;
    } else {
        return (
        <div className="wrapper">
            {items.map((item) => (
            <div key={item.id} className="list__item">
                <a className="list__link" href={`/list/get/${item.id}`}>
                {item.name}
                </a>
            </div>
            ))}
        </div>
        );
    }
};
