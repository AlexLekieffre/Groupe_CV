import {FaGhost, FaSpaceShuttle, FaEmpire} from 'react-icons/fa'

const Experience = () => {
  return (
    <div className="experience">
      <div>
        <img src="src\img\banner.png" alt="banner" className="vh-100" />
      </div>

      <h1>Mes Expériences </h1>
      <hr />

      <p>
        <h4>  <FaGhost /> 2 ans chez Mcdo </h4>
        En quête d'inspiration, j'ai travaillé pour une grande entreprise avant
        de trouver ma voie.
        <br />
        <h4> <FaSpaceShuttle /> 3 ans Web Dev sur le dark web </h4>
        En quête de sensation, j'ai commencé à coder avec Abhishek et
        Ramakrishna avant de trouver une formation. <br />
        <h4> <FaEmpire /> 8 ans à la Nasa en tant qu'astronaute remplacant </h4>
        En quête de reconnaissance, j'ai chercher à entrer dans la zone 51 ...
        Sans succés.
        </p>


      {/* <ul>
        <li> 2 ans chez Mcdo </li>
        <li> 8 ans à la Nasa en tant qu'astronaute remplacant</li>
        <li> 3 ans Web Dev sur le dark web</li>
      </ul>
       */}
    </div>
  )
}

export default Experience
