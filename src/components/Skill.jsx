export const Skill = () => {
  // const skillIcons = [
  //   {
  //     id: 1,
  //     URL: "../../src/assets/skill/html.svg",
  //   },
  //   {
  //     id: 2,
  //     URL: "../../src/assets/skill/file-type-css (1).svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/javascript-js (1).svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/nodejs-original 1.svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/Group.svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/Group (1).svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/Vector.svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/docker-original-wordmark (1).svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/jenkins (1).svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/tailwind-css (1).svg",
  //   },
  //   {
  //     URL: "../../src/assets/skill/linux (1).svg",
  //   },
  // ];

  // const selectedIcon = skillIcons[3];

  return (
    <div>
      <section
        id="Skill"
        className="pt-28 w-full xl:h-screen md:h-screen sm:h-screen mx-auto items-center sticky bg-custom-primary"
      >
        <div className="lg:text-4xl sm:font-semibold font-semibold text-center underline underline-offset-8 decoration-custom-thrid">
          Skill
        </div>
        <div className="pt-14 flex justify-center container mx-auto flex-wrap gap-6">
          {/* grid */}
          <div className="grid grid-cols-1">
            {/* card */}
            <div className="max-w-md rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer">
              <img src="/assets/skill/html.svg" alt="skill 1" />
            </div>
          </div>
          <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
            <img src="/assets/skill/file-type-css (1).svg" alt="skill 1" />
          </div>
          <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
            <img src="/assets/skill/javascript-js (1).svg" alt="skill 1" />
          </div>
          <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
            <img src="/assets/skill/nodejs-original 1.svg" alt="skill 1" />
          </div>
          <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
            <img src="/assets/skill/tailwind-css (1).svg" alt="skill 1" />
          </div>
          <div>
            <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
              <img src="/assets/skill/Vector.svg" alt="skill 1" />
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
              <img src="/assets/skill/Group.svg" alt="skill 1" />
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
              <img src="/assets/skill/Group (1).svg" alt="skill 1" />
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ">
              <img
                src="/assets/skill/docker-original-wordmark (1).svg"
                alt="skill 1"
              />
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer">
              <img src="/assets/skill/jenkins (1).svg" alt="skill 1" />
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer">
              <img src="/assets/skill/linux (1).svg" alt="skill 1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
