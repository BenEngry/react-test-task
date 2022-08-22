import React from "react";
import { TOKEN } from "../utils/consts";

export default class UsersService extends React.Component {

    constructor(props) {
        super(props)
        this._apiBase = "http://opn-interview-service.nn.r.appspot.com/list";
    }

    getItems() {
        return fetch(this._apiBase, {
            headers: {
                "Authorization" : "Bearer " + TOKEN,
                "Content-Type" : "application/json"
            },
            method: "GET"
        })
    }

}