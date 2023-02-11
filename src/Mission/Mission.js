import '../App.css';
import React from 'react';

class Mission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OurTagline: "We exist to help creators\nown their audience.",
            OurHopes: "We believe that social platforms are taking advantage of creators.\nWe want to change that and help creators fight back."
        }

    }

    render() {
        const { OurTagline, OurHopes } = this.state;
        
        return (
            <>
                <h5>OUR MISSION</h5>
                <h1> {OurTagline}  </h1>
                <h6>{OurHopes}</h6>
            </>

        )
    }
};

export default Mission;