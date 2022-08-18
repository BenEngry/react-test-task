import renderer from "react-test-renderer";
import React from "react";
import { ErrorMessage } from "./ErrorMessage";


describe("Testing <ErrorMessage/>", ()=> {

    it("List have rendered correctly", ()=>{
        const errorComp = renderer.create(<ErrorMessage error={"Error example"}/>).toJSON();
        expect(errorComp).toMatchSnapshot();
    });

    it("should render a error name", ()=>{
        const errorExample = "Error example";
        const errorComp = renderer.create(<ErrorMessage error={errorExample}/>);
        expect(errorComp.prop("example")).toEqual("Error example");
    });

});
