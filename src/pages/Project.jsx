import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Projectcards from '../components/Projectcards'
import { allProjectAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Project() {
  const [isToken, setIsToken] = useState(false);
  const [searchkey, setSerachKey] = useState((""))
  const [allProjects, setAllProjects] = useState([])
  const getAllProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allProjectAPI(searchkey, reqHeader);
      console.log(result.data)
      setAllProjects(result.data)
    }


  }
  useEffect(() => {
    getAllProject()
  }, [searchkey])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
    }
  }, [])
  console.log("===search key===", searchkey)
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
        <h3>All Projects</h3>
        <div className={'d-flex mt-5 w-25'}>
          <input
            onChange={(e) => setSerachKey(e.target.value)}
            type="text" className='form-control' placeholder="Search project using technology" />
          <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{ marginLeft: "-40px", color: "lightblue" }}></i>
        </div>
      </div>
      <Row className='mt-5 mb-5 ms-5'>

        {
          allProjects?.length > 0 ?
            allProjects.map((item) => (
              <Col md={6} lg={4}>
                <Projectcards project={item} />
              </Col>
            )) :
            <div>
              {
                isToken ?
                  <p>No Projects Uploaded yet</p> :
                  <div className='d-flex justify-content-center align-items-center '>
                    <img src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg" alt="" />
                    <div>
                      <p className='text-danger fs-5 mt-4 ms-3'>Please
                        <Link style={{textDecoration:'none', color:"blue"}} to={'/login'}> Login
                        </Link> to view projects
                      </p>
                    </div>

                  </div>
              }

            </div>

        }


      </Row>
    </>

  )
}

export default Project