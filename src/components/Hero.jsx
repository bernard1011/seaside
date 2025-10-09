import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        <header className="relative h-full flex flex-col gap-5 xl:gap-12 text-center items-center justify-center text-gray-50 xl:px-10 xl:max-w-[1400px] xl:mx-auto w-full py-4 px-6">
          <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">BEACHFRONT LUXURY ACCOMMODATION</h3>
          <span className="w-full h-0.5 bg-gray-400"></span>
          <h1 className="text-3xl font-extrabold font-dm xl:text-6xl">
            Experience Seaside Tranquility
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            Discover our exclusive collection of luxury beachfront apartments
            and hotel rooms, offering unparalleled comfort and breathtaking sea
            views.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row md:text-lg xl:text-xl 2xl:text-3xl">
            <button className="px-6 py-2 bg-blue-500 rounded-3xl">
              Book Your Stay
            </button>
            <button className="px-6 py-2 backdrop-blur-sm bg-gray-200/30 rounded-3xl border border-gray-400 ">
              Explore Apartments
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <a
              href="#welcome"
              className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </header>
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave delay opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
      </section>
    </>
  );
};

export default Hero;
