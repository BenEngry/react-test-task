import React from "react";
import "./Spinner.css"

export class Spinner extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="loader">Loading...</div>
            </div>
        )
    }

}