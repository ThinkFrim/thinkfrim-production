import React from 'react'
import DataTeam from '../../static/Data/TeamData';

const Team = () => {
  return (
    <section id='team'>
      <div className=''>
        <div className='text-center md:text-left md:flex md:items-center pt-20 pb-7'>
          <h1 className='text-xl pb-5 md:mx-3 md:text-2xl'>Meet Multi-Talented people who are passionate <br className="hidden md:inline" /> about their craft</h1>
          <button className='GunMetalBg White p-4 w-1/2 rounded-[15px] mx-auto md:w-1/4 xl:w-[15%]'>Meet Team</button>
        </div>
        <div className='md:grid md:grid-cols-3'>
          {
            DataTeam.map((team) => {
              return (
                <div className='relative before:bg-black before:bg-opacity-60 before:absolute before:top-[0%] before:w-[100%] before:h-[100%]' key={team.id}>
                  <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='White text-xl lg:text-2xl pb-2'>{team.title}</h1>
                    <h2 className='White text-lg lg:text-lg'>{team.position}</h2>
                  </div>
                  <div>
                    <img className='w-full h-1/3' src={team.img} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Team;