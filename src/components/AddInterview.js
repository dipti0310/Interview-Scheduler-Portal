import React from 'react';
import { Form, Card, Button } from "react-bootstrap";
import Select from 'react-select'
import InterviewContext from '../context/interview/InterviewContext';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context/user/UserContext';
import Moment from 'react-moment';
import moment from 'moment';

function AddInterview() {
    const context=useContext(InterviewContext);
    const{AddInterview}=context;
    const context1=useContext(UserContext);
    const{users}=context1;
    const [interview,setInterviews]=useState({startDate:"",endDate:"",participants:[]});
    const [candidates, setCandidates] = useState([]);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());


      const getParticipants = () => {
        let us = [];
        users.forEach((user) => {
          console.log(user);
          us.push({ label: user.email, value: user.uid });
        });
        return us;
      };

      const onChange=(e)=>{
        setInterviews({...interview,[e.target.name] : e.target.value});
        console.log(interview);
     
      }


    const handleClick=(e)=>{
      console.log("CLICKED")
      e.preventDefault();
    const participants = [];
    for (let candidate of candidates) {
      participants.push(candidate.value);
    }
    const stime = moment(
      startTime,
      "YYYY-MM-DD HH:mm:ss"
    ).format();
    const etime = moment(endTime, "YYYY-MM-DD HH:mm:ss").format();

    const interview = {
      startDate: stime,
      endDate: etime,
      participants: participants,
    };
    console.log(interview);
   AddInterview(stime,etime,participants);
    }
  

  return (
      
    <div  className="formData">
    <form onSubmit={handleClick} className="flex flex-col" >
      <div style={{ display: "flex",justifyContent: "center" }}>
        <Card classname="my-3"style={{ width: "50%" }}>
          <Card.Header  as="h5">Create Interview</Card.Header>
          <Card.Body>
          
             <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <input
              name="startDate"
                className="form-control expandInputboxes"
                type="datetime-local"
                value={startTime}
                required
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <input
              name="endDate"
                className="form-control expandInputboxes"
                type="datetime-local"
                value={endTime}
            required
            onChange={(e) => setEndTime(e.target.value)}
              />
            </Form.Group>

            <label>Select Participants : </label>
            <Select isMulti closeMenuOnselect={true} className="basic-multi-select mb-3" 
            classNamePrefix="select" 
            name="participants"
            options={getParticipants()}
            onChange={(selectedOption) => {
              setCandidates(selectedOption);
              console.log("candidates selected", selectedOption);
            }}
            />

            <Button classname="mb-2" type="submit" onClick={handleClick} variant="primary">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </form> 
    
  </div>
  )
}

export default AddInterview