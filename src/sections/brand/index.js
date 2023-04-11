import React from 'react'
import Nav from '../../components/nav';

const Brand = () => {
    return (
        <section className='RaisinBlackBg h-screen' id='brand'>
            <Nav />
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='relative py-10 md:ml-52'>
                    <img src="/media/images/branding.svg" className='hidden md:block absolute xl:top-[10%]' alt="B.svg" />
                    <h1 className='text-center text-3xl text-white font-extrabold md:absolute xl:top-[35%] xl:text-[10rem]'>
                        BRAND
                        <span className='GunMetal'>ING</span>
                    </h1>
                </div>
                <div className='flex flex-wrap max-sm:flex-col-reverse md:flex-col'>
                    <div className='flex flex-col md:flex-row'>
                        <img src="/media/images/branding-img1 (1).png" className='object-cover md:w-1/2' alt="" />
                        <img src="/media/images/branding-img2 (1).png" className='object-cover md:w-1/2' alt="" />
                    </div>
                    <div className='GunMetalBg py-14'>
                        <p className='mx-2 text-white md:w-10/12 md:text-2xl'>
                            We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
                        </p>
                        <div className='flex pt-3 xl:justify-end gap-3 xl:pr-10'>
                            <img src="/media/icon/arrow.svg" className='rotate-90' alt="" />
                            <h1 className='White font-bold xl:rotate-90'>Scroll</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand;