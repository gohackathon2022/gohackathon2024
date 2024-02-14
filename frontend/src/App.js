import React from 'react';
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Webinar from './pages/Webinar';
import WebinarInfo from './pages/WebinarInfo';
import Hackathon from './pages/Hackathon';
import Jobs from './pages/Jobs';
import Training from './pages/Training';
import About from './pages/About';
import UserDashboard from './pages/UserDashboard';



function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path ='/webinar' element={<Webinar/>}/>
          <Route path='/webinar-info' element={<WebinarInfo/>}/>
          <Route path='/hackathon' element={<Hackathon/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}


export default App;
