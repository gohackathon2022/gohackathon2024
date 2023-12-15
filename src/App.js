import React from 'react';
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Webinar from './pages/Webinar';



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
        </Routes>
      </Router>
      
      
    </div>
  );
}


export default App;
