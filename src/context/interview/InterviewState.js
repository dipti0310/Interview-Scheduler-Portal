import react from "react";
import InterviewContext from "./InterviewContext";
import { useState } from "react";
// import { useAlert } from 'react-alert'

const InterviewState=(props)=>{
  const host = "http://localhost:5000"
  const interviewsInitial=[
  ]

  const[interviews,setInterviews]=useState(interviewsInitial);

  //get all interviews
  // Get all Notes
  const getInterviews = async () => {
    // API Call 
    const response = await fetch(`${host}/interview`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     
      }
    });
    const json = await response.json()
    console.log(json)
    setInterviews(json)
  }


  //Adding an interview
 const  AddInterview=async (startDate,endDate,participants)=>{
  // const alert = useAlert()
    const response = await fetch(`${host}/interview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify({startDate,endDate,participants})
    });
    console.log(JSON.stringify({startDate,endDate,participants}))


    console.log("Adding a new note"+response.status)
if(response.status==200){
      const interview={
        "participants": participants,
        "startDate": startDate,
        "endDate": endDate,
        "__v": 0
      };
  setInterviews(interviews.concat(interview));
}

  }

  //Edit an interview
 const EditInterview= async(uid,startDate,endDate,participants)=>{
  //API CALL
  const response = await fetch(`${host}/interview/${uid}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify({startDate,endDate,participants})
  });
  const json = response.json();
  console.log(uid+"++"+startDate+"+++++"+endDate);

  let newInterviews = JSON.parse(JSON.stringify(interviews))

  //Logic to edit in client
  if(response.status==200){
  for(let index=0;index<newInterviews.length;index++){
        const element=newInterviews[index];
        if(element.uid===uid){
          newInterviews[index].startDate=startDate;
          newInterviews[index].endDate=endDate;
          newInterviews[index].participants=participants
        break;
        }
      }
      setInterviews(newInterviews)
    }
 }

return(
    <InterviewContext.Provider value={{interviews,AddInterview,EditInterview,getInterviews}}>
        {props.children}
    </InterviewContext.Provider>
)
}



export default InterviewState;