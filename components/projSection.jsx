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
              <b>Kditor -A Code Editor</b>
              <p>HTML, CSS, Tailwind, JavaScript-ES6, Firebase -Real Time Database</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./komponents.png" alt="" />
              <a href="https://komponents.vercel.app/" className="link-text" target='_blank'># komponents.vercel.app</a>
            </div>
            <div className="proj-text">
              <b>Next-Node Comps</b>
              <p>Next.js 14, Node, Express, Mongoose, Next Auth, React Hook, Typescript</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./wordle.png" alt="" />
              <a href="https://wordle-word.vercel.app/" className="link-text" target='_blank'># wordle-word.vercel.app</a>
            </div>
            <div className="proj-text">
              <b>Wordle -A Game</b>
              <p>HTML, CSS, Bootstrap, Tailwind, JavaScript - ES6, Wordnik API</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-img-over">
              <img src="./stranger.png" alt="" />
              <a href="http://iwd.epizy.com/portfolio/" className="link-text" target='_blank'># iwd.epizy.com/portfolio</a>
            </div>
            <div className="proj-text">
              <b>Unix Terminal Clone</b>
              <p>HTML, CSS, Bootstrap, JavaScript - ES6, Stranger Things theme</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authproj
