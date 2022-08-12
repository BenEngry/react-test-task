import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter/AppRouter";
import "./App.css";

export const App = () => {
	return (
		<BrowserRouter>
            <AppRouter />
    	</BrowserRouter>
	);
}

export default App;