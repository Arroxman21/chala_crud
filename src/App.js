// import logo from './logo.svg';
import './AppStyle.css';
import React from 'react';
import TableItem from './componentes/TableItem';
import Thead from './componentes/Thead';
import { useState , } from 'react';
import { PostForm } from './componentes/PostForm';
// import { BackEnd } from './componentes/localStorage/BackEnd';

function App() {
 
  const [posts , setPosts] =useState([
    {id : "1" ,title :"JavaScript " , stack :"Full-Stack"},
    {id : "2" ,title :"Python " , stack :"Back-End"},
    {id : "3" ,title :"web " , stack :"Mern-Stack"},
    {id : "4" ,title :"C++ " , stack :"Cyber"},

  ]);

  const createPost = (newPost) => {
    setPosts([...posts ,newPost])
  }

  const removePost =(content) =>{
    setPosts(posts.filter(s => s.id !== content.id))
  }  


  return (
    <div className="app w-50 mx-auto" >

   
      <PostForm createPost={ createPost}/>

     <div className=' Bodytable d-flex flex-row-reverse mx-2 w-100' >
    
     </div>

      <table className='tdlar'>
        <Thead/> 
        <div className='values'>

           
       {posts.map( ( post,index )  => ( 
              
              <TableItem remove={removePost}   number={index + 1 } post={post} key={post.id}/> 
       
       )) } 
       
       
       </div>
          
      </table>
      
     
    </div>
  );
}

export default App;
