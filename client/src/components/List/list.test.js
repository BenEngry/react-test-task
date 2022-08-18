import renderer from "react-test-renderer";
import React from "react";
import * as matchers from 'jest-extended';
import { List } from "./List";
expect.extend(matchers);


describe("Testing <List/>", ()=> {

    it("List have rendered correctly", ()=>{
        const list = renderer.create(<List/>).toJSON();
        expect(list).toMatchSnapshot();
    });
    
});
