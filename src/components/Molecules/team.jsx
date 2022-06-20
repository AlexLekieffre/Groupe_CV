import styled from 'styled-components'
import { useState } from 'react'

const div = styled.div`
  color: blue;
`

function Team() {
  const [name] = useState('Name')
  const [job] = useState('Job')
  const [about] = useState('Lorem ipsum')

  return (
    <div className="card">
      <div className="card_uppercontainer">
        <div classname="image_container">
          {/* <img src="https://cdn.pixabay.com/photo/2022/06/04/18/53/fern-7242590_960_720.jpg" alt="feuille" height="100px" width="100px" /> */}
        </div>
      </div>
      <div className="Card_lowercontainer">
        <h3> {name} </h3>
        <h3> {job} </h3>
        <p> {about} </p>
      </div>
    </div>
  )
}

// import { useState } from "react";

// const Team = () => {
//   const [teamMemberAlex, setTeamMemberAlex]= useState({
//     firstname : "Alexandre",
//     name : "Lekieffre",
//     function : "Baby dev",
//     toto : "ok"
// })

// console.log(teamMemberAlex);
//   return (
//     <div className="team">
//       {[teamMemberAlex.firstname,teamMemberAlex.name,teamMemberAlex.function].join(" ")}
//     </div>
//   );
// };

export default Team
