import renderer from "react-test-renderer";
import React from "react";
import { App } from "./App";

describe("Testing <App/>", ()=> {

    it("User have rendered correctly", ()=>{
        const app = renderer.create(<App/>).toJSON();
        expect(app).toMatchSnapshot();
    });

});
