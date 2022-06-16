import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => (
    <div>
        <h1 className="heading">CONTACTEZ-NOUS</h1>
        <button className='m-3'><a href='https://www.facebook.com/'><FaFacebook/></a></button>
        <button className='m-3'><a href='https://twitter.com/'><FaTwitter/></a></button>
        <button className='m-3'><a href='https://www.linkedin.com/'><FaLinkedin/></a></button>
        <br />
        <form>
            <label className='m-3'>VOTRE PRENOM</label>
            <input type="text"/>
            <br />
            <label className='m-3'>VOTRE NOM</label>
            <input type="text"/>
            <br />
            <label className='m-3'>VOTRE EMAIL</label>
            <input type="text" />
            <br />
            <label className='m-3'>VOTRE N° TELEPHONE</label>
            <input type="text" />
            <br />
            <label className='m-3'>VOTRE MESSAGE</label>
            <textarea type="text"></textarea>
            <br />
            <button type="submit" className='m-3'>ENVOYEZ</button>
        </form>
    </div>
  )
  
  export default Contact;