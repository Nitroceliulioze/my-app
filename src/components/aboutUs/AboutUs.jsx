import "./aboutUs.css";

const AboutUs = ({title, description}) => {
  return (
    <div className="aboutUs">
      <div className="aboutUsWrapper">
        <div className="aboutUsWrapperLeft">
          <h1>{title}</h1>
        </div>
        <div className="aboutUsWrapperRight">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
