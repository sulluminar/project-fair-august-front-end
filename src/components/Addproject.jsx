import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Addproject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <label htmlFor="">
                <input type="file"  style={{display:"none"}}/>
                <img 
               height={"200px"}
               width={"200px"}
                src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" />
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject