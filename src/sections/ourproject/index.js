import React, { useState } from 'react';
import projects from '../../static/Data/OurProject'

const OurProjects = () => {
    const [brand, setBrand] = useState('Voss')

    const SeletctedBrand = (e) => {
        console.log(e.target.name);
        e.preventDefault();
        setBrand(e.target.name)
    }
    return (
        <section className='chineseBlackBg' id='ourprojects'>
            <div className=''>
                <div className='pl-5'>
                    <h1 className='White xl:text-3xl'>Projects</h1>
                    {
                        projects.map((brandProject) => (
                            <React.Fragment key={brandProject.id}>
                                <ul key={brandProject.id}>
                                    <li
                                        className={`White py-5 xl:text-3xl ${brand === brandProject.title && 'active'}`}
                                        name={brandProject.title}
                                        onClick={SeletctedBrand}
                                    >
                                        {brandProject.title}
                                        <a href='/' className='group Rajah transition-all duration-300 ease-in-out'>
                                            <span className='xl:text-lg font-light block bg-left-bottom bg-gradient-to-r from-amber-700 to-amber-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:15%_2px] transition-all duration-500 ease-out'>
                                                {brandProject.SubTitle}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                {brand === brandProject.title && (
                                    <div>
                                        <img src={brandProject.img} alt='' />
                                    </div>
                                )}
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurProjects;