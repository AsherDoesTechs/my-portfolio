"use client";

// import { usePathname } from "next/navigation";
import Script from "next/script";
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
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      </Head>
      <link
        rel="icon"
        type="image/x-icon"
        href="/img/2Techs.png"
        sizes="100x100"
      />
      <Script src="https://cdn.emailjs.com/dist/email.min.js" defer />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Script src="https://cdn.tailwindcss.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div className="px-4 py-6">
        <div className="min-h-screen bg-black text-white px-4 py-6">
          <div className="container mx-auto grid lg:grid-cols-2 gap-6">
            {/* Left Column (Profile Info) */}
            <div className="relative flex flex-col items-center text-center lg:text-left">
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

              {/* Main Profile Image */}
              <div className="w-64 h-80 bg-gradient-to-b rounded-xl mb-4 shadow-lg mt-12 animate-fade-in flex items-center justify-center">
                <Image
                  src="/img/Asher_Basco.jpg"
                  alt="Asher Basco"
                  width={256}
                  height={320}
                  className="rounded-xl w-64 h-80 object-cover mb-4 shadow-lg mt-12 animate-rise-up animate-delay-1"
                />
              </div>

              {/* Location and Role */}
              <p className="text-sm text-gray-400 mb-1 mt-4">
                <FaMapMarkerAlt className="inline mr-1" /> Laurel, Batangas City
              </p>
              <p className="text-sm text-gray-400 mb-4 mt-1">
                <FaLaptopCode className="inline mr-1" /> I&apos;m a Tech
                Enthusiast.
              </p>

              {/* Description Box */}
              <div className="border border-gray-400 p-4 rounded-lg w-full max-w-sm bg-gray-900">
                <h5 className="text-white text-md font-bold mb-2">
                  Why Front-End Developer?
                </h5>
                <p className="text-sm text-gray-300">
                  The aspects of digital art inspire me to build a whole new
                  world that only I can see. I lived to turn these masterpieces
                  into reality, never thought that website and digital arts can
                  be combined in a whole new level of Artistry.
                </p>
              </div>
            </div>

            {/* Right Column (Intro and Projects) */}
            <section id="home" className="min-h-screen flex flex-col">
              {/* Navigation Buttons */}
              <nav className="mb-4 flex flex-wrap gap-2 items-center justify-between py-2 z-50">
                <div className="flex flex-wrap gap-2">
                  {["HOME", "ABOUT", "TECHSTACK", "CONTACTS"].map(
                    (item, index) => (
                      <button
                        key={item}
                        onClick={() => handleNavClick(item.toLowerCase())}
                        className={`px-4 py-2 rounded-md cursor-pointer hover border transition-all duration-300 animate-fade-in scroll-mt-15 ${
                          activeSection === item.toLowerCase()
                            ? "bg-green-400 text-black border-green-400"
                            : "text-white border-gray-600 hover:border-green-400"
                        }`}
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>

                {/* Download CV Button */}
                <button
                  onClick={downloadCV}
                  className="relative px-4 py-2 text-green-400 cursor-pointer hover font-semibold rounded-md border-2 border-green-400 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white group animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaDownload className="inline mr-1" /> Download CV
                </button>
              </nav>

              {/* Hero Text */}
              <h1 className="text-4xl font-bold mb-2 animate-fade-in">
                Hi! I&apos;m ASHER BASCO
              </h1>
              <p className="text-xl text-gray-300 mb-6 animate-fade-in">
                I&apos;m a Front-end Developer Focused on building an
                interactive and functional website that suits your needs.
              </p>

              {/* Projects */}
              <div className="grid md:grid-cols-2 gap-4 bg-gray-900 p-3 rounded-lg border border-gray-600 relative animate-fade-in">
                <div className="col-span-full flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">PROJECTS</h2>
                </div>

                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <strong className="mr-2">{project.name}</strong>
                        <IconComponent className="text-green-400" />
                      </div>
                      <p className="text-sm">
                        Visit Here {">"}
                        {">"}
                        {">"}{" "}
                        <a
                          href={project.url}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {project.url}
                        </a>
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* ABOUT Section */}
          <section
            id="about"
            className="mt-20 text-white bg-gray-900 p-4 rounded-lg border border-gray-600"
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <p className="text-gray-300 mb-4">
                    I&apos;m Asher Basco, a passionate Front-End Developer based
                    in Laurel, Batangas. I blend creativity and technology to
                    build elegant, user-friendly web interfaces.
                  </p>
                  <p className="text-gray-300">
                    My journey began with a love for digital art and evolved
                    into web development. Now, I focus on creating responsive,
                    dynamic websites that reflect modern design principles and
                    user-first thinking.
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <h4 className="text-lg font-semibold mb-2">Quick Facts</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                    <li>
                      🎓 Studying Bachelor of Science in Information Technology
                      at Batangas State University - JPLPC Malvar Campus
                    </li>
                    <li>💼 Working on multiple front-end projects</li>
                    <li>🎨 Enjoys digital arts and UI prototyping</li>
                    <li>🚀 Aiming to become a Full-Stack Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TECH STACK Section */}
          <section id="techstack" className="mt-20 text-white">
            <div className="container mx-auto bg-gray-900 p-4 rounded-lg border border-gray-600">
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>

              {/* Frontend */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
                  <div className="group cursor-pointer">
                    <FaHtml5 className="text-orange-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">HTML5</p>
                  </div>
                  <div className="group cursor-pointer">
                    <SiOpenjdk className="text-red-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Java</p>
                  </div>
                  <div className="group cursor-pointer">
                    <FaCss3Alt className="text-blue-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">CSS3</p>
                  </div>
                  <div className="group cursor-pointer">
                    <FaJs className="text-yellow-400 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">JavaScript</p>
                  </div>
                  <div className="group cursor-pointer">
                    <FaBootstrap className="text-purple-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Bootstrap</p>
                  </div>
                  <div className="group cursor-pointer">
                    <SiTailwindcss className="text-cyan-400 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Tailwind CSS</p>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  Backend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                  <div className="group cursor-pointer">
                    <SiNodedotjs className="text-green-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Node JS</p>
                  </div>
                  <div className="group cursor-pointer">
                    <SiExpress className="text-gray-400 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Express JS</p>
                  </div>
                  <div className="group cursor-pointer">
                    <SiMysql className="text-blue-600 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">MySQL</p>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                  <div className="group cursor-pointer">
                    <FaGitAlt className="text-red-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Git</p>
                  </div>
                  <div className="group cursor-pointer">
                    <FaGithub className="text-gray-400 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">GitHub</p>
                  </div>
                  <div className="group flex flex-col items-center cursor-pointer">
                    <Image
                      src="https://code.visualstudio.com/assets/favicon.ico"
                      alt="VS Code"
                      width={32}
                      height={32}
                      className="transition-transform duration-300 group-hover:-translate-y-2"
                    />
                    <p className="mt-2 text-sm text-white">VS Code</p>
                  </div>
                  <div className="group cursor-pointer">
                    <FaDiscord className="text-indigo-500 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Discord</p>
                  </div>
                </div>
              </div>

              {/* Design */}
              <div>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                  Design
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                  <div className="group cursor-pointer">
                    <FaFigma className="text-pink-400 text-4xl mx-auto transition-transform duration-300 group-hover:-translate-y-2" />
                    <p className="mt-2 text-sm">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT Section */}
          <section
            id="contacts"
            className="mt-20 text-white bg-gray-900 p-4 rounded-lg border border-gray-600"
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 md:grid-cols-2"
              >
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:border-green-400 focus:outline-none transition-colors"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:border-green-400 focus:outline-none transition-colors"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="md:col-span-2 p-3 rounded bg-gray-800 border border-gray-600 text-white focus:border-green-400 focus:outline-none transition-colors"
                  rows={5}
                />
                <button
                  type="submit"
                  className="md:col-span-2 bg-green-400 text-black cursor-pointer hover font-semibold py-2 rounded hover:bg-green-500 transition-all duration-300 hover:shadow-lg"
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

              <div className="mt-6">
                <p className="text-sm text-gray-400">Or reach out on:</p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.facebook.com/DayDreameeerrr"
                    className="text-blue-500 hover:text-blue-400 text-xl transition-colors"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/asher-basco-370bb828a/"
                    className="text-sky-400 hover:text-sky-300 text-xl transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/_devasher_/"
                    className="text-pink-500 hover:text-pink-400 text-xl transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://github.com/AsherDoesTechs"
                    className="text-gray-300 hover:text-gray-100 text-xl transition-colors"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-500 font-semibold">
                © 2025 Asher Basco. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
