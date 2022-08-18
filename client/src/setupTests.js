import { configure } from "enzyme";
import { EnzymeAdapter } from "enzyme";
require("jest-extended");

configure({adapter: new EnzymeAdapter()});

const config = {

    "jest": {
        "setupFilesAfterEnv": ["jest-extended/all"]
    }

};
    
export default config;