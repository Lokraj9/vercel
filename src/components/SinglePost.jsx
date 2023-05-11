import React from 'react'

const SinglePost = () => {
  return (
    <div className='singlePost'>

        <div className="singlePostWrapper">
            <img className='singlePostImg' src='https://images.pexels.com/photos/16444594/pexels-photo-16444594.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' />
            <h1 className='singlePostTitle'>int consequatur optio voluptatibus!
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-delete-left"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuther'>Author:<b>Name</b></span>
                <span className='singlePostDate'>1 hour ago</span>

            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam labore quae molestias id odit voluptate error aspernatur modi est. Amet explicabo expedita temporibus dolor illum 
                consectetur consequuntur, esse quaerat repellendus, similique inventore mollitia excepturi eos incidunt accusamus. Alias quas tempore at illo nesciunt vitae voluptates explicabo voluptatem, error atque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic est cum, dolorum harum consequuntur? Nobis eos earum deserunt consequatur.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident ea nobis tempore nulla quod veniam ipsam eligendi quidem excepturi dolorum, nisi illo deserunt delectus quasi accusamus suscipit quaerat est.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo eaque sapiente cumque? Veritatis quod at in id rem delectus?          
            </p>
        </div>
    </div>
  )
}

export default SinglePost