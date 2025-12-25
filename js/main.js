/**
 * ========================================
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * Author: Hariom Kr
 * Version: 1.0
 * ========================================
 */

(function () {
  "use strict";

  // ========================================
  // DOM ELEMENTS
  // ========================================
  const DOM = {
    // Header & Navigation
    header: document.getElementById("header"),
    navMenu: document.getElementById("nav-menu"),
    navToggle: document.getElementById("nav-toggle"),
    navLinks: document.querySelectorAll(".nav__link"),

    // Theme
    themeToggle: document.getElementById("theme-toggle"),

    // Typewriter
    typewriter: document.getElementById("typewriter"),

    // Projects
    projectsGrid: document.getElementById("projects-grid"),
    filterBtns: document.querySelectorAll(".filter-btn"),

    // Experience/Education Tabs
    tabBtns: document.querySelectorAll(".tab-btn"),
    experienceTimeline: document.getElementById("experience-timeline"),
    educationTimeline: document.getElementById("education-timeline"),

    // Contact Form
    contactForm: document.getElementById("contact-form"),
    submitBtn: document.getElementById("submit-btn"),
    formSuccess: document.getElementById("form-success"),

    // Back to Top
    backToTop: document.getElementById("back-to-top"),

    // Year
    yearEl: document.getElementById("year"),

    // Animate on scroll elements
    animateElements: document.querySelectorAll(".animate-on-scroll"),
  };

  // ========================================
  // CONFIGURATION
  // ========================================
  const CONFIG = {
    scrollThreshold: 100,
    typewriterSpeed: 100,
    typewriterDelay: 2000,
    typewriterTexts: [
      "Computer Science Student",
      "Full Stack Developer",
      "Problem Solver",
      "Tech Enthusiast",
      "Open Source Contributor",
    ],
  };

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
      let inThrottle;
      return function executedFunction(...args) {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },

    // Check if element is in viewport
    isInViewport(element, threshold = 0.15) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.top <= windowHeight * (1 - threshold) &&
        rect.bottom >= windowHeight * threshold
      );
    },

    // Smooth scroll to element
    scrollTo(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },

    // Get stored theme preference
    getStoredTheme() {
      return localStorage.getItem("theme");
    },

    // Store theme preference
    setStoredTheme(theme) {
      localStorage.setItem("theme", theme);
    },

    // Check system theme preference
    prefersDarkScheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
  };

  // ========================================
  // THEME MANAGER
  // ========================================
  const ThemeManager = {
    init() {
      const storedTheme = Utils.getStoredTheme();

      if (storedTheme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
      } else if (Utils.prefersDarkScheme()) {
        document.documentElement.setAttribute("data-theme", "dark");
      }

      DOM.themeToggle?.addEventListener("click", this.toggle.bind(this));
    },

    toggle() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      Utils.setStoredTheme(newTheme);
    },
  };

  // ========================================
  // NAVIGATION MANAGER
  // ========================================
  const Navigation = {
    init() {
      // Mobile menu toggle
      DOM.navToggle?.addEventListener("click", this.toggleMenu.bind(this));

      // Close menu when clicking on a link
      DOM.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          this.closeMenu();
          this.setActiveLink(link);
        });
      });

      // Handle scroll for header styling and active link
      window.addEventListener(
        "scroll",
        Utils.throttle(() => {
          this.handleScroll();
          this.updateActiveLink();
        }, 100)
      );

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !e.target.closest(".nav") &&
          DOM.navMenu?.classList.contains("active")
        ) {
          this.closeMenu();
        }
      });
    },

    toggleMenu() {
      DOM.navMenu?.classList.toggle("active");
      DOM.navToggle?.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    },

    closeMenu() {
      DOM.navMenu?.classList.remove("active");
      DOM.navToggle?.classList.remove("active");
      document.body.classList.remove("no-scroll");
    },

    handleScroll() {
      if (window.scrollY > CONFIG.scrollThreshold) {
        DOM.header?.classList.add("scrolled");
      } else {
        DOM.header?.classList.remove("scrolled");
      }
    },

    setActiveLink(activeLink) {
      DOM.navLinks.forEach((link) => link.classList.remove("active"));
      activeLink.classList.add("active");
    },

    updateActiveLink() {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          DOM.navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
  };

  // ========================================
  // TYPEWRITER EFFECT
  // ========================================
  const Typewriter = {
    currentTextIndex: 0,
    currentCharIndex: 0,
    isDeleting: false,

    init() {
      if (DOM.typewriter) {
        this.type();
      }
    },

    type() {
      const currentText = CONFIG.typewriterTexts[this.currentTextIndex];

      if (this.isDeleting) {
        DOM.typewriter.textContent = currentText.substring(
          0,
          this.currentCharIndex - 1
        );
        this.currentCharIndex--;
      } else {
        DOM.typewriter.textContent = currentText.substring(
          0,
          this.currentCharIndex + 1
        );
        this.currentCharIndex++;
      }

      let typeSpeed = CONFIG.typewriterSpeed;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.currentCharIndex === currentText.length) {
        typeSpeed = CONFIG.typewriterDelay;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex =
          (this.currentTextIndex + 1) % CONFIG.typewriterTexts.length;
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    },
  };

  // ========================================
  // PROJECTS MANAGER
  // ========================================
  const ProjectsManager = {
    init() {
      this.renderProjects("all");
      this.initFilters();
    },

    renderProjects(filter) {
      if (!DOM.projectsGrid || typeof projectsData === "undefined") return;

      const filteredProjects =
        filter === "all"
          ? projectsData
          : projectsData.filter((project) => project.category === filter);

      DOM.projectsGrid.innerHTML = filteredProjects
        .map((project) => this.createProjectCard(project))
        .join("");

      // Trigger animation
      setTimeout(() => {
        document.querySelectorAll(".project-card").forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 100);
        });
      }, 50);
    },

    createProjectCard(project) {
      const liveLink = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="View live demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>`
        : "";

      return `
        <article class="project-card" data-category="${project.category}">
          <div class="project-card__image">
            <div class="project-card__image-placeholder">${project.image}</div>
            <div class="project-card__overlay">
              <a href="${
                project.githubUrl
              }" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="View on GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              ${liveLink}
            </div>
          </div>
          <div class="project-card__content">
            <span class="project-card__category">${this.getCategoryLabel(
              project.category
            )}</span>
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__description">${project.description}</p>
            <div class="project-card__tags">
              ${project.tags
                .map((tag) => `<span class="project-card__tag">${tag}</span>`)
                .join("")}
            </div>
          </div>
        </article>
      `;
    },

    getCategoryLabel(category) {
      const labels = {
        web: "Web Development",
        app: "Mobile App",
        ml: "Machine Learning",
      };
      return labels[category] || category;
    },

    initFilters() {
      DOM.filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          DOM.filterBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.renderProjects(btn.dataset.filter);
        });
      });
    },
  };

  // ========================================
  // TABS MANAGER (Experience/Education)
  // ========================================
  const TabsManager = {
    init() {
      DOM.tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => this.switchTab(btn));
      });
    },

    switchTab(activeBtn) {
      DOM.tabBtns.forEach((btn) => btn.classList.remove("active"));
      activeBtn.classList.add("active");

      const tabName = activeBtn.dataset.tab;

      if (tabName === "experience") {
        DOM.experienceTimeline?.classList.remove("hidden");
        DOM.educationTimeline?.classList.add("hidden");
      } else {
        DOM.experienceTimeline?.classList.add("hidden");
        DOM.educationTimeline?.classList.remove("hidden");
      }
    },
  };

  // ========================================
  // CONTACT FORM
  // ========================================
  const ContactForm = {
    init() {
      DOM.contactForm?.addEventListener("submit", (e) => this.handleSubmit(e));

      // Real-time validation
      const inputs = DOM.contactForm?.querySelectorAll(".form__input");
      inputs?.forEach((input) => {
        input.addEventListener("blur", () => this.validateField(input));
        input.addEventListener("input", () => this.clearError(input));
      });
    },

    handleSubmit(e) {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      if (!this.validateForm(data)) {
        return;
      }

      this.showLoading(true);

      // Simulate form submission
      setTimeout(() => {
        this.showLoading(false);
        this.showSuccess();
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          DOM.formSuccess?.classList.add("hidden");
        }, 5000);
      }, 1500);
    },

    validateForm(data) {
      let isValid = true;

      if (!this.validateName(data.name)) isValid = false;
      if (!this.validateEmail(data.email)) isValid = false;
      if (!this.validateSubject(data.subject)) isValid = false;
      if (!this.validateMessage(data.message)) isValid = false;

      return isValid;
    },

    validateField(field) {
      const name = field.name;
      const value = field.value;

      switch (name) {
        case "name":
          return this.validateName(value);
        case "email":
          return this.validateEmail(value);
        case "subject":
          return this.validateSubject(value);
        case "message":
          return this.validateMessage(value);
        default:
          return true;
      }
    },

    validateName(name) {
      const nameError = document.getElementById("name-error");
      const nameInput = document.getElementById("name");

      if (!name || name.trim().length < 2) {
        this.showError(
          nameInput,
          nameError,
          "Please enter your full name (min 2 characters)"
        );
        return false;
      }

      this.clearError(nameInput);
      return true;
    },

    validateEmail(email) {
      const emailError = document.getElementById("email-error");
      const emailInput = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        this.showError(
          emailInput,
          emailError,
          "Please enter a valid email address"
        );
        return false;
      }

      this.clearError(emailInput);
      return true;
    },

    validateSubject(subject) {
      const subjectError = document.getElementById("subject-error");
      const subjectInput = document.getElementById("subject");

      if (!subject || subject.trim().length < 3) {
        this.showError(
          subjectInput,
          subjectError,
          "Subject must be at least 3 characters"
        );
        return false;
      }

      this.clearError(subjectInput);
      return true;
    },

    validateMessage(message) {
      const messageError = document.getElementById("message-error");
      const messageInput = document.getElementById("message");

      if (!message || message.trim().length < 10) {
        this.showError(
          messageInput,
          messageError,
          "Message must be at least 10 characters"
        );
        return false;
      }

      this.clearError(messageInput);
      return true;
    },

    showError(input, errorEl, message) {
      input?.classList.add("error");
      if (errorEl) errorEl.textContent = message;
    },

    clearError(input) {
      input?.classList.remove("error");
      const errorEl = document.getElementById(`${input.id}-error`);
      if (errorEl) errorEl.textContent = "";
    },

    showLoading(isLoading) {
      const btnText = DOM.submitBtn?.querySelector(".btn-text");
      const btnLoading = DOM.submitBtn?.querySelector(".btn-loading");
      const btnIcon = DOM.submitBtn?.querySelector(".btn-icon");

      if (isLoading) {
        btnText?.classList.add("hidden");
        btnIcon?.classList.add("hidden");
        btnLoading?.classList.remove("hidden");
        DOM.submitBtn?.setAttribute("disabled", "true");
      } else {
        btnText?.classList.remove("hidden");
        btnIcon?.classList.remove("hidden");
        btnLoading?.classList.add("hidden");
        DOM.submitBtn?.removeAttribute("disabled");
      }
    },

    showSuccess() {
      DOM.formSuccess?.classList.remove("hidden");
    },
  };

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  const ScrollAnimations = {
    init() {
      // Initial check for elements in viewport
      this.checkElements();

      // Check on scroll
      window.addEventListener(
        "scroll",
        Utils.throttle(() => {
          this.checkElements();
          this.handleBackToTop();
        }, 100)
      );
    },

    checkElements() {
      DOM.animateElements.forEach((element) => {
        if (
          Utils.isInViewport(element) &&
          !element.classList.contains("animated")
        ) {
          element.classList.add("animated");
        }
      });
    },

    handleBackToTop() {
      if (window.scrollY > 500) {
        DOM.backToTop?.classList.add("visible");
      } else {
        DOM.backToTop?.classList.remove("visible");
      }
    },
  };

  // ========================================
  // BACK TO TOP
  // ========================================
  const BackToTop = {
    init() {
      DOM.backToTop?.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    },
  };

  // ========================================
  // FOOTER YEAR
  // ========================================
  const FooterYear = {
    init() {
      if (DOM.yearEl) {
        DOM.yearEl.textContent = new Date().getFullYear();
      }
    },
  };

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = anchor.getAttribute("href");
          if (href && href !== "#") {
            e.preventDefault();
            Utils.scrollTo(href);
          }
        });
      });
    },
  };

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  const KeyboardNav = {
    init() {
      // Close mobile menu on Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && DOM.navMenu?.classList.contains("active")) {
          Navigation.closeMenu();
        }
      });

      // Focus trap for mobile menu
      DOM.navMenu?.addEventListener("keydown", (e) => {
        if (e.key === "Tab" && DOM.navMenu.classList.contains("active")) {
          const focusableElements = DOM.navMenu.querySelectorAll("a, button");
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    },
  };

  // ========================================
  // PRELOADER (Optional)
  // ========================================
  const Preloader = {
    init() {
      window.addEventListener("load", () => {
        document.body.classList.add("loaded");
      });
    },
  };

  // ========================================
  // INITIALIZE APPLICATION
  // ========================================
  function init() {
    // Core functionality
    ThemeManager.init();
    Navigation.init();
    Typewriter.init();
    ProjectsManager.init();
    TabsManager.init();
    ContactForm.init();
    ScrollAnimations.init();
    BackToTop.init();
    FooterYear.init();
    SmoothScroll.init();
    KeyboardNav.init();
    Preloader.init();

    // Log initialization (for debugging)
    console.log("✨ Portfolio website initialized successfully!");
  }

  // Run initialization when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
