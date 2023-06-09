import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (

        // check the height on larger screen !!!
        <section className='chineseBlackBg min-h-screen xl:h-[100vh]' id='banner'>
            {/* fix responsive from 1024 px and below */}
            <div className="flex flex-col pt-[6rem] items-center justify-around xl:flex-row lg:pt-0 xl:pt-[5rem]">
                <div className="text-center pt-10 md:pt-20 xl:text-left">
                    <h1 className="White text-2xl md:text-3xl md:leading-[2rem] lg:text-4xl 2xl:text-5xl">Transform your online image <br className="hidden md:inline" /> with a professional website</h1>
                    <h2 className="White text-xl pt-4 pb-5 md:text-xl lg:text-2xl 2xl:text-3xl">Get ahead of the competition <br /> with a custom-built website</h2>
                    <HashLink to="/#service" className='font-semibold' smooth>
                        <button className="RajahBg w-1/2 p-5 mb-5 rounded-[15px] font-medium md:w-1/2 2xl:w-[40%]">
                            Discover
                        </button>
                    </HashLink>
                </div>
                <div>
                    <img className="w-2/3 object-cover mx-auto md:w-2/3 lg:w-3/5 xl:w-[70%] 2xl:w-full" src="/media/illustrator/laptop and charts (2).svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner;
