import { AboutTechData } from "./AboutTechData";
import { FaAngleRight } from "react-icons/fa";
import AboutTechList from "./AboutTechList";
import Image from "next/image";
import SelfImage from "/public/images/jh.jpg";

function About() {
  return (
    <section id="about" className="pb-32 lg:pb-64">
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2">
        About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-12 md:col-span-7">
          <p className="text-[#212529] dark:text-[#f8f9fa] md:text-lg mb-5">
            My passion for the web sparked in 2018 when I completed my
            first course with Codecademy Programming with Python. Completing
            that course sparked a passion for learning and growth.
          </p>
          <p className="text-[#212529] dark:text-[#f8f9fa] md:text-lg mb-5">
            I also finished Udacity course Intro to Programming Nanodegree,
            three Udemy courses such as The Web Developer Bootcamp, Build
            Responsive Real-World Websites with HTML and CSS, and Modern React
            with Redux. In the future, I see myself as a full-stack engineer
            supporting clients and building products that will give back to
            communities.
          </p>
          <p className="text-[#212529] dark:text-[#f8f9fa] md:text-lg mb-8">
            Currently, a graduate of General Assembly part-time software
            engineer immersive course, also still expanding my learning and best
            practices. When I am not in class or freelancing, you can find me on
            twitch playing games such as Valorant, League of Legends, or Lost
            Ark. Also a fan of basketball, reading, and working out.
          </p>
          <div className="row-start-2 col-span-10 md:col-span-6 lg:col-span-8">
            <h3 className="text-[#0D4373] dark:text-[#7AB9F0] text-sm mb-2">
              Tech
            </h3>
            <ul className="grid grid-cols-3 mb-10 lg:mb-0">
              {AboutTechData.map((item) => {
                return (
                  <AboutTechList
                    key={item.id}
                    icon={<FaAngleRight />}
                    tech={item.tech}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <Image
          className="col-span-5 mx-auto"
          src={SelfImage}
          alt="Jerome Haynes"
          height={400}
          priority
        />
      </div>
    </section>
  );
}

export default About;
