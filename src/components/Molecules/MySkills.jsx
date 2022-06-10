import { useState } from "react";

const MySkills = () => {
  const [haveCompetences, setHaveCompetences] = useState(false);

  /* {haveCompetences ? "savoir développer" : null;} */
  return (
    <div className="Skil" onClick={() => setHaveCompetences(!haveCompetence)}>
      <h1> Compétences </h1>

      <ul>
        <li>Je sais faire ?</li>
        <li>Je sais faire ?</li>
        <li>Je sais faire ?</li>
        <li>Je sais faire ?</li>
        <li>Je sais faire ?</li>
        <li>Je sais faire ?</li>
      </ul>
    </div>
  );
};

export default MySkills;
