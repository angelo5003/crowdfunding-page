import BackerCards from "../../components/BackerCards/BackerCards";
import "./AboutStyle.css";

const About = () => {
  return (
    <>
      <article className="about-page-outer-container">
        <h2 className="about-title">About this project</h2>
        <div className="about-info-container">
          <p className="about-info">
            {" "}
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="about-info">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </article>
      <BackerCards />
    </>
  );
};

export default About;
