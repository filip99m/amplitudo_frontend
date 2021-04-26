import React from "react";
import MyImage from "../myImage/MyImage";
import "./Books.css"

const Books = ({title, year, author, src, quote}) => {
    return <div className="container">
                <table>
                    <tr>
                        <th className="table1">Naslov</th>
                        <th className="table1">Godina</th>
                        <th className="table1">Autor</th>
                    </tr>
                    <tr>
                        <td className="table1">{title}</td>
                        <td className="table1">{year}</td>
                        <td className="table1">{author}</td>
                    </tr>
                    <tr>
                        <td className="table1">
                            <MyImage src={src}/>
                        </td>
                        <td className="table1" colSpan="2" style={{height:100, width:100}}>{quote}</td>
                    </tr>
                </table>
        </div>
}
export default Books