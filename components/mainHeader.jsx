import React from 'react'
import ThemeToggle from './themeToggle'

const AuthorHeader = () => {
  return (
    <>
      <div className='author-header'>

        <div className="mac-header">
          <div className='mac-spot red'></div>
          <div className='mac-spot yellow'></div>
          <div className='mac-spot green'></div>
        </div>

        <ThemeToggle />

      </div>
    </>
  )
}

export default AuthorHeader
