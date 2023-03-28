import Nav from "../../components/nav";

const Banner = () => {
    return (
        <section className='chineseBlackBg h-full' id='banner'>
            <Nav />
            <div className="flex flex-col items-center justify-around md:flex-row">
                <div className="text-center pt-10 mx-5 md:text-left">
                    <h1 className="White text-2xl md:text-3xl md:leading-[2rem] lg:text-4xl">Transform your online image <br className="hidden md:inline" /> with a professional website</h1>
                    <h2 className="White text-xl pt-4 pb-5 md:text-xl lg:text-2xl">Get ahead of the competition <br /> with a custom-built website</h2>
                    <button className="RajahBg w-1/2 p-5 mb-5 rounded-[15px] md:w-1/2 xl:w-1/5">Discover</button>
                </div>
                <div>
                    <img className="w-2/3 object-cover mx-auto md:w-full lg: xl:w-[70%] 2xl:w-full" src="/media/illustrator/laptop and charts (2).svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner;