import React from 'react'
import { Card,Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { useContext } from 'react';
import UserContext from '../context/user/UserContext';
import { useState } from 'react';

function InterviewItem(props) {
    const {interview,updateInterview}=props;
    const context1=useContext(UserContext);
    const{users}=context1;
    const [candidates, setCandidates] = useState([]);
    let us = [];
    const getParticipants = () => {
     
      users.forEach((user) => {
        
        us.push({ label: user.email, value: user.uid });
      });

      setCandidates(us);
  }

    const getDetails=(uid)=>{
      us=[];
      users.forEach((user) => {
        
        us.push({ label: user.email, value: user.uid });
      });
      console.log(us);
    for(let i=0;i<us.length;i++){
      if(uid==us[i].value){
        return us[i].label;
      }
    }
    }
    

  return (
    <div>
        <Card className='mb-3'>
  <Card.Header as="h5">Interview Details</Card.Header>
  <Card.Body>
    {/* <Card.Title>Interview Details</Card.Title> */}
    <Card.Text>
    <p>
              <b> Date:</b> <Moment format="DD-MM-YYYY">{interview.endDate}</Moment>
              </p>
              <p>
               <b>StartTime:</b> {" "}
                <Moment format="hh:mm A">{interview.startDate}</Moment>
              </p>
              <p>
               <b>EndTime:</b> <Moment format="hh:mm A">{interview.endDate}</Moment>
              </p>
              <p>
           <b> Participants:</b>  {interview.participants.map((p)=>{
              return getDetails(p)+" , ";
  })}
              </p>
      
    </Card.Text>
    <Button variant="primary" onClick={()=>{updateInterview(interview)}}>Reschedule/Edit</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default InterviewItem;