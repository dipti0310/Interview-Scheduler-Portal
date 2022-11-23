import Navbar from './components/Navbar';
import './App.css';
// import { Form } from 'react-bootstrap';
import Forms from "./components/Forms"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import InterviewState from './context/interview/InterviewState';
import Interviews from './components/Interviews';

import Alert from './components/Alert';
import AddInterview from './components/AddInterview';
import UserState from './context/user/UserState';

function App() {
  return (

    <div className="App">
     
      <Navbar/>
      <UserState>
      <InterviewState>
        <AddInterview/>
      <Interviews/>
      </InterviewState>
      </UserState>
      {/* <InterviewState>
      <Navbar/>
      <Alert message="Saved" />

      <Interviews/>
      <BrowserRouter>
      <Routes>
      {/* <div className="formData"> */}
      {/* <Route path="/" element={<Forms/>} exact /> */}
      {/* </div> */}
      {/* <Route path="/create" element={<Forms />} />
      <Route path="/edit/:id" element={<EditInterview />} />
      </Routes>
      
      </BrowserRouter> 
      </InterviewState> */} */
      {/* <div className="formData">
      <Forms ></Forms>
      </div>
 {/* <ListInterview/> */}

    </div>
  );
}

export default App;
