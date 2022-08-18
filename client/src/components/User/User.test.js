import renderer from "react-test-renderer";
import React from "react";
import { User } from "./User";

describe("Testing <User/>", ()=> {

    it("User have rendered correctly", ()=>{
        const user = renderer.create(<User/>).toJSON();
        expect(user).toMatchSnapshot();
    });

});
