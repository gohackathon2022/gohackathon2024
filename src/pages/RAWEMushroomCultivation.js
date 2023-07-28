import React,  {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const RAWE_Mushroom_Cultivation = () => {
  return (
    <Fragment>
        <Menu/>
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/mushroom-cultivation.png" alt="Mushroom Cultivation Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Mushroom Cultivation</h2>
                        <p>Learn the theoretical and practical aspects of mushroom cultivation from their 
                            types and species to cultivation to the post-harvest practices.This course will 
                            also teach the trainees packaging and marketing of their mushrooms.<br />
                        </p>
                        
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/mushroom-cultivation.jpg' alt='Mashroom Farming'></img>
                    </div>
                </div>
            </div>
            
            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <h4>Socio-economic survey and on-campus training:</h4>
                        <ul>
                            <li>Mushroom intro and its types</li>
                            <li>Area and climatic conditions required</li>
                            <li>Morphology of mushroom</li>
                            <li>Anatomy of mushroom</li>
                            <li>Making mushroom compost</li>
                            <li>Spawning, Casing, Pinning, Cropping.</li>
                            <li>Harvesting and Grading </li>
                            <li>Season-wise management</li>
                            <li>Pre-cooling & Cleaning</li>
                            <li>Packaging and Marketing</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <h4>Village attachment:</h4>
                        <ul>
                            <li>Undertaking a small-scale mushroom project</li>
                            <li>Documentation of project activities and outcomes</li>
                            <li>Data collection and analysis related to the project</li>    
                        </ul>
                        <h4>Industrial attachment:</h4>
                        <ul>
                            <li>Visit to operational mushroom farms and apiaries</li>
                            <li>Hands-on experience in substrate preparation and spawn inoculation</li>
                            <li>Observation of mushroom cultivation techniques and practices</li>
                            <li>Practical demonstrations of harvesting and post-harvest management</li>    
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <ul>
                            <li>Trainees will get deep knowledge of mushrooms and will be able to identify 
                                different types of mushrooms. Knowledge of climatic conditions and different 
                                mushroom parts (internal and external parts).
                            </li>
                            <li>They will have complete knowledge of Spawning, Casing, Pinning, Cropping.</li>
                            <li>Trainees will be familiar with post harvesting tools and will have complete 
                                information of the process of grading & how grading is being done. 
                            </li>
                            <li>They will have the complete knowledge of pre-cooling and cleaning.</li>
                            <li>Training on different methods of marketing and how to carefully pack without 
                                damaging the product during transporting.
                            </li>
                            <li>Trainees will be able to make mushroom compost.</li>
                        </ul>
                        {/* <p><strong>Training Cost:- ₹ 6000/-</strong></p> */}
                        <button className="btn btn-primary">Duration: 6-8 Weeks</button> &nbsp;
                        <Link to="/payment-agritech"><button className="btn btn-primary">Buy Now</button></Link> &nbsp;
                        <Link to="/contact"><button className="btn btn-primary">Know More</button></Link>
                    </div>
                    <div className='col-lg-5'>
                        <h2>Get in Touch</h2>
                        <ContactForm/>
                    </div>
                </div>    
            </div>
        </body>
        <Footer/>
    </Fragment>
  )
}

export default RAWE_Mushroom_Cultivation
