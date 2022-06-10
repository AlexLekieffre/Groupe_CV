import { useState } from "react";
import MySkills from "../components/Molecules/MySkills";

const Skills = () => {
  const [haveCompetences, setHaveCompetences] = useState(false);

  return (
    <div
      className="Skills"
      onClick={() => setHaveCompetences(!haveCompetences)}
    >
      <p>mes compétences</p>
      {haveCompetences ? "savoir développer" : null}
    </div>
  );
};

export default Skills;
