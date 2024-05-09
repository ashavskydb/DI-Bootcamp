import React, { Component } from 'react';

class Example2 extends Component {
    render() {
        return (
            <div>
                {this.props.skills.map((skillArea, index) => (
                    <div key={index}>
                        <h2>{skillArea.Area}</h2>
                        {skillArea.SkillSet.map((skill, index) => (
                            <div key={index}>
                                {skill.Name} (Hot: {skill.Hot ? 'Yes' : 'No'})
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example2;
