import React from 'react'
import latestWork from '../../static/Data/LatestWork'
import './latestwork.css'

const LatestWork = () => {
    return (
        <section className='GunMetalBg h-full' id='latestwork'>
            <div>
                <div className='flex items-center justify-between mx-5 pb-10 pt-5'>
                    <h1 className='White text-3xl'>Our Latest Work</h1>
                    <img src="/media/icon/showAll.svg" alt="" />
                </div>

                <div className='grid grid-cols-1 justify-items-center'>
                    {
                        latestWork.map((cards) => {
                            return (
                                <div className='card chineseBlackBg mb-5 flex flex-col md:flex-row items-center mx-5 xl:w-3/5'> {/* using css for this cardContainer to reverse the image with the text */}
                                    <div className='mx-5 pt-5 pb-5'>
                                        <h1 className='White text-xl md:text-3xl mb-5'>{cards.title}</h1>
                                        <p className='White text-lg'>{cards.description}</p>
                                        <div className='flex items-center gap-3 pt-5'>
                                            <h1 className='White'>See Project</h1>
                                            <img src={cards.icon} alt="" />
                                        </div>
                                    </div>
                                    <img className='object-cover p-2 md:w-1/2' src={cards.img} alt="" />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default LatestWork