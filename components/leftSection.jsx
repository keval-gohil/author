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
          
          <div className="left-sec-content"></div>
        </div>
    </>
  )
}

export default AuthLeftSection
