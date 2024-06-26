import React from 'react'
import Title from '../common/title/Title'

import Awrapper from './Awrapper'
import "./About.css"
import { homeAbout } from '../../dummydata'


const AboutCard = () => {
  return (
    <>
    <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="./Images/about.webp" alt="" />
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTHING' title='Benifits About Online Learning Expertise'/>
                <div className="items">{homeAbout.map((val)=>(
                    <div className="item flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
    </section>
    <Awrapper/>
   
    </>
  )
}
export default AboutCard

