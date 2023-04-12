import React from 'react'
import Nav from '../../components/nav';

const Brand = () => {
    return (
        <section className="RaisinBlackBg min-h-screen lg:max-h-full" id="brand">
            <Nav />
            <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
                <div className='xl:relative'>
                    <h1 className='White text-center font-bold text-5xl lg:text-[6rem] xl:text-[10rem] py-20 lg:absolute lg:left-28 lg:top-1/4 z-10'>
                        BRAND
                        <span className='GunMetal z-10'>ING</span>
                    </h1>
                    <img src="/media/logo/branding.svg" className='hidden lg:block lg:absolute lg:left-16 lg:top-1/4 xl:top-[15%] lg:w-1/4 xl:w-[60%]' alt="" />
                </div>
                <div>
                    <div className='flex'>
                        <img src="/media/images/branding-img1 (1).png" className='hidden md:block lg:w-1/2 w-full' alt="" />
                        <img src="/media/images/branding-img2 (1).png" className='hidden md:block lg:w-1/2 w-full' alt="" />
                    </div>
                    <div className='GunMetalBg p-3 lg:py-20'>
                        <p className='p-2 text-xl mx-2 text-white'>
                            We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
                        </p>
                        <div className='flex justify-end'>
                            <img src="/media/icon/arrow.svg" className='rotate-90' alt="" />
                            <h1 className='White font-bold rotate-90'>Scroll</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand;