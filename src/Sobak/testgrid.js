import React from 'react';
import './testgrid.css'
import Header from "./Header.js";
import Content1 from "./Content/Center";
import Right from "./Right";
import Content2 from "./Content/Center2";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter , Route} from "react-router-dom";
import Conte2 from "./Content/centerDog2";
const Testgrid=(props)=>{

    return(
        <BrowserRouter>
        <div className='Test-grid'>
            <Header/>
            <Right/>
            {/*//Можно для контента вынести копирование кода*/}
            <div className='Test-grid-content'>
                {/*<Route path="/Content/center" component={Content1}/>
                <Route path="/Content/center2" component={Content2}/>
                <Route path="/Content/Dialogs" component={Dialogs}/>*/}
                <Route path="/Content/centerDog2" render={()=><Conte2
                    DataCenter={props.DataCenter}
                />}/>
                <Route path="/Content/center" render={()=><Content1 DataCenter={props.DataCenter}
                />}/>
                <Route path="/Content/center2" render={()=><Content2 DataPost={props.DataPost}
                                                                     DataNameFriends={props.DataNameFriends}
                                                                     DataName={props.DataName}
                                                                     /*ChangeNewPost={props.ChangeNewPost}
                                                                     AddPost={props.AddPost}*/
                                                                     dispatch={props.dispatch}
                />} />
                <Route path="/Content/Dialogs" render={()=><Dialogs DataName={props.DataName}
                                                                    DataMessage1={props.DataMessage1}
                                                                    /*AddMessage={props.AddMessage}
                                                                    ChangeMessage={props.ChangeMessage}*/
                                                                    dispatch={props.dispatch}
                />}/>
            </div>
           </div>

        </BrowserRouter>
    )
}
export default Testgrid;