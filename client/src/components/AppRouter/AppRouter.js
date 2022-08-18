import React from "react";
import { userRoutes } from "../../routes";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
	return ( 
		<Routes > {
			userRoutes.map(({
					path,
					Component
				}) =>
				<Route 
					key = { path }
					path = { path }
					element = {	<Component/>}
					exact 
				/>
			)
		} 
		</Routes >
	);
}

export default AppRouter;