import React from 'react'
import Nav from '../../components/nav';

const Brand = () => {
    return (
        <section className='RaisinBlackBg' id='brand'>
            <Nav />
            <div className='grid md:grid-cols-2'>
                <div className='relative py-10 md:ml-52'>
                    <img src="/media/images/branding.svg" alt="B.svg" />
                    <h1 className='absolute text-white font-extrabold md:top-[25%] md:text-[10rem]'>
                        BRAND
                        <span className='GunMetal'>ING</span>
                    </h1>
                </div>
                <div className=''>
                    <div className='flex'>
                        <img src="/media/images/branding-img1 (1).png" className='object-cover md:w-full' alt="" />
                        <img src="/media/images/branding-img2 (1).png" className='object-cover md:w-full' alt="" />
                    </div>
                    <div className='GunMetalBg'>
                        <p className='text-white w-full md:w-1/2 md:text-2xl p-4'>
                            We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand;