import PropTypes from "prop-types";
import React from "react";
import AuthorListRow from "./AuthorListRow";

const AuthorList = ({ authors }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author => (
                    <AuthorListRow key={author.id} author={author} />
                ))}
            </tbody>
        </table>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
};

export default AuthorList;
