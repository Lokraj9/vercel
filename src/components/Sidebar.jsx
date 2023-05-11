import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Me</span>
        <img className="imm" src="https://images.pexels.com/photos/14410461/pexels-photo-14410461.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebatTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebatTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
