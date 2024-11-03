import React from 'react'

const Authproj = () => {
  return (
    <>
      <div className='project-list'>
        <hr className="hr-text" data-content="Projects"></hr>
        <div className='proj-row'>
          
          <div className='proj-column'>
            <div className="proj-text">
              <a href="https://kditor.vercel.app/" target='_blank' className='proj1'><img src="./proj1.png" alt="proj1" /></a>
              <b>Kditor -Code Editor</b>
              <p>HTML, CSS, Tailwind, JavaScript-ES6, Firebase -Real Time Database</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-text">
              <a href="https://komponents.vercel.app/" target='_blank' className='proj2'><img src="./proj2.png" alt="proj2" /></a>
              <b>Web Components</b>
              <p>Next.js 14, Node, Express, MongoDB, Next Auth, React Hook, Typescript</p>
            </div>
          </div>

          <div className='proj-column'>
            <div className="proj-text">
              <a href="https://github.com/keval-gohil/Kolor-Kode/" target='_blank' className='proj3'><img src="./proj3.png" alt="proj3" /></a>
              <b>Eco-K Ecommerce</b>
              <p>Next.js 14, Typescript, Boundless-Commerce, Stripe, Webhook</p>
            </div>
          </div>

          <div className='proj-column proj-column2'>
            <div className="proj-text">
                <i className='uil--github'></i>
                <h2>GitHub</h2>
                <p>More Projects on <a href="https://github.com/keval-gohil">github.com/keval-gohil</a></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Authproj
