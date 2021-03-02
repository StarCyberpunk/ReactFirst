import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Middel from "./Middel";
import Footer from "./Footer";
import Testgrid from "./Sobak/testgrid";
const App=(props)=> {

  return (
      <div className="App">
          <Testgrid DataPost={props.appstate.DataPost}
                    DataName={props.appstate.DataName}
                    DataNameFriends={props.appstate.DataNameFriends}
                    DataMessage1={props.appstate.DataMessage1}
                    DataCenter={props.appstate.DataCenter}
                    /*AddMessage={props.AddMessage}
                    ChangeNewPost={props.ChangeNewPost}
                    AddPost={props.AddPost}
                    ChangeMessage={props.ChangeMessage}*/
                    dispatch={props.dispatch}

          />

      </div>);
}
export default App;
