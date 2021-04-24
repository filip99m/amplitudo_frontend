import React from "react";
import MyImage from "../myimage/MyImage";

// props
// {name, surname, city}

const IdCard = ({name, surname, city='Podgorica', src}) => {
    return <div>
        <div>Ime: {name}</div>
        <div>Prezime: {surname}</div>
        <div>Grad:{city}</div>
        <div>Slika: <MyImage src={src}/></div>
    </div>
}

// const IdCard = (props) => {
//     return <div>
//         <div>Ime: {props.name}</div>
//         <div>Prezime: {props.surname}</div>
//         <div>Grad:{props.city}</div>
//         {/*<div>Slika: <MyImage/></div>*/}
//     </div>
// }

export default IdCard