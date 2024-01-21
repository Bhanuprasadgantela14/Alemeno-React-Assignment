import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect as reduxConnect } from "react-redux";
import * as authorActions from "../../actions/authorActions";
import AuthorList from "./AuthorList";
import { withRouter } from "react-router-dom";

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // hook up scope
        this.handleRedirectToAddAuthorPage = this.handleRedirectToAddAuthorPage.bind(
            this,
        );
    }

    //// Handlers
    // hanle component events
    handleRedirectToAddAuthorPage() {
        this.props.history.push("/author");
    }

    //// REACT RENDER
    render() {
        // destructuring
        // could also do authors = this.props.authors
        const { authors } = this.props;

        return (
            <div>
                <h1>Authors</h1>
                <input
                    type="submit"
                    value="Add Author"
                    className="btn btn-primary"
                    onClick={this.handleRedirectToAddAuthorPage}
                />
                <AuthorList authors={authors} />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

// REDUX connect data from state to properties for components
function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors, // connected to label in root reducer
    };
}

// REDUX
function mapDispatchToProps(dispatch) {
    return {
        //        createAuthor: (author) => dispatch(authorActions.createAuthor(author))
        //        createAuthor: bindActionCreators(authorActions.createAuthor, dispatch)
        actions: bindActionCreators(authorActions, dispatch),
    };
}

// more verbose wau
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(AuthorsPage);

// ignore dispatch for now and use default
// REDUX - connect component
export default withRouter(
    reduxConnect(mapStateToProps, mapDispatchToProps)(AuthorsPage),
);
