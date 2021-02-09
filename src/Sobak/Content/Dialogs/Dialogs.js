import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
let DataName=[
    {id:1, name:"Вася"}, {id:2, name:"Валя"}
        ]
let DataMessage1=[
    {id:12, message:"Ты где,шкура?"}, {id:22, message:"Бухаю"}
]
const People=(props)=>{
    return(
                <div className={c.People }>
                    <NavLink to={"/content/dialogs/" + props.id }>{props.name}</NavLink>
                </div>
        )
}
const MessageU=(props)=>{
    return(
        <div className={c.MessageU}>{props.name +':'+ props.message}</div>
    )
}
const MessageI=(props)=> {
    return (
        <div className={c.MessageI}>{props.name + ':' + props.message}</div>

    )
}
const Dialogs=(props)=>{
    return(<div className={c.Center}>
            <div className={c.Peoples}>
               <People name={DataName[0].name} id={DataName[0].id}/>
               <People name={DataName[1].name} id={DataName[1].id}/>
            </div>
            <div className={c.Messages}>
                <div className={c.HeadMes}>{DataName[0].name}</div>
                <div className={c.Soob}>
                <MessageU name={DataName[0].name} message={DataMessage1[0].message} id={DataMessage1[0].id}/>
                <MessageI name={DataName[1].name} message={DataMessage1[1].message} id={DataMessage1[1].id}/>

                </div>

            </div>
    </div>

    )
}
export default Dialogs;