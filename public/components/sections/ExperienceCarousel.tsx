"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ExperienceCarousel.module.css";

interface Experience {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "On-the-Job Training",
    organization: "Software Engineer Experience",
    date: "2026",
    image: "/img/experience/OJT_Training.jpeg",
    description:
      "Gained practical experience in a professional workplace environment while applying my technical knowledge and developing professional skills.",
  },

  // Add more experiences here.
  // {
  //   id: 2,
  //   title: "Software Development",
  //   organization: "Development Experience",
  //   date: "2025",
  //   image: "/img/experience/Software_Development.jpeg",
  //   description:
  //     "Worked on software development tasks and contributed to application development.",
  // },

  // {
  //   id: 3,
  //   title: "Team Collaboration",
  //   organization: "Work Experience",
  //   date: "2025",
  //   image: "/img/experience/Team_Collaboration.jpeg",
  //   description:
  //     "Collaborated with team members and participated in professional development activities.",
  // },
];

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalExperiences = experiences.length;

  /*
   * Get the correct index while allowing
   * the carousel to loop infinitely.
   */
  const getIndex = (index: number) => {
    return (index + totalExperiences) % totalExperiences;
  };

  /*
   * Automatically move the carousel.
   */
  useEffect(() => {
    if (totalExperiences <= 1 || isFullscreen) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => getIndex(previousIndex + 1));
    }, 5000);

    return () => window.clearInterval(interval);
  }, [totalExperiences, isFullscreen]);

  /*
   * Move carousel to the previous item.
   */
  const goToPrevious = () => {
    setCurrentIndex((previousIndex) => getIndex(previousIndex - 1));
  };

  /*
   * Move carousel to the next item.
   */
  const goToNext = () => {
    setCurrentIndex((previousIndex) => getIndex(previousIndex + 1));
  };

  /*
   * Clicking a side image moves it into the center.
   */
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  /*
   * Keyboard support for fullscreen.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }

      if (!isFullscreen) {
        if (event.key === "ArrowLeft") {
          goToPrevious();
        }

        if (event.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  /*
   * Current center experience.
   */
  const currentExperience = experiences[currentIndex];

  /*
   * If there is only one experience,
   * we only display the center card.
   */
  const visibleExperiences =
    totalExperiences === 1
      ? [
          {
            experience: currentExperience,
            position: "center",
          },
        ]
      : [
          {
            experience: experiences[getIndex(currentIndex - 1)],
            position: "left",
          },
          {
            experience: experiences[currentIndex],
            position: "center",
          },
          {
            experience: experiences[getIndex(currentIndex + 1)],
            position: "right",
          },
        ];

  return (
    <>
      <section className={styles.experienceSection} id="experience">
        <div className={styles.experienceContainer}>
          {/* ================================
              HEADER
          ================================= */}

          <div className={styles.experienceHeader}>
            <span className={styles.experienceLabel}>EXPERIENCE</span>

            <h2>
              My Professional
              <span> Experience</span>
            </h2>

            <p>
              A collection of my professional experiences, OJT, and
              opportunities where I developed my technical and professional
              skills.
            </p>
          </div>

          {/* ================================
              CAROUSEL
          ================================= */}

          <div className={styles.carouselWrapper}>
            {/* Previous */}

            {totalExperiences > 1 && (
              <button
                type="button"
                className={`${styles.carouselButton} ${styles.previousButton}`}
                onClick={goToPrevious}
                aria-label="Previous experience"
              >
                <span>←</span>
              </button>
            )}

            {/* Carousel Track */}

            <div className={styles.carouselTrack}>
              {visibleExperiences.map(({ experience, position }) => (
                <article
                  key={`${experience.id}-${position}`}
                  className={`${styles.experienceCard} ${styles[position]}`}
                  onClick={() => {
                    if (position === "center") {
                      setIsFullscreen(true);
                    } else {
                      const clickedIndex = experiences.findIndex(
                        (item) => item.id === experience.id,
                      );

                      goToSlide(clickedIndex);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();

                      if (position === "center") {
                        setIsFullscreen(true);
                      } else {
                        const clickedIndex = experiences.findIndex(
                          (item) => item.id === experience.id,
                        );

                        goToSlide(clickedIndex);
                      }
                    }
                  }}
                  aria-label={
                    position === "center"
                      ? `View ${experience.title} fullscreen`
                      : `Move ${experience.title} to center`
                  }
                >
                  {/* Image */}

                  <div className={styles.imageWrapper}>
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      sizes="(max-width: 700px) 85vw, 650px"
                      className={styles.experienceImage}
                      priority={position === "center"}
                    />

                    {/* Center Image Overlay */}

                    {position === "center" && (
                      <div className={styles.imageHint}>
                        <span>⛶</span>
                        <span>Click to view</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}

                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span>{experience.organization}</span>

                      <span aria-hidden="true">•</span>

                      <span>{experience.date}</span>
                    </div>

                    <h3>{experience.title}</h3>

                    <p>{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Next */}

            {totalExperiences > 1 && (
              <button
                type="button"
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={goToNext}
                aria-label="Next experience"
              >
                <span>→</span>
              </button>
            )}
          </div>

          {/* ================================
              INDICATORS
          ================================= */}

          {totalExperiences > 1 && (
            <div className={styles.indicators}>
              {experiences.map((experience, index) => (
                <button
                  type="button"
                  key={experience.id}
                  className={`${styles.indicator} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Show ${experience.title}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                />
              ))}
            </div>
          )}

          {/* ================================
              HELPER TEXT
          ================================= */}

          {totalExperiences > 1 && (
            <div className={styles.carouselHint}>
              <span>←</span>
              <span>Click an image to focus it</span>
              <span>→</span>
            </div>
          )}
        </div>
      </section>

      {/* ================================
          FULLSCREEN IMAGE
      ================================= */}

      {isFullscreen && (
        <div
          className={styles.fullscreenOverlay}
          onClick={() => setIsFullscreen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={currentExperience.title}
        >
          {/* Close */}

          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen image"
          >
            ×
          </button>

          {/* Fullscreen Image */}

          <div
            className={styles.fullscreenImageWrapper}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={currentExperience.image}
              alt={currentExperience.title}
              fill
              sizes="100vw"
              className={styles.fullscreenImage}
              priority
            />
          </div>

          {/* Fullscreen Caption */}

          <div className={styles.fullscreenCaption}>
            <h3>{currentExperience.title}</h3>

            <p>
              {currentExperience.organization} • {currentExperience.date}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
