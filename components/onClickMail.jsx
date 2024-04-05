"use client"
import React from 'react'

const ClickMail = () => {
    return (
        <>
            <button className="galaxy-btn" onClick={() => window.location.href = 'mailto:kg256853@gmail.com'}>
                 <span><i className='twemoji--letter-e'></i>&nbsp;mail</span>
            </button>

        </>
    )
}

export default ClickMail
