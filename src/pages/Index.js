import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';
import ReactGA from 'react-ga4';

const index = () => {
    ReactGA.initialize("G-RYHT696S35");
  return (
    <Fragment>
        <Menu />
    
    <section className="section-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-7  bannertext">
                    <h1><strong>WEBINAR</strong></h1>
                    <h5>ON</h5>
                    <h3><strong>MERN FullStack Web Development</strong></h3>
                    <p><strong>Collaborate, Innovate, and Hack Your Way to Success!</strong><br />
                        We are trying to build a community where everyone can connect, learn, and grow together.
                    </p> <br /> 
                    <NavLink to=""><button className="btn btn-primary px-5 py-2 primary-btn">Register Now</button></NavLink>
                </div>
                <div className="col-lg-5 ">
                    <img src="img/free-webinar.png" alt="Fullstack Web Development" className='bannerimg' />
                </div>
            </div>
        </div>
    </section>

    <section className='section-2'>
        <div className='container'>
            <div className='row'>
                
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card training-01">
                        <img src='img/announcement.png' alt='Announcement' style={{width:'92px', height:'119px'}}></img>
                        <div className="card-body">
                            <h2 className="card-title"><strong>Announcement</strong></h2>
                            <img className="card-img-top" src="img/training.png" alt="Card cap"/>
                            {/* <a href={URL} className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <section className='section-1'>
                        <h3 className="card-title" style={{textAlign:'center'}}><strong>Popural Skills</strong></h3>
                        <p style={{textAlign:'center'}}>Learn, Practice and Test Your Skills with Our Courses</p>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <div className="card card-section training-01">
                                    <div className="card-body"> 
                                        <img className="card-img-top" src="img/training.png" alt="Card cap"/>
                                        <h4 className="card-title"><strong>MERN</strong></h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6">
                                <div className="card card-section jobs-01">
                                    <div className="card-body">
                                        <img className="card-img-top" src="img/jobs.png" alt="Card cap"/>
                                        <h4 className="card-title"><strong>AI / ML</strong></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="card card-section app">
                                    <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                                        <div className="card-body">
                                            <img src='img/resources/cloud-icon.png' alt='Cloud Computing'></img>
                                            <h5 className="card-title">Cloud Computing</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>   
        </div>
    </section>


    <section className=''>
        <div className='container'>
            <div className="card text-white" style={{border:'none'}}>
                <img src="img/full-stack.webp" className="card-img" alt="mern"/>
                <div className="card-img-overlay">
                    
                </div>
            </div>
        </div>
    </section>


    
    <section className="section-2">
        <div className="purchase text-center">
            <h2>Empowering Your Vision</h2>
            <p className="text-secondary">Empowering Your Digital Vision with Cutting-Edge Solutions</p>
        </div>

        <div className='container'>
            <div className="row">

                <div className="col-sm-3">
                    <div className="card card-section web">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/web-icon.png' alt='Web Development'></img>
                                <h5 className="card-title">Web</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-section app">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/app-icon.png' alt='App Development'></img>
                                <h5 className="card-title">App</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-section cloud">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/cloud-icon.png' alt='Cloud Infrastructure'></img>
                                <h5 className="card-title">Cloud</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-section open-source">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/open-source-icon.png' alt='Open Source Customization'></img>
                                <h5 className="card-title">Open Source</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='container service-section'>
            <div className="row">

                <div className="col-sm-3">
                    <div className="card card-section custom-software">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/custom-software-icon.png' alt='Custom Software Development'></img>
                                <h5 className="card-title">Custom Software</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-section tech-assist">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/tech-assist-icon.png' alt='Tech Assistance for Startup'></img>
                                <h5 className="card-title">Tech Assistance</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-section ui-ux">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/ui-ux-icon.png' alt='UI/UX Design'></img>
                                <h5 className="card-title">UI/UX Design</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-section ecommerce">
                        <a href={URL} style={{textDecoration: 'none', color: 'black'}}>
                            <div className="card-body">
                                <img src='img/resources/ecommerce-icon.png' alt='E-Commerce Development'></img>
                                <h5 className="card-title">E-Commerce</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    <section className="section-1">
        <div className='container'>
            <div className="row">
                
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card cloud-01">
                        <div className="card-body">
                            <h5 className="card-title">If You Are a Coder & Want Interactive Practice & Challenge, 
                            Come Visit Our Hackathon!</h5>
                            <img className="card-img-top" src="img/quiz.png" alt="Card cap"/>
                            {/* <a href={URL} className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="card cloud-01">
                        <div className="card-body">
                            <h5 className="card-title">If You Are a Coder & Want Interactive Practice & Challenge, 
                            Come Visit Our Hackathon!</h5>
                            <img className="card-img-top" src="img/hackathon.png" alt="Card cap"/>
                            {/* <a href={URL} className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className='section-03'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img className="webinarimg" src="img/webinar.jpeg" alt="Web Development Training" />
                </div>
                
                <div className="col-lg-7 webinar">
                    <h2>Follow up our regular webinars and get insights of industry related work with our top industry experts</h2>
                    <br/>
                    <div className="col-lg-7 webinar">
                        <button type='button' className='btn btn-primary px-5 py-2 primary-btn' style={{alignItems: 'center'}}>Know More</button>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className='section-2'>
        <div className='container'>
            <div className="row">
                
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card training-01">
                        <div className="card-body">
                            <h2 className="card-title"><strong>Training</strong></h2>
                            <img className="card-img-top" src="img/training.png" alt="Card cap"/>
                            {/* <a href={URL} className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="card jobs-01">
                        <div className="card-body">
                            <h2 className="card-title"><strong>Jobs</strong></h2>
                            <img className="card-img-top" src="img/jobs.png" alt="Card cap"/>
                            {/* <a href={URL} className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='section-03'>
        <div className="container">
            <div className="row">
                <div className="imgofabout col-lg-5">
                    <img className="imgofabout" src="img/resources/about_img.jpg" alt="Web Development Training" />
                </div>
                
                <div className="aboutsection col-lg-7">
                    <h2>About GoHackathon</h2>
                    <p>Go Hackathon comprises of eminent Industry professionals, educators and students meant to
                    nurture talent among budding tech professional. Industry today is looking for talented 
                    students who are equipped and experience with advanced skills, software, attitude and 
                    updated industry best practices. <br />
                    </p>
                    
                    <p>We create an eco-system of industry academia partnership and help in continuous and sustainable 
                    development of innovative ideas, which are impactful for the growing economy and society. 
                    Go hackathon thrives to provide best nurturing, mentorship, skills and professional 
                    opportunities to its members and participants.We conduct series of events, seminars, 
                    hackathons, internships and Projects.
                    </p>
                    <div className="col-lg-7 webinar">
                        <button type='button' className='btn btn-primary px-5 py-2 primary-btn' style={{alignItems: 'center'}}>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"></script>
    <script src="js/main.js"></script>
    
   <Footer />
    </Fragment>
  )
}

export default index;
