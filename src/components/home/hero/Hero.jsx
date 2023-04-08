import React from 'react'
import Title from '../../common/title/Title';
import "./hero.css";

const Hero = () => {
  return (
   <>
   <section className="hero">
    <div className="container">
        <div className="row">
            <Title subtitle ='WELCOME TO ACEDEMIA' title='Best Online Education'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis labore aliquam dolores provident accusamus corporis delectus id quidem reiciendis facere?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, ipsum? Odio, dolores vel voluptates asperiores laudantium saepe doloremque quae eveniet?</p>
            <div className="button">
                <button className='primary-btn'>
                    GET START NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className='primary-btn2'>
                    VIEW COURCE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
        </div>
    </div>
   </section>
   <div className="marigin">

   </div>
   </>
  )
}

export default Hero