import react from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserState=(props)=>{
    const host = "http://localhost:5000"
  const UsersInitial=[
    // {
    //     "_id": "6232269dbb33389dbafe64d0",
    //     "name": "Rahul",
    //     "type": "interviewer",
    //     "uid": "38d173dd-c2a9-4b0d-8294-552da4e98ff7",
    //     "email": "rahul123@gmail.com",
    //     "__v": 0
    //   },
    //   {
    //     "_id": "62323a90bb33389dbafe64d4",
    //     "name": "Raj",
    //     "type": "interviewee",
    //     "uid": "fb73c415-0149-48f2-aaad-c81acc649775",
    //     "email": "rajsingh@gmail.com",
    //     "__v": 0
    //   },
    //   {
    //     "_id": "62324502bb33389dbafe64dc",
    //     "name": "Akash",
    //     "type": "interviewee",
    //     "uid": "200a32dc-dcff-4527-bbe0-c6aac9544a8f",
    //     "email": "akashsingh@gmail.com",
    //     "__v": 0
    //   },
    //   {
    //     "_id": "6232451bbb33389dbafe64de",
    //     "name": "Chirag",
    //     "type": "interviewer",
    //     "uid": "e339551e-7470-4956-ac36-993c62b2bd07",
    //     "email": "chirag@gmail.com",
    //     "__v": 0
    //   }
  ]

  const[users,setUsers]=useState(UsersInitial);

  const getUsers = async () => {
    // API Call 
    const response = await fetch(`${host}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     
      }
    });
    const json = await response.json()
    console.log(response);
    console.log(json)
    setUsers(json)
  }

return(
    <UserContext.Provider value={{users,getUsers}}>
        {props.children}
    </UserContext.Provider>
)
}



export default UserState;