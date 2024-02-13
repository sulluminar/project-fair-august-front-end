import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Projectcards from '../components/Projectcards'
import { allProjectAPI } from '../services/allAPI'

function Project() {
  const [allProjects, setAllProjects] = useState([])
  const getAllProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allProjectAPI(reqHeader);
      console.log(result.data)
      setAllProjects(result.data)
    }


  }
  useEffect(() => {
    getAllProject()
  },[])
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
        <h3>All Projects</h3>
        <div className={'d-flex mt-5 w-25'}>
          <input type="text" className='form-control' placeholder="Search project using technology" />
          <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{ marginLeft: "-40px", color: "lightblue" }}></i>
        </div>
      </div>
      <Row className='mt-5 mb-5 ms-5'>
       
          {
            allProjects?.length > 0?
            allProjects.map((item)=>(
              <Col md={6} lg={4}>
              <Projectcards  project={item}/>
              </Col>
            )):
            <p>No Projects Uploaded yet</p>
          }
         
        
      </Row>
    </>

  )
}

export default Project