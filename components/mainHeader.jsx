import React from 'react'
import ThemeToggle from './themeToggle'

const AuthorHeader = ({ onClose, onMinimize, onZoom }) => {
  return (
    <div className='author-header'>
      <div className="mac-header">
        <div className='mac-spot red' onClick={onClose}></div>
        <div className='mac-spot yellow' onClick={onMinimize}></div>
        <div className='mac-spot green' onClick={onZoom}></div>
      </div>

      <ThemeToggle />
    </div>
  )
}

export default AuthorHeader