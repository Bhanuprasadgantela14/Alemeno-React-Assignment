import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ManageCoursePage } from "./ManageCoursePage";

Enzyme.configure({ adapter: new Adapter() });

describe("Manage Course Page", () => {
    it("sets error message when trying to save empty title", () => {
        const props = {
            authors: [],
            actions: {
                saveCourse: () => {
                    return Promise.resolve();
                },
            },
            course: {
                id: "",
                watchHref: "",
                title: "",
                authorId: "",
                length: "",
                category: "",
            },
        };

        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find("input.saver").last();
        expect(saveButton.prop("type")).toBe("submit");
        saveButton.simulate("click");
        expect(wrapper.state().errors.title).toBe(
            "Title must be at least 5 characters.",
        );
    });
});
