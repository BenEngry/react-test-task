import renderer from "react-test-renderer";
import React from "react";
import { ErrorMessage } from "./ErrorMessage";


describe("Testing <ErrorMessage/>", ()=> {

    it("List have rendered correctly", ()=>{
        const errorComp = renderer.create(<ErrorMessage error={"Error example"}/>).toJSON();
        expect(errorComp).toMatchSnapshot();
    });

});
