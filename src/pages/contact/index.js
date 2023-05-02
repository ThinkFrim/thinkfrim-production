import Nav from "../../components/nav";
import './contact.css'
const Contact = () => {
    return (
        <div className="min-h-screen xl:h-screen">
            <Nav />
            <div className="flex flex-col items-center justify-center xl:flex-row xl:gap-[13%]">
                <form className="grid grid-cols-2 gap-4 m-auto pt-[5rem] xl:m-0 max-w-xl lg:w-8/12 lg:pt-[3rem]">
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-black text-[45px] font-medium">Get In <span className="Rajah font-semibold">Touch</span></h1>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2">

                        <input type="text" required name="FullName" className="placeholder-gray-600 border-b-[2px] border-gray-500 text-black outline-none transition-colors duration-300 focus:border-blue-400 p-3 md:text-xl w-full" placeholder="FullName" />
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <input type="text" required name="email" className=" placeholder-gray-600  border-b-[2px] border-gray-500 outline-none transition-colors duration-300 focus:border-blue-400 text-black p-3 md:text-xl w-full" placeholder="example@gmail.com" />
                    </div>

                    <div className="col-span-2 lg:col-span-2">

                        <input type="tel" required name="PhoneNumber" className=" placeholder-gray-600 border-b-[2px] border-gray-500 outline-none transition-colors duration-300 focus:border-blue-400 text-black  p-3 md:text-xl w-full" placeholder="PhoneNumber (+961)" />
                    </div>

                    <div className="col-span-2 lg:col-span-2">
                        <input type="text" required name="Budget" className=" placeholder-gray-600 border-b-[2px] border-gray-500 outline-none transition-colors duration-300 focus:border-blue-400 text-black  p-3 md:text-xl w-full" placeholder="Budget (250$)" />
                    </div>

                    <div className="col-span-2">
                        <h1 className='text-white lg:text-2xl pb-1'>Message</h1>
                        <textarea cols="30" rows="8" required name="Message" className=" placeholder-gray-600 border-b-[2px] border-gray-500 outline-none transition-colors duration-300 focus:border-blue-400 text-black  p-3 md:text-xl w-full" placeholder="Message"></textarea>
                    </div>

                    <div class="col-span-2 text-right">
                        <button className="send-btn">
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