import * as React from 'react';
import './style.css';

export default function App() {
    //   const initailState =0
    //   const reducer =(state,action)=>{
    //       switch(action){
    //         case "add" : return state+1
    //         case "subtract" : return state-1
    //       }
    //   }
    // const [count,dispatch] =  React.useReducer( reducer ,initailState)


    // return ( <div> 
    //         {count} <br/>
    //         <button onClick= {()=>{dispatch("add")}}> add</button>
    //         <button onClick= {()=>{dispatch("subtract")}}> subtract</button>

    //    </div>)



    const userData = [
      {
          id:1,
          name: 'kunal',
          age: 22,
          admin: true
      },
      {
          id:2,
          name: 'rounak',
          age: 23,
          admin: false
      },
      {
          id:3,
          name: 'utkarsh',
          age: 22,
          admin: false
      },   
  ]
  
  const reducer =(state,action )=>{

    switch (action.type){
      case "DeleteUser" : 
      return   state.filter((user)=> user.id !=action.id)
    }
  }
     
  const  [user, dispatch] =React.useReducer(reducer, userData)

const handleDelete =(id)=>{
    dispatch({type :"DeleteUser" , id: id})
}
  return ( <div>
          {user.map((user)=>(
              <div id="user"  key={user.id}>
                    <h2>name :{user.name}</h2>
                    <p>age :{user.age}</p>
                    <button onClick={()=>handleDelete(user.id)}>delete user</button>
               </div>
          ))}

  </div>)
}
