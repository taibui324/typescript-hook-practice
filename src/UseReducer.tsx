import {useReducer} from "react";


const initial ={
    counter: 50
};

type ACTIONTYPES = 
| { type: "increase"; payload: number}
| { type :"decrease"; payload: number}

//reducer needs type ,action
//control the action
function ReducerTimer(state: typeof initial, action : ACTIONTYPES){
    switch(action.type) { // chinh action cho type 
        case "increase":
            return { // return thu state , counter ve
        ...state, counter: state.counter + action.payload,
            };

            case "decrease":
                return { // return state , counter
                    ...state, counter: state.counter - action.payload,
                };

                default: 
                throw new Error("Error");
    }   
}


function UseReducerExample(){
    const [state, dispatch] = useReducer(ReducerTimer , initial);
     // tong hop tu 2 values tren 

     //goi state.counter
     //dispatch click roi phan loai
     return (
             <div>
             <div>
                 {state.counter} 
                 </div> 
                 <button onClick ={() => dispatch({
                     type:"increase", payload: 2,
                 })}> 
                     Increase
                     </button> 


                     <button onClick ={() => dispatch({
                     type:"decrease", payload: 6,
                 })}> 
                     Increase
                     </button> 


                     </div>
     )
}

export default UseReducerExample;
