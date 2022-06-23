import React from 'react'
import './aboutMe.css'
import dp from '../../images/dp1.jpg'

const AboutMe = () => {
    return (
        <div className='about-container' id='about-me'>
            <div>
                <img src={dp} alt='display-picture' />
            </div>

            <div className='about-text'>
                <h1>ABOUT ME</h1>
                <p>Full Stack Software Engineer with 5 years of experience in Analysis, Design, Development, Testing and end to end delivery of enterprise software applications using Java/J2EE technologies.<br></br>

                    Developed multiple large/small scale projects using React.js, Spring Boot, HTML5 and CSS3. Available on my GitHub.<br />

                    Please feel free to reach out for any further discussion.</p>
            </div>
        </div>
    )
}

export default AboutMe