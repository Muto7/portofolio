import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    // window.onscroll code
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Hamburger code
    const hamburger = document.querySelector("#hamburger");
    const navmenu = document.querySelector("#nav-menu");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navmenu.classList.toggle("hidden");
    });

    return () => {
      // Clear the event listener when the component unmounts
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="sm:px-9 px-0">
              <a
                href="#"
                className="font-bold text-lg block py-6 px-5 sm:py-3 sm:px-2"
              >
                MUTO
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="/"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about "
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#Skill"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      Skill
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#Proyek"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      Proyek
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#Hubungi"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
