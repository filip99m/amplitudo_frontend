import React from "react";

const MyImage = ({src}) => {
    return <div>
        <img src={`../images/${src}`}/>
    </div>
}

export default MyImage