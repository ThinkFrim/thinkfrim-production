import React from 'react'
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const About = () => {
    return (
        <div className='chineseBlackBg min-h-screen'>
            <Nav />
            <div className='lg:pb-32 lg:pt-20 pb-14'>
                <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:gap-[5rem] xl:gap-[25rem]">
                    <div class="relative pb-5">
                        <img src="/media/illustrator/dotts.svg" class="object-cover w-full" alt="" />
                        <div class="absolute inset-0 z-0">
                            <h1 class="text-white text-[5rem] xl:text-[10rem] font-bold uppercase z-10">About</h1>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <p className="text-white text-[16.5px] lg:text-[1.5rem] xl:text-[2.5rem] mt-4 xl:leading-[3rem]">
                            ThinkFrim Agency is a premium design agency.<br />
                            We utilize technology and an unmatched , <br /> 
                            work ethic to elevate your brand through <br />
                            the web channel.
                        </p>

                        <p class="text-white text-[15.5px] lg:text-[1rem] xl:text-[1.5rem] mt-3 font-light xl:leading-[2rem]">
                            We're based out of Beirut, Lebanon with a<br />
                            consultative & digital production presence
                            across the continental Lebanon.
                        </p>


                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About;   