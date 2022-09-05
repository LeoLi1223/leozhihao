import React from 'react';
import TopNav from "./TopNav";
import {Outlet} from "react-router-dom";
import Logo from "./Logo";
import "./Layout.css";

function Layout() {
    return (
        <div className="layout">
            {/*  Top bar  */}
            <div className="flex">
                {/*logo区域*/}
                <Logo/>
                <TopNav/>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export {Layout};