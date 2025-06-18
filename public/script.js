const e = require("express");

function downloadCV() {
  const fileUrl = "/public/Asher_Basco_M_CV.pdf";
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "Asher_Basco_M_CV.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, #home");
  const navLinks = document.querySelectorAll(".nav-btn");

  // Highlight clicked nav link immediately
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Highlight based on scroll position
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: "#000", // or your preferred background color
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
      },
    },
    detectRetina: true,
  });
});
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let expanded = false;

function toggleProjects() {
  const hiddenProjects = document.querySelectorAll(
    "#project-list .project-box.hidden"
  );
  const toggleText = document.querySelector('span[onclick="toggleProjects()"]');

  hiddenProjects.forEach((box) => {
    box.classList.toggle("hidden");
  });

  expanded = !expanded;
  toggleText.textContent = expanded ? "See Less" : "See All";
}

const form = document.querySelector("form"); // select the only form on the page
const modal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Access inputs by name
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const message = form.elements["message"].value.trim();

  if (!name || !email || !message) {
    alert("Please fill all the fields.");
    return;
  }

  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      modal.classList.remove("hidden");
      form.reset();
    } else {
      alert(data.error || "Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Failed to send message. Please try again later.");
    console.error(err);
  }
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// EmailJS init (put this at the top of your script or just before DOMContentLoaded)
(function () {
  emailjs.init("x-7MFrjK1UL6U2hRz"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const now = new Date();
  const formattedTime = now.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const formData = {
    title: "Contact Form Submission",
    name: this.name.value,
    from_email: this.email.value,
    time: formattedTime,
    message: this.message.value,
  };

  emailjs.send("service_90ucj38", "template_9dujls1", formData).then(
    function () {
      showModal("Message sent successfully! I’ll get back to you soon.", true);
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.error("FAILED...", error);
      showModal("Failed to send message. Please try again later.", false);
    }
  );
});

function showModal(message, success = true) {
  const modal = document.getElementById("messageModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = success
    ? `📩 <span class="text-green-600">${message}</span>`
    : `❌ <span class="text-red-600">${message}</span>`;

  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("messageModal");
  modal.classList.remove("show");
}
