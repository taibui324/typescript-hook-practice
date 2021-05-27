import {useRef} from "react";
import {useState} from "react";


//useref htmlinputref | null
function UseRefExample(){
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [state, setState] = useState<number[]>([]);

    
        return <input ref={inputRef} />
    
}

export default UseRefExample;