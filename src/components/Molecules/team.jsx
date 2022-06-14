
import { useState } from "react";

const Team = () => {
  const [teamMemberAlex, setTeamMemberAlex]= useState({
    firstname : "Alexandre",
    name : "Lekieffre",
    function : "Baby dev",
    experience1 : "Responsable Technique",
    experience2 : "Chef de chantier en industrie",
    experience3 : "Electrotechniciens"
    
})

console.log(teamMemberAlex);
  return (
    <div className="team">
      {[teamMemberAlex.firstname,teamMemberAlex.name,teamMemberAlex.function].join(" ")}
    </div>
  );
};


export default Team;
