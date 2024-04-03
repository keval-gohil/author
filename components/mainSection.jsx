import React from 'react'
import AuthLeftSection from './leftSection'
import AuthRightSection from './rightSection'

const AuthorSection = () => {
  return (
    <>
        <div className="author-section">
            <div className='author-sec-left'>
                <AuthLeftSection />
            </div>
            <div className='author-sec-right'>
                <AuthRightSection />
            </div>
        </div>
    </>
  )
}

export default AuthorSection
