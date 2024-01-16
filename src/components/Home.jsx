import "./animation.css";

const PDF_FILE_URL =
  "https://muto-portofolio.vercel.app/CV-Muchamad Supriyanto-update.pdf";

export const Home = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.click();
    aTag.remove();
  };
  return (
    <div>
      <section
        id="Home"
        className="pt-20 w-full xl:h-screen md:h-screen sm:h-screen mx-auto items-center sticky bg-custom-primary "
      >
        <div className="container mx-auto items-center justify-center font-poppins">
          <div className="grid xl:grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-1 items-center  px-3">
            <div className="flex flex-col">
              <div className="w-full">
                <h1 className="lg:text-4xl font-bold pt-24 md:text-2xl hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer">
                  HI, I’m Muchamad Supriyanto muto
                </h1>
              </div>
              <div className="lg:text-2xl font-semibold md:text-xl pt-4 hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer ">
                <h2>Programmer Web Developer</h2>
              </div>
              <div>
                <p className="font-semibold pt-4 hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer">
                  I am from Indonesia, I have frash graduate,I have just
                  graduated, I am studying at Pamulang University, I also often
                  do freelance work for my living expenses, come work with me.
                </p>
              </div>
              <div className="flex xl:flex-col sm:flex">
                <div className="pt-16">
                  <button className="bg-custom-thrid p-4 rounded-md transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <a href="https://www.linkedin.com/in/mucamad-supriyanto-965946226/">
                      <div className="sm:flex flex-none">
                        <img
                          src="/assets/mail.svg"
                          alt="button"
                          className="mr-2"
                        />
                        <p className="">Here me</p>
                      </div>
                    </a>
                  </button>
                </div>
                <div className="pt-16">
                  <button
                    className="flex p-4 hover:text-custom-thrid transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                    onClick={() => {
                      downloadFileAtURL(PDF_FILE_URL);
                    }}
                  >
                    <img
                      src="/assets/download.svg"
                      alt="button"
                      className="mr-6 animate-bounce "
                    />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="relative sm:place-content-center">
              <div className=" w-80 h-80 absolute -z-10 mx-auto inset-x-16 inset-y-2 md:inset-x-8 md:inset-y-1 sm:inset-x-4 sm:inset-y-1 animate-spin-slow sm:animate-spin-slow md:animate-spin-slow">
                <img id="clock" src="/assets/circle-notched.svg" alt="plane" />
              </div>
              <div className="max-w-lg align-top">
                <img
                  src="/assets/Profil.svg"
                  alt="profile"
                  className="transform-gpu transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
