import React from 'react'
import Awrapper from '../about/Awrapper'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'
import './team.css'
import'../about/About.css'

const Team = () => {
  return (
    <>
    <Back title='team'/>
    <section className='team padding'>
        <div className='container grid'>
        <TeamCard/>
        </div>
      </section>
      <Awrapper/>
      </>
  )
}

export default Team