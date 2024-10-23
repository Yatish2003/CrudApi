import react,{useState}  from "react";

function Use(){
    const [val,setval]=useState(0)
    function add(){
        setval(val+1);
    }
    function sub(){
        setval(val>0?val-1:0);
    }
    console.log(val);
    return(
        <>
            <h1>{val}</h1>
            <button onClick={add}>Plus one</button>
            <button onClick={sub}>Minus one</button>
        </>
    )
}
export default Use;
