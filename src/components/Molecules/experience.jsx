import React from 'react'
import { FaGhost, FaSpaceShuttle, FaEmpire } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className="experience">
      <h1>Mes Expériences </h1>
      <hr />
      <React.Fragment>
        <p>
          <h4>
            {' '}
            <FaGhost /> 2 ans chez Mcdo{' '}
          </h4>
          <b>
            <i>
              En quête d'inspiration, j'ai travaillé pour une grande entreprise
              avant de trouver ma voie.{' '}
            </i>
          </b>{' '}
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim
          tincidunt felis accumsan maximus. Donec accumsan elit id felis
          vehicula, nec eleifend orci dignissim. Praesent at mollis leo, vel
          rhoncus mi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Maecenas augue turpis, euismod mollis
          aliquam sed, congue mattis mauris. Maecenas in sodales odio. Nunc in
          sapien ac ipsum maximus vehicula eu at arcu. Vivamus tristique purus
          vitae dui posuere, ac semper odio volutpat. Aliquam id pharetra
          lectus, sit amet porttitor urna.
        </p>
        <br />
        <p>
          <h4>
            {' '}
            <FaSpaceShuttle /> 3 ans Web Dev sur le dark web{' '}
          </h4>
          <i>
            <b>
              En quête de sensation, j'ai commencé à coder avec Abhishek et
              Ramakrishna avant de trouver une formation.{' '}
            </b>
          </i>{' '}
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim
          tincidunt felis accumsan maximus. Donec accumsan elit id felis
          vehicula, nec eleifend orci dignissim. Praesent at mollis leo, vel
          rhoncus mi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Maecenas augue turpis, euismod mollis
          aliquam sed, congue mattis mauris. Maecenas in sodales odio. Nunc in
          sapien ac ipsum maximus vehicula eu at arcu. Vivamus tristique purus
          vitae dui posuere, ac semper odio volutpat. Aliquam id pharetra
          lectus, sit amet porttitor urna.
        </p>
        <br />
        <p>
          <h4>
            {' '}
            <FaEmpire /> 8 ans à la Nasa en tant qu'astronaute remplacant{' '}
          </h4>
          <i>
            <b>
              En quête de reconnaissance, j'ai chercher à entrer dans la zone 51
              ... Sans succés.{' '}
            </b>
          </i>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim
          tincidunt felis accumsan maximus. Donec accumsan elit id felis
          vehicula, nec eleifend orci dignissim. Praesent at mollis leo, vel
          rhoncus mi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Maecenas augue turpis, euismod mollis
          aliquam sed, congue mattis mauris. Maecenas in sodales odio. Nunc in
          sapien ac ipsum maximus vehicula eu at arcu. Vivamus tristique purus
          vitae dui posuere, ac semper odio volutpat. Aliquam id pharetra
          lectus, sit amet porttitor urna.
        </p>
      </React.Fragment>
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
