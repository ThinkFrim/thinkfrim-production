import React from 'react'

const ContactCard = () => {
    return (
        <div class="chineseBlackBg md:h-60 flex flex-col items-center pt-10 md:pt-20">
            <div class="RajahBg w-11/12 mb-10 md:w-9/12 xl:w-4/12 p-5 md:p-10 rounded-lg" id="contactCard">
                <div class="flex md:flex-row items-center justify-between">
                    <h1 class="text-lg md:text-2xl">Do you have a project?</h1>
                    <button class="darkGreenBg text-white p-3 w-2/3 md:w-1/4 rounded-lg mt-4 md:mt-0 md:ml-4">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;