import siba from "./siba.png";

let initialState={
    DataCenter: [
        {
            Zagol: 'Piper',
            Text: 'Piper-собака спасатель,наша работа ',
            img: 'https://avatanplus.com/files/resources/original/57e89652e2a3c157648b33f0.png'
        },
        {
            Zagol: 'Odzi',
            Text: 'Just simple home dog',
            img: siba
        }
    ]
}
debugger;
const CenterReducer=(state=initialState,action)=>{
    return state;
}
export default CenterReducer;