import "./app.scss";
import blub1 from "./images/blub1.png";
import dna from "./images/dna.png";
import plant from "./images/plant.png";
import wave1 from "./images/wave1.png";
import wave2 from "./images/wave2.png";
function App() {
  return (
    <div className="app">
      <nav>
        <div className="nav-right">
          <h1>Ariuka.</h1>
        </div>
        <div className="nav-left">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </nav>
      <div className="hero-container">
        <div className="right">
          <h1>Hire</h1>
          <h3>Full Stack Developer</h3>
          <h2>Passionate</h2>
        </div>
        <div className="left">
          <div>
            <h1>ME</h1>
            <img src={blub1} alt="" />
            <img className="dna" src={dna} alt="" />
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="right">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex
            ipsam, officiis illum mollitia voluptate dolores praesentium
            perferendis sed excepturi modi. Dignissimos a repudiandae omnis
            neque dolores, magnam exercitationem voluptate! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quod, ex ipsam, officiis
            illum mollitia voluptate dolores praesentium perferendis sed
            excepturi modi. Dignissimos a repudiandae omnis neque dolores,
            magnam exercitationem voluptate!
          </p>
          <img src={plant} alt="" />
        </div>
        <div className="left"></div>
      </div>
      <div className="skill-container">
        <div className="right">
          <img src={wave1} alt="" />
        </div>
        <div className="left">
          <h2>Skills</h2>
        </div>
      </div>
      <div className="work-container">
        <div className="right">
          <h2>Skills</h2>
        </div>
        <div className="left">
          <img src={wave2} alt="" />
        </div>
      </div>
      <div className="contact-container">
        <div className="right">Right</div>
        <div className="left">Left</div>
      </div>
    </div>
  );
}

export default App;
