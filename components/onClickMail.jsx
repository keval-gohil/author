"use client"
import React from 'react'

const ClickMail = () => {
    return (
        <>
            <button className="galaxy-btn" onClick={() => window.location.href = 'mailto:kg256853@gmail.com'}>
                 <span><i className='emojione-monotone--closed-mailbox-with-raised-flag'></i></span>
            </button>

        </>
    )
}

export default ClickMail
