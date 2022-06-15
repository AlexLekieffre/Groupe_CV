const Contact = () => (
    <div>
        <h1 className="heading">CONTACTEZ-NOUS</h1>
        <form>
            <label>VOTRE PRENOM</label>
            <input type="text"/>
            <br />
            <label>VOTRE NOM</label>
            <input type="text"/>
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
  
  export default Contact;