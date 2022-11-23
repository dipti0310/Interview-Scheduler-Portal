import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import InterviewItem from './InterviewItem';
import { useEffect } from 'react';
// import { Modal,Button } from 'bootstrap';
import { Modal,Button } from 'react-bootstrap';
import { useRef } from 'react';
import InterviewContext from '../context/interview/InterviewContext';
import UserContext from '../context/user/UserContext';
import { Form, Card} from "react-bootstrap";
import Select from 'react-select'
import moment from 'moment';


function Interviews() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const context=useContext(InterviewContext);
  const{interviews,getInterviews,EditInterview}=context;
    const context1=useContext(UserContext);
    const{users,getUsers}=context1;
    const [interview,setInterviews]=useState({startDate:"",endDate:"",participants:[]});
    const [candidates, setCandidates] = useState([]);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());


      const getParticipants = () => {
        let us = [];
        users.forEach((user) => {
          us.push({ label: user.email, value: user.uid });
        });
        return us;
      };

      const onChange=(e)=>{
        setInterviews({...interview,[e.target.name] : e.target.value});
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

    const interview1 = {
      uid:interview.uid,
      startDate: stime,
      endDate: etime,
      participants: participants,
    };
    console.log(interview1);
    handleClose();
  EditInterview(interview1.uid,stime,etime,participants);
    }
  
    useEffect(()=>{
      getInterviews()
      getUsers()
    },[])

    const updateInterview=(currentInterview)=>{
ref.current.click();
setInterviews(currentInterview);
setStartTime(currentInterview.startDate);
setEndTime(currentInterview.endDate);
setCandidates(currentInterview.participants);
console.log(startTime+"--"+endTime)
    }
    const ref = useRef(null)
// const refClose = useRef(null)
  return (
    <div className='container my-3'>

<Button className='d-none' variant="primary" ref={ref} onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleClick} className="flex flex-col" >
      <div style={{ display: "flex",justifyContent: "center" }}>
        <Card classname="my-3"style={{ width: "50%" }}>
          {/* <Card.Header  as="h5">Create Interview</Card.Header> */}
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
{/* 
            <Button classname="mb-2" type="submit" onClick={handleClick} variant="primary">
              Submit
            </Button> */}
          </Card.Body>
        </Card>
      </div>
    </form> 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Reschedule
          </Button>
        </Modal.Footer>
      </Modal>

  <h2>Upcoming Interviews</h2>
  {interviews.map((interview)=>{
    return <InterviewItem key={interview.uid} updateInterview={updateInterview}interview={interview}/>
  })}
    </div>
  )
}

export default Interviews