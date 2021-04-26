import React from "react";
import MyImage from "../myImage/MyImage";
import "./IdCard.css";

const IdCard = ({name, surname, phone, city='Podgorica', src }) => {
    return <div className="card">
                <div> <MyImage src={src}/></div>
                <div className="container">
                    <h4><b>{name} {surname}</b></h4>
                    <p>{phone}</p>
                    <p>{city}</p>
                </div>
    </div>
}

export default IdCard