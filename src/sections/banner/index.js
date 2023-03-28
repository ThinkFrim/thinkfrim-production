import Nav from "../../components/nav";

const Banner = () => {
    return (
        <section className='chineseBlackBg h-full' id='banner'>
            <Nav />
            <div className="flex flex-col md:flex-row">
                <div className="text-center pt-10 mx-5">
                    <h1 className="White text-2xl">Transform your online image <br className="hidden md:inline" /> with a professional website</h1>
                    <h2 className="White text-xl pt-4">Get ahead of the competition <br /> with a custom-built website</h2>
                    <button>Discover</button>
                </div>
                <div>
                    <img src="/media/illustrator/laptop and charts (2).svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner;