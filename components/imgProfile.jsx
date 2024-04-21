import React from 'react'
import ClickMail from './onClickMail'


const AuthImgProf = () => {
  return (
    <>
        <div className="example-box">
          <div className="example-box-shapes"></div>
          <div className='box-profile'>
            <div className="blob-shape-img"><div className="blob-bg-cover"></div></div>
            <div className='box-profile-name'>
              <h1>Keval Gohil</h1>
              <h2><i className='material-symbols--alternate-email'></i>codeArchitect</h2>
            </div>
          </div>
          <div className='hire-btns'>
            <ClickMail />
          </div>

        </div>
    </>
  )
}

export default AuthImgProf
