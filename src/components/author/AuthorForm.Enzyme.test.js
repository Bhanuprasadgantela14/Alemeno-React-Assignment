import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthorForm from "./AuthorForm";

Enzyme.configure({ adapter: new Adapter() });

function setup(saving) {
    const props = {
        author: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {},
    };

    return shallow(<AuthorForm {...props} />);
}

describe("AuthorForm via Enzyme", () => {
    it("renders form and h1", () => {
        const wrapper = setup(false);
        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("h1").text()).toEqual("Manage Author");
    });

    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find("input").props().value).toBe("Save");
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find("input").props().value).toBe("Saving...");
    });
});
