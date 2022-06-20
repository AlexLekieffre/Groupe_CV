import { useState } from 'react'
import MySkills from '../Atoms/MySkills'

const Skills = () => {
  const [skills, setSkills] = useState(true)

  return (
    <div className="Skills">
      <h1>Mes compétences</h1>
      <hr />
      {skills ? MySkills() : null}
    </div>
  )
}

export default Skills
