import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import LoadingDots from "./LoadingDots";

const Header = ({ loading, courses, authors }) => {
    let courseLink,
        authorLink,
        numCourses = courses.length + 0,
        numAuthors = authors.length + 0;

    // can't do a goddamn IF inside JSX? fuck you!
    if (numCourses > 0) {
        // for sure this is totally obnoxious...
        courseLink = (
            <NavLink to={"/courses"} activeClassName="active">
                Courses ({numCourses})
            </NavLink>
        );
        // i can't fucking include this in the link above because there can only be one top level element lulz
    } else {
        // add an "Add Course" button in its place
        courseLink = (
            <NavLink to={"/course"} activeClassName="active">
                Add Course
            </NavLink>
        );
    }

    // can't do a goddamn IF inside JSX? fuck you!
    if (numAuthors > 0) {
        // for sure this is totally obnoxious...
        authorLink = (
            <NavLink to="/authors" activeClassName="active">
                Authors ({numAuthors})
            </NavLink>
        );
        // i can't fucking include this in the link above because there can only be one top level element lulz
    } else {
        // add an "Add Course" button in its place
        authorLink = (
            <NavLink to="/author" activeClassName="active">
                Add Author
            </NavLink>
        );
    }

    const navSeparator = " | ";
    return (
        <nav>
            <NavLink exact to={"/"} activeClassName="active">
                Home
            </NavLink>
            {navSeparator}

            {courseLink}
            {navSeparator}

            {authorLink}
            {navSeparator}

            <NavLink to="/about" activeClassName="active">
                dashboard
            </NavLink>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
};

export default Header;
