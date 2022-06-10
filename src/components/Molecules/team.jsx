
import { useState } from "react";

const Team = () => {
  const [teamMemberAlex, setTeamMemberAlex]= useState({
    firstname : "Alexandre",
    name : "Lekieffre",
    function : "Baby dev"
})
console.log(teamMemberAlex);
  return (
    <div className="team">
      {[teamMemberAlex.firstname,teamMemberAlex.name,teamMemberAlex.function].join(" ")}
    </div>
  );
};


export default Team;
