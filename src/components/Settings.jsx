import React from 'react'
import Sidebar from './Sidebar'
const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">
              Update your account
            </span>
            <span className="settingsDeleteTitle">
              Delete Account
            </span>
          </div>
          <form className='settingsForm'>
            <label> Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.pexels.com/photos/16401178/pexels-photo-16401178.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" />
              <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id='fileInput' style={{display:"none"}}/>
            </div>
            <label > Username</label>
            <input type='text' placeholder='Hello'/>
            <label > Email</label>
            <input type='email' placeholder='Hello@gmail.com'/>
            <label > Password</label>
            <input type='password' placeholder='Hello'/>
            <button className="settingsSubmit">Update</button>

          </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings