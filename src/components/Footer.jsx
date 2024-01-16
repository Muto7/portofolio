export const Footer = () => {
  return (
    <div>
      <section
        id="Hubungi"
        className="pt-28 sm:pt-40 w-full  mx-auto items-center sticky bg-custom-primary font-poppins"
      >
        <div className="sm:text-5xl text-5xl sm:font-semibold font-semibold px-11 ">
          Muto
        </div>
        <div className="flex flex-warp">
          <div className="px-11 py-5 sm:px-11 sm:py-5">
            <h1 className="text-2xl sm:text-2xl">Hubungi Kami</h1>
            <p>msupri29@gmail.com</p>
            <p>JL.Pelumpang Semper</p>
            <p>Jakarta Utara</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-20 sm:px-28">
            <picture>
              <img
                src="../assets/footer/Vector.png"
                className="h-10 w-10 sm:h-20 sm:w-20 transition duration-300 ease-in-out transform hover:scale-110 hover:brightness-125"
              />
            </picture>
            <picture>
              <img
                src="../../src/assets/footer/Vector (1).png"
                className="h-10 w-10 sm:h-20 sm:w-20 transition duration-300 ease-in-out transform hover:scale-110 hover:brightness-125 hover:bg-custom-primary"
              />
            </picture>
            <picture>
              <img
                src="../../src/assets/footer/mingcute_linkedin-line.png"
                className="h-10 w-10 sm:h-20 sm:w-20 transition duration-300 ease-in-out transform hover:scale-110 hover:brightness-125"
              />
            </picture>
            <picture>
              <img
                src="../../src/assets/footer/1692007265x-twitter-logo-png.png"
                className="h-10 w-10 sm:h-20 sm:w-20 transition duration-300 ease-in-out transform hover:scale-110 hover:brightness-125"
              />
            </picture>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 grid-cols-2 sm:mt-40">
          <picture className="relative ">
            <img
              src="../../src/assets/footer/Rectangle 11.png"
              className=" absolute inset-y-0 right-0"
            />
          </picture>
        </div>
        <div className="sm:text-sm text-xs mt-40 sm:mt-1 text-center pt-3">
          <p>Copy right &copy; 2024 Muchamad Supriyanto</p>
        </div>
      </section>
    </div>
  );
};
