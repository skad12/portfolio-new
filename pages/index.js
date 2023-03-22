import Head from "next/head";
import Footer from "../components/Footer";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import blog2 from "../public/assets/blog.png";
import dash from "../public/assets/dash.png";
import iflip1 from "../public/assets/iflip1.png";
import weather from "../public/assets/weather.png";
import portfolio from "../public/assets/portfolio.png";
import aibra from "../public/assets/aibra.png";
import code1 from "../public/code1.svg";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SKAD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/code1.svg" />
      </Head>
      <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="flex justify-between py-10 mb-12 dark:text-white">
            <div className="text-xl font-burtons flex space-x-3">
              <Image src={code1} width={30} height={30} alt="logo" />
              <h2 className="pt-2">SKAD</h2>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl cursor-pointer "
                />
              </li>

              <Link href="resume.pdf" download>
                <button className="px-4 py-2 ml-8 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500">
                  Resume
                </button>
              </Link>
            </ul>
          </nav>
          <div className="p-10 py-10 text-center">
            <h2 className="py-2 text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
              Olakunle Stephen
            </h2>
            <h3 className="py-2 text-2xl dark:text-white md:text-3xl italic ">
              Developer and Designer.
            </h3>
            <p className=" italic max-w-xl py-5 mx-auto leading-8 text-gray-800 text-md dark:text-gray-200 md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let&apos;s get cracking!
            </p>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400">
              <Link href="https://www.linkedin.com/in/afuwape-stephen-b917211b0/">
                <button>
                  <AiFillTwitterCircle />
                </button>
              </Link>
              <Link href="https://www.linkedin.com/in/afuwape-stephen-b917211b0/">
                <button>
                  <AiFillLinkedin />
                </button>
              </Link>
              <Link href="https://www.linkedin.com/in/afuwape-stephen-b917211b0/">
                <button>
                  <AiFillGithub />
                </button>
              </Link>
            </div>
            <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="py-1 text-5xl dark:text-white ">Services I Offer</h1>
            <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="gap-10 lg:flex">
            <div className="flex-1 p-10 my-10 text-center shadow-xl hover:scale-105 hover:shadow-2xl rounded-xl dark:bg-white">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="pt-8 pb-2 text-xl font-medium ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Illustrator</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Indesign</p>
            </div>
            <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl dark:bg-white">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="pt-8 pb-2 text-lg font-medium ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Tailwind</p>
              <p className="py-1 text-gray-800">Wordpress</p>
              <p className="py-1 text-gray-800">Nextjs</p>
              <p className="py-1 text-gray-800">React Native</p>
              <p className="py-1 text-gray-800">Git</p>
            </div>
            <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl dark:bg-white">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="pt-8 pb-2 text-xl font-medium ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Projects</h4>
              <p className="py-1 text-gray-800">Styling</p>
              <p className="py-1 text-gray-800">Frontend</p>
              <p className="py-1 text-gray-800">Mobile</p>
              <p className="py-1 text-gray-800">Startup</p>
              <p className="py-1 text-gray-800">Open Source</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="py-1 text-5xl dark:text-white font-poppins">
              Portofolio
            </h3>
            <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3 ">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={aibra}
                alt=""
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={blog2}
                alt=""
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={dash}
                alt=""
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={iflip1}
                alt=""
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio}
                alt=""
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={weather}
                alt=""
              />
            </div>
          </div>
          <Link href="https://github.com/skad12">
            <div className="flex justify-center pt-5 text-gray-800 dark:text-white ">
              <button className="items-center w-3/6 h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-gray-800 hover:text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                More Projects on Github
              </button>
            </div>
          </Link>
        </section>
        <Footer />
      </main>
    </div>
  );
}
