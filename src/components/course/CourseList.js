import PropTypes from "prop-types";
import React from "react";
import CourseListRow from "./CourseListRow";

const CourseList = ({ courses, authors }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Course name</th>
                    <th>Instructor's name</th>
                    <th>Description</th>
                    <th>Course duration</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => (
                    <CourseListRow
                        key={course.id}
                        course={course}
                        authors={authors}
                    />
                ))}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
};

export default CourseList;
