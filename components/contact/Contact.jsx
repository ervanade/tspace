import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section
    className="py-12 md:py-16 xl:py-20 relative scroll-mt-12 bg-[#E9E9E9]"
    id="contact"
  >
    <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">

      <div className="w-full justify-start items-center mt-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
        <div className="order-first lg:order-last relative mx-auto lg:mr-0 w-full h-full rounded-3xl lg:px-4 overflow-hidden">
          <Image
            src="/assets/tspace_building.png"
            alt="about Us image"
            layout="responsive"
            width={960} // Set the actual width of the image
            height={510} // Set the actual height of the image
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
          <div className="w-full flex-col justify-start lg:items-start items-center flex">
            <h2 className="!text-textDark header-title">Rent T-Space Today!</h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
            Looking to be part of a vibrant community? Whether you’re interested in events, wellness, art, or renting space, we’d love to connect with you.{" "}
            </p>

          </div>

          <div className="flex items-center gap-2">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Contact
