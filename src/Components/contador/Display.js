import React from "react";

const Display = (props) => {

    const { numero } = props
    return (
        <div>
            <h3>{numero}</h3>
        </div>
    )

}

export default Display