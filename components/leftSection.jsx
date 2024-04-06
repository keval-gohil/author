import React from 'react'
import FormComponent from './mailing'

const AuthLeftSection = () => {
  return (
    <>
        <div className='left-sec'>
          <div className="left-sec-content">
            <hr className="hr-text" data-content="Contact"></hr>
            <FormComponent />
          </div>
          
          <div className="left-sec-content left-sec-2">
            <hr className="hr-text" data-content="Socials"></hr>
            <div className="social-btn">
              <a href="https://www.instagram.com/keval_gohil_1" target='_blank'><i className='ant-design--instagram-outlined'></i> Instagram</a>
              <a href="https://www.linkedin.com/in/keval-gohil" target='_blank'><i className='circum--linkedin'></i> LinkedIn</a>
              <a href="https://github.com/keval-gohil" target='_blank'><i className='mdi--github'></i> GitHub</a>
              <a href="https://twitter.com/keval_gohil_1" target='_blank'><i className='ri--twitter-x-fill'></i> Twitter</a>
              <a href="https://www.fiverr.com/keval_gohil" target='_blank'><i className='jam--fiverr'></i> Fiverr</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default AuthLeftSection
