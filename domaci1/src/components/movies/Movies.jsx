import React from "react";
import MyImage from "../myImage/MyImage";
import "./Movies.css";

const Movies = ({name, year, type, director, actors, src}) => {
    return <div className="container">

                <table className="center">
                    <tr>
                        <td className="table_style" rowspan="10">
                            <MyImage src={src}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="table_style"><b>Naziv</b></td>
                        <td className="table_style">{name}</td>
                    </tr>
                    <tr>
                        <td className="table_style"><b>Godina</b></td>
                        <td className="table_style">{year}</td>
                    </tr>
                    <tr>
                        <td className="table_style"><b>Zane</b></td>
                        <td className="table_style">{type}</td>
                    </tr>
                    <tr>
                        <td className="table_style"><b>Reziser</b></td>
                        <td className="table_style">{director}</td>
                    </tr>
                    <tr>
                        <td className="table_style"><b>Glumci</b></td>
                        <td className="table_style">{actors}</td>
                    </tr>
                </table>
            </div>


}
export default Movies