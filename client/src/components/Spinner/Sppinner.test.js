import renderer from "react-test-renderer";
import React from "react";
import { Spinner } from "./Spinner";

describe("Testing <Spinner/>", ()=> {

    it("User have rendered correctly", ()=>{
        const spinner = renderer.create(<Spinner/>).toJSON();
        expect(spinner).toMatchSnapshot();
    });

});
