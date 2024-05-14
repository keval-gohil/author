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
                        <p><i className='teenyicons--tailwind-outline'></i>Tailwind</p>
                        <p className='JavaScript'><i className='fluent--javascript-16-regular'></i>JavaScript</p>
                        <p><i className='tabler--brand-typescript'></i>TypeScript</p>
                        <p className='React'><i className='tabler--brand-react'></i>React Js</p>
                        <p className='Next'><i className='teenyicons--nextjs-outline'></i>Next Js 14</p>
                    </div>
                </div>
                <div className="skill-cat-all">
                    <h2>Backend</h2>
                    <div className="all-knows">
                        <p className='Node'><i className='akar-icons--node-fill'></i>Node Js</p>
                        <p className='Express'><i className='simple-icons--express'></i>Express Js</p>
                        <p className='Next-Auth'><i className='mdi--secure-outline'></i>Next Auth</p>
                        <p><i className='ph--key'></i>Passport Js</p>
                        <p><i className='fa6-brands--php'></i>PHP</p>
                        <p className='jwt'><i className='logos--jwt-icon'></i>JWT</p>
                    </div>
                </div>
                <div className="skill-cat-all">
                    <h2>Database</h2>
                    <div className="all-knows">
                        <p className='Firebase'><i className='ri--firebase-line'></i>Firebase</p>
                        <p><i className='tabler--brand-supabase'></i>Supabase</p>
                        <p><i className='fontisto--mysql'></i>MySql</p>
                        <p><i className='ph--file-sql-duotone'></i>SQLite</p>
                        <p className='Mongodb'><i className='teenyicons--mongodb-outline'></i>MongoDB</p>
                    </div>
                </div>
                <div className="skill-cat-all">
                    <h2>Other</h2>
                    <div className="all-knows">
                        <p className='HTML'><i className='la--git'></i>GIT</p>
                        <p><i className='ri--seo-line'></i>SEO</p>
                        <p className='React'><i className='tabler--mail-cog'></i>SMTP</p>
                        <p className='Next'><i className='fluent--eye-lines-48-regular'></i>IO API</p>
                        <p><i className='material-symbols-light--api'></i>RESTful API</p>
                        <p className='Node'><i className='ep--loading'></i>Loading UI</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills
