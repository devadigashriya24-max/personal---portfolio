import "./App.css";

function App(){
  return(
    <div>

      <nav>

      <h1>My Portfolio</h1>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">HELLO, I'M </p>
          <h1>Shriya Devadiga</h1>
          <h2>AI & ML Student</h2>
          <p className="hero-description">I enjoy building creative websites, exploring artificial intlligence,and turning ideas into practical projects.</p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">Contact Me</a>
          </div>
          </div>

          <div className="hero-card">
            <div className="circle">
              SD
            </div>
            <p>Creative Mind</p>
            <p>AI & ML Enthusiast</p>
            </div>
            </section>
        

      <section id="about" className="about">
        <p className="section-label">ABOUT ME</p>
        <h2>Who I am</h2>
        <p>
          I am a third year Artificial Intelligence and Machine Learning student who enjoyes learning new technologies and building creative projects.
        </p>

        <p>
          I am intrseted in Web Development, Artificial Intelligence and Machine Learning. I love turning ideas into simple and usefull applications.
        </p>
        </section>


        <section className="skills">
  <p className="section-label">MY SKILLS</p>

  <h2>Technologies I Work With</h2>

  <div className="skills-container">
    <div className="skill">Python</div>
    <div className="skill">Java</div>
    <div className="skill">HTML & CSS</div>
    <div className="skill">JavaScript</div>
    <div className="skill">React</div>
    <div className="skill">SQL</div>
    <div className="skill">MongoDB</div>
  </div>
</section>



      <section id="projects" className="projects">
  <p className="section-label">MY WORK</p>

  <h2>Projects I've Built</h2>

  <div className="project-container">

```
<a
  href="https://one-piece-webpage-2dcodw7x3-devadigashriya24-max.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-card"
>
  <h3>One Piece Webpage</h3>
  <p>
    An interactive React website with navigation, themed sections,
    and a playable game.
  </p>
  <span>React</span>
</a>
<a
  href="https://rock-paper-scissors-dwk0r2c4k-devadigashriya24-max.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-card"
>
  <h3>Rock Paper Scissors</h3>
  <p>
    An interactive game built with React featuring player choices
    and a dynamic score system.
  </p>
  <span>React</span>
</a>

<a
  href="https://counter-application-fzasrrggi-devadigashriya24-max.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-card"
>
  <h3>Counter Application</h3>
  <p>
    A simple React application that demonstrates state management
    and interactive buttons.
  </p>
  <span>React</span>
</a>
```

  </div>
</section>


      
      <section id="contact" className="contact">
  <p className="section-label">GET IN TOUCH</p>

  <h2>Let's Connect</h2>

  <p>
    Have a project idea or just want to say hello?
    Feel free to reach out.
  </p>

  <a href="mailto:devadigashriya24@gmail.com" className="contact-btn">
    Send Me an Email
  </a>
</section>

<footer>
  <p>© 2026 Shriya Devadiga. All rights reserved.</p>
  <p>Built with React</p>
</footer>

      

    </div>
  );
}

export default App;