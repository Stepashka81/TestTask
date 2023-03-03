import React from "react";
import "./Biografy.css";


class BiographyEvent extends React.Component {


    render() {
        const { biography } = this.props
       
        return (

            <div>
                <div className="myStyles">{biography.liveEvent}</div>
                <div className="myStyles">{biography.dateOfEvent}</div>
                <div className="myStyles">{biography.information}</div>

            </div>

        )

    }
}

export default BiographyEvent;

