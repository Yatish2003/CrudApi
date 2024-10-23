import React from 'react'
import StudentData from './StudentData'
function StudentTable() {
    return (
        <>
            <table style={{border:"2px solid black",margin:"5px"}}>
                <thead>
                    <th><h2>StdName</h2></th>
                    <th><h2>English</h2></th>
                    <th><h2>Maths</h2></th>
                    <th><h2>Science</h2></th>
                    <th><h2>StdTotal</h2></th>
                    <th><h2>Result</h2></th>
                </thead>
                <tbody >
                   {
                       StudentData.map((data)=>(
                           <>

                            <tr style={{border: "2px solid black;"}}>
                                <td><h3>{data.stdName}</h3></td>
                                <td><h3>{data.english}</h3></td>
                                <td><h3>{data.maths}</h3></td>
                                <td><h3>{data.sci}</h3></td>
                                <td><h3>{data.english+data.maths+data.sci}</h3></td>
                                <td>{
                                        data.english+data.maths+data.sci >=140 ? <h3>Pass</h3> : <h3>Fail</h3>  
                                    }</td>
                            </tr>

                            
                        </>
                    ))
                } 
                </tbody>
            </table>
        </>
    )
}

export default StudentTable
