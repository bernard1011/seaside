import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Globe } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
        if(window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  useEffect(()=> {
   if(menuOpen) {
    document.body.style.overflow = "hidden"
   } else {
    document.body.style.overflow = "auto"
   }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Apartments", href: "#apartments" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>

      <div
        className={`fixed w-full  z-30 transition-colors  duration-300 ${
          menuOpen
            ? "bg-transparent"
            : `${
                scrolled
                  ? "backdrop-blur-2xl bg-white/75 shadow-md w-full text-black"
                  : "bg-transparent text-gray-100"
              }`
        }`}
      >
        {/* tablet/desktop menu  */}
        <div className="xl:px-10 xl:max-w-[1400px] xl:mx-auto w-full py-4 px-3">
          <div className="flex items-center justify-between md:text-xl xl:text-2xl">
            <div className="flex items-center gap-3 xl:gap-5">
              <Globe /> <p>English</p>
            </div>
            <nav className="hidden md:flex gap-6 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-500 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-3 xl:gap-5">
              <Moon />
              <a
                href="#"
                className="hidden md:inline bg-blue-500 text-gray-100 py-2 px-5 rounded-2xl"
              >
                Book Now
              </a>

              <button
                className="md:hidden focus:outline-none flex flex-col gap-1 w-6 h-6 justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {/* burger icon */}
                <span
                  className={`block w-6 h-[3px] rounded transition-all duration-300 ${scrolled ? "bg-black" : "bg-gray-100"} ${
                    menuOpen ? "rotate-45 translate-y-1.5 !bg-black" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-[3px] rounded transition-all duration-300 ${scrolled ? "bg-black" : "bg-gray-100"} ${
                    menuOpen ? "opacity-0 " : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-[3px]  rounded transition-all duration-300 ${scrolled ? "bg-black" : "bg-gray-100"} ${
                    menuOpen ? "-rotate-45 -translate-y-2 !bg-black" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 z-20 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-black text-2xl hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#" className="bg-blue-400 text-gray-100 py-2 px-5 rounded-2xl">
          Book Now
        </a>
      </div>
    </>
  );
};

export default Navbar;
