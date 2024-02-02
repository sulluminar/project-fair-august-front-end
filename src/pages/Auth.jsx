import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import authImage from '../assets/image2.png'
import { Form } from 'react-bootstrap';
import { loginAPI, registerAPI } from '../services/allAPI';

// both Login page and register page are almost same.
// So here we use a single page and change the content inside that page
function Auth({ register }) {
  const registerForm = register ? true : false;
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("user details===");
    console.log(userData)
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      alert("please fill the form completely")
    }
    else {
      const result = await registerAPI(userData);
      if (result.status === 200) {
        alert("User registered successfully")
        setUserData({
          username: "",
          email: "",
          password: ""
        })
      }
      else {
        alert(result.response.data)
      }

    }
  }
  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email, password}= userData;
    if(!password || !email){
      alert("Please fill the form completely")
    }
    else{
      const loginResult = await loginAPI(userData)
      if(loginResult.status == 200){
        alert("logged in successfully");
        console.log("===login result===");
        console.log(loginResult.data)
      }
      else{
        alert(loginResult.response.data)
      }
     
    }
  }
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
                        <Form.Control type="text" placeholder="User Name"
                          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                          value={userData.username} />
                      </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        value={userData.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password"
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        value={userData.password} />
                    </Form.Group>
                    {
                      registerForm ?
                        <div>
                          <button className='btn btn-warning mt-3' onClick={handleRegister}>Register</button>
                          <p>Already A User? Click here to <Link to={'/login'} style={{ color: "blue" }}>Login</Link></p>
                        </div> :
                        <div>
                          <Link to={'/dashboard'}>
                            <button className='btn btn-warning mt-3' onClick={handleLogin}>Login</button>
                          </Link>

                          <p>New User? Click here to <Link to={'/register'} style={{ color: "blue" }}>Register</Link></p>
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