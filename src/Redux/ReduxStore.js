import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import Center2Reducer from "./Center2Reducer";
import CenterReducer from "./CenterReducer";

let reducer=combineReducers(
    {
        DataName:Center2Reducer,
        DataNameFriends:Center2Reducer,
        DataName2:DialogsReducer,
        DataCenter:CenterReducer,
DataMessage1:DialogsReducer,
       DataPost:Center2Reducer
    }
);
let Store=createStore(reducer);
export default Store;