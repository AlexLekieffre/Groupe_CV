import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contact = () => (
  <div>
    <h1 className="heading">CONTACTEZ-NOUS</h1>
    <button>
      <a href="https://www.facebook.com/">
        <FaFacebook />
      </a>
    </button>
    <button>
      <a href="https://twitter.com/">
        <FaTwitter />
      </a>
    </button>
    <button>
      <a href="https://www.linkedin.com/">
        <FaLinkedin />
      </a>
    </button>
    <br />
    <form>
      <label>VOTRE PRENOM</label>
      <input type="text" />
      <br />
      <label>VOTRE NOM</label>
      <input type="text" />
      <br />
      <label>VOTRE EMAIL</label>
      <input type="text" />
      <br />
      <label>VOTRE NUMERO DE TELEPHONE</label>
      <input type="text" />
      <br />
      <label>VOTRE MESSAGE</label>
      <textarea type="text"></textarea>
      <br />
      <button type="submit">ENVOYEZ</button>
    </form>
  </div>
)

export default Contact
