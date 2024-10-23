
import Data from "./Data"

function Example(){
    
    return(
        <>
            <div>
                {
                    Data.map((val)=>(
                        <div style={{backgroundColor:"aqua"}}>
                            <h1>{val.product}</h1>
                            <h2>{val.brand}</h2>
                            {val.bestSeller == true ? <h1 style={{color:"red"}}>BestSeller</h1> : "" } 
                            
                        </div>
                    ))
                }    
            </div>        
        </>
    )
}
export default Example;