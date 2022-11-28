import { certificates } from "../../data/home";
import Certificate from "./certificate";
const Information = () => {
  return (
    <>
      <section className="details">
        <h2>Credentials</h2>
        <div className="credentials">
          <h5>Courses and Certifications</h5>
          <div>
            {certificates.map((certificate, index) => {
              return (
                <Certificate
                  key={index}
                  name={certificate.name}
                  logo={certificate.logo}
                  provider={certificate.provider}
                  credid={certificate.credentialID}
                  link={certificate.link}
                  date={certificate.date}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="location">
            <h5>Location</h5>
          </div>
          <div className="education">
            <h5>Education</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
