import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";

interface PortfolioItemProps {
  project: {
    src: string;
    alt: string;
    title: string;
    description: string;
    live?: string;
    github: string;
  };
}

export default function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative overflow-hidden cursor-pointer">
        <Image
          width={1000}
          height={1000}
          src={project.src}
          alt={project.alt}
          className="transition duration-500 ease-in-out transform group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-70 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 p-4">
        <div className="flex flex-col justify-between h-full ">
          <div className="flex gap-3">
            <div className="">
              <a href={project.live}>
                <FaLink />
              </a>
            </div>
            <div>
              <a href={project.github}>
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="text-sm">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
