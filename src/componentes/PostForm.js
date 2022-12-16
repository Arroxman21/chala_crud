import React from "react";
import { useState } from "react";

export function PostForm({createPost}){
 
   const [content ,setContent]= useState({title: "", stack:""})
   
   const addPost = (e) =>{
    e.preventDefault()
    const newPost= {
         ...content ,
        id: Date.now()
    }
    createPost(newPost)
    setContent({title : "" ,stack : ""})

  }

  
    return(
        <div className="Form-wrap">
            <form >
   <h4 className='text-center'>Create your first Post</h4>
     
   <input type="text"
    className='form-control'
     placeholder='Programming Language'
     value={content.title}
     onChange ={e => setContent({...content, title: e.target.value})} />

     
   <input type="text"
    className='form-control my-3'
     placeholder='Enter your favorite Stack' 
     value={content.stack}
     onChange ={e => setContent({...content, stack: e.target.value})}
      />
     

     <button className='btn btn-primary w-100' onClick={addPost} >Add Post</button>
    <h4 className='text-center my-4'>Create your first Post</h4>

   </form>
        
        </div>
    )
}
