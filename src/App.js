import React, {useState, useEffect} from 'react';
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
import Samadhan from './pages/Samadhan';
import Mentorship from './pages/Mentorship';
import Goal_Setting from './pages/Goal_Setting';
import Git_Github from './pages/Git_Github';
import Gyan_Goshthi from './pages/Gyan_Goshthi';
import ContactForm from './pages/ContactForm';
import Figma from './pages/Figma';
import Git_hub from './pages/Git_hub';
import HTML_CSS_Js_Tailwind_Frontend from './pages/HTML_CSS_Js_Tailwind_Frontend';
import Python_Frontend from './pages/Python_Frontend';
import Java_Frontend from './pages/Java_Frontend';
import PHP_Frontend from './pages/PHP_Frontend';
import React_Frontend from './pages/React_Frontend';
import ASPnet_Backend from './pages/ASPnet_Backend';
import Python_Backend from './pages/Python_Backend';
import Java_Backend from './pages/Java_Backend';
import PHP_backend from './pages/PHP_backend';
import Node_Backend from './pages/Node_Backend';
import DEVOPS from './pages/DEVOPS';
import AI_MacineLearning from './pages/AI_MacineLearning';
import AWS from './pages/AWS';
import Datascience from './pages/Datascience';
import HTML_CSS_Js_BS_AN_SQL_fullstack from './pages/HTML_CSS_Js_BS_AN_SQL_fullstack';
import Python_Fullstack from './pages/Python_Fullstack';
import Java_Fullstack from './pages/Java_Fullstack';
import PHP_MySQL_Fullstack from './pages/PHP_MySQL_Fullstack';
import React_Fullstack from './pages/React_Fullstack';
import Ideathon from './pages/Ideathon';
import Registration_Form from './pages/Registration_Form';
import Hackathon from './pages/Hackathon';
import Payment from './pages/Payment';
import Tech_Assistance from './pages/Tech_Assistance';
import Agritech_Training from './pages/Agritech_Training';
import Navbar from './pages/Navbar';
import RAWE_Apiculture from './pages/RAWE_Apiculture';
import RAWE_Organic_Farming from './pages/RAWE_Organic_Farming';
import RAWE_Turmeric_Cultivation from './pages/RAWE_Turmeric_Cultivation';
import RAWE_Mushroom_Cultivation from './pages/RAWE_Mushroom_Cultivation';
import RAWE_Hydroponics from './pages/RAWE_Hydroponics';
import ELP_Apiculture from './pages/ELP_Apiculture';
import ELP_Organic_Farming from './pages/ELP_Organic_Farming';
import ELP_Turmeric_Cultivation from './pages/ELP_Turmeric_Cultivation';
import ELP_Mushroom_Cultivation from './pages/ELP_Mushroom_Cultivation';
import ELP_Hydroponics from './pages/ELP_Hydroponics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);

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
          <Route path='/samadhan' element={<Samadhan />} />
          <Route path='/mentorship' element={<Mentorship />} />
          <Route path='/goal_setting' element={<Goal_Setting />} />
          <Route path='/git_github' element={<Git_Github />} />
          <Route path='/gyan_goshthi' element={<Gyan_Goshthi />} />
          <Route path='/contact_form' element={<ContactForm />} />
          <Route path='/git_hub' element={<Git_hub />} />
          <Route path='/figma' element={<Figma />} />
          <Route path='/html_css_js_Tailwind_frontend' element={<HTML_CSS_Js_Tailwind_Frontend />} />
          <Route path='/python_frontend' element={<Python_Frontend />} />
          <Route path='/java_frontend' element={<Java_Frontend />} />
          <Route path='/php_frontend' element={<PHP_Frontend />} />
          <Route path='/react_frontend' element={<React_Frontend />} />
          <Route path='/aspnet_backend' element={<ASPnet_Backend />} />
          <Route path='/python_backend' element={<Python_Backend />} />
          <Route path='/java_backend' element={<Java_Backend />} />
          <Route path='/php_backend' element={<PHP_backend />} />
          <Route path='/node_backend' element={<Node_Backend />} />
          <Route path='/devops' element={<DEVOPS />} />
          <Route path='/ai_macine_learning' element={<AI_MacineLearning />} />
          <Route path='/aws' element={<AWS />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/html_css_js_bs_an_sql_fullstack' element={<HTML_CSS_Js_BS_AN_SQL_fullstack />} />
          <Route path='/python_fullstack' element={<Python_Fullstack />} />
          <Route path='/java_fullstack' element={<Java_Fullstack />} />
          <Route path='/php_mysql_fullstack' element={<PHP_MySQL_Fullstack />} />
          <Route path='/react_fullstack' element={<React_Fullstack />} />
          <Route path='/ideathon' element={<Ideathon />} />
          <Route path='/registration_form' element={<Registration_Form />} />
          <Route path='/hackathon' element={<Hackathon />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/tech-assistance' element={<Tech_Assistance />} />
          <Route path='/agritech-training' element={<Agritech_Training />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/rawe-apiculture' element={<RAWE_Apiculture />} />
          <Route path='/rawe-organic-farming' element={<RAWE_Organic_Farming />} />
          <Route path='/rawe-turmeric-cultivation' element={<RAWE_Turmeric_Cultivation />} />
          <Route path='/rawe-mushroom-cultivation' element={<RAWE_Mushroom_Cultivation />} />
          <Route path='/rawe-hydroponics' element={<RAWE_Hydroponics />} />
          <Route path='/elp-apiculture' element={<ELP_Apiculture />} />
          <Route path='/elp-organic-farming' element={<ELP_Organic_Farming />} />
          <Route path='/elp-turmeric-cultivation' element={<ELP_Turmeric_Cultivation />} />
          <Route path='/elp-mushroom-cultivation' element={<ELP_Mushroom_Cultivation />} />
          <Route path='/elp-hydroponics' element={<ELP_Hydroponics />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}


export default App;
