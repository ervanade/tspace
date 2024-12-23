import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaHome, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'

const Footer = () => {
    const data = {
        facebook: "",
        instagram: "",
        twitter: "",
        tiktok: "",
        tokopedia: "",
        shopee: ""
    }
  return (
    <div className='footer'>
    <section className="footer bg-[#1B1D1C] text-white/80 ">
        <div
            className="container mx-auto max-w-[1200px] px-8  py-12 space-x-3 overflow-hidden"
        >
            <div className="flex justify-around gap-7 flex-col lg:flex-row">

                <div className="center flex-[2_2_0%] space-y-4">
                    <ul className="space-y-4">
                    <a href="#hero" className=''>
              {/* <p className="font-bebas text-[40px] text-white">T-SPACE</p> */}
              <Image
                src="/logo_tspace_white.png"
                alt="Logo TSpace"
                width={70}
                height={70}
                className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px]"
              />
            </a>
                        <li className='flex items-center gap-2'>
                           <FaHome size={24} className='!text-2xl'/>
                           <span className='text-sm'>T Space Bintaro 9, Jl. Jombang Raya No.32, Parigi, Jombang, Kota Tangerang Selatan, Banten 15229</span>
                        </li>
                        <li className='flex items-center gap-2'>
                           <FaPhoneAlt />
                           <span className='text-sm'>08111 3307 692</span>
                        </li>
                        <li className='flex items-center gap-2'>
                           <FaHome />
                           <span className='text-sm'>tspace@email.com</span>
                        </li>
                        
                    </ul>
                </div>
                <div className="center flex-1 space-y-4">
                    <ul className="space-y-4 lg:pt-8">
                    <li>
                            <Link href="/" className="text-sm font-semibold hover:text-white">HOME</Link>
                        </li>
                        <li><Link href="/tvs/all-tvs?size=all" className="text-sm font-semibold hover:text-white">RANGE SPACE</Link></li>
                        <li><Link href="/support" className="text-sm font-semibold hover:text-white">BEYOUTIFUL</Link></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://tcc.toshiba.co.id/ticket/request-ticket" className="text-sm font-semibold hover:text-white">EVENT</a></li>

                    </ul>
                </div>
                <div className="center flex-1 space-y-4">
                    <ul className="space-y-4 lg:pt-8">
                        <li>
                            <Link href="/news" className="text-sm font-semibold hover:text-white">GALLERY</Link>
                        </li>
                        <li><Link href="/authorize-service-partners" className="text-sm font-semibold hover:text-white">ARTICLES</Link></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://ewarranty.tvmi.id/" className="text-sm font-semibold hover:text-white">CONTACT</a></li>
                    </ul>
                </div>
                <div className="right flex-1 space-y-4 flex flex-col lg:items-end lg:pt-8">
                    <h2 className="text-white/80 font-bold text-base">
                        SOCIAL MEDIA
                    </h2>
                    <div className="flex items-center gap-4 pb-5 w-max">
                        <a target="_blank" rel="noopener noreferrer" href={data.facebook || "https://facebook.com"} ><Image src="/assets/icon/facebook-icon.png" width={24} height={24} alt='Social Media Icons' /> </a>
                        <a target="_blank" rel="noopener noreferrer" href={data.instagram || "https://instagram.com"} ><Image src="/assets/icon/ig-icon.png" width={24} height={24} alt='Social Media Icons' /> </a>
                        {/* <a target="_blank" rel="noopener noreferrer" href={data.threads || "https://threads.com"} ><Image src="/assets/icon/threads-icon.png" width={24} height={24} alt='Social Media Icons' /> </a>
                        <a target="_blank" rel="noopener noreferrer" href={data.twitter || "https://twitter.com"} ><Image src="/assets/icon/x-icon.png" width={24} height={24} alt='Social Media Icons' /> </a> */}
                        <a target="_blank" rel="noopener noreferrer" href={data.tiktok || "https://tiktok.com"} ><Image src="/assets/icon/tiktok-icon.png" width={24} height={24} alt='Social Media Icons' /> </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>
  )
}

export default Footer
