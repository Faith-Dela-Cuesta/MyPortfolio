
import './App.css'

function App() {
  return (
    <div className="container">
      <nav>
        <h2>My Portfolio</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>  
      </nav>

      <main id="home">
        <div className="intro">
          <p className="greeting">WELCOME TO MY PROFILE</p>
          <h1>Hello, I'm <span>Faith Dela Cuesta</span></h1>
          <p>An IT student who likes learning and exploring technology.</p>
       </div>

       <div className="profile-photo">
         <img src = "/src/assets/profile-photo.jpg" alt="profile photo" />
         </div>
      </main>

      <section id="about" className="about">
        <div className="about-content">
           <p className="about-label">GET TO KNOW ME</p>
        
          <h2>A little about <span>myself.</span></h2>

        <div className="about-line"></div>

        <p className="about-description">
          I'm Faith Dela Cuesta. I enjoy exploring new things,
         spending time on my hobbies, and making the most of
         every experience. I'm always open to learning and
         discovering something new.
        </p>

         <p className="about-note">A little creativity goes a long way.</p>
        </div>
        
      </section>
    </div>
  )
}

export default App




