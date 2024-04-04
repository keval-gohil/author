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
                    <i className='uil--github'></i>
                    <h2>GitHub</h2>
                    <p>More Projects on <a href="https://github.com/keval-gohil">github.com/keval-gohil</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MoreInfo
