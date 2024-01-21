import PropTypes from "prop-types";
import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

// TODO better spacing between buttons
// TODO figure out delete button hidden attr
//{hidden={course.id.length < 1}}

const CourseForm = ({
    course,
    allAuthors,
    onSave,
    onDelete,
    onChange,
    saving,
    deleting,
    errors,
}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}
            />
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}
            />
            <input
                type="submit"
                disabled={saving}
                value={saving ? "Saving..." : "Save"}
                className="btn btn-primary saver margin-r-5"
                onClick={onSave}
            />
            &nbsp;&nbsp;
            <input
                type="submit"
                disabled={deleting}
                value={deleting ? "Deleting..." : "Delete"}
                className="btn deleter"
                onClick={onDelete}
            />
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    deleting: PropTypes.bool,
    errors: PropTypes.object,
};

export default CourseForm;
