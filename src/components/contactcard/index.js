import React from 'react'

const ContactCard = () => {
    return (
        <div className='chineseBlackBg h-[10rem] md:h-[15rem] flex flex-col items-center pt-10 md:pt-10'>
            <div className='RajahBg w-[80%] p-5 md:p-10 md:w-[40%] rounded-[15px]' id='contactCard'>
                <div className='flex items-center justify-between md:justify-between'>
                    <h1 className='md:text-2xl'>Do you have a project?</h1>
                    <button className='darkGreenBg White p-3 w-1/3 rounded-[15px] mx-auto md:mx-0'>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;