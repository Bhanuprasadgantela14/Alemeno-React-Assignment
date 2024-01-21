import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CourseForm from "./CourseForm";

Enzyme.configure({ adapter: new Adapter() });

function setup(saving, deleting) {
    const props = {
        course: {},
        saving: saving,
        deleting: deleting,
        errors: {},
        onSave: () => {},
        onDelete: () => {},
        onChange: () => {},
    };

    return shallow(<CourseForm {...props} />);
}

describe("CourseForm via Enzyme", () => {
    it("renders form and h1", () => {
        const wrapper = setup(false);
        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("h1").text()).toEqual("Manage Course");
    });

    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false, false);
        expect(wrapper.find("input.saver").props().value).toBe("Save");
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true, false);
        expect(wrapper.find("input.saver").props().value).toBe("Saving...");
    });

    it('delete button is labeled "Delete" when not deleting', () => {
        const wrapper = setup(false, false);
        expect(wrapper.find("input.deleter").props().value).toBe("Delete");
    });

    it('delete button is labeled "Deleting..." when deleting', () => {
        const wrapper = setup(false, true);
        expect(wrapper.find("input.deleter").props().value).toBe("Deleting...");
    });
});
