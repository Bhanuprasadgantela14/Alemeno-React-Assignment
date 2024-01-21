import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const AuthorListRow = ({ author }) => {
    return (
        <tr>
            <td>
                <Link to={"/author/" + author.id}>
                    {author.firstName} {author.lastName}
                </Link>
            </td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
            <td>{author.id}</td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
};

export default AuthorListRow;
