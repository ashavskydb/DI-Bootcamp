import React, { Component } from 'react';

class Example3 extends Component {
    render() {
        return (
            <div>
                {this.props.experiences.map((experience, index) => (
                    <div key={index}>
                        <h2>{experience.companyName}</h2>
                        <img src={experience.logo} alt="Company logo" />
                        {experience.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                                <h3>{role.title}</h3>
                                <p>{role.description}</p>
                                <p>{role.startDate} - {role.endDate}</p>
                                <p>{role.location}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;
