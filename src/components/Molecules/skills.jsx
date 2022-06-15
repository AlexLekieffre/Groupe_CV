import { useState } from "react";
import MySkills from "../atoms/MySkills";

const Skills = () => {
  const [skills, setSkills] = useState(false);

  return (
    <div
      className="Skills"
      onClick={() => setSkills(!skills)}
    >
        <h2>mes compétences</h2>
        {skills? MySkills() : null}
    </div>
  );
};

export default Skills;
