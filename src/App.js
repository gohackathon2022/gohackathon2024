import React from 'react';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Training from './pages/Training';
import Event from './pages/Event';
import Live_Event from './pages/Live_Event';
import Upcoming_Event from './pages/Upcoming_Event';
import Past_Event from './pages/Past_Event';
import Krishi_Vikalp from './pages/Krishi_Vikalp';
import Samadhan from './pages/Samadhan';
import AI_ML from './pages/AI_ML';
import Full_Stack_Dev from './pages/Full_Stack_Dev';
import Aws_Devops from './pages/Aws_Devops';
// import Winner from './pages/Winner';
// import Participants from './pages/Participants';
import Practice_Set from './pages/Practice_Set';
import Leaderboard from './pages/Leaderboard';
import Mentorship from './pages/Mentorship';
import Collaborator from './pages/Collaborator';
import Goal_Setting from './pages/Goal_Setting';
import Git_Github from './pages/Git_Github';
import Gyan_Goshthi from './pages/Gyan_Goshthi';
import ContactForm from './pages/ContactForm';
import DevOps_workshop from './pages/DevOps_workshop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/training' element={<Training />} />
          <Route path='/event' element={<Event />} />
          <Route path='/live_event' element={<Live_Event />} />
          <Route path='/upcoming_event' element={<Upcoming_Event />} />
          <Route path='/past_event' element={<Past_Event />} />
          <Route path='/krishi_vikalp' element={<Krishi_Vikalp />} />
          <Route path='/samadhan' element={<Samadhan />} />
          <Route path='/ai_ml' element={<AI_ML />} />
          <Route path='/full_stack_dev' element={<Full_Stack_Dev />} />
          <Route path='/aws_devops' element={<Aws_Devops />} />
          {/* <Route path='/winner' element={<Winner />} />
          <Route path='/participants' element={<Participants />} /> */}
          <Route path='/practice_set' element={<Practice_Set />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/mentorship' element={<Mentorship />} />
          <Route path='/collaborator' element={<Collaborator />} />
          <Route path='/goal_setting' element={<Goal_Setting />} />
          <Route path='/git_github' element={<Git_Github />} />
          <Route path='/gyan_goshthi' element={<Gyan_Goshthi />} />
          <Route path='/contact_form' element={<ContactForm />} />
          <Route path='/devops_workshoop' element={<DevOps_workshop />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}


export default App;
