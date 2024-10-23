import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./JsonApi.css";
import Nav from './Nav';

function JsonApi() {
  let [data, setData] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



  useEffect(() => {
    let apiData = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      }).then((resp) => {
        setData(resp);
      })

  }, [])

  console.log(data, "data");
  return (
    <>
    <Nav/>
      <div className='card'>
        <div className='section'>
          {

            data.map((val) => {
              return (
                <div className='card-cnt ' style={{marginRight:"10px"}}key={val.id}>
                  <h6>Name:{val.name}</h6>
                  <h6>UserName:{val.username}</h6>
                  <p>Email:{val.email}</p>
                  <Button variant="primary" onClick={handleShow}>
                    Address
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Street: {val.address.street}<br></br>City:{val.address.city}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>

                    </Modal.Footer>
                  </Modal>






                  <Button variant="primary" onClick={handleShow2}>
                    Company
                  </Button>

                  <Modal show={show2} onHide={handleClose2} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Company</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Street: {val.company.name}<br></br>City:{val.company.catchPhrase}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>

                    </Modal.Footer>
                  </Modal>


                  
                </div>

              )
            })

          }
        </div>
      </div>
    </>
  )
}

export default JsonApi
