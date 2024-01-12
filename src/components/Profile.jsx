import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='card shadow p-5 mb-5'>
        <div className='d-flex justify-content-between'>
          <h2>Profile</h2>
          <button className='btn btn-outline-info' onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
        </div>
        <Collapse in={open}>
          <div className='row justify-content-center mt-5'>
            <label htmlFor="profile" className='mb-5'>
              <input type="file" id="profile" style={{ display: 'none' }} />
              <img
                width={'150px'}
                height={'150px'} className='rounded'
                src="https://p7.hiclipart.com/preview/184/113/161/user-profile-computer-icons-clip-art-profile.jpg" alt="" />
            </label>
            <div className='mb-4'>
              <input type="text" name="" id="" placeholder='Github Link' className='form-control' />
            </div>
            <div>
              <input type="text" placeholder='Linkedin Link' className='form-control' />
            </div>
            <div className='mt-3 mb-1'>
              <button className='btn btn-success rounded w-100'>Update</button>
            </div>
          </div>
        </Collapse>

      </div>
    </>
  )
}

export default Profile