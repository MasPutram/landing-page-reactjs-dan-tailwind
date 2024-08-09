import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const clicky = () => {
    setShow(!show);
    // console.log(show);
  };
  let setActive = show ? "right-0" : "-right-full";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let menuActive = scroll ? "py-5 bg-amber-600" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${menuActive}`}>
      <div className="container mx-auto px-5">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold">Wayang Kulit</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:translate-y-0 md:bg-transparent md:text-black md:h-auto md:w-auto md:p-0 md:m-0 gap-8 fixed md:transition-none ${setActive}  top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded-lg-shadow shadow-slate-300 bg-orange-800 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line md:hidden block text-xl"></i>
              <Link
                activeClass="active"
                className="font-medium opacity-75"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-2-line md:hidden block text-xl"></i>
              <Link
                activeClass="active"
                className="font-medium opacity-75"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-customer-service-2-line md:hidden block text-xl"></i>
              <Link
                activeClass="active"
                className="font-medium opacity-75"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Service
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-folder-image-line md:hidden block text-xl"></i>
              <Link
                activeClass="active"
                className="font-medium opacity-75"
                to="proyek"
                spy={true}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>
          </ul>
          <div className="social flex items-center gap-3">
          <Link
                activeClass="active"
                className=" bg-amber-800 hover:bg-orange-700 rounded-full px-4 py-1 text-white transition-all"
                to="footer"
                spy={true}
                smooth={true}
                duration={500}
              >
                Social Media
              </Link>
            <i
              className="ri-menu-3-line md:hidden block text-3xl"
              onClick={clicky}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
