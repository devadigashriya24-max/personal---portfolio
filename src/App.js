
import "./App.css";

const projects = [
  {
    number: "01",
    category: "AI • WEATHER INTELLIGENCE",
    title: "NEXUS AI × MONSOON-X",
    description:
      "A full-stack rainfall intelligence platform with a React frontend and Python/Flask backend. Connects rainfall data processing, forecasting experiments, weather regime analysis, and risk intelligence in one system.",
    technologies: ["React", "TypeScript", "Python", "Flask", "Rainfall Data Analysis"],
    link: "https://monsoon-x.vercel.app/",
    type: "nexus",
  },
  {
    number: "02",
    category: "AI • COMMUNICATION INTELLIGENCE",
    title: "CONVEXA",
    description:
      "An AI-powered communication intelligence dashboard designed to turn documents and conversations into actionable tasks, decisions, follow-ups, and risk insights.",
    technologies: ["React", "Python", "Flask", "NLP", "Document Processing"],
    link: "https://convexa-snowy.vercel.app/",
    type: "convexa",
  },
  {
    number: "03",
    category: "INTERACTIVE WEB EXPERIENCE",
    title: "One Piece Webpage",
    description:
      "An anime-inspired React experience with themed sections, navigation, and a playable game.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://one-piece-webpage-2dcodw7x3-devadigashriya24-max.vercel.app/",
    type: "anime",
  },
  {
    number: "04",
    category: "GAME DEVELOPMENT",
    title: "Rock Paper Scissors",
    description:
      "A browser game with interactive choices, game logic, and a dynamic score system.",
    technologies: ["React", "JavaScript", "State Management"],
    link: "https://rock-paper-scissors-dwk0r2c4k-devadigashriya24-max.vercel.app/",
    type: "game",
  },
  {
    number: "05",
    category: "INTERACTIVE APPLICATION",
    title: "Counter Application",
    description:
      "A simple, interactive application demonstrating React state and responsive controls.",
    technologies: ["React", "State Management"],
    link: "https://counter-application-fzasrrggi-devadigashriya24-max.vercel.app/",
    type: "counter",
  },
];
const skills = [
  "Python",
  "Java",
  "HTML & CSS",
  "JavaScript",
  "React",
  "SQL",
  "MongoDB",
];


function ProjectPreview({ type }) {
  if (type === "nexus") {
    return (
      <div className="preview-screen nexus-screen">
        <div className="preview-browser">
          <span></span><span></span><span></span>
          <p>NEXUS AI / WEATHER INTELLIGENCE</p>
        </div>

        <div className="nexus-content">
          <span className="preview-overline">
            MONSOON-X / FORECASTING
          </span>

          <div className="nexus-heading">
            <div>
              <p>WEATHER INTELLIGENCE</p>
              <h3>Rainfall, <em>reimagined.</em></h3>
            </div>
            <span className="nexus-cloud">☁</span>
          </div>

          <div className="nexus-metrics">
            <div>
              <span>PLATFORM</span>
              <strong>AI</strong>
              <small>Data intelligence</small>
            </div>
            <div>
              <span>ANALYSIS</span>
              <strong>Rainfall</strong>
              <small>Weather patterns</small>
            </div>
          </div>

          <div className="nexus-bottom">
            <span>DATA ANALYSIS</span>
            <span>FORECASTING ↗</span>
          </div>
        </div>

        <span className="preview-index">
          01 — AI WEATHER SYSTEM
        </span>
      </div>
    );
  }

  if (type === "convexa") {
    return (
      <div className="preview-screen convexa-screen">
        <div className="preview-browser">
          <span></span><span></span><span></span>
          <p>CONVEXA / INTELLIGENCE</p>
        </div>

        <div className="convexa-content">
          <span className="preview-overline">
            COMMUNICATION INTELLIGENCE
          </span>

          <div className="convexa-heading">
            <div>
              <p>YOUR WORKSPACE</p>
              <h3>Clarity in <em>every conversation.</em></h3>
            </div>
            <span className="convexa-mark">C.</span>
          </div>

          <div className="convexa-stats">
            <div>
              <span>01 / TASKS</span>
              <strong>Action</strong>
              <small>Things to do</small>
            </div>
            <div>
              <span>02 / DECISIONS</span>
              <strong>Clarity</strong>
              <small>What was agreed</small>
            </div>
            <div>
              <span>03 / FOLLOW-UPS</span>
              <strong>Progress</strong>
              <small>What comes next</small>
            </div>
          </div>

          <div className="convexa-bottom">
            <span>COMMUNICATION → ACTION</span>
            <span>INSIGHTS ↗</span>
          </div>
        </div>

        <span className="preview-index">
          02 — AI WORKFLOW
        </span>
      </div>
    );
  }

  if (type === "anime") {
    return (
      <div className="preview-screen anime-screen">
        <div className="preview-browser">
          <span></span><span></span><span></span>
          <p>ADVENTURE / GRAND LINE</p>
        </div>
        <div className="anime-content">
          <span className="preview-overline">A WORLD OF ADVENTURE</span>
          <div className="anime-title">
            ONE<br />PIECE<span>.</span>
          </div>
          <div className="anime-bottom">
            <span>EXPLORE THE WORLD</span>
            <span className="preview-round-arrow">↗</span>
          </div>
        </div>
        <span className="preview-index">01 — WEB EXPERIENCE</span>
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className="preview-screen game-screen">
        <div className="preview-browser">
          <span></span><span></span><span></span>
          <p>MINI GAMES / PLAY</p>
        </div>
        <div className="game-content">
          <span className="preview-overline">THE CLASSIC GAME</span>
          <h4>Rock. Paper.<br /><em>Scissors.</em></h4>
          <div className="game-choices">
            <span>✊</span><span>✋</span><span>✌</span>
          </div>
          <div className="game-score">
            <span>YOU <b>03</b></span>
            <span>VS</span>
            <span>CPU <b>02</b></span>
          </div>
        </div>
        <span className="preview-index">02 — GAME LOGIC</span>
      </div>
    );
  }

  return (
    <div className="preview-screen counter-screen">
      <div className="preview-browser">
        <span></span><span></span><span></span>
        <p>TOOLS / COUNTER</p>
      </div>
      <div className="counter-content">
        <span className="preview-overline">A STUDY IN SIMPLICITY</span>
        <p className="counter-label">YOUR COUNT</p>
        <div className="counter-number">08</div>
        <div className="counter-controls">
          <span>−</span><span>RESET</span><span>＋</span>
        </div>
      </div>
      <span className="preview-index">03 — REACT STATE</span>
    </div>
  );
}


function App() {
  return (
    <div className="portfolio editorial-portfolio">
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">S.</span>
          <span>SHRIYA DEVADIGA</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Selected work</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">
            Let's talk <span>↗</span>
          </a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero editorial-hero">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot"></span>
              PORTFOLIO · 2026
            </div>

            <p className="hello">A LITTLE CURIOSITY GOES A LONG WAY.</p>

            <h1>
              Shriya
              <br />
              <span>Devadiga.</span>
            </h1>

            <div className="hero-role">
              <span className="role-line"></span>
              Artificial Intelligence &amp; Machine Learning Student
            </div>

            <p className="hero-description">
              I explore the space between technology and creativity —
              learning, building, and turning ideas into thoughtful digital
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Discover my work <span>↗</span>
              </a>
              <a href="#about" className="text-btn">
                Get to know me <span>↓</span>
              </a>
            </div>

            <div className="hero-bottom-note">
              <span>INDIA</span>
              <span className="note-divider">✳</span>
              <span>ALWAYS IN PROGRESS</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-topline">
              <span>THE PERSON BEHIND THE WORK</span>
              <span>PORTFOLIO / 2026</span>
            </div>

            <div className="portrait-stage">
              <div className="portrait-shape"></div>
              <div className="portrait-outline"></div>

              <div className="portrait-frame">
                <img
                  src="/shriya.jpg.jpeg"
                  alt="Shriya Devadiga"
                  className="profile-photo"
                />
              </div>

              <div className="floating-note note-top">
                <span className="note-star">✳</span>
                <span>Ideas in progress</span>
              </div>

              <div className="floating-note note-bottom">
                <span className="note-mini-dot"></span>
                <span>Curious by nature</span>
              </div>

              <span className="decorative-star star-one">✳</span>
              <span className="decorative-star star-two">✳</span>
              <span className="portrait-number">S / 01</span>
            </div>

            <div className="visual-caption">
              <span>CREATIVE THINKING</span>
              <span>TECHNICAL CURIOSITY.</span>
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line"></span>
            SCROLL TO EXPLORE
          </a>
        </section>

        <div className="editorial-marquee" aria-label="Learn, create, repeat">
          <div className="marquee-track">
            <span>LEARN WITH CURIOSITY</span><i>✳</i>
            <span>BUILD WITH PURPOSE</span><i>✳</i>
            <span>STAY A WORK IN PROGRESS</span><i>✳</i>
            <span>LEARN WITH CURIOSITY</span><i>✳</i>
            <span>BUILD WITH PURPOSE</span><i>✳</i>
            <span>STAY A WORK IN PROGRESS</span><i>✳</i>
          </div>
        </div>

        <section id="about" className="about section-wrap editorial-about">
          <div className="section-heading">
            <p className="section-label">01 — THE INTRODUCTION</p>
            <h2>
              Learning to make
              <br />
              <span>ideas tangible.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-mark">“</div>

            <div className="about-copy">
              <p className="about-lead">
                I'm Shriya — an engineering student with a curious mind,
                a creative streak, and a growing interest in intelligent
                technology.
              </p>

              <p>
                As a third-year Artificial Intelligence and Machine Learning
                student, I'm exploring web development, AI, and machine
                learning. I enjoy experimenting with new tools and building
                projects that help me learn by doing.
              </p>

              <div className="about-signature">
                <span className="signature-line"></span>
                <span>One idea at a time.</span>
                <span className="signature-star">✳</span>
              </div>
            </div>
          </div>

          <div className="about-strip">
            <div><span className="strip-number">01</span><span>Stay curious</span></div>
            <div><span className="strip-number">02</span><span>Learn by building</span></div>
            <div><span className="strip-number">03</span><span>Keep improving</span></div>
          </div>
        </section>

        <section id="projects" className="projects-section section-wrap editorial-projects">
          <div className="projects-heading">
            <div>
              <p className="section-label">02 — THE PORTFOLIO</p>
              <h2>
                Selected
                <br />
                <span>experiments.</span>
              </h2>
            </div>

            <p className="projects-side-note">
              Small projects, practical lessons, and ideas brought to life
              through code. Each one is a step forward.
            </p>
          </div>

          <div className="project-container">
            {projects.map((project) => (
              <article className={`project-card project-${project.type}`} key={project.number}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-preview-link"
                  aria-label={`Open ${project.title}`}
                >
                  <ProjectPreview type={project.type} />
                </a>

                <div className="project-info">
                  <div className="project-heading-line">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view"
                  >
                    Explore live project <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-footnote">
            FIVE PROJECTS. MANY LESSONS. MORE TO COME. <span>✳</span>
          </p>
        </section>

        <section id="skills" className="skills-section section-wrap editorial-skills">
          <div className="skills-intro">
            <p className="section-label">03 — THE TOOLKIT</p>
            <h2>
              Tools for
              <br />
              <span>what's next.</span>
            </h2>
            <p>
              Technologies I'm learning and using as I continue developing
              my skills through practice and projects.
            </p>
          </div>

          <div className="skills-panel">
            <div className="skills-panel-heading">
              <span>TECHNOLOGIES &amp; TOOLS</span>
              <span>{String(skills.length).padStart(2, "0")} ITEMS</span>
            </div>

            <div className="skills-container">
              {skills.map((skill, index) => (
                <div className="skill" key={skill}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>

            <p className="skills-footnote">
              <span>✳</span> Learning through practice, one project at a time.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section editorial-contact">
          <div className="contact-inner">
            <p className="section-label">04 — THE NEXT CHAPTER</p>
            <p className="contact-eyebrow">GOOD THINGS START WITH A HELLO.</p>

            <h2>
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p className="contact-description">
              Interested in connecting, sharing ideas, or discussing an
              opportunity? I'd love to hear from you.
            </p>

            <a
              href="mailto:devadigashriya24@gmail.com"
              className="contact-btn"
            >
              Get in touch <span>↗</span>
            </a>

            <span className="contact-decoration">✳</span>
          </div>
        </section>
      </main>

      <footer className="footer editorial-footer">
        <a href="#home" className="footer-brand">S<span>.</span></a>
        <p>Thoughtfully made by Shriya Devadiga.</p>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
        <p className="footer-copyright">© 2026</p>
      </footer>
    </div>
  );
}

export default App;
