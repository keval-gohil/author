import React from 'react'

const Skills = () => {
  return (
    <>
        <div className="skill-sec">
            <hr className="hr-text" data-content="What I Know"></hr>
            <div className='skill-cat'>
                <div className="skill-cat-all">
                    <h2>Frontend</h2>
                    <div className="all-knows">
                        <p className='HTML'><i className='iconoir--html5'></i>HTML</p>
                        <p className='CSS'><i className='iconoir--css3'></i>CSS</p>
                        <p className='Bootstrap'><i className='bi--bootstrap'></i>Bootstrap</p>
                        <p><i className='teenyicons--tailwind-outline'></i>Tailwind</p>
                        <p className='JavaScript'><i className='fluent--javascript-16-regular'></i>JavaScript</p>
                        <p className='React'><i className='tabler--brand-react'></i>React Js</p>
                        <p className='Next'><i className='teenyicons--nextjs-outline'></i>Next Js</p>
                        <p><i className='tabler--brand-typescript'></i>TypeScript</p>
                        <p className='Node'><i className='ep--loading'></i>Loading UI</p>
                        <p className='HTML'><i className='la--git'></i>GIT</p>
                        <p><i className='ri--seo-line'></i>SEO</p>
                    </div>
                </div>
                <div className="skill-cat-all">
                    <h2>Backend</h2>
                    <div className="all-knows">
                        <p className='Node'><i className='akar-icons--node-fill'></i>Node Js</p>
                        <p className='Express'><i className='simple-icons--express'></i>Express Js</p>
                        <p className='Next-Auth'><i className='mdi--secure-outline'></i>Next Auth</p>
                        <p><i className='fontisto--mysql'></i>MySql</p>
                        <p><i className='fa6-brands--php'></i>PHP</p>
                        <p className='jwt'><i className='logos--jwt-icon'></i>JWT</p>
                        <p className='React'><i className='tabler--mail-cog'></i>SMTP</p>
                        <p className='Firebase'><i className='ri--firebase-line'></i>Firebase</p>
                        <p><i className='tabler--brand-supabase'></i>Supabase</p>
                        <p className='Mongodb'><i className='teenyicons--mongodb-outline'></i>MongoDB</p>
                        <p><i className='material-symbols-light--api'></i>RESTful API</p>
                    </div>
                </div>
                <div className="skill-cat-all skill-cat-all2">
                    <div className="all-knows">
                     <div className="glow-card">
                        <span className="glow-box"></span>
                        <div className="glow-text">
                            <span className="span-bg">Transition Edits</span>
                            A captivating way to fall in love with an character in just a few seconds.
                            <div className="kaep">~ KEAP</div>
                        </div>
                     </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Skills
