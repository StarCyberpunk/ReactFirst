import React from 'react';
import './testgrid.css'
import Header from "./Header.js";
import Content1 from "./Content/Center";
import Right from "./Right";
import Content2 from "./Content/Center2";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter , Route} from "react-router-dom";
const Testgrid=()=>{
    return(
        <BrowserRouter>
        <div className='Test-grid'>
            <Header/>
            <Right/>
            {/*//Можно для контента вынести копирование кода*/}
            <div className='Test-grid-content'>
                <Route path="/Content/center" component={Content1}/>
                <Route path="/Content/center2" component={Content2}/>
                <Route path="/Content/Dialogs" component={Dialogs}/>
            </div>
           </div>

        </BrowserRouter>
    )
}
export default Testgrid;