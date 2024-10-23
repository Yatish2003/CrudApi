import React,{useState} from "react";

function PropState(props){
    const [val,setVal ]=useState(props.data)
    
    return(
        <>
            {/* {val.map((data)=> {
                return <h1>{data}</h1>
            })} */}
        </>
    )

}
export default PropState;