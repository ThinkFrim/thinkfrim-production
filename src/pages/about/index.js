import React from 'react'
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const About = () => {
    return (
        <div className='chineseBlackBg min-h-screen'>
            <Nav />
            <div className='xl:mb-[20rem] xl:mt-[5rem] pt-[10rem]'>
                <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-start lg:gap-[5rem] xl:gap-[20rem]">
                    <div class="relative pb-5">
                        <img src="/media/illustrator/dotts.svg" class="hidden lg:block object-cover xl:max-w-full" alt="" />
                        <div class="lg:absolute lg:inset-0">
                            <h1 class="text-white text-[5rem] lg:text-[7rem] xl:text-[10rem] font-bold uppercase">About</h1>
                        </div>
                    </div>

                    <div className="mb-[22rem] flex flex-col justify-center text-center lg:text-left xl:text-left md:mb-[20rem] sm:mb-[22rem]">
                        <p className="text-white text-[15px] sm:text-[20px] md:text-[30px] w-full lg:text-[1.5rem] xl:text-[2rem] break-word  mt-4 xl:leading-[3rem]">
                            ThinkFrim Agency is a premium design agency. <br />
                            We utilize technology and an unmatched , <br />
                            work ethic to elevate your brand through <br />
                            the web channel.
                        </p>

                        <p class="text-white text-[15.5px] sm:text-[19px] md:text-[25px] lg:text-[20px] xl:text-[1.5rem] mt-3 font-light xl:leading-[2rem]">
                            We're based out of Beirut, Lebanon with a<br />
                            consultative & digital production presence<br />
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