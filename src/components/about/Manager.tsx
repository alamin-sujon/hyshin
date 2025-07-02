import React from 'react'
import img1 from '@/assets/about/ma1.jpg'
import img2 from '@/assets/about/ma2.jpg'
import img3 from '@/assets/about/ma3.jpg'
import Image from 'next/image'
export default function Manager() {
    return (
        <div>
            <div className="bg-[#3399CC] mb-16 py-16 text-center shadow-md">
                <h2 className="text-3xl font-bold text-white tracking-wide">
                    A Note from SUNG KUNG TSAO                </h2>
            </div>
            <div className='max-w-6xl  mx-auto'>

                <div className='grid grid-cols-2 mb-24'>
                    <div className=' max-w-xl  relative   top-12 left-16 bg-white shadow-md p-8 shadow-black/60'>
                        <h1 className='text-2xl font-medium mb-5'>Our employees, their families, and our global partners depend on us to weave a brighter future.</h1>

                        <p>Since 2008, Hun Hsin Textile has been a leading nylon yarn exporter, built on trust, innovation, and commitment. From Taiwan to the world, our 400+ employees deliver exceptional Nylon, Recycled, and Feather Yarns. We&apos;re crafting the foundation for global garments, championing sustainability and integrity. Our dedication to our team ensures consistent quality and reliable service. Join us in weaving a vibrant, sustainable textile future.</p>
                    </div>
                    <div className='  bg-green-600'>
                        <Image src={img1} alt="manager" className='h-full w-full object-cover' width={500} height={500} />
                    </div>
                </div>
                <div className='grid grid-cols-2  '>
                    <div className='  '>
                        <Image src={img2} alt="manager" className='h-full w-full object-cover' width={500} height={500} />
                    </div>
                    <div className=' relative right-16 top-12 '>
                        <Image src={img3} alt="manager" className='h-full w-full object-cover' width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}
