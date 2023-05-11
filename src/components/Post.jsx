import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/16444594/pexels-photo-16444594.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDes"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et beatae fugit. Nisi quas itaque libero repellat veniam quasi dolores! taque libero repellat veniam quasi dolores! taque libero repellat veniam quasi dolores! taque libero repellat veniam quasi dolores!
      </p>
    </div>
  );
};

export default Post;
