"use client";

// import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaLaptopCode,
  FaDownload,
  FaHome,
  FaTasks,
  FaCloudSun,
  FaCoins,
  FaCalculator,
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDiscord,
  FaFigma,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiOpenjdk,
} from "react-icons/si";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in ms)
      once: true, // Animate only once
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Mock projects data
  const projects = [
    {
      name: "Stevenson Inventory System",
      icon: FaHome,
      url: "https://inventorySystem.com",
    },
    { name: "To - Do List", icon: FaTasks, url: "https://To-Do-List.com" },
    {
      name: "Weather Real-Time Update",
      icon: FaCloudSun,
      url: "https://WeatherUpdate.com",
    },
    {
      name: "BioMass Crypto Exchange",
      icon: FaCoins,
      url: "https://BiomassCrypto.com",
    },
    {
      name: "Simple Calculator System",
      icon: FaCalculator,
      url: "https://SimpleCalculator.com",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_90ucj38", // Replace with your actual EmailJS service ID
        "template_9dujls1", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "x-7MFrjK1UL6U2hRz" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setShowModal(true); // ✅ Show success modal
          setFormData({ name: "", email: "", message: "" });

          // Auto-close after 3s
          setTimeout(() => setShowModal(false), 3000);
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  const downloadCV = () => {
    toast.success("CV download started!");

    const link = document.createElement("a");
    link.href = "/doc/Asher_Basco_M_cv.pdf";
    link.download = "Asher M. Basco.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Asher Basco</title>
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/img/2Techs.png"
          sizes="100x100"
        />
      </Head>
      <div className="px-2 py-4 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111]">
        <div className="min-h-screen text-white px-6 py-10 md:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Column (Profile Info) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              {/* Logo in Top Left */}
              <div
                className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r rounded-lg cursor-pointer z-50 flex items-center justify-center text-white font-bold text-lg animate-rise-up animate-delay-1"
                onClick={() => window.location.reload()}
              >
                <Image
                  src="/img/Logo.png"
                  alt="Logo"
                  width={96}
                  height={96}
                  className="absolute top-0 left-0 cursor-pointer z-50"
                  onClick={() => window.location.reload()}
                />
              </div>

              {/* Profile Image with Text Below */}
              <div className="flex flex-col items-center justify-center mt-12">
                {/* Main Profile Image */}
                <div className="w-64 h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg animate-fade-in">
                  <Image
                    src="/img/Asher_Basco.jpg"
                    alt="Asher Basco"
                    width={256}
                    height={320}
                    className="rounded-xl w-64 h-80 object-cover shadow-lg animate-rise-up animate-delay-1"
                    data-aos="zoom-out"
                  />
                </div>

                {/* Location and Role Text */}
                <div
                  className="text-center mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1000" // optional: animation speed in ms
                  data-aos-delay="200" // optional: delay in ms
                >
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-2 mb-1">
                    <FaMapMarkerAlt className="inline" /> Laurel, Batangas City
                  </p>
                  <p className="text-sm text-gray-400 flex items-center justify-center mb-4 gap-2">
                    <FaLaptopCode className="inline" /> I&apos;m a Tech
                    Enthusiast.
                  </p>
                </div>

                {/* Description Box */}
                <div
                  className="top-0 left-0 border border-gray-400 p-4 rounded-lg w-full max-w-sm bg-gray-900 self-start md:ml-0 ml-auto"
                  data-aos="fade-up"
                  data-aos-duration="1000" // optional: animation speed in ms
                  data-aos-delay="200" // optional: delay in ms
                >
                  <h5 className="text-white text-md font-bold mb-2">
                    Why Front-End Developer?
                  </h5>
                  <p className="text-sm text-gray-300">
                    The aspects of digital art inspire me to build a whole new
                    world that only I can see. I lived to turn these
                    masterpieces into reality, never thought that website and
                    digital arts can be combined in a whole new level of
                    Artistry.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Intro and Projects) */}
            <section id="home" className="min-h-screen flex flex-col">
              {/* Only CV Button */}
              <nav className="mb-6 flex justify-end">
                <button
                  onClick={downloadCV}
                  className="px-4 py-2 text-green-400 font-semibold cursor-pointer hover rounded-md border-2 border-green-400 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaDownload className="inline mr-2" /> Download CV
                </button>
              </nav>

              {/* Hero Intro */}
              <div
                className="mb-2 start-flex"
                data-aos="fade-right"
                data-aos-duration="1000" // optional: animation speed in ms
                data-aos-delay="200" // optional: delay in ms
              >
                <h1 className="text-4xl font-bold mb-2">
                  Hi! I&apos;m ASHER BASCO
                </h1>
                <p className="text-xl text-gray-300">
                  I&apos;m a{" "}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 animate-text-glow">
                    Front-End Developer
                  </span>{" "}
                  focused on building interactive and functional websites that
                  suit your needs.
                </p>
              </div>

              {/* Projects Section */}
              <div
                className="bg-gray-900 p-4 rounded-lg border border-gray-600 mt-6 max-w-4xl w-full"
                data-aos="fade-right"
                data-aos-duration="1000" // optional: animation speed in ms
                data-aos-delay="200" // optional: delay in ms
              >
                <h2 className="text-xl font-semibold text-white mb-4 tracking-wide">
                  🚀 Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                      <div
                        key={index}
                        className="bg-gray-800 p-3 rounded-md border border-gray-700 hover:border-green-400 transition-all duration-300 shadow-sm hover:shadow-green-400/20"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="text-green-400 text-base" />
                          <h3 className="text-sm font-semibold text-white">
                            {project.name}
                          </h3>
                        </div>

                        <p className="text-xs text-gray-300 leading-snug">
                          Visit Here{" "}
                          <span className="text-green-400 font-semibold">
                            {">>>"}
                          </span>{" "}
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline transition-colors"
                          >
                            {project.url}
                          </a>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ABOUT Section */}
            <div
              id="about"
              className="mt-5 text-white bg-gray-900 p-4 rounded-lg border border-gray-600"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="max-w-3xl mx-auto flex flex-col gap-6">
                {/* About Description Box */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                  <h4 className="text-md font-bold mb-2 text-white">
                    Who Am I?
                  </h4>
                  <p className="text-gray-300 mb-2">
                    I&apos;m Asher Basco, a passionate Front-End Developer based
                    in Laurel, Batangas. I blend creativity and technology to
                    build elegant, user-friendly web interfaces.
                  </p>
                  <p className="text-white">
                    My journey began with a love for digital art and evolved
                    into web development. Now, I focus on creating responsive,
                    dynamic websites that reflect modern design principles and
                    user-first thinking.
                  </p>
                </div>

                {/* Quick Facts Box */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                  <h4 className="text-md font-bold mb-2 text-white">
                    Quick Facts
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-white space-y-1">
                    <li>
                      🎓 Studying BSIT at Batangas State University - JPLPC
                      Malvar Campus
                    </li>
                    <li>💼 Working on multiple front-end projects</li>
                    <li>🎨 Enjoys digital arts and UI prototyping</li>
                    <li>🚀 Aiming to become a Full-Stack Developer</li>
                  </ul>
                </div>
              </div>
            </div>

            <section id="techstack" className="mt-2 text-white">
              <div
                className="max-w-7xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-600 min-h-[460px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Tech Stack
                </h2>

                {/* Frontend */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">
                    Frontend
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center">
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaHtml5 className="text-orange-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">HTML5</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaCss3Alt className="text-blue-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">CSS3</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaJs className="text-yellow-400 text-3xl mx-auto" />
                      <p className="text-xs mt-1">JavaScript</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaBootstrap className="text-purple-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Bootstrap</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <SiTailwindcss className="text-cyan-400 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Tailwind</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <SiOpenjdk className="text-red-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Java</p>
                    </div>
                  </div>
                </div>

                {/* Backend */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">
                    Backend
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center">
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <SiNodedotjs className="text-green-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Node</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <SiExpress className="text-gray-400 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Express</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <SiMysql className="text-blue-600 text-3xl mx-auto" />
                      <p className="text-xs mt-1">MySQL</p>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">
                    Tools
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center">
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaGitAlt className="text-red-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Git</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaGithub className="text-gray-400 text-3xl mx-auto" />
                      <p className="text-xs mt-1">GitHub</p>
                    </div>
                    <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-125">
                      <Image
                        src="https://code.visualstudio.com/assets/favicon.ico"
                        alt="VS Code"
                        width={28}
                        height={28}
                      />
                      <p className="text-xs mt-1">VS Code</p>
                    </div>
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaDiscord className="text-indigo-500 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Discord</p>
                    </div>
                  </div>
                </div>

                {/* Design */}
                <div>
                  <h3 className="text-sm font-semibold text-green-400 mb-2">
                    Design
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center">
                    <div className="group transition-transform duration-300 hover:scale-125">
                      <FaFigma className="text-pink-400 text-3xl mx-auto" />
                      <p className="text-xs mt-1">Figma</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section id="contacts" className="mt-20 text-white">
          <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-600 neon-glow-pulse ">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                required
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:border-green-400 focus:outline-none transition-colors w-full"
              />
              <input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:border-green-400 focus:outline-none transition-colors w-full"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="md:col-span-2 p-3 rounded bg-gray-800 border border-gray-600 text-white focus:border-green-400 focus:outline-none transition-colors w-full"
                rows={5}
              />
              <button
                type="submit"
                className="md:col-span-2 bg-green-400 cursor-pointer hover text-black font-semibold py-3 rounded hover:bg-green-500 transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>

            {showModal && (
              <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
                  ✅ Message sent! I’ll get back to you shortly.
                </div>
              </div>
            )}

            {/* Social Links */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">Or reach out on:</p>
              <div className="flex justify-center space-x-6 mt-3">
                <a
                  href="https://www.facebook.com/DayDreameeerrr"
                  className="text-blue-500 hover:text-blue-400 text-2xl transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/asher-basco-370bb828a/"
                  className="text-sky-400 hover:text-sky-300 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/_devasher_/"
                  className="text-pink-500 hover:text-pink-400 text-2xl transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/AsherDoesTechs"
                  className="text-gray-300 hover:text-gray-100 text-2xl transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-gray-500 font-semibold">
              © 2025 Asher Basco. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
