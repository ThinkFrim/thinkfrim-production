import React from 'react'

const Footer = () => {
  return (
    <footer className='chineseBlackBg h-full' id='footer'>
      <div>
        <div className='border-t-[1px] border-white'>
          <ul className='flex justify-center gap-5 pt-5'>
            <li className='White text-sm'>&#169;{new Date().getFullYear()} ThinkFrim</li>
            <li className='White text-sm'>Privacy Policy</li>
            <li className='White text-sm'>Terms & Condition</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer