import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { GET_URL } from "../utils/consts";
import { Spinner } from "../Spinner/Spinner";

export const User = () => {
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

	const [setCookie] = useCookies(["user"]);
    const [token, setToken] = useState();

    useEffect(() => {
    	fetch( GET_URL + window.location.href.split("/").reverse()[0])
        	.then( response => response.json())
			.then(
			(result) => {
                setIsLoaded(true);
                setItems(result.items[0]);
				setToken(result.token);
				setCookie("user", token, {
					path: "/"
				});
			},
			(error) => {
                setIsLoaded(true);
                setError(error);
			}
        )
    }, []);

	if (error) {
        return <div>{error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner/>;
    } else {
		return (
			<a href="/">
				<div className="wrapper">
					<div className="list__item">
						<p className="list__string">Name: {items.name}</p>
						<p className="list__string">Surname: {items.surname}</p>
						<p className="list__string">Age: {items.age}</p>
						<p className="list__string">State: {items.gender}</p>
						<p>State: {items.state}</p>
					</div>
				</div>
			</a>
		);
	}
}
