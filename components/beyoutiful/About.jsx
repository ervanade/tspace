import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
                                                        <section className="py-20 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
      <Image
        src="/assets/about.png"
        alt="about Us image"
        layout="responsive"
        width={569}  // Set the actual width of the image
        height={484}  // Set the actual height of the image
        className="object-cover"
      />
    </div>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-textDark text-4xl font-bold leading-normal lg:text-start text-center">Beyoutiful Aesthetic Center</h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Bedah Plastik, Perawatan Estetika, Bedah Vaskular, Urologi, Ortopedi, Klinik Gigi, Sleep Therapy, Hyperbaric Oxygen Therapy, Slimming & Obesity Centre                        </p>
                    </div>
                    {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

<button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
