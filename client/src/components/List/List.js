import { React } from "react";
import { useState, useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import { ErrorMessage } from "../Error/ErrorMessage";
import { ListItem } from "../ListItem/ListItem";
import { LIST_URL, TOKEN } from "../utils/consts";
import UsersService from "../Service/UsersService";
import "./List.css";

export const List = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items] = useState([]);

    const users = new UsersService();

    useEffect(() => {
        
        users.getItems()
            .then((response) => response.json())
            .then(async (result) => {
                for (const key in result.data) {
                    if (Object.hasOwnProperty.call(result.data, key)) {
                        const item = result.data[key];
                        
                        const url = LIST_URL + item;

                        const itemData = await fetch(url, {
                            headers: {
                                "Authorization" : "Bearer " + TOKEN,
                                "Content-Type" : "application/json"
                            },
                            method: "GET"
                        })
                            .then((response) => response.json())
                            .catch((error) => {
                                console.log("Failed fetch : " + error);
                        });

                        if (itemData.data && itemData.data.firstName) {
                            items.push(itemData.data);
                        }
                    }
                }
                setIsLoaded(true);
            },(error) => {
                setIsLoaded(true);
                setError(error);
        })

    }, []);

    if (error) {
        return <ErrorMessage error={error.message} />;
    } else if (!isLoaded) {
        return <Spinner />;
    } else {
        return (
        <div className="wrapper">
            {items.map((item, index) => (
                <ListItem key={index} data={item}/>
            ))}
        </div>
        );
    }
    
};
