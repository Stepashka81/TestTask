import React from "react";
import "./Biografy.css";
import PropTypes from 'prop-types';


const SortButton = ({
                        click,
                    }) => {

    return (
        <button onClick={click}>
            sort array
        </button>
    )
}

SortButton.propTypes = {
    click: PropTypes.func.isRequired
}


export default SortButton;