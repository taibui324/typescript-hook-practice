import { useState , useEffect} from "react";

function UseEffect() {
    const [numb, setNumb] = useState(1);


    useEffect(() => {
        const time = window.setInterval(() => {
            setNumb((t) => t+1);
        }, 10);

        return () => window.clearInterval(time);
    },[]);

    return <div>{numb}</div>
}

export default UseEffect;