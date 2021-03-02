import React from 'react';
import './index.css';
import Store from "./Redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
export let RenderTree=(State)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App appstate={State}
                 dispatch={Store.dispatch.bind(Store)}
                 /*ChangeNewPost={Store.ChangeNewPost.bind(Store)}
                 AddPost={Store.AddPost.bind(Store)}
                 ChangeMessage={Store.ChangeMessage.bind(Store)}*/
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
RenderTree(Store.GetState());
Store.Subscribe(RenderTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
