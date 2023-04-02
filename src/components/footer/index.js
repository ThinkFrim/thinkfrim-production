import React from 'react'

const Footer = () => {
  return (
    <footer className='chineseBlackBg h-full' id='footer'>
      <div className='flex flex-col border-t-[1px] border-white xl:flex-row xl:gap-20'>
        <div className='ml-5 pt-5'>
          <img className='w-40' src="/media/logo/ThinkFrimLogo.svg" alt="" />
          <h1 className='White'>{new Date().getFullYear()}&#169;copyright thinkfrim.com All Rights Reserved</h1>
        </div>
        <div className='flex justify-between ml-5 pt-5 mx-10'>
          <ul>
            <h1 className='White text-[2rem] pb-3'>Navigation</h1>
            <li className='White'>Service</li>
            <li className='White'>About</li>
            <li className='White'>Contact</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h1>Social</h1>
          <img src="/media/icon/discord.svg" alt="" />
          <img src="/media/icon/instagram (1).svg" alt="" />
          <img src="/media/icon/github 2.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer