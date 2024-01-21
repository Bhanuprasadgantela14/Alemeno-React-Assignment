import React from "react";
import {Link} from "react-router-dom"

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Bhanu Prasad</h1>
                <table style={{'border':'2px solid black'}}>
                    <tr>
                        <th className="dashboard">Enrolled Courses</th>
                        <th className="dashboard">Progress(%)</th>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                            Architecting Applications for the Real World
                        </Link>
                        </td>
                        <td className="dashboard">80</td>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                            Web Component Fundamentals
                        </Link>
                        </td>
                        <td className="dashboard">60</td>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                            Building Applications in React and Flux
                        </Link> 
                        </td>
                        <td className="dashboard">40</td>
                    </tr>
                </table><br />
                <p><b>Instructor name: </b>Cory house</p>
            </div>
        );
    }
}

export default AboutPage;
