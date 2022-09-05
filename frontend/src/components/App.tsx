import React, {Component} from 'react';
import './App.css';
import Home from "./Home";
import {Projects} from "./Projects";
import {
    Routes,
    Route,
} from "react-router-dom";
import {Post} from "./Post";
import {Layout} from "./Layout";
import CampusPaths from "./projects/campuspaths/CampusPaths";


class App extends Component<{}, {}> {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}>
                        <Route path="projects/campus-paths" element={<CampusPaths/>}/>
                    </Route>
                    <Route path="posts/*" element={<Post/>}/>
                </Route>
            </Routes>
        );
    }
}

export default App;
