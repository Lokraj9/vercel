import React from 'react'
import { Link } from 'react-router-dom';
const Topbar = () => {
    const user=false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className='link' to={'/'} >Home</Link></li>
                <li className="topListItem"><Link className='link' to={"/"}>About</Link></li>
                <li className="topListItem">
                <Link className='link' to={"/"}>Contact</Link>
                </li>
                <li className="topListItem"><Link className='link' to={"/write"}>Write</Link></li>
                <li className="topListItem"> {user &&"LogOut" }</li>
            </ul>
        </div>
        <div className="topRight">
            {user?(
             <img className='topImg' src='https://images.pexels.com/photos/16657153/pexels-photo-16657153.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt=''/>
            ):(
                <ul className="topList">
                    <li className="topListItem">
                    <Link className='link' to={"/login"}>Login</Link>
                     <Link className='link' to={"/register"}>Register</Link>
                    </li>
                </ul>
            )   
            }
           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default Topbar