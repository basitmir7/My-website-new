import { skills, interpersonalSkills, tools } from "../../data/home";
const Details = () => {
  return (
    <section className="details">
      <h2>Expertise</h2>
      <div className="skills">
        <h5>Skills</h5>
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="focus">
        <h5>Interpersonal Skills</h5>
        <ul>
          {interpersonalSkills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="tools">
        <h5>Tools</h5>
        <ul>
          {tools.map((tool, index) => {
            return (
              <li key={index}>
                <img src={tool.image} />
                {tool.title}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Details;
