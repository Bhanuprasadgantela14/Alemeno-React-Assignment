import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const CourseListRow = ({ course, authors }) => {
    let author = authors.find(
        (author, index, list) => author.id === course.authorId,
        this,
    );
    let authorName = author
        ? author.firstName + " " + author.lastName
        : "Unknown Author";

    return (
        <tr>
            <td>
                <a href={course.watchHref} target="_blank">
                    Watch
                </a>
            </td>
            <td>
                <Link to={"/course/" + course.id}>{course.title}</Link>
            </td>
            <td>{authorName}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
};

export default CourseListRow;
