import React from 'react'
import latestWork from '../../static/Data/LatestWork'

const LatestWork = () => {
    return (
        <section className='GunMetalBg h-full' id='latestwork'>
            <div>
                <div className='flex items-center justify-between mx-5 pb-5 pt-5'>
                    <h1 className='White text-2xl'>Our Latest Work</h1>
                    <img src="/media/icon/showAll.svg" alt="" />
                </div>
                <div className='grid grid-cols-1'>
                    {
                        latestWork.map((cards) => {
                            return (
                                <div className='chineseBlackBg mb-5 flex flex-col md:flex-row items-center mx-5'>
                                    <div className='mx-5 pt-2 pb-2'>
                                        <h1 className='White text-xl pb-3'>{cards.title}</h1>
                                        <p className='White text-lg'>{cards.description}</p>
                                        <div className='flex items-center gap-3 pt-5'>
                                            <h1 className='White'>See Project</h1>
                                            <img src={cards.icon} alt="" />
                                        </div>
                                    </div>
                                    <img className='object-cover' src={cards.img} alt="" />
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