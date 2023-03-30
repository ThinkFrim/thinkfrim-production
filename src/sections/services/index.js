import React from 'react'
import DataService from '../../static/Data/ServiceData';
const Services = () => {
    return (
        <section className='GunMetalBg ' id='service'>
            <div className='py-5'>
                <div className='text-center'>
                    <h1 className='White text-3xl pb-5'>Services we provide</h1>
                    <p className='White text-xl pb-10'>We're a full-service web agency specializing in custom <br className="hidden md:inline" /> website design, development, maintenance, optimization, and marketing. Our expert team creates beautiful, user-friendly websites that drive results.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4'>
                    {
                        DataService.map((items) => {
                            return (
                                <div className='relative before:bg-black before:bg-opacity-60 before:absolute before:top-[0%] before:w-[100%] before:h-[100%]' key={items.id}>
                                    <div className='flex flex-col absolute top-[15%] bottom-[10%] left-[5%]'>
                                        <h1 className='White text-xl lg:text-2xl pb-2'>{items.number}</h1>
                                        <h1 className='White text-lg lg:text-lg'>{items.title}</h1>
                                    </div>
                                    <div className='absolute top-[40%] left-[6%] md:top-[50%]'>
                                        <img src={items.icon} alt="arrow.svg" />
                                    </div>
                                    <img className='w-full h-full' src={items.img} alt="serviceimg.svg" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;