import React from 'react';
import ReactDOM from 'react-dom';
import DummyHeaderComponent from "./component/DummyHeaderComponent";

const myMenu = [
    {label: "Home", Link: "*"},
    {label: "Link2", Link: "*"},
    {label: "Link3", Link: "*"}];

ReactDOM.render(
    <div className={"row"}>cosa
        <DummyHeaderComponent data={myMenu}/>
    </div>
    , document.getElementById('app')
);


/**
 * old
 * <ul>
 <li>esto no</li>
 {myData.map((v) =>
                <li>{v}</li>
            )}
 </ul>
 <table>
 <thead>
 <tr>
 <th>Name</th>
 <th>Surname</th>
 </tr>
 </thead>
 <tbody>
 {myComplexData.map((item) =>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                </tr>
            )}
 </tbody>
 </table>
 */
