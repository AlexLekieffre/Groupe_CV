import Avatar from "../Atoms/Avatar";

const UserProfile = () => {
  return (
    <div className="user_profile">
      <Avatar
        className="monAvatar"
        url={
          "https://img.freepik.com/vecteurs-libre/profil-silhouette-homme-avatar-masculin-icone-anonyme-visage-censure_434359-85.jpg?w=2000"
        }
      />

      <p>John Doe</p>
      <p>25 ans</p>
      <p>Développeur Web en devenir (S'il vous plait)</p>
    </div>
  );
};

export default UserProfile;
