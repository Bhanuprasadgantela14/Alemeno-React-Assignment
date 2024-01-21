import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Coursera Project</h1>
                <p>
                    This application has Course listing, dashboard, student enrolled courses
                </p>
                <Link to="about" className="btn btn-primary btn-lg">
                    Enter
                </Link>
            </div>
        );
    }
}

export default HomePage;
