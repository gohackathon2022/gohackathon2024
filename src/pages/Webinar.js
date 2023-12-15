import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

const Webinar = () => {
  return (
    <div>
        <Menu/>

        <section className='webinar-01'>
            <div className='container'>
                <div className="card text-white" style={{border:'none'}}>
                    <img src="img/webinar/webinar-banner.png" className="card-img" alt="mern"/>
                </div>
            </div>
        </section>


        <section className="section-2">
            <div className="purchase text-center">
                <h2><strong>Popular Webinar</strong></h2>
                <p className="text-secondary">Learn, Practice, and Test Your Skills with Our Webinar</p>
            </div>
            
            <div className='container'>
                <div className='row'>
                    <div class="card-deck">
                        
                        <div class="card webinar-card">
                            <img class="card-img-top" src="img/webinar/webinar-01.png" alt="Card cap"/>
                            
                            <div class="card-body">
                                <h5 class="card-title">Web Development Using MERN Stack</h5>
                                <p class="card-text">Students receive a thorough introduction to database and full stack 
                                development in this course. With the technical understanding of front-end and back-end 
                                programming, students will discover the nuances of data structures and algorithms.
                                </p>
                            </div>
                            
                            <div class="card-footer">
                                <a className="btn btn-outline-info btn-block" href={URL} role="button">Know More</a>
                            </div>
                        </div>
                        
                        <div class="card webinar-card">
                            <img class="card-img-top" src="img/webinar/webinar-02.png" alt="Card cap"/>
                            
                            <div class="card-body">
                                <h5 class="card-title">Python Full Stack Development</h5>
                                <p class="card-text">Develop your knowledge of containers, deployment strategies, and 
                                immutable infrastructure. Create a portfolio for cloud computing containing labs, projects, 
                                and a capstone project. Discover AWS, Azure, GCP, and more.
                                </p>
                            </div>
                            
                            <div class="card-footer">
                                <a className="btn btn-outline-info btn-block" href={URL} role="button">Know More</a>
                            </div>
                        </div>
                        
                        <div class="card webinar-card">
                            <img class="card-img-top" src="img/webinar/webinar-03.png" alt="Card cap"/>
                            
                            <div class="card-body">
                                <h5 class="card-title">PHP Full Stack Development</h5>
                                <p class="card-text">Are you ready to harness the power of Digital Marketing to supercharge 
                                your brand's online presence? Our Comprehensive Digital Marketing Mastery course is designed 
                                to equip you with the skills, strategies, and insights needed to excel in the dynamic world 
                                of digital marketing.
                                </p>
                            </div>
                            
                            <div class="card-footer">
                                <a className="btn btn-outline-info btn-block" href={URL} role="button">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>

            <div className='container'>
                <div className='row'>
                    <div class="card-deck">
                        
                        <div class="card webinar-card">
                            <img class="card-img-top" src="img/webinar/webinar-04.png" alt="Card cap"/>
                            
                            <div class="card-body">
                                <h5 class="card-title">Asp.Net Full Stack Development</h5>
                                <p class="card-text">Students receive a thorough introduction to database and full stack 
                                development in this course. With the technical understanding of front-end and back-end 
                                programming, students will discover the nuances of data structures and algorithms.
                                </p>
                            </div>
                            
                            <div class="card-footer">
                                <a className="btn btn-outline-info btn-block" href={URL} role="button">Know More</a>
                            </div>
                        </div>
                        
                        <div class="card webinar-card">
                            <img class="card-img-top" src="img/webinar/webinar-05.png" alt="Card cap"/>
                            
                            <div class="card-body">
                                <h5 class="card-title">Blockchain Development</h5>
                                <p class="card-text">Develop your knowledge of containers, deployment strategies, and 
                                immutable infrastructure. Create a portfolio for cloud computing containing labs, projects, 
                                and a capstone project. Discover AWS, Azure, GCP, and more.
                                </p>
                            </div>
                            
                            <div class="card-footer">
                                <a className="btn btn-outline-info btn-block" href={URL} role="button">Know More</a>
                            </div>
                        </div>
                        
                        <div class="card webinar-card">
                            <img class="card-img-top" src="img/webinar/webinar-06.png" alt="Card cap"/>
                            
                            <div class="card-body">
                                <h5 class="card-title">Java Full Stack Development</h5>
                                <p class="card-text">Are you ready to harness the power of Digital Marketing to supercharge 
                                your brand's online presence? Our Comprehensive Digital Marketing Mastery course is designed 
                                to equip you with the skills, strategies, and insights needed to excel in the dynamic world 
                                of digital marketing.
                                </p>
                            </div>
                            
                            <div class="card-footer">
                                <a className="btn btn-outline-info btn-block" href={"URL"} role="button">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>

    </div>
  )
}

export default Webinar