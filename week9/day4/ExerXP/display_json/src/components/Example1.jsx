import React, { Component } from 'react';

class Example1 extends Component {
    render() {
        return (
            <div>
                {this.props.socialMedias.map((socialMedia, index) => (
                    <div key={index}>
                        {socialMedia}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example1;
