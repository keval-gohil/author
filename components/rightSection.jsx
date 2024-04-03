import React from 'react'
import AuthImgProf from './imgProfile'
import Authproj from './projSection'
import Skills from './skills'
import MoreInfo from './moreInfo'

const AuthRightSection = () => {
  return (
    <>
      <div className="right-sec">
        <AuthImgProf />
        <Authproj />
        <Skills />
        <MoreInfo />
      </div>
    </>
  )
}

export default AuthRightSection
