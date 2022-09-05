import React from 'react';
import {NavLink} from "react-router-dom";

function Projects() {
    return (
        <>
            <div className="proj-title">
                Projects
            </div>

            <div className="proj-content">
                <table>
                    <colgroup>
                        <col className="pName"/>
                        <col/>
                    </colgroup>

                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Creation Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <NavLink className="link" to="/projects/campus-paths">
                                    UW campus map
                                </NavLink>
                            </td>
                            <td>06/03/2022</td>
                        </tr>

                        <tr>
                            <td>
                                <NavLink className="link" to="/projects">
                                    Online Bookstore
                                </NavLink>
                            </td>
                            <td>06/30/2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export {Projects};