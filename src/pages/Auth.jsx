import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import authImage from '../assets/image2.png'
import { Form } from 'react-bootstrap';

// both Login page and register page are almost same.
// So here we use a single page and change the content inside that page
function Auth({ register }) {
  const registerForm = register ? true : false;

  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "100vh" }}>
        <div className='container w-75'>
          <Link to={'/'} style={{ textDecoration: "none", color: "blue" }}>
            <i class="fa-solid fa-arrow-left me-3"></i>
            Back To Home
          </Link>
          <div className='bg-success p-5 rounded mt-3'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6'>
                <img src={authImage} alt="" width={"100%"} />
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='d-flex align-items-center flex-column'>
                  <h3><i class="fa-brands fa-stack-overflow me-3"></i>Project Fair</h3>
                  <h5 className='text-light mt-3'>{
                    registerForm ? "Sign up your account" : "Sign in your account"
                  }
                   </h5>
                    <Form>
                      {
                        registerForm &&
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>User Name</Form.Label>
                          <Form.Control type="email" placeholder="User Name" />
                        </Form.Group>
                      }
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      {
                        registerForm ?
                        <div>
                          <button className='btn btn-warning mt-3'>Register</button>
                          <p>Already A User? Click here to <Link to={'/login'} style={{color:"blue"}}>Login</Link></p>
                        </div>:
                        <div>
                          <Link to={'/dashboard'}>
                          <button className='btn btn-warning mt-3' >Login</button>
                          </Link>
                          
                          <p>New User? Click here to <Link to={'/register'} style={{color:"blue"}}>Register</Link></p>
                        </div>
                      }
                    </Form>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Auth