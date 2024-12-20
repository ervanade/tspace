import Image from "next/image";
import React from "react";

const Tenants = () => {
  return (
    <section
      className="py-12 md:py-16 xl:py-20 relative scroll-mt-12"
      id="our-tenant"
    >
      <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="mb-16">
          <h1 className="header-title !text-textDark">Our Tenant</h1>
          <p className="sub-title">
            Discover a tenants to create, connect, and collaborate in the heart
            of Bintaro.
          </p>
        </div>
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative w-2/3 lg:w-4/5 h-full rounded-3xl lg:px-4 overflow-hidden mx-auto lg:ml-0">
            <Image
              src="/assets/elprofesor.png"
              alt="about Us image"
              layout="responsive"
              width={388} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">El Professor</h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Chef Andrea Peresthu menghadirkan berbagai menu yang bervariasi
                mulai dari T-Bone Steaks, Txuleton Spanish Tomahawk, Jurgen
                Rosemann Wagyu Schnitzel, hingga Smoked Wagyu Brisket Sliders.{" "}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              <Image
                src="/elprofessor_logo.svg"
                alt="Logo Beyoutiful"
                width={120}
                height={80}
                className="mt-4"
              />
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full justify-start items-center mt-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="order-first lg:order-last relative mx-auto lg:mr-0 w-2/3 lg:w-4/5 h-full rounded-3xl lg:px-4 overflow-hidden">
            <Image
              src="/assets/rejuve.png"
              alt="about Us image"
              layout="responsive"
              width={388} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">Re Juve</h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Chef Andrea Peresthu menghadirkan berbagai menu yang bervariasi
                mulai dari T-Bone Steaks, Txuleton Spanish Tomahawk, Jurgen
                Rosemann Wagyu Schnitzel, hingga Smoked Wagyu Brisket Sliders.{" "}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              <Image
                src="/rejuve_logo.svg"
                alt="Logo Rejuve"
                width={120}
                height={80}
                className="mt-4"
              />
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full justify-start items-center mt-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative mx-auto lg:ml-0 w-2/3 lg:w-4/5 h-full rounded-3xl lg:px-4 overflow-hidden">
            <Image
              src="/assets/dental.png"
              alt="about Us image"
              layout="responsive"
              width={388} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">Dental Clinic</h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Dental Beyoutiful Clinic adalah klinik gigi modern di Bintaro
                yang menawarkan berbagai perawatan gigi berkualitas. Dengan tim
                dokter gigi yang berpengalaman dan teknologi terbaru, kami
                berkomitmen memberikan senyum terbaik untuk Anda.{" "}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              <Image
                src="/beyoutiful_white.svg"
                alt="Logo Beyoutiful"
                width={183}
                height={48}
                className="mt-4"
              />
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenants;
