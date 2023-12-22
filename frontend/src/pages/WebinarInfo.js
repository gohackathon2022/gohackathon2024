import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

const WebinarInfo = () => {
  return (
    <div>

        <Menu/>

        <section className='webinar-01'>
            <div className='container'>
                <div className="card text-white" style={{border:'none'}}>
                    <img src="img/webinar/webinar-07.png" className="card-img" alt="mern"/>
                </div>
            </div>
        </section>

        <section className='section-2'>
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-lg-9 d-grid gap-2'>
                        <button type="button" class="btn btn-primary btn-lg">MERN Stack Development: for Beginners</button>
                    </div>
                    
                    <div className='col-lg-3 d-grid gap-2'>
                        <button type="button" class="btn btn-primary btn-lg">Register Now</button>
                    </div>
                </div>
            </div>
        </section>

        <section className=''>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 speaker">
                    <img className="webinarimg" src="img/webinar.jpeg" alt="Web Development Training" />
                </div>
                
                <div className="aboutsection col-lg-7 section-03">
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

        <Footer/>
    </div>
  )
}

export default WebinarInfo