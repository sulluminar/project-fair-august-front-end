import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Projectcards from '../components/Projectcards'

function Home() {
    return (
        <>
            <div className='mb-5 mt-5' style={{ width: "100%", height: "65vh", backgroundColor: "yellowgreen" }}>
                <div className='container-fluid rounded'>
                    <Row className='align-items-center p-7'>
                        <Col sm={12} md={6} lg={6}>
                            <h1 className='text-light mb-3' style={{fontSize:"50px", fontWeight:"600"}}>Project Fair</h1>
                            <p>One stop destination for all software development projects</p>
                            <button className='btn btn-success rounded'>Get started</button>
                        </Col>
                        <Col sm={12} md={6}lg={6}>
                            <img src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" alt="" height={"380px"}
                            style={{marginTop:"50px"}}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='mt-5 allProject'>
                    <div className='text-center'>
                        <h1>Explore Our Project</h1>
                        <div className='d-flex'>
                            <div className='ms-5' style={{width:"150px"}}>
                                <Projectcards/>
                                <Projectcards/>
                                <Projectcards/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Home