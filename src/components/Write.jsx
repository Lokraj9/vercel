import React from 'react'

const Write = () => {
  return (
    <div className='write'>
        <img  className='writeImg' src='https://images.pexels.com/photos/14270010/pexels-photo-14270010.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'/>
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                <i class=" writeIcon fa-solid fa-address-card"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type='text' placeholder='title' className='writeInput'autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                <textarea placeholder='tell your story....'type="text" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write