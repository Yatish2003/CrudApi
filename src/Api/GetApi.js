import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GetApi() {
    const [fname, setFname] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [showData, setShowData] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    // Preventing refresh
    function preventRefr(e) {
        e.preventDefault();
    }

    // Set data in post API
    function sendData(e) {
        e.preventDefault();
        const formdata = { fname, userName, userEmail, userPass };

        setApiData(formdata).then(() => {
            fetchData();
            empty();
        });
    }

    // Post method API
    function setApiData(data) {
        return fetch('http://localhost:5000/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    }

    // Get API
    function fetchData() {
        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(data => setShowData(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Delete API
    function deleteData(id) {
        fetch(`http://localhost:5000/posts/${id}`, { method: "DELETE" })
            .then(() => fetchData());
    }
    function empty() {
        setFname("");
        setUserName("");
        setUserEmail("");
        setUserPass("");
    }
    function upd(id) {

        
        fetch(`http://localhost:5000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setFname(data.fname);
                setUserName(data.userName);
                setUserEmail(data.userEmail);
                setUserPass(data.userPass);
                setCurrentId(data.id)
            })

    }
    function sendUpdateData(id){
        const updateformdata = { fname, userName, userEmail, userPass };
        console.log(id,"upadteData")
        fetch(`http://localhost:5000/posts/${id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application.json"
            },
            body : JSON.stringify(updateformdata)
        }).then(()=>{
            fetchData();
            empty();

        });
    }

    return (
        <>
            
                <input type='hidden' value={currentId} onChange={(e) => setCurrentId(e.target.value)} placeholder='ID*'  /><br />
                <input type='text' value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Name*' required /><br />
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username*' required /><br />
                <input type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder='Email*' required /><br />
                <input type='password' value={userPass} onChange={(e) => setUserPass(e.target.value)} placeholder='Password*' required /><br />
                <input type='submit' value='Submit' onClick={(e)=>{sendData(e)}}/>
                <input type='submit' value='update' onClick={(e)=>{sendUpdateData(currentId)}}/>
            
            <div className='display' style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {
                    showData.map((val) => (
                        <Card key={val.id} style={{ width: '20rem', height: "170px", margin: '5px' }}>
                            <Card.Body>
                                <Card.Title>{val.fname}</Card.Title>
                                <Card.Text>
                                    Username: {val.userName}<br />
                                    Email: {val.userEmail}
                                </Card.Text>
                                <Button variant="primary" onClick={() => upd(val.id)} style={{ margin: "5px" }}>Update</Button>
                                <Button variant="primary" onClick={() => deleteData(val.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    );
}

export default GetApi;
