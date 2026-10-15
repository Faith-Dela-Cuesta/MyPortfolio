
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
         <img src = "/src/assets/profile.jpg." alt="Faith's profile" />
         </div>
      </main>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>I'm Faith Dela Cuesta. I enjoy exploring new things, spending time on my hobbies, and making the most of every experience.
        </p>
      </section>

    </div>
  )
}

export default App
