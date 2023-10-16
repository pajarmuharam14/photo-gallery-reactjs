import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import michiePhotos from "../../json/photos/michie.json";

const MichiePage = () => {
  return (
    <>
      <Header text="michie jkt48" />
      <AllPhotosMember src={michiePhotos} />
    </>
  );
};

export default MichiePage;
