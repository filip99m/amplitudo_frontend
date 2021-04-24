import React from "react";
import logo from "./logo192.png"

const MyImage = ({src}) => {
    return <div>
                {/*<img src="/images/logo192.png"/>*/}
                <img src={`/images/${src}`}/>
            </div>

}

export default MyImage;