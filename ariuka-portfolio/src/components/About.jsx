import plant from "../images/plant.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="right">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex
          ipsam, officiis illum mollitia voluptate dolores praesentium
          perferendis sed excepturi modi. Dignissimos a repudiandae omnis neque
          dolores, magnam exercitationem voluptate! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod, ex ipsam, officiis illum mollitia
          voluptate dolores praesentium perferendis sed excepturi modi.
          Dignissimos a repudiandae omnis neque dolores, magnam exercitationem
          voluptate!
        </p>
        <img src={plant} alt="" />
      </div>
      <div className="left"></div>
    </div>
  );
};

export default About;
