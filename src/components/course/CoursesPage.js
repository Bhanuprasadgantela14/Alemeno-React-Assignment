import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect as reduxConnect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";
import { withRouter } from "react-router-dom";

class CoursesPage extends React.Component {
    // constructor has to come after handlers it modifies
    constructor(props, context) {
        super(props, context);

        // have to bind scope to each of the action functions
        // this is done here so we don't have to bind it in render() (which would create a new bound func each time)
        // and has to be done, otherwise 'this' in our handlers would resolve to the component calling it
        this.handleRedirectToAddCoursePage = this.handleRedirectToAddCoursePage.bind(
            this,
        );
        // this one actually doesn't need to be bound because it doesn't reference 'this' at all
    }

    //// Handlers
    // handle component events
    // don't make this static, ignore phpstorm
    handleRedirectToAddCoursePage() {
        this.props.history.push("/course");
    }

    render() {
        // destructuring
        // could also do courses = this.props.courses
        const { courses, authors } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.handleRedirectToAddCoursePage}
                />
                {courses.length > 0 && (
                    <CourseList courses={courses} authors={authors} />
                )}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

// REDUX connect data from state to properties for components
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses, // connected to label in root reducer
        authors: state.authors,
    };
}

// REDUX
function mapDispatchToProps(dispatch) {
    return {
        //        createCourse: (course) => dispatch(courseActions.createCourse(course))
        //        createCourse: bindActionCreators(courseActions.createCourse, dispatch)
        actions: bindActionCreators(courseActions, dispatch),
    };
}

// more verbose way
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);

// ATTACHING DISPATCH
//
// normal action dispatch would be using this.props.dispatch(handlerMethod()); from the component
// this requires you do not pass a mapDispatchToProps argument to connect
//
// or you can explicitly setup each individual action:
//
// function mapDispatchToProps(dispatch) {
//      return {
//          loadCourses: () => {
//              dispatch(loadCourses());
//          }
//      };
// }

// Hook up component to REDUX
export default withRouter(
    reduxConnect(mapStateToProps, mapDispatchToProps)(CoursesPage),
);
