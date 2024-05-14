import React from 'react'

const Authproj = () => {
  return (
    <>
      <div className='project-list'>
        <hr className="hr-text" data-content="Projects"></hr>
        <div className='proj-row'>
          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./kditor.png" alt="" />
              <a href="https://kditor.vercel.app/" className="link-text" target='_blank'># kditor.vercel.app</a>
            </div>
            <div className="proj-text">
              <b>Kditor - Code Editor</b>
              <p>HTML, CSS, Tailwind, JavaScript-ES6, Firebase -Real Time Database</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./komponents.png" alt="" />
              <a href="https://komponents.vercel.app/" className="link-text" target='_blank'># komponents.vercel.app</a>
            </div>
            <div className="proj-text">
              <b>Web Components</b>
              <p>Next.js 14, Node, Express, MongoDB, Next Auth, React Hook, Typescript</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./ecok.png" alt="" />
              <a href="https://github.com/keval-gohil/eco-k" className="link-text" target='_blank'># github.com/eco-k</a>
            </div>
            <div className="proj-text">
              <b>Eco-K E-Commerce</b>
              <p>Next.js 14, Typescript, Boundless-Commerce, Stripe, Webhook</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./kk.png" alt="" />
              <a href="https://github.com/keval-gohil/Kolor-Kode" className="link-text" target='_blank'># github.com/Kolor-Kode</a>
            </div>
            <div className="proj-text">
              <b>Kolor Kode</b>
              <p>Extension - HTML, CSS, JavaScript - ES6, Manifest.json</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authproj
