import {useState} from "react";


function UseStateExample() {
    // const [count , setCount] = useState<number[]>([]);
    const [ count , setCount ] = useState<number[]>([]);
    const [string, setString] = useState<string | null> (null); // in case of string -> string | null

    return(
        <div>
             
            <button onClick ={() => setCount([...count , count.length +1])}>
                Array list 
            </button> {JSON.stringify(count)}

            <div> 
                <button onClick={() => setString("hello")}> Set</button>{JSON.stringify(string)}
            </div>
        </div>
    )

}

export default UseStateExample;