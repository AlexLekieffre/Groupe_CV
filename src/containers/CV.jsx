import Team from "../components/Molecules/team";
import Skills from "../components/skills";

// le dossier Molecules que vous avez créer est en Majuscule donc , il faut le mettre en maj pour l'importer
//import Skills from "../components/Molecules/expérience/";
//import UserProfile from "../components/Molecules/userProfil";

const CV = () => {
  return (
    <div class="navBar">
     
      <Skills />
      <Team></Team>
    </div>
  );
};

export default CV;
