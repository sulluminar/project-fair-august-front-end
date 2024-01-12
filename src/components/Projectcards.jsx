import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import mediaplayerImage from '../assets/mediaplayer.png'
import { Col, Row } from 'react-bootstrap';

function Projectcards() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card className='shadow text-center btn' onClick={handleShow} >
                <Card.Img variant="top" src={mediaplayerImage} />
                <Card.Body>
                    <Card.Title>Media Player</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Video Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6} lg={6}>
                            <img src={mediaplayerImage} width={"100%"} height={"250px"} alt="" />
                        </Col>
                        <Col md={6} lg={6}>
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Accusantium suscipit nisi sunt molestias tempore ab esse,
                                dicta officia, enim dignissimos hic laudantium maxime amet
                                veritatis dolorem beatae omnis tenetur vitae.</p>
                            <p><span className='fw-bolder'>Technologies:</span> HTML, CSS, React, Node</p>
                        </Col>
                    </Row>
                    <div className='d-flex mt-3'>
                        <a href="https://videoplayer-kappa-teal.vercel.app/" target="_blank" style={{color:"black",fontSize:"25px"}}><i class="fa-solid fa-link ms-3"></i></a>
                        <a href="https://github.com/sulluminar/videoplayer" target="_blank" style={{color:"black",fontSize:"25px"}}><i class="fa-brands fa-github ms-3"></i></a>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Projectcards