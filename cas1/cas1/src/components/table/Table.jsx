import React from "react";
import "./Table.css"

const Table = () => {
    return <table className="container">
                <th className="table-header">
                    <td>Ime</td>
                    <td>Prezime</td>
                </th>
                <tr className="table-row">
                    <td>Filip</td>
                    <td>Marijanovic</td>
                </tr>
                <tr className="table-row">
                    <td>Ana</td>
                    <td>Marijanovic</td>
                </tr>
            </table>
}

export default Table