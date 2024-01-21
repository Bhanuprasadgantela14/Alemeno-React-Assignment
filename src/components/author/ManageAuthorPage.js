import PropTypes from "prop-types";
import React from "react";
import { connect as reduxConnect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";
//import { authorsFormattedForDropdown } from '../../selectors/selectors';
import toastr from "toastr";

export class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // initial state
        this.state = {
            author: Object.assign({}, props.author),
            errors: {},
            saving: false,
        };

        // have to bind scope to each of the action functions
        this.handleUpdateAuthorState = this.handleUpdateAuthorState.bind(this);
        this.handleSaveAuthor = this.handleSaveAuthor.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // only override the author when we're loading a new one
        if (this.props.author.id !== nextProps.author.id) {
            // populate form when author is loaded directly
            this.setState({ author: Object.assign({}, nextProps.author) }); // make a copy of the author
        }
    }

    //// Handlers
    // handle component events
    handleUpdateAuthorState(event) {
        const field = event.target.name;
        let author = this.state.author;
        author[field] = event.target.value;
        return this.setState({ author: author });
    }

    handleSaveAuthor(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        this.setState({ saving: true });
        this.props.actions
            .callSaveAuthor(this.state.author)
            .then(() => this.redirect())
            .catch(error => {
                this.setState({ saving: false });
                toastr.error(error);
            });
    }

    //// Helpers/utilities
    authorFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (!this.state.author.firstName || this.state.author.firstName.length < 3) {
            errors.firstName = "First Name must be at least 3 characters.";
            formIsValid = false;
        }

        if (!this.state.author.lastName || this.state.author.lastName.length < 3) {
            errors.lastName = "Last Name must be at least 3 characters.";
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success("Author saved");
        // redirect to authors page after save
        this.context.router.history.push("/authors");
    }

    //// REACT RENDER
    render() {
        return (
            <AuthorForm
                onChange={this.handleUpdateAuthorState}
                onSave={this.handleSaveAuthor}
                author={this.state.author}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

// pull in react router context so router is available on this.context.router
ManageAuthorPage.contextTypes = {
    router: PropTypes.object, // not required in order to avoid linting error from upcoming usage
};

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.id === id);
    if (author.length) return author[0]; // filtering returns an array
    return null;
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.match.params.id; // id in path, e.g. /authors/:id

    let author = { id: "", watchHref: "", title: "", length: "", category: "" };

    if (authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId);
    }

    return {
        //        author: authorFormattedForDropdown(author), // TODO
        author: author,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch),
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(
    ManageAuthorPage,
);
