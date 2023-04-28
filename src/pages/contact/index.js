import Nav from "../../components/nav";
import './contact.css'
const Contact = () => {
    return (
        <div className="chineseBlackBg xl:h-screen">
            <Nav />
            <div className="flex flex-col items-center justify-center">
                <div className="xl:flex xl:justify-center xl:pt-[3rem]">
                    <h1 className="text-white font-medium xl:text-[35px]">Let's Get In Touch</h1>
                </div>
                <form className="grid grid-cols-2 gap-4 m-auto xl:m-0 max-w-xl lg:w-8/12 lg:pt-[5rem]">

                    <div className="col-span-1 lg:col-span-1">
                        <input type="text" required name="FullName" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="FullName" />
                    </div>

                    <div className="col-span-1 lg:col-span-1">
                        <input type="text" required name="email" className="border-solid chineseBlackBg  text-white border-2 p-3 md:text-xl w-full" placeholder="example@gmail.com" />
                    </div>

                    <div className="col-span-2 lg:col-span-2">
                        <input type="tel" required name="PhoneNumber" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="PhoneNumber (+961)" />
                    </div>

                    <div className="col-span-2 lg:col-span-2">
                        <input type="text" required name="PhoneNumber" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="Budget (250$)" />
                    </div>

                    <div className="col-span-2">
                        <h1 className='text-white lg:text-2xl pb-1'>Message</h1>
                        <textarea cols="30" rows="8" required name="Message" className="border-solid chineseBlackBg text-white border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
                    </div>

                    <div class="col-span-2 text-right">
                        <button>
                            <div class="svg-wrapper-1">
                                <div class="svg-wrapper">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;