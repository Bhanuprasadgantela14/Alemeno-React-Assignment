// This component handles the App template used on every page.
import React from "react";
import Header from "./common/Header";
import { connect as reduxConnect } from "react-redux";
import Main from "./common/Main";
import { Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        location: propTypes.object.isRequired,
        store: propTypes.object.isRequired,
        loading: propTypes.bool,
        courses: propTypes.array,
        authors: propTypes.array,
    };

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(this.props.location);
        }
    }

    onRouteChanged() {
        // when we change routes, the nav link retains focus and changes its style
        // so we find the active element and remove focus
        document.activeElement.blur();
    }

    render(){
        return <Provider store={this.props.store}>
            <div className="container-fluid">
                <Header
                    loading={this.props.loading}
                    courses={this.props.courses}
                    authors={this.props.authors}
                />
                <Main />
            </div>
        </Provider>
    }
}

// REDUX
function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        courses: state.courses,
        authors: state.authors,
    };
}

// React Router HOC & REDUX connect state
export default withRouter(reduxConnect(mapStateToProps)(App));
