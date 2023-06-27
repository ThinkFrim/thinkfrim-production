import React from "react";
import DataTeam from "../../static/Data/TeamData";
import "./team.css";
const Team = () => {
  return (
    <section id='team'>
      <div className=''>
        <div className='text-center py-20 xl:py-[10rem]'>
          <h1 className='text-xl pb-5 md:mx-3 xl:text-4xl xl:leading-[3.5rem]'>Meet Multi-Talented people who are passionate <br className="hidden md:inline" /> about their craft</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {DataTeam.map((team) => {
            return (
              <div className='pb-10'>
                <div>
                  <img
                    src={team.img}
                    alt=""
                    className="object-cover rounded-[15px] w-1/2 h-72 mx-auto"
                  />
                  <h1 className="text-center py-2 text-2xl md:text-xl lg:text-2xl">
                    {team.title}
                  </h1>
                  <h2 className="text-center text-xl md:text-lg lg:text-xl">
                    {team.position}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
