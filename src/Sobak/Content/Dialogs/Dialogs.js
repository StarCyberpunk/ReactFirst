import React from 'react';
import c from './Dialogs.module.css';
import MessageU from "./Message/Message";
import People from "./DialogsItem/Dialogsitem";
import {AddMessageCre, ChangeMessageCre} from "../../../Redux/DialogsReducer";

/*const AddMessageCre=(text)=>{
    return {type:'ADD-MESSAGE', TextMessage:text}
}
const ChangeMessageCre=(text)=>{
    return {type:'CHANGE-MESSAGE',
        NewMessage:text}
}*/
const Dialogs=(props)=>{
    let wames=props.DataName.map(n=><People name={n.name} id={n.id}/>);
    let Dialo=props.DataMessage1.OldMessage.map(k=>
        <MessageU name={k.name} message={k.message}/>
    );

    let TextMessage=React.createRef();
    let SendText=()=>{

       let text=TextMessage.current.value;
       props.dispatch(AddMessageCre(text));
       props.dispatch(ChangeMessageCre('')
    );
    }
    let MessageOnChange=()=>{
        let text=TextMessage.current.value;
        props.dispatch(ChangeMessageCre(text));
    }
    return(<div className={c.Center}>
            <div className={c.Peoples}>
                {wames}
            </div>
            <div className={c.Messages}>
                <div className={c.HeadMes}>{props.DataName[0].name}</div>
                <div className={c.Soob}>
                    {Dialo}
                </div>
                <div className={c.TextMessage}>
                    <textarea onChange={MessageOnChange} ref={TextMessage} value={props.DataMessage1.NewMessage}/>
                    <button onClick={SendText}>Send</button>
                </div>

            </div>
    </div>

    )
}
export default Dialogs;