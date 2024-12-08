import React from 'react'
import FAQ from './faqDrops'

const MoreInfo = () => {
  return (
    <>
        <div className="more-info">
            <hr className="hr-text" data-content="More Info"></hr>
            <div className="info-row">
                <div className="info-column">
                  <FAQ />
                </div>
                <div className="more-github">
                    <div className="hire">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.868 0-3.51-.708t-2.857-1.924t-1.924-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709t2.859 1.924t1.925 2.857T21 12v.989q0 1.263-.868 2.137T18 16q-.894 0-1.63-.49q-.737-.49-1.09-1.306q-.57.821-1.425 1.308T12 16q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12v.989q0 .822.589 1.417T18 15t1.412-.594t.588-1.418V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4.5q.213 0 .356.144t.144.357t-.144.356T16.5 21zm0-6q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4"/><path strokeLinecap="round" d="M19.998 18q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"/></g></svg>
                    </div>
                    
                    <p>Get something good from me — hire me through <a href="https://www.linkedin.com/in/keval-gohil" target='_blank'>linkedIn</a> or <a href="mailto:kg256853@gmail.com">email</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MoreInfo
